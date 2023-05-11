const gameBoard = [
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
];
function checkWinCombinations() {
  if (
    gameBoard[0].value == gameBoard[1].value &&
    gameBoard[0].value == gameBoard[2].value
  ) {
    console.log(`Winner player: ${gameBoard[0].value}`);
  } else if (
    gameBoard[3].value == gameBoard[4].value &&
    gameBoard[3].value == gameBoard[5].value
  ) {
    console.log(`Winner player: ${gameBoard[3].value}`);
  } else if (
    gameBoard[6].value == gameBoard[7].value &&
    gameBoard[6].value == gameBoard[8].value
  ) {
    console.log(`Winner player: ${gameBoard[6].value}`);
  } else if (
    gameBoard[0].value == gameBoard[3].value &&
    gameBoard[0].value == gameBoard[6].value
  ) {
    console.log(`Winner player: ${gameBoard[0].value}`);
  } else if (
    gameBoard[1].value == gameBoard[4].value &&
    gameBoard[1].value == gameBoard[7].value
  ) {
    console.log(`Winner player: ${gameBoard[1].value}`);
  } else if (
    gameBoard[2].value == gameBoard[5].value &&
    gameBoard[2].value == gameBoard[8].value
  ) {
    console.log(`Winner player: ${gameBoard[2].value}`);
  } else if (
    gameBoard[0].value == gameBoard[4].value &&
    gameBoard[0].value == gameBoard[8].value
  ) {
    console.log(`Winner player: ${gameBoard[0].value}`);
  } else if (
    gameBoard[2].value == gameBoard[4].value &&
    gameBoard[2].value == gameBoard[6].value
  ) {
    console.log(`Winner player: ${gameBoard[2].value}`);
  } else console.log("No one wins");
}

gameBoard[0].value = 0;
gameBoard[1].value = 1;
gameBoard[2].value = 0;
gameBoard[3].value = 1;
gameBoard[4].value = 0;
gameBoard[5].value = 1;
gameBoard[6].value = 0;
gameBoard[7].value = 1;
gameBoard[8].value = 1;
checkWinCombinations();

let turnOne = true;
function markUP() {
  turnOne ? (turnOne = !turnOne) : (turnOne = true);
  if (turnOne) {
    this.innerHTML = "x";
    this.value = 1;
  } else {
    this.innerHTML = "0";
    this.value = 0;
  }
  //Share private variables
  checkBoxes(this);
}
function checkBoxes(box) {
  console.log(box.value);
}
const boxes = document.querySelectorAll(".game-box");
boxes.forEach((box) => box.addEventListener("click", markUP));
