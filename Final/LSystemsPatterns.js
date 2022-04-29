//Adapted by Karan Kajani from Divya Sundaresan's L-systems example
//from https://editor.p5js.org/divtosz/sketches/oDs0mJJkt
//Curve1 adapted from Zonghan Guowang's L-systems example
//from https://editor.p5js.org/Sam-ZHGW/sketches/lVYsbxRsw
//Grammars for curves referenced from Paul Bourke's L-System manual 
//from http://paulbourke.net/fractals/lsys

let patternSystems = function (index) {
  let x,y,X,Y;
  let angle = 0;
  let iter;
  let step;
  let pos = 0;
  let str1;
  let r,g,b;

  //axiom is the initial string 
  //some production rules will be used to rewrite / expand this axiom 
  //step determines the length of line generated 
  //iter determines the number of times the axiom will be rewritten using the   production rules
  //X.Y determine the initial co-ordinates for the pattern
  let curve1 = {
    axiom: "F",
    rules: [['F', '+A+A+A+A+A+A+A+A+A+C'],
            ['G', '+A+A+A+A+A+A+A+A+A+F'],
            ['C', '++++++++G']],
    step: 40,
    angle: 10,
    iter:30,
    X: 400,
    Y: 400
  }

  let curve2 = {
    axiom: 'F-G-G',
    rules:[['F', 'F-G+F+G-F'], 
           ['G','GG']],
    angle: 120,
    iter: 6,
    step: 12,
    X: 15,
    Y: 722
  }

  let curve3 = {
    axiom: 'F',
    rules: [['F','G-F-G'],
           ['G','F+G+F']],
    angle: 60,
    iter: 6,
    step : 12,
    X: 20,
    Y: 80
  }

  let curve4 = {
    axiom: 'F+F+F+F',
    rules: [['F','F+F-F-F+F']],
    angle: 90,
    iter: 3,
    step: 25,
    X: 60,
    Y: 70
  }

  let curve5 = {
    axiom:'F',
    rules:[['F','F+G'],
          ['G','F-G']],
    angle: 90,
    iter: 10,
    step: 17,
    X: 300,
    Y: 170
  }

  let curve6 = {
    axiom: 'F++F++F',
    rules: [['F', 'F-F++F-F']],
    angle: 60,
    iter: 4,
    step: 8,
    X: 80,
    Y: 220
  }

  let curve7 = {
    axiom: 'F-F-F-F',
    rules: [['F','FF-F+F-F-FF']],
    angle:90,
    iter:3,
    step:30,
    X: 620,
    Y: 330
  }

  let curve8 = {
    axiom: 'F-F-F-F-F',
    rules: [['F','F-F++F+F-F-F']],
    angle: 72,
    iter: 3,
    step: 20,
    X: 250,
    Y: 150
  }

  let curve9 = {
    axiom:'F++F++F++F',
    rules: [['F','-F++F-']],
    angle: 45,
    iter: 8,
    step: 15,
    X: 275,
    Y: 280
  }

  let curve10 = {
    axiom:'F+XF+F+XF',
    rules:[['X','XF-F+F-XF+F+XF-F+F-X']],
    angle: 90,
    iter: 4,
    step: 13,
    X: 395,
    Y: 5
  }

  let curve11 = {
    axiom:'X',
    rules:[['X','+YF-XFX-FY+'],
            ['Y','-XF+YFY+FX-']],
    angle: 90,
    iter: 4,
    step: 40,
    X: 100,
    Y: 100
  }

  let curve12 = {
    axiom:'F+F+F+F',
    rules:[['F','F+F-F+F+F']],
    angle: 90,
    iter: 3,
    step: 40,
    X: 100,
    Y: 300
  }

  let curve13 = {
    axiom:'F++F++F++F++F',
    rules:[['F','F++F++F+++++F-F++F']],
    angle: 36,
    iter: 3,
    step: 25,
    X: 170,
    Y: 70
  }

  let curve14 = {
    axiom:'F++F++F++F++F',
    rules:[['F','F++F++F|F-F++F']],
    angle: 72,
    iter: 2,
    step: 80,
    X: 450,
    Y: 600
  }

  let curve15 = {
    axiom:'F+F+F+F',
    rules:[['F','FF+F+F+F+F+F-F']],
    angle: 90,
    iter: 2,
    step: 45,
    X: 350,
    Y: 100
  }

  let curve16 = {
    axiom:'XF',
    rules:[['X','X+YF++YF-FX--FXFX-YF+'],
           ['Y','-FX+YFYF++YF+FX--FX-Y']],
    angle: 60,
    iter: 3,
    step: 35,
    X: 400,
    Y: 50
  }

  let curve17 = {
    axiom:'F',
    rules:[['F','-F++F-']],
    angle: 45,
    iter: 8,
    step: 25,
    X: 200,
    Y: 500
  }

  let system = curve1;
  //system stores the L-system that will be chosen randomly from the set of given systems
  //all the curves are stored in an array from which a curve will be selected   randomly 
  let graphs = [curve1,curve2,curve3,curve4,curve5,curve6,curve7,curve8,curve9,curve10,curve11,curve12,curve13,curve14,curve15,curve16,curve17];

  //this function calls the turtle function that will generate the pattern
  //pos here is just used as an variable to iterate through the extended string
  function drawPattern () {
    while(pos <= str1.length){
      turtle(str1[pos]);
      pos++;
    }
  }

  function draw() {
    noLoop();
  }

  function patternsSetup() {
        system= random(graphs);
        createCanvas(800,800);
        background(245, 240, 240,220);
        x = system.X;
        y = system.Y
        angle = 0;
        s = system.axiom;
        for(let i=0; i<system.iter; i++){
          s = det_len(s);
        }
        str1 = s;
        pos = 0;
        drawPattern();
        displayLetter(index);
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
      //x1,y1 store the co-ordinates of the second point of a line which are calculated using the angle specified for each and every curve
      let x1 = x + system.step*cos(radians(angle));
      let y1 = y + system.step*sin(radians(angle));
      strokeWeight(random(0,5));
      //r,g,b determine the color values for the pattern to be generated
      r = random(128, 255);
      g = random(0, 192);
      b = random(0, 50);
      stroke(r,g,b);
      line(x, y, x1, y1);
      x = x1;
      y = y1;
    }
    else if(c == "+"){
      angle += system.angle;
    }
    else if(c == "-"){
      angle -= system.angle;
    }
  }
  
  patternsSetup();
  
  return () => {
    remove();
  }
};