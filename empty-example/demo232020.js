//Demo232020.js an in class demo made on 2 - 3 - Demo232020
let state = 1;
let updateCount = 0;

var button;
var buttonX;
var buttonY;
let sizeX = 150;
let sizeY = 45;
var goEasy;
var goHard;
let scoot = 0;
let update = 0;
let scoot2 = 0;
let update2 = 0;
let canvas1;
let canvas2;

var title = "The Witch's Theater";
// ------------------------------------------------------[setup]
function setup() {
  createCanvas(800, 500);
  canvas1 = createGraphics(300, 470);
  canvas2 = createGraphics(300, 470);
  strokeCap(SQUARE);

  rectMode(CENTER);
  textAlign(CENTER);


  prepButtons();
}
// ------------------------------------------------------[draw]
function draw() {
  drawBgn(); // Begin frame draw
  //buttonInteract(width/2, height/2 + 20);

  switch(state) {
    case 1:
      titleDraw();
      break;
    case 2:
      goEasy.show();
      goHard.show();
      canvasOne();
      canvasTwo();
      break;
    case 3:
      goEasy.hide();
      goHard.hide();
      text("GOING EASY!!!", 30, 30);
      break;
    case 4:
      goEasy.hide();
      goHard.hide();
      text("GOING HARD!!!", 30, 30);
      break;
    default:
      text("An error has occurred...");
      break;
  }

  drawBorder(); // End frame draw

}
// ------------------------------------------------------[goEasy]
function setEasy() {
  state = 3;
}
// ------------------------------------------------------[goHard]
function setHard() {
  state = 4;
}

// ------------------------------------------------------[buttonInteract]
function buttonInteract(x, y) {
  fill(0);
  stroke(255);
  rect(x, y, sizeX, sizeY);
  line(x-sizeX/2 + 2, y-sizeY/2 + 2, x+sizeX/2 - 2, y-sizeY/2 + 2);
  line(x-sizeX/2 + 2, y+sizeY/2 - 2, x+sizeX/2 - 2, y+sizeY/2 - 2);
  line(x-sizeX/2 + 2, y-sizeY/2 + 2, x-sizeX/2 + 2, y+sizeY/2 - 2);
  line(x+sizeX/2 - 2, y-sizeY/2 + 2, x+sizeX/2 - 2, y+sizeY/2 - 2);

  fill(255);
  stroke(0, 0);
  textFont("Fredericka the Great");
  text("Scream!!", witdh/2, height/2);

  //if(dist(mouseX, mouseY, x, y) <= 10);
}
// ------------------------------------------------------[Canvas One]
function canvasOne() {
  canvas1.background(0);

  canvas1.strokeWeight(0);
  canvas1.fill(255, 255, 255, 120);
  canvas1.textSize(25);
  canvas1.textFont("Press Start 2P");
  for (let i = 0; i < 6; i++) {
      canvas1.text("EASY", ((i - 1) * 85) + scoot, 30);
      canvas1.text("EASY", (i * 85) - scoot, 460);
      if(update === 5) {
        update = 0;
        if(scoot != 85) {
          scoot++;
        }
        else {
          scoot = 0;
        }
      }
      else {
        update++;
      }
  }
  //Border
  canvas1.strokeWeight(2);
  canvas1.stroke(255);
  canvas1.line(0, 0, 300, 0);
  canvas1.line(0, 0, 0, 470);
  canvas1.line(300, 0, 300, 470);
  canvas1.line(0, 470, 300, 470);
  image(canvas1, 20, 15);
}

// ------------------------------------------------------[Canvas Two]
function canvasTwo() {
  canvas2.background(0);

  canvas2.strokeWeight(0);
  canvas2.fill(255, 255, 255, 120);
  canvas2.textSize(25);
  canvas2.textFont("Press Start 2P");
  for (let i = 0; i < 6; i++) {
    canvas2.text("HARD", ((i - 1) * 85) + scoot, 30);
    canvas2.text("HARD", (i * 85) - scoot, 460);
      if(update2 === 5) {
        update2 = 0;
        if(scoot2 != 85) {
          scoot2++;
        }
        else {
          scoot2 = 0;
        }
      }
      else {
        update2++;
      }
  }
  //Border
  canvas2.strokeWeight(2);
  canvas2.stroke(255);
  canvas2.line(0, 0, 300, 0);
  canvas2.line(0, 0, 0, 470);
  canvas2.line(300, 0, 300, 470);
  canvas2.line(0, 470, 300, 470);
  image(canvas2, 330, 15);
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
    text(title.charAt(i), 137 + (i * 30) + random(1), 230+(random(1)));
  }
}

// ------------------------------------------------------[playGo]
function playGo() {
  button.hide();
  state++;
}

// ------------------------------------------------------[playGo]
function change() {
  button.style('backgroundColor', '#111111');
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

function prepButtons() {
  button = createButton('Play');
  goEasy = createButton('Select');
  goHard = createButton('Select');
  goEasy.hide();
  goHard.hide();
  //button;
  button.style('backgroundColor', 'black');
  button.style('border','3px double white');
  button.style('padding','10px 40px');
  button.style('color','white');
  button.style('text-align','center');
  button.position(580,290);
  button.mousePressed(playGo);
  //goEasy
  goEasy.style('backgroundColor', 'black');
  goEasy.style('border','3px double white');
  goEasy.style('padding','10px 40px');
  goEasy.style('color','white');
  goEasy.style('text-align','center');
  goEasy.position(346,410);
  goEasy.mousePressed(setEasy);
  //goHard
  goHard.style('backgroundColor', 'black');
  goHard.style('border','3px double white');
  goHard.style('padding','10px 40px');
  goHard.style('color','white');
  goHard.style('text-align','center');
  goHard.position(660,410);
  goHard.mousePressed(setHard);
}
