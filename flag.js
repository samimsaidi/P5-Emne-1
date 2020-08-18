
function setup() {
  createCanvas(600, 350) // Laver canvas som skaber             baggrunden med en størrelse på 500 og 200
  console.log("Funktion setup [JA]"); // Kommentar for at       tjekke for debugs (hvis der er nogen)
  
}

function draw() {
  let flag = 0;
  if (mouseIsPressed) {
    if(flag === 0) {
    flag++
    japan();
    }
    
    if(flag === 1) {
    flag++
    frankrig();
    }
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
  fill(255,0,0);
  rect(244, 200, 13, 120); // rect(x, y, width, height)
}
