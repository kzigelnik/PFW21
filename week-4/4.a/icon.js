const { Linter } = require("eslint");

let rotateBy = 5;
function setup () {
  createCanvas(600, 600);
  background('blue');
  fill('yellow');
  circle(300, 300, 200);
  circle(150, 150, 200);
  circle(450, 450, 200);
  stroke('white');
  strokeWeight(20);
  noFill();
  circle(150, 450, 200);
  circle(450, 150, 200);
  line(600, 0, 0, 600);
}