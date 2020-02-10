/*
 * Edited by 654539020, aka Spooky Dude
 * Good luck trying to find me, I'm behind seventeen VPNs
 */

 //Code in setup() runs at the beginning, like Start()
function setup() {
  createCanvas(windowWidth, windowHeight);
  print(windowWidth);

  rectMode(CENTER);
}

//Code in draw is redrawn 60 times per second 👀
function draw() {
  background(230, 255, 242);
  fill(255,255,255);
  stroke(0);
  strokeWeight(1);
  point(200,200);

  line(width/2 - 150, height/2 - 25, width/2 + 150, height/2 + 25);

  noStroke();
  fill(190, 215, 202);
  rect(width/2 - 110, height/2 + 15, 35, 35);

  stroke(0);
  fill(255,255,255);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/2, height/2 - 75, 75, 75);

  if((mouseX > width/2 && mouseX < width/2 + 25) && (mouseY > height/2 - 60 && mouseY < height/2 - 50))
  {
    fill(random(255), random(255), random(255));
  }
  else {
    fill(0,0,0);
  }

  ellipse(width/2 - 10, height/2 - 75, 10, 10);
  ellipse(width/2 + 20, height/2 - 75, 10, 10);

  fill(255, 150, 0, 120);
  triangle(mouseX + 10, mouseY + 10, mouseX, mouseY - 10, mouseX - 10, mouseY - 10);

}
