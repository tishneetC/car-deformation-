var car, wall; 
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = (80,80,80);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed; 

}

function draw() {
  background(255,255,255); 
  
  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.x - wall.x < wall.height/2 + car.height/2
    && wall.x - car.x < wall.height/2 + car.height/2 ){

      if(0.5 * weight * speed * speed/22500 < 100){

        car.shapeColor = "green";

      }
      else if(0.5 * weight * speed * speed/22500 > 100 && 0.5 * weight * speed * speed/22500 < 180 ){

        car.shapeColor = "yellow";

      }
      else{

        car.shapeColor = "red";

      }

    }
  
  drawSprites();
}