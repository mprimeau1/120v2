function setup() {
    createCanvas(windowWidth, 600);
    strokeWeight(2);
}

function draw() {
    background('rgb(10, 9, 51)');


    fill('rgb(2, 29, 3)');

// makes a line of trees on the x value
    let X = 30;
    let V = 58;
    let G = 86;
    let L = 550;
    let K = 500; //center point of triangle
    let F = 515; // center point of triangle2
    let B = 565;
    let A = 575;

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

  let pos_x = 0;
  let pos_y = 0;
  let d = 6;
  let r = d/2;
for (let i = 0; i < 35; i++) {
  pos_x = width * i / 35 + r;
  fill('white');
  ellipse(pos_x, pos_y, d);}
  pos_y++;
if (pos_y > height) {
    pos_y = pos_y + 3;
}




}
