let directedRandomShapes = function (index) {
  let y=0;
  let x=0;
  let angle=0;
  //the shapes are mapped to integers and stored in an array
  let values=[0,1,2,3,4,5]
  let i=0;

  function directedRandomShapesSetup() {
    createCanvas(800, 800);
    background(245, 240, 240,220);
    //a shape will be chosen randomly out of the specified shapes
    i=random(values);
    //shapes will be generated at random locations with random sizes but proportional to the y-axis co-ordinates of the shapes
    for(let j=0; j<500; j+=1)
    {
        x=random() * 800;
        y=random() * 800;
            if(i == 0)
            {
              fill(random(240,255),random(100,255),random(0,100),random(90,140));
              rect(x, y, random(y/16,y/8), random(y/24,y/4)); 
            }
            else if(i == 1)
            {
              fill(random(120,200),random(200,255),random(0,100),random(0,100));
              quad(x,y, x+y/20,y-20,x+y/10,y,x+y/20,y+50);
            }
            else if(i == 2)
            {
              fill(random(150,200),random(0,200),random(100,200),random(0,100));
              circle(x,y, random(y/16,y/8));
            }
            else if(i == 3)
            {  
              rotate(angle);
              fill(random(50,255),random(70,170),random(100,200),random(70,150));
              arc(x, y, random(y/20,y/10), random(y/20,y/10), PI, TWO_PI);
              angle+=1;
            }
            else if(i == 4)
            {
              fill(random(0,50),random(0,50),random(0,50),random(0,100));
              triangle(x,y, x+y/10,y-y/10,x+y/5,y);
              angle+=0.03;
            }
            else if(i == 5)
            {
              fill(random(0,100),random(100,255),random(240,255),random(0,100));
              square(x, y, random(y/16,y/8));
            }
        angle+=1.2;
        y=y+random(2,5);
    }
    displayLetter(index);
  }
  
  directedRandomShapesSetup();
}