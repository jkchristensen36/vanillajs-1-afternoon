console.log("Chewie, we're home")

const board = [];

function play(clickedId) {
  let playerSpan = document.getElementById('player');
  let clickedElement = document.getElementById(clickedId);

  if(playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }
}

console.log(board);

const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];

if (topRight !== undefined && topRight === topCenter && topCenter === topLeft) {
  alert(`${topRight} is the winner`);
}

if (topRight !== undefined && topRight === middleRight &&  middleRight === bottomRight) {
  alert(`${topRight} is the winner`);
}

if (topLeft !== undefined && topLeft === middleLeft && middleLeft === bottomLeft) {
  alert(`${topLeft} is the winner`);
}

if (topCenter !== undefined && topCenter === middleCenter && middleCenter === bottomCenter) {
  alert(`${topCenter} is the winner`);
}

if (middleLeft !== undefined && middleLeft === middleCenter && middleCenter === middleRight) {
  alert(`${middleLeft} is the winner`);
}

if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomCenter === bottomRight) {
  alert(`${bottomLeft} is the winner`);
}

if (topLeft !== undefined && topLeft === middleCenter && middleCenter === bottomRight) {
  alert(`${bottomRight} is the winner`);
  
}

if (bottomLeft !== undefined && bottomLeft === middleCenter && middleCenter === topRight) {
  alert(`${topRight} is the winner`);
}

let boardFull = true;

for (let i = 0; i <= 8; i++) {
  if(board[i] === undefined) {
    boardFull = false;
  }
 
  if (boardFull === true){
    alert(`"CAT'S GAME`)
  }

}

