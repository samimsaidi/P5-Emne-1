function setup() {
  createCanvas(500, 500) // Laver canvas som skaber baggrunden med en størrelse på 310 og 250
  console.log("Funktion setup [JA]"); // Kommentar for at tjekke for debugs (hvis der er nogen)
  
}

function draw() {
  background(255); // Baggrund 
   point(150, 150); // point(x, y)
   line(150, 20, 50, 150); // line(x1, y1, x2, y2)
   rect(10, 20, 40, 30); // rect(x, y, width, height)
   ellipse(70, 70, 40, 40); // ellipse(x, y, width, height)
  console.log("Funktion Draw [JA]"); // Kommentar for at tjekke for debugs (hvis der er nogen)
  
}
