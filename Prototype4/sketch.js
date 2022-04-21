/*function setup() {
  createCanvas(525, 500);
}*/

let letter1, letter2, letter3, letter4, letter5,switchButton, checkButton, hintButton;
let currentLevel = 2;
let enableNextLevel = false;
let checkResult;
let hint;
let hintCount = 2;
let hints = ['This is Hint 1', 'This is Hint 2'];
let tileColors = ['#00008B','#0000E7','#4444FF','#0000E7','#00008B'];

function drawGrid(width, height) {
  var counter = 0;
  
  for (let i = 150; i<width;i+=50) {
    for (let j=30;j<height;j+=50) {
      // shapeColor = color(random(255), random(255), random(255));
        shapeColor = color(String(tileColors[counter%5]));
        fill(shapeColor);
        rect(i, j, 50, 50);
        if(tileOpen[counter] == true)
        {
          textSize(40);
          textAlign(CENTER,CENTER);
          fill('#000000');
          //stroke('#FCE77D');
          strokeWeight(3);
          text(tileLetter[counter],i+25,j+25);
          noStroke();
        }
        counter++;
        j+=10;
      }
      i+=10;
  }
}

function mousePressed(){
    displaySketch();
}

function setup(){
    createCanvas(600, 600);
    checkResult = '';
    enableNextLevel = false;
    getWordLetter();
    setMainPage();
}

function setMainPage() {
  clear();
  let shapeAlpha = 50; // For the opacity of the background
  noStroke();
  for (let i = 0; i < 1000; i++) {
    shapeColor = color(random(255), random(255), random(255), shapeAlpha);
	fill(shapeColor);
    ellipse(random(windowWidth), random(windowHeight), random(100)); 
  }
  drawGrid(400,300); 
  
  if(letter1 == null)letter1 = inputTexts(180,355);
  else letter1.show();
  if(letter2 == null)letter2 = inputTexts(230,355);
  else letter2.show();
  if(letter3 == null)letter3 = inputTexts(280,355);
  else letter3.show();
  if(letter4 == null)letter4 = inputTexts(330,355);
  else letter4.show();
  if(letter5 == null)letter5 = inputTexts(380,355);
  else letter5.show();

  // Start/Stop button code design
  if(switchButton == null)switchButton = inputButtons('Go to Next LEVEL', 200,     450, '200px', '50px');
  else{ 
    console.log("Current level is "+currentLevel);
    switchButton.innerHTML = "Go to LEVEL "+currentLevel;
    switchButton.show();
      }
  
  // Hint button code design
  if(hintButton == null) hintButton = inputButtons('HINT', 60, 350);
  else hintButton.show();
  
  // Check for correctness button code design
  if(checkButton == null) checkButton = inputButtons('CHECK', 450, 350);
  else checkButton.show();
  checkButton.mouseClicked(onSubmit); 
  switchButton.mouseClicked(changeLevel);

  displayHintText();
}

function onHintClicked() {
  hintCount--;
  if (hintCount < 0) {
    checkResult = 'NO HINTS REMAINING!'
  } else {
    checkResult = hints[hintCount];
  }
  displayHintText();
}

function displayHintText(){
  if(hint != null){
    hint.remove();
  }
  fill('#000000');
  hint = createDiv(checkResult);
  hint.style('font-size', '20px');
  hint.style('color', '#ffffff');
  hint.style('background-color','#37126b')
  hint.position(80, 520);
}

function draw() {
  // background(220);
  noLoop(); 
}