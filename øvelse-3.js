function setup() {
  createCanvas(310, 250) // Laver canvas som skaber baggrunden med en størrelse på 310 og 250
  console.log("Funktion setup [JA]"); // Kommentar for at tjekke for debugs (hvis der er nogen)
  
}

function draw() {
  background(255); // Baggrund 
  
  // Indstillinger for alle cirkler neden under
  strokeWeight(3); // Gør cirklens stroke større (det rundt om)
  noFill(); // Der ikke nogen farve inde I cirklen
  
  // BLÅ CIRKEL
  stroke(68,118,255); // Vælger storkens farve
  ellipse(100, 100, 40, 40); // Laver en cirkel (x, y, width, height)

  // GUL CIRKEL
  stroke(255,243,68); // Vælger storkens farve
  ellipse(125, 120, 40, 40); // Laver en cirkel (x, y, width, height)

  // SORT CIRKEL
  stroke(0); // Vælger storkens farve
  ellipse(150, 100, 40, 40); // Laver en cirkel (x, y, width, height)
  
  // GRØN CIRKEL
  stroke(0,165,70); // Vælger storkens farve
  ellipse(175, 120, 40, 40); // Laver en cirkel (x, y, width, height)
  
  // RØD CIRKEL
  stroke(255,0,0); // Vælger storkens farve
  ellipse(200, 100, 40, 40); // Laver en cirkel (x, y, width, height)
  
  console.log("Funktion Draw [JA]"); // Kommentar for at tjekke for debugs (hvis der er nogen)
  
}
