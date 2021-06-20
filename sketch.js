const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var engine,world;
var maxSnow=100;
var snowfall = [];
var snow,bgImg;
function preload(){
  bgImg = loadImage("snow1.jpg");
}
function setup() {
 engine =  Engine.create();
 world = engine.world;
  createCanvas(800,400);
  if(frameCount%200==0){
  for(var i =0;i<maxSnow;i++){
    snowfall.push(new Snow(random(0,800),random(0,400)));

  }
}
}

function draw() {
  Engine.update(engine);
  background(bgImg);  
  drawSprites();
  
  for(var i =0;i<snowfall.length;i++){
    snowfall[i].display();
    snowfall[i].update();
  }
}
