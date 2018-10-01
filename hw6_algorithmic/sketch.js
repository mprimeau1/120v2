function setup() {
// create a canvas to draw my portrait on
    createCanvas( 1000, 600 );

}


function draw() {
// set the background color
    background('darkblue');
      var pSize = 40; // orginal pSize
      var x1 = map(mouseX, 0, width, 0, 20);
      var y1 = 200;
      var x2 = sq(x1);
      var x3 = sq(x2+4);
      var leftU = 5;
      var rightU = 990;
      var starX = 950;
      var starY = 550;
      var xK = constrain(mouseX, leftU, rightU);
//stars
  push();
  fill('white');
  ellipse(starX,starY,5,5);
  ellipse(starX / 2,starY / 2,5,5);
  ellipse(starX / 4,starY / 4,5,5);


  pop();


// Draw the edge of universe
  push();
      stroke('black');
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
      fill('brown');
      ellipse(x3 ,xK ,pSize*3);
  pop();

//scary spaceship
  push();
    for (var i = 500; i < 800; i++) {
    var r = random(-25, 25);
    fill('black');
    ellipse(100, i, 100 + r, i);
  pop();
  }

// Get a random words from the aliens
  push();
  frameRate(30);
  var words = ['cats','hello','egypt','pryamids','oakisland','anasazi'];
  var word = random(words); // select random word
  fill('orange');
  text(word, 200, 500); // draw the word
  pop();


  }
