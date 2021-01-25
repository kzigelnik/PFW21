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
    // botton body
    ellipse(500, 600, 200, 200);
    // middle body
    ellipse(500, 460, 150, 150);
    // head
    ellipse(500, 350, 100)
}