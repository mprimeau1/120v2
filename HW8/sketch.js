function setup() {
    createCanvas(windowWidth, 600);
    strokeWeight(2);
}

function draw() {
    background('rgb(10, 9, 51)');


    fill('rgb(2, 29, 3)');

    var X = 30;
    var V = 58;
    var G = 86;

while ( X <= width){
    triangle(X, 550, V, 500, G, 550);
    triangle(X, 565, V, 515, G, 565);
    line(V ,565 ,V ,575 );

    X = X + 75;
    V = V + 75;
    G = G + 75;
}

}
