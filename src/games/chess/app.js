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

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

let player = {};
let currentPlayer = "w";
const playerEmails = {}; // Store emails by socket ID
let Email = "";
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  let email = req.query.email;
  console.log("hello");
  console.log("Email", email);
  Email = email;
  // Print all stored player emails
  console.log("Current player emails:", playerEmails);
  res.render("index", { title: "Chess Game" });
});

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

  playerEmails[socket.id] = Email; // Store emai+l by socket ID
  console.log("Player connected:", socket.id, "Email:", Email);
  console.log("Current player emails:", playerEmails);

  if (!player.white) {
    player.white = socket.id;
    socket.emit("playerRole", "w");
  } else if (!player.black) {
    player.black = socket.id;
    socket.emit("playerRole", "b");
  } else {
    socket.emit("spectatorRole");
  }

  socket.on("disconnect", () => {
    console.log(
      "Player disconnected:",
      socket.id,
      "Email:",
      playerEmails[socket.id]
    );
    if (player.white === socket.id) {
      player.white = null;
    }
    if (player.black === socket.id) {
      player.black = null;
    }
    delete playerEmails[socket.id]; // Clean up email storage
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
            winnerEmail =
              chess.turn() === "w"
                ? playerEmails[player.black]
                : playerEmails[player.white];
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
              status:
                winnerEmail === playerEmails[player.white] ? "win" : "lose",
            });
            io.to(player.black).emit("gameStatus", {
              email: playerEmails[player.black],
              status:
                winnerEmail === playerEmails[player.black] ? "win" : "lose",
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
