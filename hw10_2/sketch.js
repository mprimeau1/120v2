function setup() {
  createCanvas(windowWidth, 600);
  frameRate(20); //20 frames per second
}

function draw() {
  background('black');
  let density = map(mouseX, 0, width, 20, 60);
  fill('red'); 
  // Make a loop of moving snow with mouse
  for (let k = 20; k <= width-10; k += density) {
    for (let h = 20; h <= height-10; h+=density) {
  // draw orbs
  ellipse(k , h ,5 );

    }
  }

  }
