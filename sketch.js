// Emilie Pitre ©2016 hw7


var colorR;
var colorG;
var colorB;
var opacity;

var masterSize;
var hSize;
var vSize;

var tail;
var tailBend;

var rotation;

function setup(){
  createCanvas(600, 400);
  background(30, 50, 50);
  frameRate(15);
}

function draw(){

  push();
  fill(30, 50, 50, 10);
  rect(-10, -10, width + 20, height + 20);
  pop();

  if (mouseIsPressed) {
    colorR = random(80, 150);
    colorG = random(140, 200);
    colorB = random(150, 200);
    opacity = 255;
    // stroke(colorR - 30, colorG - 20, colorB - 20, opacity);
    fill(colorR, colorG, colorB, opacity);
    ray(mouseX, mouseY);
  } else {
    colorR = 0
    colorG = 0
    colorB = 0
    opacity = 0
  }
}

function ray(x, y){
  translate(mouseX, mouseY);
  hSize = random(1, 2);
  vSize = random(1, 2);
  scale(hSize, vSize)

  // scale(masterSize);
  rotation = random(-2*PI, 2*PI);
  rotate(rotation);

  tail = random(10, 30);
  tailBend = random(-15,15);

  noStroke();

  ellipse(5, 65, 15, 10);
  ellipse(-5, 65, 15, 10);

  beginShape();
    curveVertex(0, 0); //nose
    curveVertex(1, 0);
    curveVertex(40, 30);
    curveVertex(3, 70); //butt
    curveVertex(2 + tailBend, 80 + tail);
    curveVertex(1 + tailBend, 90 + tail);
    curveVertex(0, 100 + tail); //tail tip
    curveVertex(-1 + tailBend, 90 + tail);
    curveVertex(-2 + tailBend, 80 + tail);
    curveVertex(-3, 70); //butt
    curveVertex(-40, 30);
    curveVertex(-1, 0);
    curveVertex(0, 0); //nose
  endShape();

  push();
    masterSize = random(0.5,1.5);
    scale(masterSize)

    strokeWeight(1);
    stroke(0, 0, 0, opacity);
    noFill();
    arc(0, 20, 20, 20, PI + PI/3, 2*PI - PI/3);


    noStroke();
    fill(0, 0, 0); //eyes
    ellipse(10, 20, 8, 8);
    ellipse(-10, 20, 8, 8);

    fill(255, 255, 255, 200); //eye shinies
    ellipse(10 - 1, 21, 5, 5);
    ellipse(-10 - 1, 21, 5, 5);
    ellipse(10 + 3, 19, 2, 2);
    ellipse(-10 + 3, 19, 2, 2);
  pop();

}
