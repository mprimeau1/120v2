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

fill('black');
ellipse(300, 250, 75, 75);
pop();

push();
fill('black');
ellipse(265, 375, 30, 200);
pop();

push();
fill('black');
ellipse(335, 375, 30, 200);
pop();
}
