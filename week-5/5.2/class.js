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

class Square {
  constructor (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  move () {
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
