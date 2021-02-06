function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke('#2ec4b6');
    strokeWeight(15);
    circle(100,100,190,190);
    strokeWeight(12);
    circle(100,100,140,140);
    strokeWeight(10);
    circle(100,100,100,100);
    strokeWeight(8);
    circle(100,100,60,60);
    stroke('#cbf3f0');
    strokeWeight(10);
    circle(50,50,30,30);
    circle(100,100,30,30);
    circle(150,150,30,30);
    stroke('white');
    strokeWeight(5);
    circle(50,50,20,20);
    circle(100,100,20,20);
    circle(150,150,20,20);
    stroke('#ff9f1c');
    fill(secondaryColor);
    circle(150,50,10,10);
    circle(100,100,10,10);
    circle(50,150,10,10);
    stroke('white');
    fill('white');
    circle(100,50,10,10);
    circle(50,100,10,10);
    circle(100,150,10,10);
    circle(150,100,10,10);

}

function draw() {
    createTile(0, 0, 'pink', 'yellow');
    createTile(0, 200, 'red', 'green');
    createTile(0, 200, 'blue', 'white');
    createTile(200, -400, 'green', 'purple');
    createTile(0, 200, 'yellow', 'cyan');
    createTile(0, 200, 'green', 'purple');
    createTile(200, 0, 'blue', 'white');
    createTile(0, -200, 'red', 'green');
    createTile(0, -200, 'pink', 'white');
    
}