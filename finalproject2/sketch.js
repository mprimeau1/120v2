//forestimages
let images = [];
//helps makes the background repeat
let imIdx = 0;
let snow = [];
  const numOfsnow = 300;
function preload(){
//moving forest images
  images[0] = loadImage("./images/background1.jpg")
  images[1] = loadImage("./images/background2.jpg")
  images[2] = loadImage("./images/background3.jpg")
  images[3] = loadImage("./images/background4.jpg")

}
function setup() {
// set frame rate 4 frames second
  frameRate(4);
      createCanvas( 600,400 );
// create a new snow object of class type "snowFlake"
      let init_x = 20;
      let init_y = 60;
        for (let i = 0; i < numOfsnow; i++) {
        snow.push(new snowFlake(init_x, init_y));
// move the starting postion
        init_x += 200;
        if (init_x > width) {
            init_x = 30;
            init_y += 50;
              }
          }
}


function draw() {
  noCursor();

  var fr = frameRate();
//make background images of forest
  background(images[imIdx]);

// makes the background image repeat
  imIdx++
//using a module for the background images
  imIdx = imIdx % 4;

//draw the frog
  frog();

// draw the squirel
  squirel();

//draw flower 1
  flowers();

//draw flower 2
  flowers(200, 25, .75, .75);

//draw bird
  bird();

// draw forestMAN
  forestMAN();

  for (let i = 0; i < snow.length; i++) {
// call  methods for snowFlake
      snow[i].snowCheck(snow, i);
      snow[i].edgeHit();
      snow[i].move();
      snow[i].display();
  }

//draw the firefly cursor
  firefly();

}

///////////////////////////////////////////////////
////////// snowFlake CLASS ////////////////////////
//////////////////////////////////////////////////
class snowFlake {
    constructor(x, y, w, h) {
        this.color = 'white';
        this.sizeA = random(0, 15);
        this.radA = this.sizeA / 4;
        this.radB = this.sizeB / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-5, 5);
          }

  display() {
    push();
// remove the stroke
    noStroke();
// set the fill color
    fill(this.color);
// set the position and size of snowFlake
    translate(this.posX, this.posY);
    ellipse(0, 0, this.sizeA);
    pop();
    }

  move() {
// move the snowFlake in a random way on the x an y axis
      this.posX += this.deltaX;
      this.posY += this.deltaY;
    }

  edgeHit() {
// if snow hits a vertical wall then change the color to light blue
        if (this.posX + this.radA >= width || this.posX - this.radA <= 0) {
            this.deltaX *= -1;
            this.color = 'rgba(49, 218, 223, 0.53)';
        }
// if the snow hits a hortizal wall then change the color to light pink
        if (this.posY + this.radB >= height || this.posY - this.radB <= 0) {
            this.deltaY *= -1;
            this.color = 'rgba(242, 136, 126, 0.69)';
        }
    }

  snowCheck(otherSnow, JX) {
// for loop touches the snow
      for (let n = 0; n < otherSnow.length; n++) {
// if n != JX, then check for touching
        if (n != JX) {
        let d = dist(this.posX, this.posY, otherSnow[n].posX, otherSnow[n].posY);
        let combinedR = this.radA + otherSnow[n].radA;

        if (d <= combinedR) {
        this.deltaX *= -1;
        this.deltaY *= -1;

// flip the color
        if( this.color == 'rgba(242, 136, 126, 0.69)') {
            this.color = 'white';
      } else {
            this.color = 'rgba(242, 136, 126, 0.69)';
                    }
                }
            }
        }
    }
}


////////////////////////////////////////////////////////////////////////
////////////////////////frog function///////////////////////////////////
////////////////////////////////////////////////////////////////////////

function frog (){

//frog body
  push();
  stroke('black');
  strokeWeight(4);
  fill('rgb(19, 66, 17)');
  ellipse(65 ,240, 50, 50);
  ellipse(50 ,225, 50, 50);
  ellipse(75,250,25,25);
  pop();

//frog eyes outer
  push();
  stroke('black');
  strokeWeight(2);
  fill('white');
  ellipse(37,200,20,20);
  ellipse(58,200,20,20);
  pop();
//frog eyes inner
  push();
  stroke('black');
  strokeWeight(2);
  fill('black');
  ellipse(37,200,10,10);
  ellipse(58,200,10,10);
  pop();
// frog mouth
  push();
  arc(50, 238, 15, 15, 0, PI + QUARTER_PI, PIE);
  pop();

}

////////////////////////////////////////////////////////////////////////
//////////////////// End frog function//////////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////////squirel function////////////////////////////////
////////////////////////////////////////////////////////////////////////
function squirel (){
// tail
  push();
  strokeWeight(10);
  stroke('rgb(105,58,15)');
  line(528, 290, 545, 255);
  pop();

//squirel body
  push();
  strokeWeight(0);
  fill('rgb(105, 58, 15)');
  ellipse(520 ,280, 20, 40);
  pop();

// squirel head
  push();
  strokeWeight(0);
  fill('rgb(105,58,15)');
  ellipse(520,257,30,15);
  ellipse(520,250,25,25);
//ears
  triangle(507,246,512,226,517,246);
  triangle(520,246,525,226,530,246);
// feet
  ellipse(520,300,20,10);
  pop();
//belly
  push();
  strokeWeight(0);
  fill('rgb(215, 163, 85)');
  ellipse(520,280,13,28);
//mouth
  ellipse(520,257,20,10);
  pop();
//eyes
  push();
  strokeWeight(0);
  fill('white');
  ellipse(525,247,7,12);
  ellipse(515,247,7,12);
  pop();
//inner eyes
  push();
  strokeWeight(0);
  fill('blue');
  ellipse(525,247,5,10);
  ellipse(515,247,5,10);
  pop();
//pupal
  push();
  strokeWeight(0);
  fill('black');
  ellipse(525,247,3,5);
  ellipse(515,247,3,5);
  pop();
//teeth
  push();
  strokeWeight(1);
  stroke('black');
  fill('white');
  rect(516,255,3,6);
  rect(519,255,3,6);
  pop();

}

////////////////////////////////////////////////////////////////////////
//////////////////// End squirel function///////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////////flowers function////////////////////////////////
////////////////////////////////////////////////////////////////////////
function flowers (pos_F, pos_C, scale_F, scale_C){
push();
// scale and position
  translate( pos_F, pos_C );
  scale( scale_F, scale_C );

//flower stem
  push();
  stroke('green');
  strokeWeight(5);
  line(150,205,150,225);
  pop();

// flower petals

  push();
  strokeWeight(0);
  stroke('black');
  fill('purple');
  triangle(135, 215, 150, 175, 165, 215);
  pop();

//frower center
  stroke('black');
  strokeWeight(0);
  fill('rgb(172, 154, 33)');
  ellipse(150 ,200, 15, 15);
pop();
}

////////////////////////////////////////////////////////////////////////
//////////////////// End flowers function///////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////////forest man function/////////////////////////////
////////////////////////////////////////////////////////////////////////

function forestMAN (){

// arms
  push();
  strokeWeight(6);
  stroke('rgb(223,118,9)');
  line(125,40,110,60);
  line(145,40,150,55);
  line(150,55,155,45);
  pop();

//forestMAN body
  push();
  stroke('black');
  strokeWeight(2);
  fill('rgb(223, 118, 9)');
  rect(125,35, 18, 28);
  pop();
// cool belt
  push();
  strokeWeight(4);
  stroke('brown');
  line(125, 35, 142, 58);
  line(127, 58, 140, 58);
  pop();

//legs
  push();
  stroke('black');
  strokeWeight(2);
  fill('rgb(223,118,9)');
  rect(133, 64 ,10,15);
  rect(125, 64 ,10,15);
  pop();
//shoes
  push();
  strokeWeight(1);
  stroke('black');
  fill('black');
  rect(124,75,19,10);
  pop();
//head of forestMAN
  push();
  strokeWeight(0);
  stroke('black');
  fill('rgb(221, 185, 125)');
  ellipse(134,25,20);
  pop();
//eyes
  push();
  strokeWeight(1);
  stroke('black');
  fill('white');
  ellipse(130,25,5);
  ellipse(137,25,5);
  pop();

// pupals
  push();
  strokeWeight(0);
  stroke('blue');
  fill('blue');
  ellipse(130,25,2);
  ellipse(137,25,2);
  pop();

// sweet hat
  push();
  strokeWeight(1);
  stroke('black');
  fill('black');
  ellipse(135,18,20,10);
  rect(130,8,10,5);
  pop();
// mouth
  push();
  strokeWeight(0);
  stroke('black');
  fill('rgb(113, 39, 23)');
  arc(133, 31, 5, 5, 0, PI + QUARTER_PI, PIE);
  pop();
}

////////////////////////////////////////////////////////////////////////
//////////////////// End forest man function////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////////bird function///////////////////////////////////
////////////////////////////////////////////////////////////////////////

function bird (){

//bird body
  push();
  stroke('black');
  strokeWeight(4);
  fill('rgb(46, 66, 110)');
  ellipse(415 ,60, 50);
  pop();
// eyes
  push();
  fill('white');
  ellipse(405,55,12,15);
  ellipse(425,55,12,15);
  pop();
// colored eyes
  push();
  fill('blue');
  ellipse(405,55,9,12);
  ellipse(425,55,9,12);
  pop();
// pupal
  push();
  stroke('black');
  fill('black');
  ellipse(405,55,5);
  ellipse(425,55,5);
  pop();
//nose
  push();
  strokeWeight(1);
  stroke('black');
  fill('orange');
  triangle(407, 67, 415, 75, 421, 67);
  pop();
//wings
  push();
  strokeWeight(2);
  stroke('black');
  fill('rgb(46, 66, 110)');
  ellipse(390,70,10,25);
  ellipse(440,70,10,25);
  pop();

// legs
  push();
  stroke('orange');
  strokeWeight(4);
  line(408, 85, 408, 95);
  line(422, 85, 422, 95);
  pop();

}

////////////////////////////////////////////////////////////////////////
//////////////////// End bird function//////////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////firefly function////////////////////////////////
////////////////////////////////////////////////////////////////////////
function firefly(){

push();
  translate( mouseX, mouseY );
  stroke('black');
  strokeWeight(0);
  fill('rgba(248, 251, 69, 0.5)');
  ellipse(mouseX,mouseY,10);
pop();

}
////////////////////////////////////////////////////////////////////////
//////////////////////end magic wand////////////////////////////////////
////////////////////////////////////////////////////////////////////////
