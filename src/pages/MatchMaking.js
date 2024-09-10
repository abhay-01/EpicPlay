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
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    socket.on("accept-matchmaking", (data) => {
      console.log("ACCEPTANCE AA GAYA-->", data);
      if (data.url) {
        window.open(data.url, "_blank");
      }
    });

  

    socket.on("registerEmail", (data) => {
      console.log("MATCH CHESSGAME---", data);
    });

    socket.on("gameOver", (data) => {
      console.log(`${data.email} has ${data.result} the game`);
    });

    socket.on("redirect",(data)=>{
      console.log("redir",data);
    })

    //PARSING
    const params = new URLSearchParams(window.location.search);
    const resultParam = params.get("result");

    if (resultParam) {
      setResult(resultParam);
      setShowResult(true);
    }
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

      {/* Display Game Result */}
      {showResult && (
        <div className="game-result">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-2">Game Over</h2>
            {result === "win" ? (
              <p className="text-lg">Congratulations! You won the game.</p>
            ) : (
              <p className="text-lg">
                Sorry, you lost the game. Better luck next time!
              </p>
            )}
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowResult(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Matchmaking;
