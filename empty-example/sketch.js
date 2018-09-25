function setup() {
    createCanvas( 800, 600 );
    background( 'blue' );
}


//balloon
  function draw() {
  noCursor();
  fill('red');
  ellipse(mousex,mousey,80);
}

//balloon string

    push();
    strokeWeight(2);
    line(400,175,400,330);
    pop();
