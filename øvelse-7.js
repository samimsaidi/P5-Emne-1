function setup() {
  createCanvas(500, 500) // Laver canvas som skaber             baggrunden med en størrelse på 310 og 250
  console.log("Funktion setup [JA]"); // Kommentar for at       tjekke for debugs (hvis der er nogen)
  
}

function draw() {
  background(0,230,255);
  noStroke();

  fill(5,208,038);
  rect(244, 200, 13, 120); // rect(x, y, width, height)
  
  fill(255,70,23);
  ellipse(250, 220, 30, 60); // Laver en cirkel (x, y, width, height)
  ellipse(230, 200, 60, 30); // Laver en cirkel (x, y, width, height)
  ellipse(250, 180, 30, 60); // Laver en cirkel (x, y, width, height)
  ellipse(270, 200, 60, 30); // Laver en cirkel (x, y, width, height)
  
  fill(255,232,23);
  circle(250, 200, 30); // Laver en cirkel (x, y, diameter)
}
