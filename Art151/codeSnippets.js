
//Witch's Theater Streaks
for(let i = 0; i < 800; i = i + 2)
{
  stroke(random(20, 70));
  strokeWeight(1);
  line(i + random(3), 0, i + random(3), 500);
}

//Rain stopper mouse
stroke(0);
fill(0);
rect(mouseX, mouseY, 12, 500 - mouseY);
