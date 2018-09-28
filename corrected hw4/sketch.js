function setup() {
// create a canvas to draw my portrait on
    createCanvas( 600, 600 );
}

function draw() {
// set the background color
    background('green');

    // *****************************************************
    // create a sandbox for the entire character



    // ** ARMS **********************************
    //left arm

        push();
        stroke('tan');
        strokeWeight(20);
        line(290,230,200,190);
        pop();

    //right arm
        push();
        stroke('tan');
        strokeWeight(20);
        line(400,190,310,230);
        pop();
    // **END ARMS**

    /* ***************************** */
    /* LEGS */
    /* ***************************** */

    //right leg
      push();
        stroke('tan');
        strokeWeight(20);
        line(330,390,330,450);
        pop();

    //left leg
        push();
        stroke('tan');
        strokeWeight(20);
        line(280,390,280,450);
        pop();


    // ** BODY **********************************
    // body is a purple triangle with a black border
        push();
        stroke('black');
        strokeWeight(5);
        fill('purple');
        triangle(300, 190, 250, 390, 360, 390);
        pop();

    // polka dots for dress

        push();
        fill('black');
        ellipse(280, 320, 15, 15);
        ellipse(276, 350, 15, 15);
        ellipse(300, 365, 15, 15);
        ellipse(305, 280, 15, 15);
        ellipse(315, 310, 15, 15);
        ellipse(330, 300, 15, 15);
        ellipse(335, 340, 15, 15);
        ellipse(300, 255, 15, 15);
        pop();
    // **END BODY**
    // ** HEAD **********************************
        push();
        fill('tan');
        ellipse(300, 150, 75, 75);
        pop();

    //Hair

        push();
        stroke('brown');
        strokeWeight(15);
        line(255,115,255,250);
        line(338,115,338,250);
        line(257,115,257,250);
        line(336,115,336,250);
        line(265,115,265,250);
        line(330,115,330,250);
        pop();

    //HAT
        push();
        fill('black');
        stroke('black');
        ellipse(300, 110, 100, 15);
        ellipse(300,100,35,35);
        pop();
        // **MOUTH**
            push();
            fill('red');
            arc(300, 170, 12, 12, 0, PI + QUARTER_PI, PIE);
            pop();
        // **END MOUTH**

      // **EYES**

            push();
            ellipse(285, 130, 15, 15);
            ellipse(310, 130, 15, 15);
            fill('brown');
            ellipse(285, 130, 10, 10);
            ellipse(310, 130, 10, 10);
            fill('black');
            ellipse(285, 130, 5, 5);
            ellipse(310, 130, 5, 5);

            pop();
}
