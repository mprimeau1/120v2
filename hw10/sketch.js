function setup() {
// create a canvas the size of the screen
    createCanvas(windowWidth,windowHeight);
    frameRate( 40 );
}
//make variables
  let loop = 30;

// added variables for floating iceburg
  let iceX = 1000;
  let iceY = 500;
// add color varriables for blinking snow
  let colors = ['rgb(236, 116, 230)', 'rgb(115, 235, 235)', 'rgb(255, 156, 149)', 'rgb(255, 255, 255)', 'rgb(195, 255, 219)'];
// add colors for iceburgs
  let iceCOLOR = ['rgb(120, 134, 148)','rgb(106, 200, 217)','rgb(89, 147, 147)'];


function draw(){
//make the background blue
  background('rgb(21, 24, 79)');
  noCursor();

// label the new functions
//iceburg Functions
  iceburg();

//snow  function
  snow();

// penquin 1
  penguin(5,5,1.0,1.0);
// penguin 2
  penguin(100,-250,1.5,1.5);
// penguin 3
  penguin(350,150,.75,.75);
// penguin 4
  penguin(200,65,1.0,1.0);
// penguin 5
  penguin(300,350,.25,.25);
// penguin 6
  penguin(-800,250,.75,.75);

// baloon 6
    balloonRED(1,1,1.0,1.0);
// baloon 5
    balloonRED(800,-550,2.0,2.0);
// baloon 4
    balloonRED(-425,-625,2.0,2.0);
// baloon 3
    balloonRED(-265,-90,1.0,1.0);
// baloon 2
    balloonRED(-650,-290,1.5,1.5);
// baloon 1
    balloonRED(-135,155,.75,.75);
}

//begin new function snow *******************************
// snow moving with mouse functions
function snow(){
  let density = map(mouseX, 0, width, 20, 60);
  fill(random(colors));
  stroke(random(colors));
// Make a loop of moving snow with mouse
  for (let k = 5; k <= width-10; k += density) {
    for (let h = 5; h <= height-10; h+=density) {
// draw snow
  ellipse(k , h ,5 );

    }
  }
}
// End snow falling

// begin new function iceburg ***********************************
// 3 floating iceburgs  moving across bottom on screen***********
function iceburg(){

  push();
  let result = iceX + iceY;
  iceX = iceX - 1;
  iceY = iceY - 0 * 1 ;

  strokeWeight(5);
  stroke(random(iceCOLOR));
  fill(random(iceCOLOR));
  rect( iceX, iceY, 75, 75 ); // first iceburf
  rect( iceX - 350 , iceY - 60, 100, 100 ); // second iceburg
  rect( iceX - 550 , iceY - 90, 50, 50 ); // third iceburg
  //  Return the value
  return result;
  pop();

}


//begin new function penguin ************************************
function penguin( pos_x, pos_y, scale_x, scale_y ){

// Penguin with balloon *****************************************
// scale and position
  translate( pos_x, pos_y );
  scale( scale_x, scale_y );

// penquin body

  push();
  fill('black');
  stroke('black');
  ellipse(300,350, 75, 275);
  pop();

  push();
  fill('white');
  stroke('black');
  ellipse(300, 350, 60, 175);

  pop();

//head*************************************************************

  push();
  strokeWeight(1);
  fill('black');
  stroke('black');
  ellipse(300, 250, 75, 75);
  pop();

  push();
  strokeWeight(1);
  fill('white');
  stroke('black');
  ellipse(300, 260, 63, 63);
  pop();

//nose
  push();
  strokeWeight(1);
  stroke('black');
  fill('rgb(222, 91, 7)');
  triangle(300, 260, 290, 270, 310, 270);
  pop();

//eyes
  push();
  strokeWeight(1);
  stroke('black');
  fill('white');
  ellipse(287,250,15,15);
  pop();

  push();
  strokeWeight(1);
  stroke('black');
  fill('white')
  ellipse(312,250,15,15);
  pop();

  push();
  strokeWeight(1);
  stroke('black');
  fill('blue');
  ellipse(287,250,10,10);
  pop();

  push();
  strokeWeight(1);
  stroke('black');
  fill('blue');
  ellipse(312,250,10,10);
  pop();

  push();
  strokeWeight(1);
  stroke('black');
  fill('black');
  ellipse(312,250,5,5);
  pop();

  push();
  strokeWeight(1);
  stroke('black');
  fill('black');
  ellipse(287,250,5,5);
  pop();

//arm left

  push();
  strokeWeight(25);
  stroke('black');
  line(265,285,265,390);
  pop();

//arm right

  push();
  strokeWeight(25);
  stroke('black');
  line(340,285,340,365);
  strokeWeight(20);
  stroke('black');
  line(342,365,390,330);

  pop();

//feet

  push();
  strokeWeight(15);
  stroke('black');
  fill('rgb(222, 91, 7)');
  ellipse(300, 475, 75, 20);
  pop();
// end body

}

//begin new fuction of balloon *********************************

function balloonRED(pos_x, pos_y, scale_x, scale_y){
// Balloon with string *****************************************
  translate( pos_x, pos_y );
  scale( scale_x, scale_y );
// string

  push();
  strokeWeight(2);
  stroke('black');
  line(400,175,400,330);
  pop();

//balloon

  push();
  fill('red');
  stroke('black');
  strokeWeight(2);
  ellipse(400,160,80);
  pop();


//end balloon


}
