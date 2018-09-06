var numberOfRows;
var numberOfColumns;

var xStep;
var yStep;
var cols;
var rows;
var terrain = [];
let scale = 20;
var angle = 0;

function setup(){
  createCanvas(800,800, WEBGL);

  cols = width/scale;
  rows = height/scale;
  for(var i = 0; i < cols; i++){
    terrain[i] = []
  }
  stroke(255);




}



function draw() {
  background(0);
  ambientMaterial(0,0,200);

  //noFill();

  rotateX(PI/3);
  translate(-width/2 +scale,-height/2 + scale);
  orbitControl();
  angle += 0.005;

  var yoff = angle;
  for(var y = 0; y < rows; y++){
    var xoff = angle;
    for(var x = 0; x < cols; x++){
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -60, 60);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  push();
  translate(width/2, height/2, terrain[cols/2][rows/2]+ 20);
  box(20, 20, 40);
  pop();

  for(var y = 0; y < rows; y++){
    beginShape(TRIANGLE_STRIP);
    for(var x = 0; x < cols; x++){
      vertex(x*scale,y*scale, terrain[x][y]);
      vertex(x*scale,(y+1)*scale, terrain[x][y+1]);
    }
    endShape();
  }

}
