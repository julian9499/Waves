var slider, lenslider, angle, lendecrease, slider2 ,width;
var posx = 0, posy = 0;
function setup() {
  createCanvas(600, 600, WEBGL);
  ambientLight(255);
  directionalLight(20, 250, 20, -20, 20, 0.25);
  noStroke();
  angle = 0;
  slider = createSlider(20, 300, 100, 1);
  slider2 = createSlider(20, 300, 100, 1);

  width = 50;

  sliderx = createSlider(-width, width, 0, 1);
  slidery = createSlider(-width, width, 0, 1);
}

function draw() {
  background(51);

  rotateX(-PI/8);
  translate(0, 500 , -1000);
  //normalMaterial();
  ambientMaterial(0,70,200);
  push();
  //rotateY(frameCount * 0.01);
  let offset = 0;
  for(let y = -width/2; y < width/2; y++){
    for(let x = -width/2; x < width/2; x++){
      //let cord = map((abs(x)+abs(y), 0, 10, 1, 11);
      let a = angle;
      let d = dist(x,y,0,0);
      let b = dist(x,y,sliderx.value(),slidery.value());
      //let h = map(sin((abs(x)+abs(y)+1)*angle), -1, 1, 20, 80);
      let h = map(sin(d + a), -1, 1, 20, slider.value());
      let h2 = map(sin(b + a), -1, 1, 20, slider2.value());
      push();
      translate(x*width, 0, y*width)
      box(width, (h+h2)/2, width);
      pop();
    }
  }
  angle -= 0.1;

  pop();

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

function keyPressed() {
}
