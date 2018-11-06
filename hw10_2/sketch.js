function setup(){
    createCanvas( windowWidth, 600 );
}

function draw() {
    // set the background to 'white'
    background(255);
push();
//body
    fill('red');
    ellipse(100,100,50);
//eyes
    ellipse(85,75,25);
    ellipse(115,75,25);

pop();

}
