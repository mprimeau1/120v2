// The Buzzing Rectangles
// Week 12



let buzz = [];
const numOfbuzzRect = 100;

function setup() {
// createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);

// create a new BuzzingRect object of class type "BuzzRect"
    let init_x = 20;
    let init_y = 60;
    for (let i = 0; i < numOfbuzzRect; i++) {
        buzz.push(new buzzRect(init_x, init_y));
// move the starting postion
        init_x += 200;
        if (init_x > width) {
            init_x = 30;
            init_y += 50;
        }
    }
}

function draw() {
    background('black');

    for (let i = 0; i < buzz.length; i++) {
// call  methods for BuzzRect
        buzz[i].buzzCheck(buzz, i);
        buzz[i].edgeHit();
        buzz[i].move();
        buzz[i].display();
    }
}

//*****************************************************************************
//***     BuzzRect CLASS      *****************************************************
//*****************************************************************************
class buzzRect {
    constructor(x, y, w, h) {
        this.color = 'rgb(102, 3, 180)';
        this.sizeA = random(0, 15);
        this.sizeB = random(5 ,25);
        this.radA = this.sizeA / 4;
        this.radB = this.sizeB / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-5, 5);
        this.deltaY = random(-5, 5);
    }

    display() {

        push();
// remove the stroke
        noStroke();
// set the fill color
        fill(this.color);
// set the position and size of BuzzRect
        translate(this.posX, this.posY);
        rect(0, 0, this.sizeA, this.sizeB);
        pop();
    }

    move() {
// move the BuzzRect in a random way on the x an y axis
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeHit() {
// if BuzzRect hits a vertical wall then change the color to light blue
        if (this.posX + this.radA >= width || this.posX - this.radA <= 0) {
            this.deltaX *= -1;
            this.color = 'rgb(140, 236, 230)';
        }
// if the BuzzRect hits a hortizal wall then change the color to light yellow
        if (this.posY + this.radB >= height || this.posY - this.radB <= 0) {
            this.deltaY *= -1;
            this.color = 'rgb(231, 221, 93)';
        }
    }


    buzzCheck(otherBuzz, JX) {
// for loop touches the BuzzRect
      for (let n = 0; n < otherBuzz.length; n++) {
// if n != JX, then check for touching
        if (n != JX) {
        let d = dist(this.posX, this.posY, otherBuzz[n].posX, otherBuzz[n].posY);
        let combinedR = this.radA + otherBuzz[n].radA;

        if (d <= combinedR) {
        this.deltaX *= -1;
        this.deltaY *= -1;

// flip the color
        if( this.color == 'rgb(231, 221, 93)') {
            this.color = 'rgb(156, 122, 230)';
      } else {
            this.color = 'rgb(231, 221, 93)';
                    }
                }
            }
        }
    }
}
