let grid = undefined;

function setup() {
    createCanvas(1000, 800);
    background ("#cad2c5");
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    background(grid);
    //snowman legs
    fill("#f1f1f1");
    strokeWeight(0);
    stroke(100,250,100);
    // left
    ellipse(350,650, 200);
    // right
    ellipse(650, 650, 200);
    // body
    ellipse(500, 450, 350, 400);
    // head
    ellipse(500, 200, 200)
}