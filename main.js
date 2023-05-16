const gameContainer = document.querySelector("#game-container");

const GameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((box, index) => {
      boardHTML += `<div class="game-box" id="box-${index}">${box}</div>`;
    });
    gameContainer.innerHTML = boardHTML;
  };

  return { render };
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

  return { start };
})();

document.querySelector("#btn-start").addEventListener("click", () => {
  gameContainer.style.display = "grid";
  Game.start();
  console.log("rendering");
});
