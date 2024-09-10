import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3005", {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000,
});

const Matchmaking = () => {
  const [friendEmail, setFriendEmail] = useState("test2");
  const [selectedGame, setSelectedGame] = useState("chess");
  const [myEmail, setMyEmail] = useState("test");

  useEffect(() => {
    socket.on("accept-matchmaking", (data) => {
      console.log("ACCEPTANCE AA GAYA-->", data);
      if (data.url) {
        const url = data.url + `?email=${myEmail}`;
        window.open(url, "_blank");
      }
    });

    return () => {
      socket.off("accept-matchmaking");
    };
  }, []);

  const handleInitiateMatchmaking = async () => {
    try {
      const response = await fetch(
        "http://localhost:3005/initiate-matchmaking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: myEmail,
            target: friendEmail,
            url: "http://localhost:3001",
            type: selectedGame,
          }),
        }
      );

      if (response.ok) {
        console.log("Matchmaking initiated---", response);
        socket.emit("matchmaking", {
          sender: myEmail,
          target: friendEmail,
          url: "http://localhost:3001",
          type: selectedGame,
        });
      } else {
        console.error("Failed to initiate matchmaking");
      }
    } catch (error) {
      console.error("Error initiating matchmaking:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        marginLeft: "300px",
      }}
    >
      <h2>Start a Game</h2>
      <input
        type="string"
        placeholder="Enter your email"
        value={myEmail}
        onChange={(e) => setMyEmail(e.target.value)}
      />
      <input
        type="string"
        placeholder="Enter friend's email"
        value={friendEmail}
        onChange={(e) => setFriendEmail(e.target.value)}
      />
      <select
        value={selectedGame}
        onChange={(e) => setSelectedGame(e.target.value)}
      >
        <option value="">Select a game</option>
        <option value="chess">Chess</option>
        <option value="checkers">Checkers</option>
      </select>
      <button onClick={handleInitiateMatchmaking}>Initiate Matchmaking</button>
    </div>
  );
};

export default Matchmaking;
