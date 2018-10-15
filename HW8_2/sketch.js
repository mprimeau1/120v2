function setup() {
    createCanvas(windowWidth, 600);
    strokeWeight(2);
}

function draw() {
    background('rgb(10, 9, 51)');


    fill('rgb(2, 29, 3)');

// makes a line of trees on the x value
    var X = 30;
    var V = 58;
    var G = 86;
    var L = 550;
    var K = 500; //center point of triangle
    var F = 515; // center point of triangle2
    var B = 565;
    var A = 575;

while ( X <= width){

    triangle(X, L, V, K, G, L);
    triangle(X, B, V, F, G, B);
    line(V ,B ,V ,A );

// move the tree so dupicates across the bottome of the screen

    X = X + 75;
    V = V + 75;
    G = G + 75;
}
// add falling snow
  push();
  let pos_x = 0;
  let pos_y = 0;
  let d = 6;
  let r = d/2;
for (let i = 0; i < 35; i++) {
  pos_x = width * i / 35 + r;
  fill('white');
  ellipse(pos_x, pos_y, d);}
  pop();



}
