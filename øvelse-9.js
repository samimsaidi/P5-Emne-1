
function setup() {
  createCanvas(500, 200) // Laver canvas som skaber             baggrunden med en størrelse på 500 og 200
  console.log("Funktion setup [JA]"); // Kommentar for at       tjekke for debugs (hvis der er nogen)
  
}

function draw() {
  background(0,230,255);
  textSize(32);
  fill(255);
  text('SAMIMFLOWERS', 150, 110);
  
  noStroke();

  fill(5,208,038);
  rect(94, 50, 13, 120); // rect(x, y, width, height)
  
  fill(255,70,23);
  ellipse(100, 70, 30, 60); // Laver en cirkel (x, y, width, height)
  ellipse(80, 50, 60, 30); // Laver en cirkel (x, y, width, height)
  ellipse(100, 30, 30, 60); // Laver en cirkel (x, y, width, height)
  ellipse(120, 50, 60, 30); // Laver en cirkel (x, y, width, height)
  
  fill(255,232,23);
  circle(100, 50, 30); // Laver en cirkel (x, y, diameter)
}
