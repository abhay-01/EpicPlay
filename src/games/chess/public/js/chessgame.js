
const socket = io(); 


const chess = new Chess();
const boardElement = document.querySelector(".chessboard");


let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () => {
    const board = chess.board();

    boardElement.innerHTML = "";
    board.forEach((row, i) => {
        row.forEach((square,j) => {
            const squareElement = document.createElement("div");
            squareElement.classList.add("square",
            (i+j)%2 === 0 ? "light" : "dark");
            squareElement.dataset.row = i;
            squareElement.dataset.col = j;

            if(square){
                const pieceElement = document.createElement("div");
                pieceElement.classList.add("piece",
                    square.color === "w" ? "white" : "black",
                );
                pieceElement.innerText = getPieceUnicode(square);
                pieceElement.draggable = playerRole === square.color;

                pieceElement.addEventListener("dragstart",(e)=>{
                    if(pieceElement.draggable){
                        draggedPiece = pieceElement;
                        sourceSquare = {row: i, col: j};
                        e.dataTransfer.setData("text/plain", ""); //dragged piece ko move krne k liye
                    }
                });

                pieceElement.addEventListener("dragend",()=>{
                    draggedPiece = null;
                    sourceSquare = null;
                });

                squareElement.appendChild(pieceElement);
            }

            squareElement.addEventListener("dragover", (e)=>{
                e.preventDefault();
            });

            squareElement.addEventListener("drop",(e)=>{
                e.preventDefault();

                if(draggedPiece){
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

}

const handleMove = () => {}

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
    }

    return unicodePieces[piece.type] || "";
}