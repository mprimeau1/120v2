

let ball = {};
ball.width = 60;
ball.x = 15;
ball.y = 15;
ball.delta_x = 2;
ball.delta_y = 2;
ball.scale_x = 2;
ball.scale_y = 2;

function setup() {
    createCanvas(windowWidth, 400);
    background('rgb(70, 55, 18)');
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= .3) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= .3) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill('rgb(242, 96, 34)');
    rect(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 2, 15);
    ball.scale_y = map(mouseY, 0, height, 2, 15);

}
