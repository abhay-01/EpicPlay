// import { createServer } from "http";
// import { Server } from "socket.io";

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: "http://http://localhost:3001/",
});
const allUsers = {};
io.on("connection", (socket) => {
  allUsers[socket.id] = {
    socket: socket,
    online: true,
    playing: false,
  };

  socket.on("request_to_play", (data) => {
    const currentUser = allUsers[socket.id];
    currentUser.playerName = data.playerName;
    console.log(currentUser);

    let opponentPlayer=null;

    for (const key in allUsers) {
      const user = allUsers[key];
      if (user.online && !user.playing && socket.id !== key) {
        opponentPlayer = user;
        break;
      }
    }
    if (opponentPlayer) {
      opponentPlayer.socket.emit("Opponentfound", {
        opponentName: currentUser.playerName,
        playingAs: "cross",
      });

      currentUser.socket.emit("Opponentfound", {
        opponentName: opponentPlayer.playerName,
        playingAs: "circle",
      });

      currentUser.socket.on("playerMoveFromClient", (data) => {
        // console.log(data);
        opponentPlayer.socket.emit("playerMoveFromServer", {
          ...data,
        });
      });
      opponentPlayer.socket.on("playerMoveFromClient", (data) => {
        // console.log(data);
        currentUser.socket.emit("playerMoveFromServer", {
          ...data,
        });
      });
    } else {
      currentUser.socket.emit("OpponentNotFound");
    }
  });

  socket.on("disconnect", function () {
    const currentUser = allUsers[socket.id];
    currentUser.online = false;
  });
});

httpServer.listen(5001);
