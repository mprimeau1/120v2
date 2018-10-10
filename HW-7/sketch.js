

let ball = {};
rectW = 60;
rectX = 7;
rectY = 7;
rectDX = 2;
rectDY = 8;
rectSX = 2;
rectSY = 8;


function setup() {
    createCanvas(windowWidth, 600);
    background('rgb(70, 55, 18)');
}



function draw() {

    rectX += rectDX * rectSX;
    rectY += rectDY * rectSY;


    if (rectX >= width || rectX <= .3) {
        rectDX = -1 * rectDX;
    }
    if (rectY >= height || rectY <= .3) {
        rectDY = -1 * rectDY;
    }

push();
    fill('red');
    rect(rectX, rectY, rectW, rectW);

}


function mousePressed() {
    rectSX = map(mouseX, 0, width, 1, 3);
    rectSY = map(mouseY, 0, height, 1, 3);


}
