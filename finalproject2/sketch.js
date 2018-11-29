
let images = [];
let imIdx = 0;
//
function preload(){
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
  background(images[imIdx]);

  imIdx++
  imIdx = imIdx % 4;

}
