let bg1;
let bg2;
let bg3;
let bg4;
let forest;

function preload(){
  bg1 = loadImage("./images/background1.jpg")
  bg2 = loadImage("./images/background2.jpg")
  bg3 = loadImage("./images/background3.jpg")
  bg4 = loadImage("./images/background4.jpg")

}
function setup() {
// set frame rate 4 frames second
  frameRate(4);
      createCanvas( 620,420 );
}


function draw() {
  var fr = frameRate();
  background(random(bg1,bg2,bg3,bg4));

}
