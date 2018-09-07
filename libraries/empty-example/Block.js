function Block(x, y, height, color, blocksize){
  this.x = x;
  this.y = y;
  this.height = height;
  this.color = color;
  this.blocksize = blocksize;


  this.draw = function(h){
    push();
    ambientMaterial(color);
    translate(x,y);
    box(blocksize, blocksize, h);
    pop();
  }



  this.setHeight = function(h){
    this.z = h;
  }

  this.getColorX = function() {
    return this.color.v1;
  }
  this.getColorY = function() {
    return this.color.v2;
  }
  this.getColorZ = function() {
    return this.color.v3;
  }
}
