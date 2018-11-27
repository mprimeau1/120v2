let bg1;
let bg2;
let bg3;
let bg4;
let forest;

function preload(){
  bg1 = loadImage("./images/background1.jpg")
  bg2 = loadImage("./images/background2.jpg")
  bg3 = loadImage("./images/background3.jpg")
  bg4 = loadImage("./images/background4.jpg")

}
function setup() {
// set frame rate 4 frames second
  frameRate(4);
      createCanvas( 620,420 );
}


function draw() {
  var fr = frameRate();
  background( 'black' );
// change image every frame
  forest.display();
  forest.animation();

}
**********************************************
************** Forest Class ******************
**********************************************
class forest {
  constructor(x,y,size){
    this.bg1 = bg1;
    this.bg2 = bg2;
    this.bg3 = bg3;
    this.bg4 = bg4;
    this.speed = 4;
    this.posx = 10;
    this.posy = 10;
    this.orientation = ;
    this.size = {
      w:600,
      h:400
    };
    this.sprite_num =0;
// top left corner of the sprite
    this.subrect =[

      [600,10]
    ];

  }
  display(){
    push();
    translate(this.pos.x, this.pos.y);

        if (this.orientation === 0) {
            scale(1,1);
        } else if (this.orientation === 1) {
            scale(-1,1);
        }

  image( this.bg1,0,0,this.size.w,
    this.size.h,this.subRect[this.sprite_num][0], this.subRect[this.sprite_num][1], this.size.w, this.size.h)
  );
  pop();
  }
  animate() {
// update the sprite num
// This adjusts the subrectangle positions
    if (frameCount % this.speed === 0) {
        this.sprite_num++;
        this.sprite_num %= 4;
    }
}
