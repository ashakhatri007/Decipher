let dict = new WordDictionary();
let tileLetter = [];
let word;
let letterIndex = -1;

function getWordLetter(){
  word = dict.generateWord();
  console.log("Word is -- "+word); 
  fillTiles();
}

function onSubmit() {  
  let inputWord = letter1.value() + letter2.value() + letter3.value() + letter4.value() + letter5.value();
  
  if (word.toLowerCase() === inputWord.toLowerCase()) {
    console.log('Yay, Words match!');
  } else {
    console.log('Oops, Words DO NOT match!');
  }

}

function fillTiles(){
  for(let i=0;i<25;i++){
    tileLetter[i] = '';
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
  letter1.hide();
  letter2.hide();
  letter3.hide();
  letter4.hide();
  letter5.hide();
  switchButton.hide();
  hintButton.hide();
  checkButton.hide();
  exitButton = inputButtons('EXIT', 250, 510);
  exitButton.mouseClicked(exitToMainPage);
  
  background(194,255,255);
  console.log("tileIndex is" +tileIndex);
  console.log("tile letter is "+tileLetter[tileIndex])
  if(tileLetter[tileIndex] != '')
  {
      textSize(90);
      textAlign(CENTER);
      fill('#F96167');
      stroke('#FCE77D');
      strokeWeight(5);
      text(tileLetter[tileIndex],floor(random(200,600)),floor(random(200,600)));
      noStroke();
  }
}

function inputTexts (posX, posY) {
  let letterInput;
  letterInput = createInput();
  letterInput.input(enforceOnlyOneChar);
  letterInput.position(posX, posY);
  letterInput.style('border', '3px solid #06038D');
  letterInput.style('height', '30px');
  letterInput.style('width', '30px');
  letterInput.style('font-size', '30px', 'color', '#000');
  return letterInput;
}


function enforceOnlyOneChar() {
  const userInput = this.value();
  const oneChar = userInput.replace(/^[a-zA-Z]$/g, '');
  
  if (userInput === oneChar) {
    this.value(oneChar);
  }
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
  button.style('background-color', color(3,37,126));
  return button;
}

function onSubmit1() {
  let desiredWord = getWordLetter();
  console.log('the desired word is -- ', desiredWord);
}

function showSketch1(){
  displayLetter(0); 
}
function showSketch2(){
   displayLetter(1); 
}
function showSketch3(){
   displayLetter(2);
}
function showSketch4(){
   displayLetter(3);
}
function showSketch5(){
   displayLetter(4);
}
function showSketch6(){
  displayLetter(5);
}
function showSketch7(){
  displayLetter(6);
}
function showSketch8(){
 displayLetter(7);
}
function showSketch9(){
  displayLetter(8);
}
function showSketch10(){
 displayLetter(9);
}
function showSketch11(){
 displayLetter(10);
}
function showSketch12(){
  displayLetter(11);
}
function showSketch13(){
 displayLetter(12);
}
function showSketch14(){
 displayLetter(13);
}
function showSketch15(){
displayLetter(14);
}
function showSketch16(){
 displayLetter(15);
}
function showSketch17(){
    displayLetter(16)
}
function showSketch18(){
  displayLetter(17);
}
function showSketch19(){
 displayLetter(18);
}
function showSketch20(){
 displayLetter(19);
}
function showSketch21(){
  displayLetter(20);
}
function showSketch22(){
  displayLetter(21);
}
function showSketch23(){
  displayLetter(22);
}
function showSketch24(){
 displayLetter(23);
}
function showSketch25(){
  displayLetter(24);
}
