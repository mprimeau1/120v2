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

//arms

push();
fill('black');
ellipse(262, 375, 30, 200);
pop();

push();
fill('black');
ellipse(338, 375, 30, 200);
pop();

//feet

push();
strokeWeight(15);
fill('orange');
ellipse(300, 475, 75, 40);
pop();



}
