// import React, { useState } from "react";
// import "./Square.css";

// const circleSvg = (
//   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//     <g
//       id="SVGRepo_tracerCarrier"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//     ></g>
//     <g id="SVGRepo_iconCarrier">
//       {" "}
//       <path
//         d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
//         stroke="#ffffff"
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       ></path>{" "}
//     </g>
//   </svg>
// );

// const crossSvg = (
//   <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//     <g
//       id="SVGRepo_tracerCarrier"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//     ></g>
//     <g id="SVGRepo_iconCarrier">
//       {" "}
//       <path
//         d="M19 5L5 19M5.00001 5L19 19"
//         stroke="#fff"
//         stroke-width="1.5"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       ></path>{" "}
//     </g>
//   </svg>
// );

// const Square = ({
//   setGameState,
//   socket,
//   gameState,
//   playingAs,
//   finishedArrayState,
//   id,
//   currentPlayer,
//   setCurrentPlayer,

//   finishedstate,
// }) => {
//   const [icon, setIcon] = useState(null);

//   const clickOnSquare = () => {
//     if (playingAs !== currentPlayer) {
//       return;
//     }

//     if (finishedstate) {
//       return;
//     }

//     if (!icon) {
//       if (currentPlayer === "circle") setIcon(circleSvg);
//       else {
//         setIcon(crossSvg);
//       }

//       const myCurrentPlayer = currentPlayer;

//       socket.emit("playerMoveFromClient", {
//         state: {
//           id,
//           sign: myCurrentPlayer,
//         },
//       });

//       setCurrentPlayer(currentPlayer === "circle" ? "cross" : "circle");
//       setGameState((prevState) => {
//         let newState = [...prevState];
//         const rowIndex = Math.floor(id / 3);
//         const colIndex = id % 3;
//         newState[rowIndex][colIndex] = myCurrentPlayer;
//         console.log(newState);
//         return newState;
//       });
//     }
//   };

//   return (
//     <div
//       onClick={clickOnSquare}
//       className={`square ${finishedstate ? "not-allowed" : ""}
//       ${currentPlayer !== playingAs ? "not-allowed" : ""} ${
//         finishedArrayState.includes(id) ? finishedstate + "-won" : ""
//       }`}
//     >
//       {id === "circle" ? circleSvg : id === "cross" ? crossSvg : null}
//     </div>
//   );
// };
// export default Square;

import React, { useState } from "react";
import "./Square.css";

const circleSvg = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const crossSvg = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 5L5 19M5.00001 5L19 19"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Square = ({
  setGameState,
  socket,
  currentElement,
  gameState,
  playingAs,
  finishedArrayState,
  id,
  currentPlayer,
  setCurrentPlayer,
  finishedstate,
}) => {
  const [icon, setIcon] = useState(null);

  const clickOnSquare = () => {
    // Prevents move if it's not the player's turn or game is finished
    if (playingAs !== currentPlayer || finishedstate) {
      return;
    }

    if (!icon) {
      const myCurrentPlayer = currentPlayer;

      // Update the icon state based on the current player
      setIcon(myCurrentPlayer === "circle" ? circleSvg : crossSvg);

      // Emit the move to the server
      socket.emit("playerMoveFromClient", {
        state: {
          id,
          sign: myCurrentPlayer,
        },
      });

      // Update the game state and switch the current player
      setGameState((prevState) => {
        let newState = [...prevState];
        const rowIndex = Math.floor(id / 3);
        const colIndex = id % 3;
        newState[rowIndex][colIndex] = myCurrentPlayer;
        return newState;
      });

      setCurrentPlayer(currentPlayer === "circle" ? "cross" : "circle");
    }
  };

  return (
    <div
      onClick={clickOnSquare}
      className={`square ${finishedstate ? "not-allowed" : ""}
      ${currentPlayer !== playingAs ? "not-allowed" : ""} ${
        finishedArrayState.includes(id) ? finishedstate + "-won" : ""
      }`}
    >
      {currentElement === "circle"
        ? circleSvg
        : currentElement === "cross"
        ? crossSvg
        : icon}
    </div>
  );
};

export default Square;
