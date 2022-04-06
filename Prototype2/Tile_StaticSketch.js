/*function setup() {
  createCanvas(525, 500);
}*/
function drawGrid(width, height) {
    for (let i = 150; i<width;i+=50) {
      for (let j=30;j<height;j+=50) {
      shapeColor = color(random(255), random(255), random(255));
      fill(shapeColor);
        rect(i, j, 50, 50);
        j+=10;
      }
      i+=10;
    }
  }
  function showSketch1(x1,y1,x2,y2) {
    if(x1<=mouseX && mouseX<=x2 && y1<=mouseY && mouseY<=y2){
   background(194,255,255);
      //print("MouseX: "+mouseX+" MouseY: "+mouseY);
      textSize(90);
      textAlign(CENTER);
      fill('#F96167');
      stroke('#FCE77D');
      strokeWeight(5);
      text("F",windowWidth/2,windowHeight/2);
      noStroke();
      fill (205,13,222); //morado
      triangle(230, 135, 290, 117, 270, 183); 
    triangle( 290, 117, 270, 183, 307,169);
      
      noStroke();
      fill (54,192,255); //azul
      triangle(290, 117 ,307, 169, 366,155);
      
      noStroke();
      fill (240,0,151); //rosado
      triangle(307, 169, 366,155,345,184);
      
      noStroke();
      fill (54,192,255); //azul
      triangle(230, 135, 270, 183, 242,270);
      triangle( 270, 183, 242, 270, 286, 243);
      
      //cuerno
      noStroke();
      fill (255,255,7); //amarillo
      triangle(290,117,308,126, 336,39);
      
      noStroke();
      fill (240,0,151); //rosado
    triangle(230, 135, 210, 145, 211,173)
      triangle(230, 135, 232,173, 211,173);
      
      noStroke();
      fill (205,13,222); //morado
      triangle(232,173, 211,173,210,243)
    triangle(232,173, 210,243,242,270)
      
      noStroke();
      fill (240,0,151); //rosado
    triangle(210,243,242,270, 169,269)
      
      noStroke();
      fill (205,13,222); //morado
      triangle(242,270, 169,269,250,327)
      
      noStroke();
      fill (54,192,255); //azul
      triangle( 242, 270, 250, 327, 294, 314);
      
      noStroke();
      fill (240,0,151); //rosado
    triangle(242,270,294,314, 286,243)
      
      noStroke();
      fill (240,0,151); //rosado
    triangle(169,269,250,327, 185,337);
      
      noStroke();
      fill (54,192,255); //azul
      triangle( 169,269,120,282, 185,337);
      
      noStroke();
      fill (205,13,222); //morado
      triangle(120,282, 185,337, 103,317);
      
   noStroke();
      fill (240,0,151); //rosado
    triangle(185,337, 103,317, 106,336);
      
      //pierna izquierda-derecha
      noStroke();
      fill (54,192,255); //azul-base de las piernas izquierdas
      triangle( 106,336, 157,336,129,371);
    triangle( 129,371, 157,336,155,381);
      
      noStroke();
      fill (205,13,222); //morado
      triangle(157,336,155,381,176,370);
      
      noStroke();
      fill (240,0,151); //rosado
    triangle(155,381,176,370,170,408);
      triangle(176,370,170,408,183,396);
      
      noStroke();
      fill (54,192,255); //azul
      triangle( 170,408,183,396,203,434);
    triangle( 183,396,203,434, 210,420);
      
      noStroke();
      fill (205,13,222); //morado
      triangle(203,434, 210,420,229,463);
      
      noStroke();
      fill (240,0,151); //rosado
    triangle(229,463,211,441,211,463);
      
      //pierna izquierda-izquierda
      noStroke();
      fill (205,13,222); //morado
      triangle( 129,371,155,381,119,395);
    triangle(155,381,119,395,135,398);
      
      noStroke();
      fill (240,0,151); //rosado
    triangle(119,395,135,398,111,431);
      triangle(135,398,111,431,129,426);
      
          noStroke();
      fill (54,192,255); //azul
      triangle( 111,431,129,426,139,459);
      
          noStroke();
      fill (205,13,222); //morado
      triangle( 139,459,120,441,117,459);
      
      //pierna derecha-izquierda
      noStroke();
      fill (205,13,222); //morado
      triangle(294,314,270,321,304,354 );
      triangle(294,314,304,354,321,349 );
      
          noStroke();
      fill (240,0,151); //rosado
    triangle(304,354,321,349,302,373 );
      triangle(302,373,321,349,313,373 );
      
      
          noStroke();
      fill (54,192,255); //azul
      triangle( 313,373,309,385,260,385);
      triangle( 313,373,273,373,260,385);
      
      //pierna derecha-derecha
      noStroke();
      fill (205,13,222); //morado
      triangle(294,314,319,309,328,295);
      triangle(294,314,328,295,291,293);
      
          noStroke();
      fill (54,192,255); //azul
          triangle( 319,309,328,295,321,349);
      triangle( 319,309,309,333,321,349);
          triangle( 333,312,328,295,321,349);
      
      //pelo
      noStroke();
      fill (250,118,12); //naranja
      triangle( 290,117,257,127,237,98);
  
  noStroke();
      fill (255,0,0); //rojo
      triangle( 257,127,230,135,215,114);
      
      noStroke();
      fill (255,30,216); //rosado claro
      triangle( 230,135,215,114,175,142);
      
      noStroke();
      fill (101,8,122); //morado oscuro
      triangle(210,145,211,173,183,168);
      
      noStroke();
      fill (48,154,255) //otro azul
      triangle(211,173,211,209,177,202);
      
      noStroke();
      fill (33,227,70)//verde
      triangle(211,209,212,242,158,228);
      
      
      noStroke();
      fill (255,255,7)//amarillo
      triangle(212,242,181,260,155,251);
      
      //Cola
          noStroke();
      fill (33,227,70)//verde
      triangle(120,282,98,319,80,309);
  
          noStroke();
      fill (255,255,7)//amarillo
      triangle(98,319,80,309,89,354);
          
          noStroke();
      fill (250,118,12); //naranja
      triangle( 80,309,89,354,65,363);
  
          noStroke();
      fill (255,0,0); //rojo
      triangle( 89,354,65,363,68,382);
      
      noStroke();
      fill (255,30,216); //rosado claro
          triangle( 65,363,68,382,54,386);
    }
      
  }
  
  function showSketch2(x1,y1,x2,y2){
    print(x1);
    print(x2);
    print(y1);
    print(y2);
    print(mouseX);
    print(mouseY);
    if(x1<=mouseX && mouseX<=x2 && y1<=mouseY && mouseY<=y2){
      print("hello");
      let p1 = 125;let p2 = 375;
      background(0);
      textSize(90);
      textAlign(CENTER);
      fill('#F96167');
      stroke('#FCE77D');
      strokeWeight(5);
      text("T",windowWidth/2,windowHeight/2);
      for(let i=0;i<125;i++){
        let x2 = random(0,250);
        let y2 = random(0,250);
        let r = random(255); let g = random(255); 
        let b = random(255); let a = random(255);
        stroke(r,g,b,a);
        line(p1,p1,x2,y2);
        line(p2,p1,x2+250,y2);
        line(p1,p2,x2,y2+250);
        line(p2,p2,x2+250,y2+250);
      }
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
  function mousePressed(){
      showSketch1(150,30,200,80);
    print("Between sketches")
      showSketch2(200,30,250,80);
  }
  function keyPressed(){
    setup();
  }
  
  function setup() {
    createCanvas(600, 600);
    let shapeAlpha = 50; // For the opacity of the background
    noStroke();
    for (let i = 0; i < 1000; i++) {
      shapeColor = color(random(255), random(255), random(255), shapeAlpha);
      fill(shapeColor);
      ellipse(random(windowWidth), random(windowHeight), random(100)); 
    }
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
  
  function draw() {
    // background(220);
    noLoop(); 
  }