let dict = new WordDictionary();
let tileLetter = [];
let word, exitButton;
let letterIndex = -1;
let tileOpen = [];


function getWordLetter(){
  word = dict.generateWord();
  console.log("Word is -- "+word); 
  fillTiles();
}

function onSubmit() {  
  let inputWord = letter1.value() + letter2.value() + letter3.value() + letter4.value() + letter5.value();
  
  if (word.toLowerCase() === inputWord.toLowerCase()) {
    checkResult = 'Yay, words match. Next Level is now Enabled!';
    console.log('Yay, words match!');
    switchButton.style('color', '#ffffff');
    switchButton.style('background-color', color(3,37,126));
    enableNextLevel = true;
  } else {
    checkResult = 'Oops, words DO NOT match. Try Again!';
    console.log('Oops, words DO NOT match!');
  }
  displayHintText();
}

function fillTiles(){
  for(let i=0;i<25;i++){
    tileLetter[i] = '';
    tileOpen[i] = false;
  }
  let n1 = floor(random(0,25)); 
  tileLetter[n1] = word.charAt(0);
  let n2 = floor(random(0,25));
  tileLetter[n2] = word.charAt(1);
  let n3 = floor(random(0,25));
  tileLetter[n3] = word.charAt(2);
  let n4 = floor(random(0,25));
  tileLetter[n4] = word.charAt(3);
  let n5 = floor(random(0,25));
  tileLetter[n5] = word.charAt(4);
  console.log(n1+" "+n2+" "+n3+" "+n4+" "+n5);

}
function displaySketch(){
  if(150<=mouseX && mouseX<=200 && 30<=mouseY && mouseY<=80){
    showSketch1();
  }
  if(150<=mouseX && mouseY>=90 && 200>=mouseX && mouseY<=140){
    showSketch2();
  }
  if(150<=mouseX && mouseY>=150 && 200>=mouseX && mouseY<=200){
    showSketch3();
  }
   if(150<=mouseX && mouseY>=210 && 200>=mouseX && mouseY<=260){
    showSketch4();
  }
  if(150<=mouseX && mouseY>=270 && 200>=mouseX && mouseY<=320){
    showSketch5();
  }
   if(210<=mouseX && mouseY>=30 && 260>=mouseX && mouseY<=80){
    showSketch6();
  }
   if(210<=mouseX && mouseY>=90 && 260>=mouseX && mouseY<=140){
    showSketch7();
  }
   if(210<=mouseX && mouseY>=150 && 260>=mouseX && mouseY<=200){
    showSketch8();
  }
   if(210<=mouseX && mouseY>=210 && 260>=mouseX && mouseY<=260){
    showSketch9();
  }
  if(210<=mouseX && mouseY>=270 && 260>=mouseX && mouseY<=320){
    showSketch10();
  }
  if(270<=mouseX && mouseY>=30 && 320>=mouseX && mouseY<=80){
    showSketch11();
  }
  if(270<=mouseX && mouseY>=90 && 320>=mouseX && mouseY<=140){
    showSketch12();
  }
  if(270<=mouseX && mouseY>=150 && 320>=mouseX && mouseY<=200){
    showSketch13();
  }
   if(270<=mouseX && mouseY>=210 && 320>=mouseX && mouseY<=260){
    showSketch14();
  }
   if(270<=mouseX && mouseY>=270 && 320>=mouseX && mouseY<=320){
    showSketch15();
  }
    if(330<=mouseX && mouseY>=30 && 380>=mouseX && mouseY<=80){
    showSketch16();
  }
    if(330<=mouseX && mouseY>=90 && 380>=mouseX && mouseY<=140){
    showSketch17();
  }
    if(330<=mouseX && mouseY>=150 && 380>=mouseX && mouseY<=200){
    showSketch18();
  }
   if(330<=mouseX && mouseY>=210 && 380>=mouseX && mouseY<=260){
    showSketch19();
  }
  if(330<=mouseX && mouseY>=270 && 380>=mouseX && mouseY<=320){
    showSketch20();
  }
   if(390<=mouseX && mouseY>=30 && 440>=mouseX && mouseY<=80){
    showSketch21();
  }
  if(390<=mouseX && mouseY>=90 && 440>=mouseX && mouseY<=140){
    showSketch22();
  }
  if(390<=mouseX && mouseY>=150 && 440>=mouseX && mouseY<=200){
    showSketch23();
  }
   if(390<=mouseX && mouseY>=210 && 440>=mouseX && mouseY<=260){
    showSketch24();
  }
   if(390<=mouseX && mouseY>=270 && 440>=mouseX && mouseY<=320){
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
  if(exitButton == null)exitButton = inputButtons('EXIT', 250, 510);
  else exitButton.show();
  exitButton.mouseClicked(exitToMainPage);
  
  // background(194,255,255);
  if(tileLetter[tileIndex] != '')
  {
      textSize(70);
      textAlign(CENTER,CENTER);
      fill('#F96167');
      stroke('#FCE77D');
      strokeWeight(5);
      text(tileLetter[tileIndex],floor(random(0,500)),floor(random(0,500)));
      noStroke();
  }
}

function inputTexts (posX, posY) {
  let letterInput;
  letterInput = createInput();
  letterInput.attribute('maxlength', 1);
  letterInput.position(posX, posY);
  letterInput.style('border', '3px solid #06038D');
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
    button.style('background-color', color(3,37,126));
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
    setup();
  }
}

function showSketch1(){
  treeSystems(0);
}
function showSketch2(){
   treeSystems(1);
}
function showSketch3(){
   // displayLetter(2);
   patternSystems(2);
}
function showSketch4(){
   // displayLetter(3);
   patternSystems(3);
}
function showSketch5(){
   // displayLetter(4);
   treeSystems(4);
}
function showSketch6(){
  // displayLetter(5);
  treeSystems(5);
}
function showSketch7(){
  // displayLetter(6);
  treeSystems(6);
}
function showSketch8(){
  // displayLetter(7);
  patternSystems(7);
}
function showSketch9(){
  // displayLetter(8);
  treeSystems(8);
}
function showSketch10(){
   // displayLetter(9);
   patternSystems(9);
}
function showSketch11(){
   // displayLetter(10);
   patternSystems(10);
}
function showSketch12(){
  // displayLetter(11);
  treeSystems(11);
}
function showSketch13(){
   // displayLetter(12);
   patternSystems(12);
}
function showSketch14(){
 // displayLetter(13);
 treeSystems(13);
}
function showSketch15(){
   // displayLetter(14);
   patternSystems(14);
}
function showSketch16(){
 // displayLetter(15);
 treeSystems(15);
}
function showSketch17(){
   // displayLetter(16);
   patternSystems(16);
}
function showSketch18(){
  // displayLetter(17);
  treeSystems(17);
}
function showSketch19(){
 // displayLetter(18);
 treeSystems(18);
}
function showSketch20(){
   // displayLetter(19);
   patternSystems(19);
}
function showSketch21(){
  // displayLetter(20);
  treeSystems(20);
}
function showSketch22(){
   // displayLetter(21);
   patternSystems(21);
}
function showSketch23(){
  // displayLetter(22);
  treeSystems(22);
}
function showSketch24(){
 // displayLetter(23);
 treeSystems(23);
}
function showSketch25(){
   // displayLetter(24);
   patternSystems(24);
}
