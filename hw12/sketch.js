// Bouncing Balls
// Week 12



let balls = [];
const numOfBalls = 50;

function setup() {
// createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);

// create a new ball object of class type "Ball"
    let init_x = 20;
    let init_y = 60;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));
// move the starting postion
        init_x += 50;
        if (init_x > width) {
            init_x = 30;
            init_y += 50;
        }
    }
}

function draw() {
    background('black');

    for (let i = 0; i < balls.length; i++) {
// call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
    }
}

//*****************************************************************************
//***     BALL CLASS      *****************************************************
//*****************************************************************************
class Ball {
    constructor(x, y, w, h) {
        this.color = 'rgb(102, 3, 180)';
        this.sizeA = random(25, 50);
        this.sizeB = random(10 ,100);
        this.radA = this.sizeA / 4;
        this.radB = this.sizeB / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-10, 10);
        this.deltaY = random(-10, 10);
    }

    display() {
        push();

// remove the balls outer stroke
        noStroke();
// set the balls fill color
        fill(this.color);
// set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.sizeA, this.sizeB);
        pop();

    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
// if the ball hits a vertical wall then change the color to green
        if (this.posX + this.radA >= width || this.posX - this.radA <= 1) {
            this.deltaX *= -1;
            this.color = 'rgb(34, 62, 24)';
        }
// if the ball hits a hortizal wall then change the color to mustard yellow
        if (this.posY + this.radB >= height || this.posY - this.radB <= 1) {
            this.deltaY *= -1;
            this.color = 'rgb(94, 98, 13)';
        }
    }


    ballCheck(otherBalls, JX) {
// for loop touches each of the balls in the array
      for (let n = 0; n < otherBalls.length; n++) {
// if n != JX, then check for touching
        if (n != JX) {
        let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
        let combinedR = this.radA + otherBalls[n].radA;

        if (d <= combinedR) {
        this.deltaX *= -1;
        this.deltaY *= -1;

// flip the color
        if( this.color == 'rgb(45, 82, 81)') {
            this.color = 'rgb(57, 38, 40)';
      } else {
            this.color = 'rgb(45, 82, 81)';
                    }
                }
            }
        }
    }
}
