function setup(){
    createCanvas( windowWidth, 600 );
}

function draw() {
    // set the background to 'white'
    background(255);


    penguin( );
    penguin(  );
    penguin( );
    penguin( );

}


/* SMILEY FACE FUNCTION */
function penguin( pos_x, pos_y, scale_x, scale_y ) {
    push(); // <- Begin sandbox

    // 1. scale and position smiley face
    translate( pos_x, pos_y );
    scale( scale_x, scale_y );

    // 2. draw smiley face

      push();
      fill('black');
      stroke('black');
      ellipse(300,350, 75, 275);
      pop();

      push();
      fill('white');
      stroke('black');
      ellipse(300, 350, 60, 175);

      pop();

    //head


      push();

      fill('black');
      stroke('black');
      ellipse(300, 250, 75, 75);
      pop();

      push();

      fill('white');
      stroke('black');
      ellipse(300, 260, 63, 63);
      pop();

    //nose
      push();
      stroke('black');
      fill('rgb(222, 91, 7)');
      triangle(300, 260, 290, 270, 310, 270);

      pop();

    //eyes

      push();
      strokeWeight(2);
      stroke('black');
      ellipse(287,250,15,15);
      pop();

      push();
      strokeWeight(2);
      stroke('black');
      ellipse(312,250,15,15);
      pop();

      push();
      fill('blue');
      stroke('black');
      ellipse(287,250,10,10);
      pop();

      push();
      fill('blue');
      stroke('black');
      ellipse(312,250,10,10);
      pop();

      push();
      fill('black');
      stroke('black');
      ellipse(312,250,5,5);
      pop();

      push();
      fill('black');
      stroke('black');
      ellipse(287,250,5,5);
      pop();

    //arm left

      push();
      strokeWeight(25);
      stroke('black');
      line(265,285,265,390);
      pop();

    //arm right

      push();
      strokeWeight(25);
      stroke('black');
      line(340,285,340,365);
      strokeWeight(20);
      stroke('black');
      line(342,365,390,330);

      pop();

    //feet

      push();
      strokeWeight(15);
      stroke('black');
      fill('rgb(222, 91, 7)');
      ellipse(300, 475, 75, 20);
      pop();
    // end body

    }
}
