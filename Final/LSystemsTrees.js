//This code has been built upon the same code as that of Patterns using L-systems, which was adapted by Karan Kajani from Divya Sundaresan's L-systems example
//from https://editor.p5js.org/divtosz/sketches/oDs0mJJkt
//Grammars for curves referenced from Paul Bourke's L-System manual 
//from http://paulbourke.net/fractals/lsys

let treeSystems = function (index) {
  let x,y,X,Y;
  let angle = 0;
  let iter;
  let step;
  let pos = 0;
  let str;
  let r,g,b;
  let stack = [];

  //axiom is the initial string 
  //some production rules will be used to rewrite / expand this axiom 
  //step determines the length of line generated 
  //iter determines the number of times the axiom will be rewritten using the   production rules
  //X.Y determine the initial co-ordinates for the tree / pattern
  let curve1 = {
    axiom: "X",
    rules: [['F', 'FF'],
            ['X', 'F[+X]F[-X]+X']],
    step: 5,
    angle: 20,
    iter:6,
    X: 400,
    Y: 800
  }

  let curve2 = {
    axiom: 'X',
    rules:[['F', 'FF'], 
           ['X','F+[-F-XF-X][+FF][--XF[+X]][++F-X]']],
    angle: 27.5,
    iter: 4,
    step: 15,
    X: 400,
    Y: 722
  }

  let curve3 = {
    axiom: 'X',
    rules: [['F','FX[FX[+XF]]'],
           ['X','FF[+XZ++X-F[+ZX]][-X++F-X]'],
           ['Z','[+F-X-F][++ZX]']],
    angle: 20,
    iter: 5,
    step : 10,
    X: 200,
    Y: 800
  }

  let curve4 = {
    axiom: 'F',
    rules: [['F','F[+FF][-FF]F[-F][+F]F']],
    angle: 35,
    iter: 3,
    step: 25,
    X: 400,
    Y: 750
  }

  let curve5 = {
    axiom:'X',
    rules:[['F','F'],
          ['X','XFY[+X][-Y]'],
          ['Y','Y[-FFF][+FFF]FY']],
    angle: 25.7,
    iter: 5,
    step: 15,
    X: 400,
    Y: 800
  }

  let curve6 = {
    axiom: 'F',
    rules: [['F', 'G[F][+F]-F'],
           ['G','G']],
    angle: 30,
    iter: 5,
    step: 90,
    X: 400,
    Y: 700
  }

  let curve7 = {
    axiom: 'X',
    rules: [['F','FF'],
           ['X','F+[[X]-X]-F[-FX]+X']],
    angle:25,
    iter:5,
    step:10,
    X: 450,
    Y: 800
  }

  let curve8 = {
    axiom: 'F-F-F+F',
    rules: [['F','F-[F++F]+[F-F++F]']],
    angle: 22.5,
    iter: 3,
    step: 70,
    X: 550,
    Y: 800
  }

  let curve9 = {
    axiom:'FF',
    rules: [['F','FF-[++XY++XY]+[--XY--XY]'],
           ['X','+FFY'],
           ['Y','-FXX']],
    angle: 22.5,
    iter: 4,
    step: 10,
    X: 300,
    Y: 800
  }

  let curve10 = {
    axiom:'F',
    rules:[['F','FF+[+F-F-F]-[-F+F+F]']],
    angle: 22.5,
    iter: 4,
    step: 13,
    X: 250,
    Y: 800
  }

  let system = curve9;
  //all the curves are stored in an array from which a curve will be selected   randomly 
  let graphs = [curve1,curve2,curve3,curve4,curve5,curve6,curve7,curve8,curve9,curve10];


  function sketch1Setup() {
        system= random(graphs);
        createCanvas(800,800);
        background(245, 240, 240,220);
        x = system.X;
        y = system.Y;
        cAngle = -90;
        s = system.axiom;
        for(let i=0; i<system.iter; i++){
          s = det_len(s);
        }
        str = s;
        pos = 0;
        drawTree();
        displayLetter(index);
  }
  //this function calls the turtle function that will generate the pattern
  function drawTree() {
    while (pos <= str.length){
      turtle(str[pos]);
      pos++;
    }
  }

  function draw() {
    noLoop();
  }

  //this function is responsible for rewriting the axiom using the 
  //production rules and calculate the length of the rewritten string
  function det_len(s){
    srules = system.rules;
    res = "";
    for(let i=0;i<s.length;i++){
      match_found = false;
      for (let j=0; j<srules.length; j++){
        if (srules[j][0] == s[i]){
          res += srules[j][1];
          match_found = true;
          break;
        }
      }
      if (!match_found){
        res += s[i];
      }
    }
    return res;
  }

  //this is the function that actually generates the pattern (like a turtle)
  function turtle(c){

    if(c == 'F' || c == 'G' || c=='A' || c=='C'){
      let x1 = x + system.step*cos(radians(cAngle));
      let y1 = y + system.step*sin(radians(cAngle));
      strokeWeight(random(0,5));
      r = random(50, 200);
      g = random(100, 255);
      b = random(150, 200);
      stroke(r,g,b);
      line(x, y, x1, y1);
      x = x1;
      y = y1;
    }
    else if(c == "+"){
      cAngle += system.angle;
    }
    else if(c == "-"){
      cAngle -= system.angle;
    }
    //A stach is used in this code to store the state of the turtle if the grammar has a '['
    //the variables associated with the stored state are popped when the grammar has a ']'
    else if(c == "["){
      push();
      stack.push({x:x,y:y,angle:cAngle})
    }
    else if(c == "]"){
      temp=stack.pop();
      x=temp.x;
      y=temp.y;
      cAngle=temp.angle;
    }

  }
  sketch1Setup();
  return () => {
    remove();
  }
};