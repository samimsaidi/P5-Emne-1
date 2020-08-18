function setup() {
  createCanvas(500, 500) // Laver canvas som skaber             baggrunden med en størrelse på 310 og 250
  console.log("Funktion setup [JA]"); // Kommentar for at       tjekke for debugs (hvis der er nogen)
  
}

function draw() {
  background(0,230,255);
  beginShape(); 
  noStroke();
    
  fill(17, 255, 0);
  rect(0, 260, 500, 300); // rect(x, y, width, height)
  
  fill(166,78,0); // Udfyld figuren med brun farve
  vertex(0, 250); 
  vertex(50, 250); 
  vertex(50, 240); 
  vertex(100, 240); 
  vertex(100, 250); 
  vertex(150, 250); 
  vertex(150, 240);
  vertex(200, 240);
  vertex(200, 250);
  vertex(250, 250);
  vertex(250, 240);
  vertex(300, 240);
  vertex(300, 250);
  vertex(350, 250);
  vertex(350, 240);
  vertex(400, 240);
  vertex(400, 250);
  vertex(450, 250);
  vertex(450, 240);
  vertex(500, 240);
  vertex(500, 300);
  vertex(0, 300);
  endShape(CLOSE); 
}
