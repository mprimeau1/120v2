function setup(){

//background
    createCanvas( 600,600 );

    background('blue');

// Penguin body

push();

fill('black');
ellipse(300, 350, 75, 275);
pop();

push();
fill('white');
ellipse(300, 350, 60, 175);

//head


push();

fill('black');
ellipse(300, 250, 75, 75);
pop();

push();

fill('white');
ellipse(300, 260, 63, 63);
pop();

//feet

push();
fill('black');
ellipse(300, 475, 75, 40);
pop();



//arms

push();
fill('black');
ellipse(265, 375, 30, 200);
pop();

push();
fill('black');
ellipse(335, 375, 30, 200);
pop();

}
