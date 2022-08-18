


//Crie um namespace (espaço de nomes) para Mecanismo
const Engine=Matter.Engine;
//Crie um namespace (espaço de nomes) para Mundo
const World=Matter.World;
//Crie um namespace (espaço de nomes) para Corpos
const Bodies=Matter.Bodies;
//Crie um namespace (espaço de nomes) para Corpo
const Body=Matter.Body;

var world;
var engine;
var ground;
var bt1;
var angle=60;
var fan1;
var fan2;
var fan3;
var fan4;
var con;
var ball;

function setup() {
  createCanvas(400,400);
//crie o mecanismo
engine= Engine.create();
  //Adicione mundo ao mecanismo
  world=engine.world;



   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true

    
   };
  
   

  


   bt1=createImg("up.png");
   bt1.position(350,50);
   bt1.size(50,50);
   bt1.mouseClicked(vForce);

//crie o solo
ground=Bodies.rectangle(200,390,400,20,ground_options);
//adicione ao mundo
World.add(world,ground);


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 //ground1=Bodies.rectangle(100,300,100,20,ground_options);
 // World.add(world,ground1);

//fan1= new Ground(50,370,50,30);
//fan2= new Ground(150,370,50,30);
//fan3= new Ground(250,370,50,30);
//fan4= new Ground(350,370,50,30);


  rectMode(CENTER);
  ellipseMode(RADIUS);

  con=Matter.Constraint.create({
    pointA:{x:200 , y:20 } ,
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1,
   })

  World.add(world,con)
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  


  ellipse(ball.position.x,ball.position.y,20);
  //escreva uma função de retângulo para exibir o solo.
 rect(ground.position.x,ground.position.y,400,20);
push()
 strokeWeight(2);
 stroke(255);
line(con.pointA.x,con.pointB.y,ball.position.x,ball.position.y)
pop()

// Matter.Body.rotate(ground1,angle);
// push();
// translate(ground1.position.x,ground1.position.y);
// rotate(angle);
//   rect(0,0,100,20);
//   pop();
//   angle+=0.1;

//fan1.show();
//fan2.show();
//fan3.show();
//fan4.show();
}

function vForce(){
Matter.Body.applyForce(ball,{x:0,y:0},  {x:0.05,y:0});


}