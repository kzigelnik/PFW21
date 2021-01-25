const { FILL, STROKE } = require("../p5");

let grid = undefined;
function preload() {
    img = loadImage("images/100px_grid.png");
}

function setup() {
    createCanvas(1000, 800);
    background ("#ccc");
}
function draw() {
    background(grid);
    Image(img, 0, 0);
    //snowman legs
    fill("#f1f1f1");
    STROKE(100,250,100);
    // left
    ellipse(350,650, 200);

}