let noisePatterns = function (index) {
  var points = [];
  var mult;
  var drawn = false;

  var r1;
  var r2;
  var g1;
  var g2;
  var b1;
  var b2; 
  
  function draw2() {
    for (var i = 0; i< points.length; i++){
      var r = map(points[i].x, 0, 800, random(1,2)*r1,random(1,2)*r2);
      var g = map(points[i].y, 0, 800, random(1,2)*g1,random(1,2)*g2);
      var b = map(points[i].x, 0, 800, random(1,2)*b1,random(1,2)*b2);
      var alpha =map(points[i].y, 0, 800, 60, 130)

      stroke(r,g,b,alpha);

      var angle = map(noise(points[i].x * mult, points[i].y * mult),0,1,0,720);
      points[i].add(createVector(cos(angle), sin(angle)));
      point(points[i].x, points[i].y);
    }
  }

  function noisePatternSetup() {
    createCanvas(800,800);
    background(245,240,240,220);
    angleMode(DEGREES);
    noiseDetail(1);

    var density = 50;
    var space = 800/density;

    for(var x = 0;x < 800; x += space){
      for (var y = 0; y < 800; y += space){
         var p = createVector(x + random(-10, 10),y + random(-10, 10));
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

    mult = random(0.002,0.01);
    
    if(!drawn){
      for(var k=0;k<200;k++){
        draw2();
      }
      drawn=true;
    }
    // setTimeout(() => {
      displayLetter(index);
    // }, "2500");
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