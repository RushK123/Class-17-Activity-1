var box1, box2 ; 

function setup() {
  
  createCanvas(400,400);
  box1 = new Box(0,0,50,50,2,0);
  box2 = new Box(200,200, 100,50,2,3);
  
}

function draw() 
{

  background(51);
  
  box1.display();
  box1.move();
  box1.bounce();
  box2.display();
  box2.move();
  box2.bounce();
 
}

