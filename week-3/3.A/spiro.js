let rotateBy = 5;
function setup () {
  createCanvas(600, 600);
  background(0);
  angleMode(DEGREES);
}
function makeArm (rotateBy) {
  let alt = Math.round(rotateBy / 180);
  console.log(alt);
  noFill();
  stroke('#ccff00');
  strokeWeight(1);
  line(50 + alt, 50 + alt, 50 + alt, 50 + alt);
  stroke('white');
  ellipse(60, 60 + alt, 60 - alt, 60);
  stroke('#fe019a')
  line(500 + alt, 10 + alt, 300 + alt, 10 + alt);
  stroke('#1b03a3');
  ellipse(100, 100, 100, 100);
  stroke('#39ff14');
  line(300, 5 - alt, 5 + alt, 5);
}

function draw () {
  translate(300, 300);
  rotate(rotateBy) // come back to this
  makeArm(rotateBy);
  rotateBy += 5;
}
function mousePressed () {
  loop();
}
function mouseReleased () {
  noLoop();

}