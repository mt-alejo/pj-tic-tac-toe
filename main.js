const gameContainer = document.querySelector("#game-container");

const GameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((box, index) => {
      boardHTML += `<div class="game-box" id="box-${index}">${box}</div>`;
    });
    gameContainer.innerHTML = boardHTML;
    const boxes = document.querySelectorAll(".game-box");
    boxes.forEach((box) => box.addEventListener("click", Game.handleclick));
  };

  const update = (index, mark) => {
    gameboard[index] = mark;
    console.log(index, mark);
    render();
  };

  const getGameboard = () => gameboard;

  return { render, update, getGameboard };
})();

const createPlayer = (name, mark) => {
  return { name, mark };
};

const Game = (() => {
  let players = [];
  let currentIndexPlayer;
  let gameOver;
  const start = () => {
    players = [createPlayer("Vanesa", "X"), createPlayer("Auron", "0")];
    currentIndexPlayer = 0;
    gameOver = false;
    GameBoard.render();
  };
  const handleclick = (event) => {
    const [, index] = event.target.id.split("-");

    if (GameBoard.getGameboard()[index] !== "") {
      return;
    }
    GameBoard.update(index, players[currentIndexPlayer].mark);
    currentIndexPlayer = currentIndexPlayer === 0 ? 1 : 0;
    if (checkForWin(GameBoard.getGameboard())) {
      gameOver = true;
      alert(` wins!`);
    }
  };

  const restart = () => {};

  return { start, handleclick };
})();

const checkForWin = (gameboard) => {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // for (let i = 0; i < winCombination.length; i++) {
  //   const [a, b, c] = winCombination[i];
  //   if (
  //     gameboard[a] &&
  //     gameboard[a] === gameboard[b] &&
  //     gameboard[a] === gameboard[c]
  //   ) {
  //     return true;
  //   }
  // }
  // return false;
  gameboard[0] && gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]
    ? console.log("match")
    : true;
  gameboard[3] && gameboard[3] === gameboard[4] && gameboard[3] === gameboard[5]
    ? console.log("match")
    : true;
  gameboard[6] && gameboard[6] === gameboard[7] && gameboard[6] === gameboard[8]
    ? console.log("match")
    : true;
  gameboard[0] && gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]
    ? console.log("match")
    : true;
  gameboard[1] && gameboard[1] === gameboard[4] && gameboard[1] === gameboard[7]
    ? console.log("match")
    : true;
  gameboard[2] && gameboard[2] === gameboard[5] && gameboard[2] === gameboard[8]
    ? console.log("match")
    : true;
  gameboard[0] && gameboard[0] === gameboard[4] && gameboard[0] === gameboard[8]
    ? console.log("match")
    : true;
  gameboard[2] && gameboard[2] === gameboard[4] && gameboard[2] === gameboard[6]
    ? console.log("match")
    : true;
};

document.querySelector("#btn-start").addEventListener("click", () => {
  gameContainer.style.display = "grid";
  Game.start();
  console.log("rendering");
});
