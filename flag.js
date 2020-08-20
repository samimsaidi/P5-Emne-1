let flag = 0;
function setup() {
  createCanvas(600, 350) // Laver canvas som skaber             baggrunden med en størrelse på 500 og 200
  console.log("Funktion setup [JA]"); // Kommentar for at       tjekke for debugs (hvis der er nogen)
  background(255);
  textSize(32);
  text('Klik et sted for at skifte flag', 110, 180);
}

function draw() {
}


function mousePressed() {
  if (flag === 0) {
    japan();
    console.log("Flag: Japan");
    flag ++
    return false;
  }
  if (flag === 1) {
    frankrig();
    console.log("Flag: Frankrig");
    flag ++
    return false;
  }
  if (flag === 2) {
    indonesien();
    console.log("Flag: Indonesien");
    flag ++
    return false;
  }
  if (flag === 3) {
    benin();
    console.log("Flag: Benin");
    flag ++
    return false;
  }
  if (flag === 4) {
    kuwait();
    console.log("Flag: Kuwait");
    flag ++
    return false;
  }
  if (flag === 5) {
    tjekkiet();
    console.log("Flag: Tjekkiet");
    flag ++
    return false;
  }
  if (flag === 6) {
    maldiverne();
    console.log("Flag: Maldiverne");
    flag ++
    return false;
  }
  if (flag === 7) {
    israel();
    console.log("Flag: Israel");
    flag ++
    return false;
  }
}

function japan() {
  background(255);
  noStroke();
  fill(255,0,0);
  circle(300,175,100);
}

function frankrig() {
  background(255);
  noStroke();
  fill(0,0,255);
  rect(0, 0, 200, 350); // rect(x, y, width, height)
  fill(255,0,0);
  rect(400, 0, 200, 350); // rect(x, y, width, height)
}

function indonesien() {
  background(255);
  noStroke();
  fill(255,0,0);
  rect(0, 0, 600, 175); // rect(x, y, width, height)
}

function benin() {
  background(255);
  noStroke();
  fill(0,135,81);
  rect(0, 0, 200, 350); // rect(x, y, width, height)
  fill(252,209,22);
  rect(200, 0, 400, 175); // rect(x, y, width, height)
  fill(232,17,45);
  rect(200, 175, 400, 175); // rect(x, y, width, height)
}

function kuwait() {
  background(255);
  noStroke();
  fill(0,122,61);
  rect(0, 0, 600, 125); // rect(x, y, width, height)
  fill(206,17,38);
  rect(0, 225, 600, 125); // rect(x, y, width, height)
  beginShape(); 
  fill(0);
  vertex(0, 0);
  vertex(125, 125);
  vertex(125, 225);
  vertex(0, 350);
  endShape(CLOSE); 
}

function tjekkiet() {
  background(255);
  noStroke();
  fill(215, 20, 26);
  rect(0, 175, 600, 175); // rect(x, y, width, height)
  beginShape(); 
  fill(17, 69, 126);
  vertex(0, 0);
  vertex(200, 175);
  vertex(0, 350);
  endShape(CLOSE); 
}

function maldiverne() {
  background(210, 16, 52);
  noStroke();
  fill(0, 126, 58);
  rect(75, 75, 450, 200); // rect(x, y, width, height) 
  fill(255)
  ellipse(325, 175, 150, 150);
  fill(0, 126, 58)
  ellipse(350, 175, 150, 150);
}

function israel() {
  background(1, 56, 183);
  noStroke();
  fill(255);
  rect(0, 50, 600, 250); // rect(x, y, width, height) 
}
