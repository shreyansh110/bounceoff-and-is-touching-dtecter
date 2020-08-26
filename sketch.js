
var fixedrect,object1;
var box1,box2;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  movingrect=createSprite(500,200,50,50);
  movingrect.shapeColor="green";
  box1=createSprite(400,100,50,50);
  box1.shapeColor="yellow";
  box2=createSprite(100,100,50,50);
  box2.shapeColor="black";
  
 // movingrect.debug=true;
  //fixedrect.debug=true;
  movingrect.velocityX=-5;
  fixedrect.velocityX=5;
  box1.velocityX=-7;
  box2.velocityX=7;
}

function draw() {
  background(255,255,255);  
//movingrect.y=World.mouseY;
//movingrect.x=World.mouseX;



if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.width/2){
 movingrect.velocityX=movingrect.velocityX*-1;
 fixedrect.velocityX=fixedrect.velocityX*-1;
movingrect.shapeColor="red";
fixedrect.shapeColor="red";

}
else{

  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}


if(isTouching(box1,box2)){

box1.shapeColor="red";
box2.shapeColor="blue";


}

bounceOff(fixedrect,movingrect); 
  drawSprites();
}


