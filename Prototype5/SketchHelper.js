let dict = new WordDictionary();
let tileLetter = [];
let word, exitButton,index;
let letterIndex = -1;
let tileOpen = [];
let randomTileIndexes = [];


function getWordLetter(){
  word = dict.generateWord();
  console.log("Word is -- "+word); 
  fillTiles();
}
function getHintText(){
  return dict.generateHint();
}

function onSubmit() {  
  let inputWord = letter1.value() + letter2.value() + letter3.value() + letter4.value() + letter5.value();
  
  if (word.toLowerCase() === inputWord.toLowerCase()) {
    winSound.play();
    displayHintText('That\'s Correct! Great Job!');
    switchButton.style('color', '#ffffff');
    switchButton.style('background-color', '#1E6091');
    letter1.style('border', '3px solid #1E6091');
    letter2.style('border', '3px solid #1E6091');
    letter3.style('border', '3px solid #1E6091');
    letter4.style('border', '3px solid #1E6091');
    letter5.style('border', '3px solid #1E6091');
    enableNextLevel = true;
  } else {
    loseSound.play();
    displayHintText('Oops, words DO NOT match. Try Again!');
  }
}

function changeLetterBoxColorToRed(){
    letter1.style('border', '3px solid #A0001C');
    letter2.style('border', '3px solid #A0001C');
    letter3.style('border', '3px solid #A0001C');
    letter4.style('border', '3px solid #A0001C');
    letter5.style('border', '3px solid #A0001C');
}

function fillTiles(){
  for(let i=0;i<25;i++){
    tileLetter[i] = '';
    tileOpen[i] = false;
  }
  getRandomIndexes(5,24);
  let n1 = randomTileIndexes[0]; 
  tileLetter[n1] = word.charAt(0);
  let n2 = randomTileIndexes[1];
  tileLetter[n2] = word.charAt(1);
  let n3 = randomTileIndexes[2];
  tileLetter[n3] = word.charAt(2);
  let n4 = randomTileIndexes[3];
  tileLetter[n4] = word.charAt(3);
  let n5 = randomTileIndexes[4];
  tileLetter[n5] = word.charAt(4);
  console.log(n1+" "+n2+" "+n3+" "+n4+" "+n5);
}
// Adapted from https://mavtipi.medium.com/how-to-generate-unique-random-numbers-in-a-specified-range-in-javascript-80bf1a545ae7

function getRandomIndexes(quantity,max){
   while(randomTileIndexes.length < quantity){
    var candidateInt = Math.floor(Math.random() * max) + 1
      if(randomTileIndexes.indexOf(candidateInt) === -1) 
        randomTileIndexes.push(candidateInt)
  }
}
function displaySketch(){
  if(120<=mouseX && mouseX<=220 && 30<=mouseY && mouseY<=130){
    showSketch1();
  }
  if(120<=mouseX && mouseY>=140 && 220>=mouseX && mouseY<=240){
    showSketch2();
  }
  if(120<=mouseX && mouseY>=250 && 220>=mouseX && mouseY<=350){
    showSketch3();
  }
   if(120<=mouseX && mouseY>=360 && 220>=mouseX && mouseY<=460){
    showSketch4();
  }
  if(120<=mouseX && mouseY>=470 && 220>=mouseX && mouseY<=570){
    showSketch5();
  }
   if(230<=mouseX && mouseY>=30 && 330>=mouseX && mouseY<=130){
    showSketch6();
  }
   if(230<=mouseX && mouseY>=140 && 330>=mouseX && mouseY<=240){
    showSketch7();
  }
   if(230<=mouseX && mouseY>=250 && 330>=mouseX && mouseY<=350){
    showSketch8();
  }
   if(230<=mouseX && mouseY>=360 && 330>=mouseX && mouseY<=460){
    showSketch9();
  }
  if(230<=mouseX && mouseY>=470 && 330>=mouseX && mouseY<=570){
    showSketch10();
  }
  if(340<=mouseX && mouseY>=30 && 440>=mouseX && mouseY<=130){
    showSketch11();
  }
  if(340<=mouseX && mouseY>=140 && 440>=mouseX && mouseY<=240){
    showSketch12();
  }
  if(340<=mouseX && mouseY>=250 && 440>=mouseX && mouseY<=350){
    showSketch13();
  }
   if(340<=mouseX && mouseY>=360 && 440>=mouseX && mouseY<=460){
    showSketch14();
  }
   if(340<=mouseX && mouseY>=470 && 440>=mouseX && mouseY<=570){
    showSketch15();
  }
    if(450<=mouseX && mouseY>=30 && 550>=mouseX && mouseY<=130){
    showSketch16();
  }
    if(450<=mouseX && mouseY>=140 && 550>=mouseX && mouseY<=240){
    showSketch17();
  }
    if(450<=mouseX && mouseY>=250 && 550>=mouseX && mouseY<=350){
    showSketch18();
  }
   if(450<=mouseX && mouseY>=360 && 550>=mouseX && mouseY<=460){
    showSketch19();
  }
  if(450<=mouseX && mouseY>=470 && 550>=mouseX && mouseY<=570){
    showSketch20();
  }
   if(560<=mouseX && mouseY>=30 && 660>=mouseX && mouseY<=130){
    showSketch21();
  }
  if(560<=mouseX && mouseY>=140 && 660>=mouseX && mouseY<=240){
    showSketch22();
  }
  if(560<=mouseX && mouseY>=250 && 660>=mouseX && mouseY<=350){
    showSketch23();
  }
   if(560<=mouseX && mouseY>=360 && 660>=mouseX && mouseY<=460){
    showSketch24();
  }
   if(560<=mouseX && mouseY>=470 && 660>=mouseX && mouseY<=570){
    showSketch25();
  }
}
function exitToMainPage(){
    exitButton.hide();
    setMainPage();
}

function displayLetter(tileIndex){
  if(tileOpen[tileIndex] == false){
    tileOpen[tileIndex] = true;
  }
  letter1.hide();
  letter2.hide();
  letter3.hide();
  letter4.hide();
  letter5.hide();
  switchButton.hide();
  hintButton.hide();
  checkButton.hide();
  hint.hide();
  if(exitButton == null){
    exitButton = inputButtons('EXIT', 20, 725);
    exitButton.style('background-color', '#1E6091');
  }
  else exitButton.show();
  exitButton.mouseClicked(exitToMainPage);
  
  // background(194,255,255);
  if(tileLetter[tileIndex] != '')
  {
      textSize(75);
      textAlign(CENTER,CENTER);
      fill(random(0,255),random(0,255),random(0,255),random(50,140));
      stroke('#ffffff');
      strokeWeight(5);
      text(tileLetter[tileIndex],floor(random(0,500)),floor(random(0,500)));
      noStroke();
  }
}

function inputTexts (id, posX, posY) {
  let letterInput;
  letterInput = createInput();
  letterInput.attribute('maxlength', 1);
  letterInput.position(posX, posY);
  letterInput.attribute('id', id);
  letterInput.style('border', '3px solid #A0001C');
  letterInput.style('height', '30px');
  letterInput.style('width', '30px');
  letterInput.style('font-size', '30px', 'color', '#000');
  return letterInput;
}

function inputButtons (text, posX, posY, width, height) {
  let button;
  button = createButton(text);
  button.position(posX, posY);
  if (width === undefined && height === undefined) {
      button.style('height', '50px');
      button.style('width', '100px');
  } else {
      button.style('height', height);
      button.style('width', width);
  }
  button.style('font-size', '20px');
  button.style('color', '#ffffff');
  if(text.match("LEVEL")){
    button.style('color', '#000000');
    button.style('background-color', color(220,220,220));
  }
  else{
    button.style('color', '#ffffff');
    button.style('background-color', '#1E6091');
  }
  return button;
}

function onSubmit1() {
  let desiredWord = getWordLetter();
}
function changeLevel(){
   if(enableNextLevel){
    currentLevel++;
    letter1.value('');
    letter2.value('');
    letter3.value('');
    letter4.value('');
    letter5.value('');
    changeLetterBoxColorToRed();
    setup();
  }
}

function showSketch1(){
  directedRandomShapes(0);
  // noisePatterns(0);
}
function showSketch2(){
   treeSystems(1);
}
function showSketch3(){
   directedRandomShapes(2);
}
function showSketch4(){
   directedRandomShapes(3);
}
function showSketch5(){
   treeSystems(4);
}
function showSketch6(){
  directedRandomShapes(5);
}
function showSketch7(){
  treeSystems(6);
}
function showSketch8(){
  patternSystems(7);
}
function showSketch9(){
  treeSystems(8);
}
function showSketch10(){
   patternSystems(9);
}
function showSketch11(){
   patternSystems(10);
}
function showSketch12(){
  directedRandomShapes(11);
}
function showSketch13(){
   patternSystems(12);
}
function showSketch14(){
 treeSystems(13);
}
function showSketch15(){
   patternSystems(14);
}
function showSketch16(){
 treeSystems(15);
}
function showSketch17(){
   patternSystems(16);
}
function showSketch18(){
  treeSystems(17);
}
function showSketch19(){
 directedRandomShapes(18);
}
function showSketch20(){
   patternSystems(19);
}
function showSketch21(){
  treeSystems(20);
}
function showSketch22(){
   directedRandomShapes(21);
}
function showSketch23(){
  treeSystems(22);
}
function showSketch24(){
 directedRandomShapes(23);
}
function showSketch25(){
   patternSystems(24);
}
