//var clearBackground = false;
function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  //if (clearBackground) {
  //background(0);
  //clearBackground = false; 
  if (mouseIsPressed) { //mouseIfPressed is a "boolean" variable
    //true or false
    noStroke();
    fill(255);
    //rotate(mouseX*0.5)
    star(mouseX, mouseY, 5, 11.6, 5);
    //translate(width * 0.8, height * 0.5);
    //rotate(frameCount / -100.0);
  }
}
//star function from p5.js reference
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
//function keyTyped() {
//if (key === 'a') {
//clearBackground = true
//}
//}
