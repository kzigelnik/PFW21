let bubble1;
let bubble2;
let bubble3;

function setup () {
  createCanvas(600, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
}

function draw() {
  background('darkBlue');
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill(4);
    square(this.x, this.y, 24);
  }
}