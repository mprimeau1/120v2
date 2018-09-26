// left arm
push();
// move the center to facilitate rotate
translate( -10, -20 );
// rotate, based on mouseX position
rotate( radians( mouseX) );
// draw arm and hand
line( 0, 0, 150, 0);
fill( 'rgb(255, 176, 59)' );
noStroke();
ellipse( 150, 0, 20 );
pop();
