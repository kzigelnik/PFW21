function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(205, 102, 94);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(30, 15);
}