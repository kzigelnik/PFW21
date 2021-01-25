let grid = undefined;
let fill1 = prompt("enter a basic color name in lower case", "pink",)
let fill2 = prompt("enter another basic color name in lower case", "black",)

function setup() {
    createCanvas(1000, 800);
    background ("#cad2c5");
    
}

function draw() {
    background(grid);
    // ground
    fill(fill2);
    rect(0, 600, 1000, 200);
    //snowman legs
    stroke('black');
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
    ellipse(475,340,1,1);
    // right eye
    ellipse(525,340,1,1);
    // hat brim
    fill(fill1)
    rect(450,300,100,10);
    // hat top
    fill(fill1)
    rect(475,200, 50,100);
    //skiis
    fill(fill1);
    rect(350,200, 15,500);
    rect(375,200, 15,500);
    // snow
    strokeWeight(10); 
    stroke('white');
    point(20, 20);
    point(300,200);
    point(100,300);
    point(100,100);
    point(250,600);
    point(300,700);
    point(500, 200);
    point(450, 150);
    point(600,600);
    point(650,800);
    point(700, 450);
    point(800,200);
    point(700, 100);
    point(900,300);
}