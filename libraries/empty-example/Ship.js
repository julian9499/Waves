function Ship(x, y, l, color,blocksize){
  this.x = x;
  this.y = y;
  this.l = l;
  this.color = color;
  this.blocksize = blocksize;


  this.draw = function(){
    push();
    ambientMaterial(color);
    translate(x * blocksize + 7,y * blocksize + 7, blocksize/2);
    box(blocksize, blocksize * l, blocksize);
    pop();
  }



  this.setLength = function(l){
    this.length = l;
  }

  this.setLocation = function(x,y){
    this.x = x;
    this.y = y;
  }

  this.getLocation = function(){
    return new p5.Vector(x,y);
  }

}
