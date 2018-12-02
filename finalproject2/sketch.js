//forestimages
let images = [];
//helps makes the background repeat
let imIdx = 0;
//snow colors
let colors = ['rgb(238, 185, 207)', 'white', 'rgb(179, 181, 227)', 'rgb(164, 218, 219)', 'rgb(232, 201, 201)'];

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
}


function draw() {
  var fr = frameRate();
//make background images of forest
  background(images[imIdx]);

// makes the background image repeat
  imIdx++
//using a module for the background images
  imIdx = imIdx % 4;
//draw the snow
  snow();
//draw the frog
  frog();
}

////////////////////////////////////////////////////////////////////////
////////////////////////snow function///////////////////////////////////
////////////////////////////////////////////////////////////////////////

// begin new function snow
// snow moving with mouse functions
function snow(){
  let density = map(mouseX, 0, width, 15, 100);
  fill(random(colors));
  strokeWeight(.5);
  stroke(random(colors));
// Make a loop of moving snow with mouse
  for (let k = 2; k <= width + 5; k += density) {
    for (let h = 2; h <= height + 5; h +=density) {
// draw snow
  ellipse(k , h ,5 );

    }
  }
}
///////////////////////////////////////////////////////////////////////
//////////////////// End snow falling /////////////////////////////////
///////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////////frog function///////////////////////////////////
////////////////////////////////////////////////////////////////////////

function frog (pos_x,pos_y){
  translate( pos_x, pos_y );
  
//frog body
  push();
  stroke('black');
  strokeWeight(4);
  fill('rgb(19, 66, 17)');
  ellipse(50 ,225, 50, 50);
  pop();


}

////////////////////////////////////////////////////////////////////////
//////////////////// End frog function//////////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////////squirel function////////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
//////////////////// End squirel function///////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////////flowers function////////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
//////////////////// End flowers function///////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////////forest man function/////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
//////////////////// End forest man function////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
////////////////////////bird function///////////////////////////////////
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
//////////////////// End bird function//////////////////////////////////
////////////////////////////////////////////////////////////////////////
