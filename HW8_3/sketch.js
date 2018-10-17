let option = 3;
function setup() {
  createCanvas(windowWidth, 600);
  frameRate(20); //20 frames per second
}

function draw() {
  background('white');
  let density = map(mouseX, 0, width, 20, 60);

  if (option == 1) {
// Option 1: moving purple diamonds changing with mouse
    background('rgb(40, 17, 56)');

// Make a loop for interacting lines
    for (let x = 10; x <= width-10; x += density) {
      for (let y = 10; y <= height-10; y+=density) {
// Draw four lines
        line(x-25, y-25, x+25, y+25);
        line(x+25, y-25, x-25, y+25);
        line(x+30, y-30, x-30, y+30);
        line(x-20, y-20, x+20, y+20);
// draw trees on the bottom

      }
    }

  }
  else if (option == 2) {
// Option 2: alien retractor beams
    background('rgb(30, 31, 42)');
// Make a loop for the lines
    for (let x = 350; x <= width-10; x += density) {
      for (let y = 350; y <= height-10; y+=density) {
//draw retractor beams
      line(x, y, width/7, height/7);
      line(x + 50, y + 50, width/2, height/2);
// draw alien ships
      fill('gray');
      ellipse(250,100,200,75);
      ellipse(700,300,200,75);

      }
    }
  }
  else if (option == 3) {
// Option 3: blinking flashing orbs
    background('black');
// Change the orbs to change to a few random colors
    fill( random(20), random(100), random(186), random(135) );
// Make a loop
    for (let x = 20; x <= width-10; x += density) {
      for (let y = 20; y <= height-10; y+=density) {
// draw orbs
    ellipse(x , y ,20 ,10 );
    ellipse(x, y,15);
    ellipse(x , y ,10 ,30 );


      }
    }
  }
}
// Make it so when mouse is pressed there is three different interactions options

function mousePressed() {
  option++;
  if (option > 3) option = 1;
}
