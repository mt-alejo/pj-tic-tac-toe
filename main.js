const boxes = document.querySelectorAll(".game-box");

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

boxes.forEach((box) => box.addEventListener("click", markUP));

// function gameBoardConstructor(A1, A2, A3, B1, B2, B3, C1, C2, C3) {
//   const [AOne, ATwo, AThree, BOne, BTwo, BThree, COne, CTwo, CThree] = [
//     A1,
//     A2,
//     A3,
//     B1,
//     B2,
//     B3,
//     C1,
//     C2,
//     C3,
//   ];
//   console.log({ AOne, ATwo, AThree, BOne, BTwo, BThree, COne, CTwo, CThree });
// }
