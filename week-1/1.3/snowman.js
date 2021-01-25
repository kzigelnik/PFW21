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
    Image(img, 0, 0)
}