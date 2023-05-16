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

  return { render, update };
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
    GameBoard.update(index, players[currentIndexPlayer].mark);
    currentIndexPlayer = currentIndexPlayer === 0 ? 1 : 0;
  };

  return { start, handleclick };
})();

document.querySelector("#btn-start").addEventListener("click", () => {
  gameContainer.style.display = "grid";
  Game.start();
  console.log("rendering");
});
