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










function clean(){
  for(let x = 0; x < width/dikte; x++){
    cellnext[x] = [];
    for(let y = 0; y < width/dikte; y++){
      cellnext[x][y] = false;
    }
  }
  for(let x = 0; x < width/dikte; x++){
    cell[x] = [];
    for(let y = 0; y < width/dikte; y++){
      cell[x][y] = false;
    }
  }
}

function sw(){
  if(pause) {
    pause = false;
  } else {
    pause = true;
  }
}

function rand(){
  for(let x = 0; x < width/dikte; x++){
    for(let y = 0; y < width/dikte; y++){
      if(random(0.0,1.0) > 0.5){
        cell[x][y] = true;
      } else {
        cell[x][y] = false;
      }
      }
    }
}

function checkneighbours(x, y){
  let ans = 0;
  if(x != width/dikte - 1 && cell[x+1][y]){
    ans++;
  }
  if(y != width/dikte - 1 && cell[x][y+1]){
    ans++;
  }
  if(y != width/dikte - 1 && x != width/dikte - 1 && cell[x+1][y+1]){
    ans++;
  }
  if(x != 0 && cell[x-1][y]){
    ans++;
  }
  if(y != 0 && cell[x][y-1]){
    ans++;
  }
  if(y != 0 && x != 0 && cell[x-1][y-1]){
    ans++;
  }
  if(y != 0 && x != width/dikte - 1 && cell[x+1][y-1]){
    ans++;
  }
  if(x != 0 && y != width/dikte - 1 && cell[x-1][y+1]){
    ans++;
  }
  return ans

  ;
}

function gameoflife(alive, x, y){
  if(cell[x][y]){
    if( alive > 1 && alive < 4){
      return true;
    }else{
      return false;
    }
  } else{
    if(alive == 3){
      return true;
    } else {
      return false;
    }
  }
}

function branch(len){
  if(len > 4){
    line(0,0,0,-len)
    translate(0, -len)
    push();
    rotate(PI/4);
    branch(len* 0.67);
    pop();
    push();
    rotate(-PI/4);
    branch(len* 0.67);
    pop();
  }
}
