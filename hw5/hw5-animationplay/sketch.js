function setup() {
    createCanvas( 1000, 600 );
    frameRate( 40 );
}

  let loop = 5;

// added variables for floating iceburg
var iceX = 1000;
var iceY = 500;

function draw(){
//background
  background('blue');
  noCursor();

// a lonely floating iceburg floating****************************

  push();

  iceX = iceX - 1;
  iceY = iceY - 0 * 1 ;

  strokeWeight(5);
  stroke( 'white' );
  fill( 'lightblue' );
  rect( iceX, iceY, 75, 75 );

  pop();

// Penguin with balloon *****************************************

// make the balloon follow the mouse

  translate(mouseX, mouseY);

// penquin body

  push();
  fill('black');
  ellipse(300,350, 75, 275);
  pop();

  push();
  fill('white');
  ellipse(300, 350, 60, 175);

  pop();

//head


  push();

  fill('black');
  ellipse(300, 250, 75, 75);
  pop();

  push();

  fill('white');
  ellipse(300, 260, 63, 63);
  pop();

//nose
  push();

  fill('orange');
  triangle(300, 260, 290, 270, 310, 270);

  pop();

//eyes

  push();
  strokeWeight(2);
  ellipse(287,250,15,15);
  pop();

  push();
  strokeWeight(2);
  ellipse(312,250,15,15);
  pop();

  push();
  fill('blue');
  ellipse(287,250,10,10);
  pop();

  push();
  fill('blue');
  ellipse(312,250,10,10);
  pop();

  push();
  fill('black');
  ellipse(312,250,5,5);
  pop();

  push();
  fill('black');
  ellipse(287,250,5,5);
  pop();

//arm left

  push();
  strokeWeight(25);
  line(265,285,265,390);
  pop();

//arm right

  push();
  strokeWeight(25);
  line(340,285,340,365);
  strokeWeight(20);
  line(342,365,390,330);

  pop();

//feet

  push();
  strokeWeight(15);
  fill('orange');
  ellipse(300, 475, 75, 20);
  pop();

  //balloon string

    push();
    strokeWeight(2);
    line(400,175,400,330);
    pop();

  //balloon

    push();
    fill('red');
    ellipse(400,160,80);
    pop();


// End of penguin body


  }
