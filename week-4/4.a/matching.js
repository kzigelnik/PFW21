
const squareCenter = 100;

let startingX = 200;
let startingY = 100;
const mySquares = [];
let startingId = 0;
function setup () {
  createCanvas(1100, 800);
  background('aquamarine');
  for (let k = 0; k < 4; k++) {
    for (let i = 0; i < 5; i++) {
      square(startingX, startingY, squareCenter);
      mySquares.push({ x: startingX, y: startingY, id: startingId });
      startingX += 150;
      startingId++;
    }
    startingY += 150;
    startingX = 200;
  }
  console.log(mySquares);
}
