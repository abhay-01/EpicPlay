const express = require('express');
const socket = require('socket.io')();
const http = require('http');
const {Chess} = require('chess.js');
const path = require('path');
const { title } = require('process');


const app = express();
const server = http.createServer(app); // create a server using the express app

const io = socket.listen(server); // attach socket.io to the server

const chess = new Chess();

let player = {};
let currentPlayer = "W";


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index" ,{title: "Chess Game"});
    }
);



io.on("connection", (socket) => {
    console.log("A user has connected");

    if(!player.white){
        player.white = socket.id; //is line ka mtlb h k agr player white nhi h to usko white bna do 
        socket.emit("palyerRole", "W"); 
    }
    else if(!player.black){
        player.black = socket.id; //is line ka mtlb h k agr player black nhi h to usko black bna do
        socket.emit("palyerRole", "B");
    }
    else{
        socket.emit("err", "Room is full");
    }
});


server.listen(3001, () => {
    console.log("Server is running on port 3001");
});

