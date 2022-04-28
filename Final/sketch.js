let letter1, letter2, letter3, letter4, letter5,switchButton, checkButton, hintButton, startButton;
let currentLevel = 1;
let enableNextLevel = false;
let checkResult;
let hint;
let hintCount = 1;
let hints = ['This is Hint 1', 'This is Hint 2'];
let tileColors = ['#001523','#002137','#002945','#003356','#00406C'];
//let tileColors = ['#023047','#126782','#219EbC','#58B4D1','#73BFDC'];
let winSound, loseSound;
let isGameStarted = false;

function drawGrid(width, height) {
  var counter = 0;
  
  for (let i = 120; i<width;i+=100) {
    for (let j=30;j<height;j+=100) {
      // shapeColor = color(random(255), random(255), random(255));
        shapeColor = color(String(tileColors[counter%5]));
        fill(shapeColor);
        rect(i, j, 100, 100);
        if(tileOpen[counter] == true)
        {
          textSize(50);
          textAlign(CENTER,CENTER);
          fill('#ffffff');
          //stroke('#FCE77D');
          strokeWeight(3);
          text(tileLetter[counter],i+50,j+50);
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
    createCanvas(800, 800);
    checkResult = '';
    enableNextLevel = false;
    getWordLetter();
    winSound = loadSound('WinSoundEffect.wav');
    loseSound = loadSound('LoseSoundEffect.wav');
   if(isGameStarted == false){
     setStartScreen()
   }
   else{
     setMainPage();
  }
}

function setStartScreen(){
    gameBackground();
    filter(BLUR,2.5)
    textSize(55);
    textAlign(CENTER,CENTER);
    fill('#000000');
    stroke('#36454F');
    strokeWeight(1);
    textFont('IMPACT');
    text("D E C I P H E R",400,70);
   
    textSize(25);
    textAlign(LEFT,CENTER);
    textWrap(WORD);
    textFont('BOOK ANTIQUA')
    text("1. Click on the tiles to find out what's behind them.", 20, 210,780);
    text("2. There might be something useful hidden in some of the tiles.", 20, 280,780);
    text("3. Collect as many as you can by turning the tiles !", 20, 350,780);
    text("4. Combine all that you have to figure out the code word.", 20, 420,780);
  text("5. You might also need a hint.", 20, 495,780);
  text("6. Proceed to the next level once you decipher the code word !", 20, 570,780);
      noStroke();
  if(startButton == null){
    startButton = inputButtons('PLAY !', 300, 670, '200px', '50px');
    startButton.style('background-color', '#1E6091');
  }
  startButton.mouseClicked(setMainPage);
}

function gameBackground () {
  let shapeAlpha = 50; // For the opacity of the background
  noStroke();
  for (let i = 0; i < 1000; i++) {
    shapeColor = color(random(255), random(255), random(255), shapeAlpha);
	fill(shapeColor);
    ellipse(random(windowWidth), random(windowHeight), random(100)); 
  }
}

function setMainPage() {
  clear();
  startButton.remove();
  isGameStarted = true;
  gameBackground();
  drawGrid(650,500); 
  
  if(letter1 == null)letter1 = inputTexts(1,280,600);
  else letter1.show();
  if(letter2 == null)letter2 = inputTexts(2,330,600);
  else letter2.show();
  if(letter3 == null)letter3 = inputTexts(3,380,600);
  else letter3.show();
  if(letter4 == null)letter4 = inputTexts(4,430,600);
  else letter4.show();
  if(letter5 == null)letter5 = inputTexts(5,480,600);
  else letter5.show();

  // Start/Stop button code design
  if(switchButton == null){
    switchButton = inputButtons('Go to Next LEVEL', 300, 720, '200px', '50px');
    switchButton.style('color', '#ffffff');
    switchButton.style('background-color', '#A0001C');
  }
  else{ 
    console.log("Current level is "+currentLevel);
    switchButton.innerHTML = "Go to LEVEL "+currentLevel;
    switchButton.style('color', '#ffffff');
    switchButton.style('background-color', '#A0001C');
    switchButton.show();
      }
  
  // Hint button code design
  if(hintButton == null) {
    hintButton = inputButtons('HELP ?', 160, 595);
    hintButton.style('background-color', '#1E6091');
  }
  else hintButton.show();
  hintButton.mouseClicked(onHintClicked);
  
  // Check for correctness button code design
  if(checkButton == null) {
    checkButton = inputButtons('CHECK', 550, 595);
    checkButton.style('background-color', '#1E6091');
  }
  else checkButton.show();
  checkButton.mouseClicked(onSubmit); 
  switchButton.mouseClicked(changeLevel);

  displayHintText();
}

function onHintClicked() {
  hintCount--;
  checkResult = getHintText();
  checkResult = 'The word is synonymous to: ' + checkResult;
  displayHintText();
}

function displayHintText(text){
  if(hint != null){
    hint.remove();
  }
  fill('#000000');
  hint = createDiv(text || checkResult);
  hint.style('font-size', '20px');
  hint.style('color', '#ffffff');
  hint.style('text-align','center');
  hint.style('background-color','#00406C');
  hint.position(200, 670);
}

function draw() {
  noLoop(); 
}