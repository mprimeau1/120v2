/**
 * @Author: Michael Musick <michaelmusick>
 * @Date:   10-20-2017
 * @Email:  michael.musick@umontana.edu
 * @Last modified date: 10-20-2017
 */


function setup() {
    createCanvas(windowWidth, 600);
}


// using 'let' instead of 'var'
let pos_x = 0;
let pos_y = 0;
let d = 5;
let r = d / 2;
let X = 30;
let V = 58;
let G = 86;
let L = 550;
let K = 500; //center point of triangle
let F = 515; // center point of triangle2
let B = 565;
let A = 575;

function draw() {
    background('rgb(10, 9, 51)');

// draw a green tree at bottom on screen

    fill('rgb(2, 29, 3)');
    triangle(X, L, V, K, G, L);
    triangle(X, B, V, F, G, B);
    line(V ,B ,V ,A );

// snow falling ***********************************

    fill('white');

// USE A LOOP ****************************

    for (var i = 0; i < 35; i++) {

// find the x_pos

    pos_x = width * i / 35 + r;

// draw the snow flakes

    ellipse(pos_x, pos_y, d);
    }

    pos_y++;
    if (pos_y > height) {
        pos_y = 0;
    }

}
