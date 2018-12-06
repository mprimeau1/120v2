
let snow = [];
const numOfsnow = 300;

function setup() {
// createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);

// create a new snow object of class type "snowFlake"
    let init_x = 20;
    let init_y = 60;
    for (let i = 0; i < numOfsnow; i++) {
        snow.push(new snowFlake(init_x, init_y));
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

    for (let i = 0; i < snow.length; i++) {
// call  methods for snowFlake
        snow[i].snowCheck(snow, i);
        snow[i].edgeHit();
        snow[i].move();
        snow[i].display();
    }
}

//*****************************************************************************
//***     snowFlake CLASS      *****************************************************
//*****************************************************************************
class snowFlake {
    constructor(x, y, w, h) {
        this.color = 'white';
        this.sizeA = random(0, 15);
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
// set the position and size of snowFlake
        translate(this.posX, this.posY);
        ellipse(0, 0, this.sizeA);
        pop();
    }

    move() {
// move the snowFlake in a random way on the x an y axis
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeHit() {
// if snow hits a vertical wall then change the color to light blue
        if (this.posX + this.radA >= width || this.posX - this.radA <= 0) {
            this.deltaX *= -1;
            this.color = 'rgba(49, 218, 223, 0.53)';
        }
// if the snow hits a hortizal wall then change the color to light pink
        if (this.posY + this.radB >= height || this.posY - this.radB <= 0) {
            this.deltaY *= -1;
            this.color = 'rgba(242, 136, 126, 0.69)';
        }
    }


    snowCheck(otherSnow, JX) {
// for loop touches the snow
      for (let n = 0; n < otherSnow.length; n++) {
// if n != JX, then check for touching
        if (n != JX) {
        let d = dist(this.posX, this.posY, otherSnow[n].posX, otherSnow[n].posY);
        let combinedR = this.radA + otherSnow[n].radA;

        if (d <= combinedR) {
        this.deltaX *= -1;
        this.deltaY *= -1;

// flip the color
        if( this.color == 'rgba(242, 136, 126, 0.69)') {
            this.color = 'white';
      } else {
            this.color = 'rgba(242, 136, 126, 0.69)';
                    }
                }
            }
        }
    }
}
