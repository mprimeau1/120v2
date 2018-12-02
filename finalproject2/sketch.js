
let images = [];
let imIdx = 0;
//snow colors
let colors = ['rgb(236, 116, 230)', 'rgb(115, 235, 235)', 'rgb(255, 156, 149)', 'rgb(255, 255, 255)', 'rgb(195, 255, 219)'];

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
//make background images of forest
  background(images[imIdx]);

// makes the background image repeat
  imIdx++
  imIdx = imIdx % 4;

//snow function

  snow();
}
// begin new function snow
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
