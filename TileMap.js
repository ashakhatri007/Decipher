/*function setup() {
  createCanvas(525, 500);
}*/

function drawGrid(width, height) {
    for (let i = 150; i<width;i+=50) {
      for (let j=30;j<height;j+=50) {
        rect(i, j, 50, 50);
        j+=10;
      }
      i+=10;
    }
  }
  
  function setLineDash(list) {
    drawingContext.setLineDash(list);
  }
  
  function drawInputLine () {
    // Input string textbox design
    setLineDash([20,20]); 
    strokeWeight(2);
    line(200,400,400,400);
    textSize(12);
    text('(Input letters go here)', 230,410,400);
    setLineDash([]);
    strokeWeight(1);
  }
  
  function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(220);
    
    drawGrid(400,300);
    drawInputLine();
    
    // Start/Stop button code design
    rect(200, 450, 200, 40);
    textSize(22);
    text('START/STOP', 230, 460, 200, 40);
    
    // Exit button code design
    rect(250, 500, 100, 40);
    textSize(22);
    text('EXIT', 275, 510, 100, 40);
    
    // Hint button code design
    rect(60, 350, 100, 40);
    textSize(20);
    text('HINT', 85, 355, 100, 40);
    textSize(10);
    text('(2 remaining)', 75, 375, 100, 40);
    
    // Check for correctness button code design
    rect(450, 350, 100, 40);
    textSize(20);
    text('CHECK', 465, 360, 100, 40);
    
    // Hint text
    textSize(15);
    text('* Hint would be displayed here *', 180,560,400,400);
  }