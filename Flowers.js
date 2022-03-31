var arregloCarros=[];
var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
	
	for( let i=0; i<45; i++) {  
		var carroTemporal = new Car(i*20,random(1,10), color(random(100,245),random(100,238),random(1,height)));
		arregloCarros.push(carroTemporal); 
	}
	background('#2B2225');
  
}

function draw() {
  
  
  if(mouseIsPressed==false){
	background('#2B2225');
	}
	for( let i=0; i<arregloCarros.length; i++){
  	arregloCarros[i].display();   
		if(mouseX>width/2){
			arregloCarros[i].moveRight();
		}
		else if (mouseX<width/2){ 
			arregloCarros[i].moveLeft();
		}
    if(mouseY>height/2){
      arregloCarros[i].moveUP();
    }  
    if(mouseY<height/2){
        arregloCarros[i].moveDown();
    }
	}
}
class Car {

  constructor(posY, veloX, colorcito) {
    this.localizacion = createVector(random(width), posY);
    this.velocity = createVector(veloX, 0);
    this.colour = colorcito; 
    this.ypos = posY;
    this.widthCar = 60;
    this.heightCar = 30;
    this.rotacion = 0;

  }

  display() {
    noStroke();
    push();
    translate(this.localizacion.x, this.localizacion.y);
    rotate(this.rotacion);
    fill(this.colour);
    rectMode(CENTER);

    rect(0, 0, this.widthCar, this.heightCar, 15);
    rect(0, 0, this.heightCar, this.widthCar, 15);
   fill('#5D3F03');
    ellipse(0, 0, 30, 30, 15);
    pop();
    textSize(90);
    textAlign(CENTER);
    fill('#F96167');
    stroke('#FCE77D');
    strokeWeight(5);
    text("F",windowWidth/2,windowHeight/2);
  }
  moveRight() {
    this.localizacion.x = this.localizacion.x + this.velocity.x;
    if (this.localizacion.x > width) {
      this.localizacion.x = 0;
    }
    this.rotacion = this.rotacion + 0.2;
  }

  moveLeft() {
    this.localizacion.x = this.localizacion.x - this.velocity.x;
    if (this.localizacion.x < 0) {
      this.localizacion.x = width;
    }
    this.rotacion = this.rotacion - 0.1;
  }
  moveUP() {
    this.localizacion.y = this.localizacion.y + this.velocity.x;
    if (this.localizacion.y > height) {
      this.localizacion.y = 0;
    }
    this.rotacion = this.rotacion - 0.1;
  }
  moveDown() {
    this.localizacion.y = this.localizacion.y - this.velocity.x;
    if (this.localizacion.y < 0) {
      this.localizacion.y = height;
    }
    this.rotacion = this.rotacion - 0.1;
  }
}