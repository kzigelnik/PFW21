let grid = undefined;

function setup() {
    createCanvas(1000, 800);
    background ("#cad2c5");
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    background(grid);
    // ground
    fill("#84a98c");
    rect(0, 600, 1000, 200);
    //snowman legs
    strokeWeight(3);
    // botton body
    fill("#f1f1f1");
    ellipse(500, 600, 200, 200);
    // middle body
    fill("#f1f1f1");
    ellipse(500, 460, 150, 150);
    // head
    fill("#f1f1f1");
    ellipse(500, 350, 100);
    // left arm
    line(350, 525, 450, 450);
    // right arm 
    line(650, 525, 550, 450);
    //smile
    noFill();
    arc(500, 350, 50, 50, 0, HALF_PI);
    // left eye
    ellipse(475,340,1,1)
    // right eye
    ellipse(525,340,1,1)
    

}