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
// makes a second line of trees up from the y value
    var L = 550;
    var K = 500; //center point of triangle
    var F = 515; // center point of triangle2
    var B = 565;

while ( X <= width){
    triangle(X, L, V, K, G, L);
    triangle(X, B, V, F, G, B);
    line(V ,B ,V ,575 );

    X = X + 75;
    V = V + 75;
    G = G + 75;
}

}
