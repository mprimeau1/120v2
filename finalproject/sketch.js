let img;

function preload() {
    img = loadImage('./images/background1.jpg');
}

function setup() {
    createCanvas( 600,400 );
}


function draw() {
  background( img );
}
