/*function setup() {
  createCanvas(525, 500);
}*/

let letter1, letter2, letter3, letter4, letter5;

function drawGrid(width, height) {
  for (let i = 150; i<width;i+=50) {
    for (let j=30;j<height;j+=50) {
    shapeColor = color(random(255), random(255), random(255));
	fill(shapeColor);
      rect(i, j, 50, 50);
      /*console.log("x1: "+i);
      console.log("y1: "+j);
      console.log("x2: "+(i+50));
      console.log("y2: "+(j+50));
      console.log("Next");
      */
      j+=10;
    }
    i+=10;
  }
}

function mousePressed(){
    displaySketch();
}

function setup(){
    getWordLetter();
    setMainPage();
}

function setMainPage() {
  createCanvas(600, 600);
  let shapeAlpha = 50; // For the opacity of the background
  noStroke();
  for (let i = 0; i < 1000; i++) {
    shapeColor = color(random(255), random(255), random(255), shapeAlpha);
	fill(shapeColor);
    ellipse(random(windowWidth), random(windowHeight), random(100)); 
  }
  drawGrid(400,300);
  
  // drawInputLine();
  
  letter1 = inputTexts(180,355);
  letter2 = inputTexts(230,355);
  letter3 = inputTexts(280,355);
  letter4 = inputTexts(330,355);
  letter5 = inputTexts(380,355);

  // Start/Stop button code design
  switchButton = inputButtons('START/STOP', 200, 450, '200px', '50px');

  // Hint button code design
  hintButton = inputButtons('HINT', 60, 350);
  
  // Check for correctness button code design
  checkButton = inputButtons('CHECK', 450, 350);
  checkButton.mouseClicked(onSubmit);
  
  // Hint text
  textSize(15);
  text('* Hint would be displayed here *', 180,560,400,400);
}

function draw() {
  // background(220);
  noLoop(); 
}