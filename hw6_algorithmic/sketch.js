function setup() {
// create a canvas to draw my portrait on
    createCanvas( 1000, 600 );

}


function draw() {
// set the background color
    background('darkblue');
    var pSize = 40; // orginal eSize
      var x1 = map(mouseX, 0, width, 0, 20);
      var y1 = 200;
      var x2 = sq(x1);
      var x3 = sq(x2);
      var leftU = 5;
      var rightU = 980;
      var xK = constrain(mouseX, leftU, rightU);
      var spaceship_x = width/3;
      var spaceship_y = height/3;

// Draw the edge of universe
  push();
      stroke(100);
      strokeWeight(30);
      line(leftU, 0, leftU, height);
      line(rightU, 0, rightU, height);
  pop();

// planetA
  push();
      fill('darkgreen');
      ellipse(xK, y1, pSize);
  pop();

// planetB
  push();
      fill('purple');
      ellipse(x2, y1 + 350, pSize*2);
  pop();

//planetC
  push();
      fill('orange');
      ellipse(x3 ,xK ,pSize*3);
  pop();

//space ship floating
  push();
  fill('gray');
  triangle(325, 200, 300, 300, 450, 350);
// update pos
  spaceship_x += random( -5, 5 );
  spaceship_y += random( -5, 5 );

  pop();
  }
