var canvas;

function windowResized() {
  //add min-width; same as mobile's min-width
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style('z-index', '-1')
}

function draw() {
  background('#FCFBFB');
}
