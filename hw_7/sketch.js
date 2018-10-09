function setup() {
// create a canvas to draw my portrait on
    createCanvas( 1200, 600 );

}


function draw() {
// set the background color
    background('rgb(0, 0, 0)');
// when mouse is clicked back ground changes dark blue
  if (mouseIsPressed) {
    background('rgb(21, 34, 77)');

} else {

}

  print(mouseIsPressed);

//draw a blue cat //////////////////////

//head
  push();
  fill('rgb(19, 208, 214)');
  ellipse(150, 500, 100, 100);

  pop();
}
