let frogs = [];
let colors = ['rgb(219, 237, 15)','rgb(19, 238, 0)','rgb(17, 41, 20)','rgb(40, 54, 75)','rgb(81, 138, 37)','rgb(79, 64, 67)'];
let insides = ['rgb(37, 70, 34)','rgb(25, 66, 24)','rgb(75, 87, 17)','rgb(5, 162, 89)'];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let b = new Frog(width/2, height/2, 40);
    frogs.push(b);
}
// make it so when the mouse is moved frog face moves
function mouseMoved() {
    let r = random(40, 100);
    let b = new Frog(mouseX, mouseY, r);
    frogs.push(b);
}

function draw() {
    background('rgb(203, 132, 11)');


// make it so an infinate number of frog faces appear


    for (let i = 0; i < frogs.length; i++) {
        frogs[i].move();
        frogs[i].show();
    }
}

// frog face class

class Frog {
    constructor(x, y, r) {

        this.x = x;
        this.y = y;
        this.r = r;
        this.eyeX = x;
        this.eyeY = y;
        this.eyeR = r;
        this.mouthX = x;
        this.mouthY = y;
        this.mouthR = r;
    }

    move() {
// make the frog face bounce mostly up and down
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-50, 50);
// make it so the eyes move with the body
        this.eyeX = this.x;
        this.eyeY = this.y;
// make the mouth move with frog body
        this.mouthX = this.x;
        this.mouthY =  this.y;
    }
  show() {

//frog face

    stroke(random(colors));
    strokeWeight(4);
    fill(random(insides));
    ellipse(this.x, this.y, this.r);

//eyes

push();
    stroke(random(colors));
    strokeWeight(4);
    fill(random(insides));
    ellipse(this.eyeX - 15, this.eyeY - 20, this.eyeR /2);
    ellipse(this.eyeX + 15, this.eyeY - 20, this.eyeR /2);
pop();

// mouth make open

push();
    strokeWeight(2);
    stroke('black');
    fill('black');
    ellipse(this.mouthX, this.mouthY +15, this.mouthR / 4);
pop();

    }
}
