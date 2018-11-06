let frogs = [];
let bg_color = [];
let insides = ['rgb(106, 122, 133)','rgb(37, 71, 29)'];
let num_of_frogs = 20;


function setup() {
    createCanvas(windowWidth, windowHeight);
    bg_color = random(bg_color);

    for (let i = 0; i < num_of_dudes; i++) {
        frogs.push( new Frog() );
    }
}


function draw() {
    background('rgb(166, 121, 6)');

    for (var i = 0; i < frogs.length; i++) {
        frogs[i].frame();
    }
}

// frogs  **************************************

class Frog{

constructor() {
  this.size_w = random(20, 80);
  this.size_h = random(20, 80);
  this.loc_x = random(width);
  this.loc_y = random(height);
  this.move_x = random(-2, 2);
  this.move_y = random(-2, 2);
  this.body_color = color(random('rgb(219, 237, 15)'),random('rgb(107, 27, 16)');
  this.size_w = this.size_w;
  this.size_h = this.size_h;
  this.eye_x = this.size_w * 0.165;
  this.eye_y = this.size_h * 0.33 * -1;
  this.eye_size = this.size_w * 0.25;

}

}

frame() {
    this.feetAngle();
    this.display();
    this.move();
}

display() {

        push();

        translate(this.loc_x, this.loc_y);
        fill(this.body_color);

        ellipse(0, 0, this.size_w, this.size_h);

        pop();
}
