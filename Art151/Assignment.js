var title = "The Witch's Theater";
var updateCount = 0;
var heightA = 250;

function preload() {
  eye = loadImage("assets/dundun.png");
  blink = loadImage("assets/papa.png");
}

function setup() {
  //Initalize canvas
  createCanvas(800, 500);

  strokeCap(SQUARE);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);

}

function draw() {
  noCursor();
  drawBgn(); // Begin frame draw
  titleDraw();

  if(mouseIsPressed) {
    image(blink, mouseX, mouseY, 65, 40);
  }
  else {
    image(eye, mouseX, mouseY, 65, 40);
  }

  drawBorder(); // End frame draw

}

// ------------------------------------------------------[drawBgn]
function drawBgn() {
  background(0, 0, 0);
  //draw grid
  stroke(100, 100, 100, 120);
  strokeWeight(1);
  for(let i = 0; i < 800; i = i + 15) {
    line(i, 0, i, 500);
    line(0, i, 800, i);
  }
}


// ------------------------------------------------------[titleDraw]
function titleDraw() {
  fill(255);
  stroke(0, 0);
  textFont("Fredericka the Great");
  for(let i = 0; i < 19; i++) {
    //let size = random(35,40);
    if(updateCount === 30) {
      textSize(random(25,28));
      updateCount = 0;
    }
    else {
      updateCount++;
    }
    text(title.charAt(i), 137 + (i * 30) + random(1), heightA+(random(1)));
  }
}

// ------------------------------------------------------[drawBorder]
function drawBorder() {
  stroke(255);
  strokeWeight(3);
  //borders
  line(3, 3, 3, 497);
  line(3, 3, 797, 3);
  line(797, 3, 797, 497);
  line(3, 497, 797, 497);
  //accents
  line(3, 13, 13, 3);
  line(13, 497, 3, 487);
  line(787, 3, 797, 13);
  line(787, 497, 797, 487);
  //accent dots
  point(11, 11);
  point(789, 489);
  point(11, 489);
  point(789, 11);
  //outer border draw
  stroke(0);
  strokeWeight(2);
  line(1, 1, 1, 499);
  line(1, 1, 799, 1);
  line(799, 1, 799, 499);
  line(799, 1, 799, 499);
  line(1, 499, 799, 499);
  //Extra accent black separator draw
  stroke(80);
  strokeWeight(1);
  line(0, 0, 0, 500);
  line(0, 0, 800, 0);
  line(800, 0, 800, 500);
  line(0, 500, 800, 500);
}
