// draw a spinning torus
// with ring radius 30 and tube radius 15
function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(205, 102, 94);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(30, 15);
}