function setup() {
  createCanvas(500, 500) // Laver canvas som skaber             baggrunden med en størrelse på 310 og 250
  console.log("Funktion setup [JA]"); // Kommentar for at       tjekke for debugs (hvis der er nogen)
  
}

function draw() {
  background(0, 255, 255); // Baggrund
  strokeWeight(2);
  
  beginShape(); 
  fill(202,60,0);
  vertex(200, 150); 
  vertex(100, 150); 
  vertex(150, 50); 
  endShape(CLOSE); 
  
  fill(255,255,0);
  rect(100, 150, 100, 90); // rect(x, y, width, height)
  
  fill(255,0,0);
  rect(150, 200, 30, 40); // rect(x, y, width, height)
  
  fill(255);
  rect(113, 200, 13, 13); // rect(x, y, width, height)
  rect(128, 200, 13, 13); // rect(x, y, width, height)
  rect(113, 215, 13, 13); // rect(x, y, width, height)
  rect(128, 215, 13, 13); // rect(x, y, width, height)
  
  line(150, 220, 157, 220);


  
}
