//Adapted by Karan Kajani from Asha Khatri's Noise or Interference Patterns example
//from https://editor.p5js.org/ashakhatri007/sketches/fPoAhND5i

let noisePatterns = function (index) {
  
 
  var points = [];
   //points stack stores the x,y co-ordinates of the vectors that will be generated randomly
  var mult;
  //mult is a variable with a random value that will be used with the noise function to calculate angle of the vectors
  var drawn = false;

  var r1;
  var r2;
  var g1;
  var g2;
  var b1;
  var b2; 
  
 
  function noisePatternSetup() {
    createCanvas(800,800);
    background(245,240,240,220);
    angleMode(DEGREES);
    //this specifies whether the angle will be measured in radians or degrees
    noiseDetail(1);

    var density = 50;
    //this value decides how dense the flow system or the pattern be
    var space = 800/density;
    //this variable determines the distribution or the space between the vectors across the canvas size

    for(var x = 0;x < 800; x += space){
      for (var y = 0; y < 800; y += space){
         var p = createVector(x + random(-10, 10),y + random(-10, 10));
        //vectors are created across the whole canvas using random co-ordinates
        //These co-ordinates are then pushed onto a stack
         points.push(p);
      }
    }

    shuffle(points,true);

    r1 = random(0,100);
    r2 = random(100,255);
    b1 = random(0,100);
    b2 = random(100,255);
    g1 = random(0,100);
    g2 = random(100,255);
    //These values are used to determine the color codes for the vectors
    mult = random(0.002,0.01);
    
    if(!drawn){
      for(var k=0;k<200;k++){
        draw2();
      }
      drawn=true;
    }
    //this segment helps in generating the pattern in the background and then display the final flow system or pattern after it's generated
    // setTimeout(() => {
      displayLetter(index);
    // }, "2500");
  }

 function draw2() {
    for (var i = 0; i< points.length; i++){
      var r = map(points[i].x, 0, 800, random(1,2)*r1,random(1,2)*r2);
      var g = map(points[i].y, 0, 800, random(1,2)*g1,random(1,2)*g2);
      var b = map(points[i].x, 0, 800, random(1,2)*b1,random(1,2)*b2);
      var alpha =map(points[i].y, 0, 800, 60, 130)

      stroke(r,g,b,alpha);
      //the stroke color is calculated using the x,y co-ordinated and the r1,g1,b1 values calculated previously
      var angle = map(noise(points[i].x * mult, points[i].y * mult),0,1,0,720);
      points[i].add(createVector(cos(angle), sin(angle)));
      //new vectors created at the angle specified, to generate a flow system
      point(points[i].x, points[i].y);
      //the pattern or flow systems is plotted here using points at different co-ordinates
      
    }
  }

  function draw() {
    // if(!drawn){
    //   for(var k=0;k<200;k++){
    //     draw2();
    //   }
    //   drawn=true;
    // }
    noLoop();
  }
  
  noisePatternSetup();
}