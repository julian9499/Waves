

var angle = 0;
var slider;
var ships = [];
var polys = [];
function setup() {
    createCanvas(800, 800, WEBGL);
    stroke(0);
    slider = createSlider(-8, 8, -1, 1);
    ships[0] = new Ship(4, 5, 3, 120,30);
    rectMode(CORNER);


}

function draw() {
  angle += 0.1;
  rotateX(PI/5);
  rotateZ(PI/4);
  translate(-100,-100, -10);
  push();
  ships[1] = new Ship(2, slider.value(), 3 , 71, 30);
  ships[2] = new Ship(slider.value(), slider.value(), 5 , 200, 30);
  background(231);
// Draw the grid
  //ambientMaterial(255);
  //for(var x = -width/2; x < width/2; x += 30){
  //  for(var y = -height/2; y < height/2 ; y += 30){
  //    push();
  //    translate(x,y);
  //    noFill();
      //box(30,30,0);
  //    pop();
  //  }
  //}
  //Draw the sea

  strokeWeight(1);
let size = 40;
  for(var x = -width/2; x < width/2; x += size){
    for(var y = -height/2; y < height/2 ; y += size){
      ambientMaterial(0,90,180);
      beginShape();
      vertex(x,y,sin(x+y+angle)*10);
      vertex(x+size,y, sin(x+angle)*10);
      vertex(x+size,y+size, sin(y+angle)*10);
      vertex(x,y + size, sin(x-y+angle)*10);
      endShape(CLOSE);
      //vertex(x,y);
      //vertex(x-30,y);
      //vertex(x-30,y-30);
    }
  }



  // Draw border
  push();
  rotateX(PI/2);
  //box(0,600,100);
  pop();

  translate(13,13,-1);

  //draw ships
  for(var s = 0; s < ships.length; s++){
    ships[s].draw();
  }
  pop();

}



/*
var blocks = [];
var angle = 0;

let blocksize = 20;
var slider;
function setup() {
  createCanvas(600,600,WEBGL);
  rectMode(CENTER);
  noStroke();
  for(var i = 0; i < width; i+= blocksize){
    blocks[i] = [];
    for(var j = 0; j < height; j+= blocksize){
      var x = map(i,0,width-1,-width/2,width/2);
      var y = map(j,0,height-1,-height/2,height/2);
      var r = map(j, 0, height-1, 0, 255);
      var b = map(i, 0, height-1, 0, 255);
      var g = map(i+j, 0, 2*(height-1), 255, 0);
      blocks[i][j] = new Block(x, y, 1,color(r, b ,g), blocksize);
    }
  }

  slider = createSlider(0, 1000, 400, 1);
}

function draw(){
  background(210);
  translate(0, 100, -200);
  rotateX(PI/3);
  //rotateY(-PI/3);
  //rotateZ(PI/3);

  for(var x = 0; x < width; x+= blocksize){
    for(var y = 0; y < height; y+= blocksize){
      let d = dist(0, 0, blocks[x][y].x, blocks[x][y].y)
      let offset = map(d, 0, slider.value(), -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 20, 300));
      blocks[x][y].draw(h);
    }
  }
  angle += 0.1;
}

function swap(one, two){
  var temp = []
  for(i = 0; i < one.length; i++){
    temp[i] = one[i];
    one[i] = two[i];
    two[i] = temp[i];
  }
}
*/
