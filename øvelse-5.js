function setup() {
  createCanvas(500, 500) // Laver canvas som skaber             baggrunden med en størrelse på 310 og 250
  console.log("Funktion setup [JA]"); // Kommentar for at       tjekke for debugs (hvis der er nogen)
  
}

function draw() {
  background(0, 255, 255); // Baggrund
  strokeWeight(2); 
  
  beginShape(); 
  fill(255,102,0); // Udfyld figuren med brun farve
  vertex(180, 155); 
  vertex(180, 220); 
  vertex(80, 220); 
  endShape(CLOSE); 
  
  beginShape(); 
  fill(255,102,0); // Udfyld figuren med brun farve
  vertex(180, 155); 
  vertex(180, 220); 
  vertex(280, 220); 
  vertex(280, 175);
  endShape(CLOSE); 
  
  beginShape(); 
  fill(255,102,0);
  vertex(280, 220); 
  vertex(280, 175);
  vertex(360, 220);
  endShape(CLOSE); 
  
  fill(255);
  ellipse(140, 195, 15, 15); // Laver en cirkel (x, y, width, height)
  
   
  fill(0);
  ellipse(136, 195, 3, 3); // Laver en cirkel (x, y, width, height)
  
  beginShape(); 
  fill(255,102,0); // Udfyld figuren med brun farve
  vertex(180, 260); 
  vertex(180, 220);
  vertex(190, 220);
  vertex(190, 260);
  vertex(185, 250);
  endShape(CLOSE); 

  beginShape(); 
  fill(255,102,0); // Udfyld figuren med brun farve
  vertex(260, 260); 
  vertex(260, 220);
  vertex(270, 220);
  vertex(270, 260);
  vertex(265, 250);
  endShape(CLOSE); 

  fill(255,0,0); // Udfyld munden med rød farve
  line(95, 210, 115, 210); // Linje som er munden
  
}
