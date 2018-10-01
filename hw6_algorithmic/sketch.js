function setup() {
// create a canvas to draw my portrait on
    createCanvas( 1000, 600 );
}

function draw() {
// set the background color
    background('darkblue');
    var eSize = 60;
      var x1 = map(mouseX, 0, width, 0, 25);
      var y1 = 200;
      var x2 = sq(x1);
      var y2 = 400;
      var x3 = sq(x2);
      var y3 = 550;

// planetA
  push();
      fill('darkgreen');
      ellipse(x1, y1, eSize, eSize);
  pop();

// planetB
  push();
      fill('purple');
      ellipse(x2, y2, eSize, eSize);
  pop();

//planetC
  push();
      fill('orange');
      ellipse(x3 ,y3 ,eSize , eSize);
  pop();
  }
