const express = require("express");
const socket = require("socket.io")();
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

const chess = new Chess();
const cors = require("cors");
const e = require("express");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

let player = {};
let currentPlayer = "w";
let playerEmails = {}; // Object to store each player's email based on socket ID


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));


app.post("/start-chess-server", (req, res) => {
  exec("npx nodemon src/games/chess/app.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send("Chess Server started");
  });
});

io.on("connection", (socket) => {
  console.log("A user has connected", socket.id);
  app.get("/", (req, res) => {
    const email = req.query.email;
    console.log("New player email:", email);
    playerEmails[email] = email;
  
    // Print all stored player emails
    console.log("Current player emails:", playerEmails);
    res.render("index", { title: "Chess Game" });
  });
  
  const email = socket.handshake.query.email;
  playerEmails[socket.id] = socket.id;

  console.log("STORED ONE---->", playerEmails);
  
 

  // playerEmails[socket.id] = email;

  console.log("Player connected:", socket.id, "Email:", email);
  console.log("Current player emails:", playerEmails);

  if (!player.white) {
    player.white = socket.id;
    socket.emit("playerRole", "w");
    // console.log("White player:", playerEmails[socket.id]);
  } else if (!player.black) {
    player.black = socket.id;
    socket.emit("playerRole", "b");
    // console.log("Black player:", playerEmails[socket.id]);
  } else {
    socket.emit("spectatorRole");
  }

  socket.on("disconnect", () => {
    // console.log("Player disconnected:", socket.id, "Email:", playerEmails[socket.id]);

    if (player.white === socket.id) {
      console.log("White player disconnected");
      player.white = null;
    }
    if (player.black === socket.id) {
      console.log("Black player disconnected");
      player.black = null;
    }

    delete playerEmails[socket.id];
    console.log("Updated player emails:", playerEmails);
  });

  socket.on("move", (msg) => {
    try {
      if (chess.turn() === "w" && socket.id !== player.white) {
        socket.emit("err", "It's not your turn");
        return;
      }

      if (chess.turn() === "b" && socket.id !== player.black) {
        socket.emit("err", "It's not your turn");
        return;
      }

      const move = chess.move(msg);

      if (move) {
        currentPlayer = chess.turn();
        io.emit("move", msg);
        io.emit("boardState", chess.fen());


        if (chess.isGameOver()) {
          let result = "";
          let winnerEmail = "";

          if (chess.isCheckmate()) {
            result = "Checkmate";
            winnerEmail = chess.turn() === "w" ? playerEmails[player.black] : playerEmails[player.white];
            if(chess.turn() === "w"){
              console.log("Black player won the game",);
            }else{
              console.log("White player won the game");
            }
          } else if (chess.isStalemate()) {
            result = "Stalemate";
          } else if (chess.isThreefoldRepetition()) {
            result = "Threefold Repetition";
          } else if (chess.isInsufficientMaterial()) {
            result = "Insufficient Material";
          } else if (chess.isDraw()) {
            result = "Draw";
          }

          io.emit("gameOver", result);

          if (winnerEmail) {
            io.to(player.white).emit("gameStatus", {
              email: playerEmails[player.white],
              status: winnerEmail === playerEmails[player.white] ? "win" : "lose",
            });
            io.to(player.black).emit("gameStatus", {
              email: playerEmails[player.black],
              status: winnerEmail === playerEmails[player.black] ? "win" : "lose",
            });
          }

          console.log("Game over result:", result);
          console.log("Winner email:", winnerEmail);
        }
      } else {
        console.log("Invalid move", msg);
        socket.emit("err", "Invalid move");
      }
    } catch (err) {
      console.log("Invalid move", msg);
      socket.emit("err", "Invalid move");
    }
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
