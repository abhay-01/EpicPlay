const express = require('express');
const socket = require('socket.io')();
const http = require('http');
const {Chess} = require('chess.js');
const path = require('path');
const { title } = require('process');
const { exec } = require('child_process');
const { error } = require('console');


const app = express();
const server = http.createServer(app); 

const io = require("socket.io")(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'], 
    credentials: true, 

  },
});

const chess = new Chess();

const cors = require('cors');
const { redirect } = require('next/dist/server/api-utils');

app.use(cors({
  origin: 'http://localhost:3000', 
}));


let player = {};
let currentPlayer = "w";


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("index" ,{title: "Chess Game"});
    }
);



app.post("/start-chess-serevr",(req,res)=>{
    exec("npx nodemon src/games/chess/app.js", (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        res.send("Chess Server started");
    })
})



io.on("connection", (socket) => {
    console.log("A user has connected", socket.id);

    io.on("registerEmail", (data) => {
        console.log("Email registered", data.email);
    });
    
    if(!player.white){
        player.white = socket.id; //is line ka mtlb h k agr player white nhi h to usko white bna do 
        socket.emit("playerRole", "w"); 
    }
    else if(!player.black){
        player.black = socket.id; //is line ka mtlb h k agr player black nhi h to usko black bna do
        socket.emit("playerRole", "b");
    }
    else{
        socket.emit("spectatorRole");
    }

    io.on("matchmaking", (data)=>{
      console.log("Matchmaking initiated by", data.sender);
    });

    io.on("matchmaking-accepted", (data)=>{
      console.log("Matchmaking accepted by", data.target);
    });

    socket.on("disconnect", () => {
        if(player.white === socket.id){
            player.white = null;
        }
        if(player.black === socket.id){
            player.black = null;
        }
    });

    socket.on("move", (msg) => {
       try{

        //inn if conditions se check kr rhe h k kis player ka turn h
        //agar white ki turn hai or black player ne move kiya to usko error msg bhej do
        if(chess.turn()=== "w" && socket.id!== player.white){

            socket.emit("err", "Its not your turn");
            return;
        }

        if(chess.turn()=== "b" && socket.id!== player.black){

            socket.emit("err", "Its not your turn");
            return;
        }

        //agr move valid h to usko move kr do
        const move = chess.move(msg);
        
        if(move){
            currentPlayer = chess.turn(); //agr move valid h to turn change kr do
            io.emit("move", msg); //sabko move bhej do
            io.emit("boardState", chess.fen()); //sabko board ki state bhej do. fen function se board ki state nikal rhe h


            if(chess.isGameOver()){

                if(chess.isCheckmate()){
                    io.emit("gameOver", "Checkmate");

                    if(chess.turn() === "w"){
                        socket.on("registerEmail", (data) => {
                            console.log("SERVER---", data.email);
                        });
                        console.log("BLACK KI ID---", player.black);
                        redirect("http://localhost:3000");

                    }else{
                        socket.on("registerEmail", (data) => {
                            console.log("SERVER---", data.email);
                        });
                        console.log("WHITE KI ID---", player.white);
                        redirect("http://localhost:3000");
                    }
                    console.log("Checkmate");
                }else if(chess.isStalemate()){
                    io.emit("gameOver", "Stalemate");
                    console.log("Stalemate");
                }else if(chess.isThreefoldRepetition()){
                    io.emit("gameOver", "Threefold Repetition");
                    console.log("Threefold Repetition");
                }else if(chess.isInsufficientMaterial()){
                    io.emit("gameOver", "Insufficient Material");
                    console.log("Insufficient Material");
                }else if(chess.isDraw()){
                    io.emit("gameOver", "Draw");
                    console.log("Draw");
                }
            }
        }else{
            console.log("Invalid move", msg);
            socket.emit("err", "Invalid move");
        }
       }
       catch(err){
                console.log("Invalid move", msg);
              socket.emit("err", "Invalid move");
              return;
       }
    });



});


server.listen(3001, () => {
    console.log("Server is running on port 3001");
});