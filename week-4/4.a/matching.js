const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
  totalPairs: 5,
  flippedCards:[],
  numMatched: 0, 
  attempts: 0, 
  waiting: false
};
let cardfaceArray = [];
let cardback;
function preload() {
  cardback = loadImage('images/icon.png');
  cardfaceArray = [
    loadImage('images/watermelon.png'),
    loadImage('images/blueberry.png'),
    loadImage('images/orange.png'),
    loadImage('images/figs.png'),
    loadImage('images/pineapple.png')
  ]
}
function setup() {
  createCanvas(800, 600);
  let selectedFace = [];
  for (let z = 0; z < 5; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFace.push(face);
    selectedFace.push(face);
    // remove the used cardfaec so it doesn't get randomly selected
    cardfaceArray.splice(randomIdx,1);
  }
selectedFace = shuffleArray(selectedFace);
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
      const faceImage = selectedFace.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 120;
    }
    startingY += 150;
    startingX = 100;
  }
}
function draw() {
  background('#2ec4b6');
  if(gameState.numMatched === gameState.totalPairs) {
    fill('pink');
    textSize(20);
    text('Winner Winner Chicken Dinner!', 400, 425);
    noLoop();
  }
  for (let k = 0; k < cards.length; k++) {
    if(!cards[k].isMatch) {
      cards[k].face = DOWN;
    }
    cards[k].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill(255);
  textSize(36);
  text('attempts ' + gameState.attempts, 100, 500);
  text('matches ' + gameState.numMatched, 100, 450);
}
function mousePressed() {
  if (gameState.waiting) {
    return;
  }
  for (let k = 0; k < cards.length; k++) {
    // first check flipped cards length, and then we can trigger the flip
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2 ) {
    gameState.attempts++; 
   if (gameState.flippedCards[0].cardFaceImage === gameState.flippedCards[1].cardFaceImage) {
     // cards match! Time to score!
     // mark cards as matched so they dont flip bacl
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      // empty flipped cards array
      gameState.flippedCards.length = 0;
      // increment the score
      gameState.numMatched++;
      loop();
   } else {
     gameState.wating = true;
      const loopTimeout = window.setTimeout(() => {
        loop();
        window.clearTimeout(loopTimeout);
      }, 2000)
   }
  }
}

class Card {
  constructor (x, y, cardFaceImage) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 100;
    this.face = DOWN;
    this.cardFaceImage = cardFaceImage;
    this.isMatch = false;
    this.show();
  }

  show () {
    if (this.face=== UP || this.isMatch) {
      fill('#fff');
      rect(this.x, this.y, this.width, this.height, 10);
      image(this.cardFaceImage, this.x, this.y + 20);
    } else {
      fill('#ffbf69');
      noStroke();
      rect(this.x, this.y, this.width, this.height, 10);
      image(cardback, this.x, this.y + 20);
    }
  }

  didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width &&
   mouseY >= this.y && mouseY <= this.y + this.height) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }

  flip () {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
}
  function shuffleArray (array) {
    let counter = array.length;
     while (counter > 0) {
       //pick random index
       const idx = Math.floor(Math.random() * counter);
       //decrease counter by 1 (decrement)
       counter--;
       // swap the last element with it
       const temp = array[counter];
       array[counter] = array[idx];
       array[idx] = temp;
     }
    return array;
  }

