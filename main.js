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
  const handleclick = (event) => {
    const [, id] = event.target.id.split("-");
    console.log(id);
  };

  return { start, handleclick };
})();

document.querySelector("#btn-start").addEventListener("click", () => {
  gameContainer.style.display = "grid";
  Game.start();
  console.log("rendering");
});
