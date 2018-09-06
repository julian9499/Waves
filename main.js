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
  noStroke();
  ambientLight(200);
  directionalLight(255,255,255,140,1,5,-7)
  //stroke(0);




}



function draw() {
  background(200);
  //ambientMaterial(0,0,200);

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
  ambientMaterial(180, 50, 0);
  translate(width/2, height/2, terrain[cols/2][rows/2]+ 20);
  box(20, 20, 40);
  pop();

push();
  for(var y = 0; y < rows; y++){
    for(var x = 0; x < cols-1; x++){
      specularMaterial(0,100, 150);
      //ambientMaterial(0,100, 150);
      beginShape(TRIANGLES);
      vertex(x*scale,y*scale, terrain[x][y]);
      vertex(x*scale,(y+1)*scale, terrain[x][y+1]);
      vertex((x+1)*scale,y*scale, terrain[x+1][y]);

      vertex((x+1)*scale,(y+1)*scale, terrain[x+1][y+1]);
      vertex(x*scale,(y+1)*scale, terrain[x][y+1]);
      vertex((x+1)*scale,y*scale, terrain[x+1][y]);
      endShape();
    }
  }
pop();
}
