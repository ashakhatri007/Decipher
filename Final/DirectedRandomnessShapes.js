let directedRandomShapes = function (index) {
  //Initial co-ordinates of the shapes are stored in the following variables
  let shapeY=0;
  let shapeX=0;
  let arcAngle=0;
  //the shpaes are mapped to integers and stored in an array
  let shapeValues=[0,1,2,3,4,5]
  //This variable is used to store the value of the shape chosen randomly
  let shapeIndex=0;

  function directedRandomShapesSetup() {
    createCanvas(800, 800);
    background(245, 240, 240,220);
    //a shape will be chosen randomly out of the specified shapes
    shapeIndex=random(shapeValues);
    //shapes will be generated at random locations with random sizes but proportional to the shapeY-axis co-ordinates of the shapes
    for(let j=0; j<500; j+=1)
    {
        //The shapes are geenrated at random locations all across the canvas
        shapeX=random() * 800;
        shapeY=random() * 800;
            if(shapeIndex == 0)
            {
              fill(random(240,255),random(100,255),random(0,100),random(90,140));
              rect(shapeX, shapeY, random(shapeY/16,shapeY/8), random(shapeY/24,shapeY/4)); 
            }
            else if(shapeIndex == 1)
            {
              fill(random(120,200),random(200,255),random(0,100),random(0,100));
              quad(shapeX,shapeY, shapeX+shapeY/20,shapeY-20,shapeX+shapeY/10,shapeY,shapeX+shapeY/20,shapeY+50);
            }
            else if(shapeIndex == 2)
            {
              fill(random(150,200),random(0,200),random(100,200),random(0,100));
              circle(shapeX,shapeY, random(shapeY/16,shapeY/8));
            }
            else if(shapeIndex == 3)
            {  
              //rotate(arcAngle);
              fill(random(50,255),random(70,170),random(100,200),random(70,150));
              arc(shapeX, shapeY, random(shapeY/20,shapeY/10), random(shapeY/20,shapeY/10), PI, TWO_PI);
              arcAngle+=1;
            }
            else if(shapeIndex == 4)
            {
              fill(random(0,50),random(0,50),random(0,50),random(0,100));
              triangle(shapeX,shapeY, shapeX+shapeY/10,shapeY-shapeY/10,shapeX+shapeY/5,shapeY);
              arcAngle+=0.03;
            }
            else if(shapeIndex == 5)
            {
              fill(random(0,100),random(100,255),random(240,255),random(0,100));
              square(shapeX, shapeY, random(shapeY/16,shapeY/8));
            }
        arcAngle+=1.2;
        shapeY=shapeY+random(2,5);
    }
    displayLetter(index);
  }
  
  directedRandomShapesSetup();
}