const gameBoard = [
  { value: "!" },
  { value: "@" },
  { value: "#" },
  { value: "$" },
  { value: "%" },
  { value: "^" },
  { value: "&" },
  { value: "*" },
  { value: "=" },
];
function checkWinCombinations() {
  if (
    gameBoard[0].value === gameBoard[1].value &&
    gameBoard[0].value === gameBoard[2].value
  ) {
    console.log(`Winner player: ${gameBoard[0].value}`);
    gameStarted = false;
    gameOver();
  } else if (
    gameBoard[3].value === gameBoard[4].value &&
    gameBoard[3].value === gameBoard[5].value
  ) {
    console.log(`Winner player: ${gameBoard[3].value}`);
    gameStarted = false;
    gameOver();
  } else if (
    gameBoard[6].value === gameBoard[7].value &&
    gameBoard[6].value === gameBoard[8].value
  ) {
    console.log(`Winner player: ${gameBoard[6].value}`);
    gameStarted = false;
    gameOver();
  } else if (
    gameBoard[0].value === gameBoard[3].value &&
    gameBoard[0].value === gameBoard[6].value
  ) {
    console.log(`Winner player: ${gameBoard[0].value}`);
    gameStarted = false;
    gameOver();
  } else if (
    gameBoard[1].value === gameBoard[4].value &&
    gameBoard[1].value === gameBoard[7].value
  ) {
    console.log(`Winner player: ${gameBoard[1].value}`);
    gameStarted = false;
    gameOver();
  } else if (
    gameBoard[2].value === gameBoard[5].value &&
    gameBoard[2].value === gameBoard[8].value
  ) {
    console.log(`Winner player: ${gameBoard[2].value}`);
    gameStarted = false;
    gameOver();
  } else if (
    gameBoard[0].value === gameBoard[4].value &&
    gameBoard[0].value === gameBoard[8].value
  ) {
    console.log(`Winner player: ${gameBoard[0].value}`);
    gameStarted = false;
    gameOver();
  } else if (
    gameBoard[2].value === gameBoard[4].value &&
    gameBoard[2].value === gameBoard[6].value
  ) {
    console.log(`Winner player: ${gameBoard[2].value}`);
    gameStarted = false;
    gameOver();
  } else console.log("No one wins yet");
}

let turnOne = true;
function markUP() {
  if (gameStarted) {
    turnOne ? (turnOne = !turnOne) : (turnOne = true);
    if (turnOne) {
      this.innerHTML = "x";
      this.value = 1;
      updateGameBoard(this.dataset.index, 1);
    } else {
      this.innerHTML = "0";
      this.value = 0;
      updateGameBoard(this.dataset.index, 0);
    }
    checkWinCombinations();
    if (this.value == 1 || this.value == 0) {
      this.removeEventListener("click", markUP);
    }
  }
}

function updateGameBoard(index, value) {
  gameBoard[index].value = value;
  // console.log(gameBoard);
}

const boxes = document.querySelectorAll(".game-box");

function activeBoxes() {
  boxes.forEach((box) => {
    if (box.value != 1 && box.value != 0) {
      box.addEventListener("click", markUP);
    }
  });
}

function gameOver() {
  console.log("GAME OVER");
}

let gameStarted = false;
function startGame() {
  !gameStarted ? (gameStarted = !gameStarted) : (gameStarted = false);
  if (gameStarted) {
    activeBoxes();
  } else {
    gameOver();
  }
}
startGame();
