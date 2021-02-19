let squareArray = [];

function setup () {
  createCanvas(600, 400);
  for (let i = 0; i < 6; i++) {
    const square = new Square(200, 200, 25, 25);
   squareArray.push(square);
  }
}
function draw () {
  background('darkBlue');
  for (let k = 0; k < 3; k++) {
    squareArray[k].move();
    squareArray[k].show();
  }
}
// classes are new blocks of code that contain everything it means to be that object: functionality, data, etc. The class is the cookie cutter.
class Square {
  constructor (x, y, w, h) {
    // 'this' keyword references the current object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  move () {
    // the numbers in random are the speed at which the shape moves
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show () {
    stroke('yellow');
    strokeWeight(7);
    noFill();
    rect(this.x, this.y, this.w, this.h);
  }
}