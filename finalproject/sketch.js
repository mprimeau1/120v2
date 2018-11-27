let img;

function preload(){
  img = loadImage("./images/background1.jpg")
}
function setup() {
      createCanvas( 610,410 );
}


function draw() {
  background( 'black' );
  image(img,10,10);
}
