let frogs = [];
let colors = ['rgb(219, 237, 15)','rgb(107, 27, 16)','rgb(113, 87, 112)','rgb(40, 54, 75)','rgb(81, 138, 37)','rgb(79, 64, 67)'];
let insides = ['rgb(106, 122, 133)','rgb(37, 71, 29)'];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let b = new Frog(width/2, height/2, 15);
    frogs.push(b);
}

function mouseDragged() {
    let r = random(5, 75);
    let b = new Frog(mouseX, mouseY, r);
    frogs.push(b);
}

function draw() {
    background('rgb(203, 132, 11)');
    for (let i = 0; i < frogs.length; i++) {
        frogs[i].move();
        frogs[i].show();
    }
}

class Frog {
    constructor(x, y, r) {

        this.x = x;
        this.y = y;
        this.r = r;
        this.eyeX = x;
        this.eyeY = y;
        this.eyeR = r;
    }

    move() {
// make the frog body move
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-10, 10);
// make it so the eyes move with the body
        this.eyeX = this.x + random(-5, 5);
        this.eyeY = this.y + random(-5, 5);
    }
  show() {

//frog body

    stroke(random(colors));
    strokeWeight(4);
    fill(random(insides));
    ellipse(this.x, this.y, this.r);

//eyes
    ellipse(this.eyeX - 15, this.eyeY - 20, this.eyeR /2);
    ellipse(this.eyeX + 15, this.eyeY - 20, this.eyeR /2);

    }
}
