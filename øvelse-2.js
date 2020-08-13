function setup() {
  createCanvas(500, 500) // Laver canvas som skaber             baggrunden med en størrelse på 310 og 250
  console.log("Funktion setup [JA]"); // Kommentar for at       tjekke for debugs (hvis der er nogen)
  
}

function draw() {
  background(0, 0, 255); // Baggrund 
  stroke(255); // Gør "X"et hvidt farve
  line(0,0,500,500); // line(x1, y1, x2, y2)
  line(0,500,500,0);  // line(x1, y1, x2, y2)

  
}
