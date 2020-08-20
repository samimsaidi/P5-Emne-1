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
}

function japan() {
  background(255)
  noStroke();
  fill(255,0,0);
  circle(300,175,100);
}

function frankrig() {
  background(255)
  noStroke();
  fill(0,0,255);
  rect(0, 0, 200, 350); // rect(x, y, width, height)
  fill(255,0,0);
  rect(400, 0, 200, 350); // rect(x, y, width, height)
}

function indonesien() {
  background(255)
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
  
}
