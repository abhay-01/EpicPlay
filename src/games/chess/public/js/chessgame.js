const socket = io();

const chess = new Chess();
const boardElement = document.querySelector(".chessboard");
const playerEmail = document.querySelector("#player-email");

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;
let gameOver = false; // Track if the game is over

const renderBoard = () => {
  if (gameOver) {
    return;
  }

  const board = chess.board();
  boardElement.innerHTML = "";
  board.forEach((row, i) => {
    row.forEach((square, j) => {
      const squareElement = document.createElement("div");
      squareElement.classList.add(
        "square",
        (i + j) % 2 === 0 ? "light" : "dark"
      );
      squareElement.dataset.row = i;
      squareElement.dataset.col = j;

      if (square) {
        const pieceElement = document.createElement("div");
        pieceElement.classList.add(
          "piece",
          square.color === "w" ? "white" : "black"
        );
        pieceElement.innerText = getPieceUnicode(square);
        pieceElement.draggable = playerRole === square.color;

        pieceElement.addEventListener("dragstart", (e) => {
          if (pieceElement.draggable) {
            draggedPiece = pieceElement;
            sourceSquare = { row: i, col: j };
            e.dataTransfer.setData("text/plain", ""); //dragged piece ko move krne k liye
          }
        });

        pieceElement.addEventListener("dragend", () => {
          draggedPiece = null;
          sourceSquare = null;
        });

        squareElement.appendChild(pieceElement);
      }

      squareElement.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      squareElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (draggedPiece && !gameOver) {
          const targetSource = {
            row: parseInt(squareElement.dataset.row),
            col: parseInt(squareElement.dataset.col),
          };

          handleMove(sourceSquare, targetSource);
        }
      });

      boardElement.appendChild(squareElement);
    });
  });

  if (playerRole === "b") {
    boardElement.classList.add("flipped");
  } else {
    boardElement.classList.remove("flipped");
  }
};

const handleMove = (source, target) => {
  const move = {
    from: `${String.fromCharCode(97 + source.col)}${8 - source.row}`,
    to: `${String.fromCharCode(97 + target.col)}${8 - target.row}`,
    promotion: "q",
  };

  socket.emit("move", move);
};

const getPieceUnicode = (piece) => {
  const unicodePieces = {
    p: "\u2659",
    r: "\u2656",
    n: "\u2658",
    b: "\u2657",
    q: "\u2655",
    k: "\u2654",
    P: "\u265F",
    R: "\u265C",
    N: "\u265E",
    B: "\u265D",
    Q: "\u265B",
    K: "\u265A",
  };

  return unicodePieces[piece.type] || "";
};

// Listen for game over event
socket.on("gameOver", (result) => {
  gameOver = true;
  console.log("Game Over", result);
});

socket.on("gameStatus", ({ email, status }) => {
  const result = status === "win" ? "won" : "lost";
  displayGameResult(result);
});

socket.on("playerRole", (role) => {
  playerRole = role;
  renderBoard();
});

socket.on("spectatorRole", () => {
  playerRole = null;
  renderBoard();
});

socket.on("boardState", (fen) => {
  chess.load(fen);
  renderBoard();
});

socket.on("move", (move) => {
  chess.move(move);
  renderBoard();
});

const displayGameResult = (result) => {
  // Display game result to the user
  const resultElement = document.createElement("div");
  resultElement.classList.add("game-result");
  resultElement.innerHTML = `
        <div class="bg-gray-800 p-4 rounded-lg shadow-lg text-white fixed inset-0 flex items-center justify-center">
            <div class="p-6 bg-gray-900 rounded-lg">
                <h2 class="text-2xl font-bold mb-2">Game Over</h2>
                <p class="text-lg">You ${result} the game!</p>
                <button class="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="playAgain()">Play Again</button>
            </div>
        </div>
    `;
  document.body.appendChild(resultElement);
};
const playAgain = () => {
  // Redirect to the matchmaking page with parameters
  window.location.href = `http://localhost:3000/matchmaking`;
};

renderBoard();
