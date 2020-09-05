var car , wall, line;
var speed , weight;

function setup() {
  createCanvas(800,400);
   speed = Math.round(random(55, 90));
   weight = random(400, 1500);
   car = createSprite(200, 50, 20, 10);
   car . shapeColor = "white";
   car.velocityX = speed;
   car2 = createSprite(200, 100, 20, 10);
   car2.shapeColor = 'white';
   car2.velocityX =speed;
   car3 = createSprite(200, 150, 20, 10);
   car3.velocityX = speed;
   car3.shapeColor = "white";
   car4 = createSprite(200, 200, 20, 10);
   car4.shapeColor = 'white';
   car4.velocityX = speed;
   wall = createSprite(1500, 50, 15, 30);
   wall.shapeColor = color(50, 50, 50);
   wall2 = createSprite(1500, 100, 15, 30);
   wall2.shapeColor = color(50, 50, 50);
   wall3 = createSprite(1500, 150, 15, 30);
   wall3.shapeColor = color(50, 50, 50);
   wall4 = createSprite(1500, 200, 15, 30);
   wall4.shapeColor = color(50, 50, 50);
   line = createSprite(1000, 70, 1600, 5);
   line.shapeColor = "white";
   line2 = createSprite(1000, 120, 1600, 5);
   line2.shapeColor = "white";
   line3 = createSprite(1000, 170, 1600, 5);
   line3.shapeColor = "white";
   

}

function draw() {
  createCanvas(1600, 400);
  background(20,20,20);  

  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight*speed*speed/22509;

    if(deformation>180) {
      car.shapeColor = color(0, 255, 0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = color(230, 230, 0);
    }

    if(deformation<100) {
      car.shapeColor = color(255, 0, 0);
    }
  }
  if(wall.x-car2.x < (car2.width+wall.width)/2) {
    car2.velocityX = 0;
    var deformation = 0.5 * weight*speed*speed/22509;

    if(deformation>180) {
      car2.shapeColor = color(0, 255, 0);
    }

    if(deformation<180 && deformation>100){
      car2.shapeColor = color(230, 230, 0);
    }

    if(deformation<100) {
      car2.shapeColor = color(255, 0, 0);
    }
  }
  if(wall.x-car3.x < (car3.width+wall.width)/2) {
    car3.velocityX = 0;
    var deformation = 0.5 * weight*speed*speed/22509;

    if(deformation>180) {
      car3.shapeColor = color(0, 255, 0);
    }

    if(deformation<180 && deformation>100){
      car3.shapeColor = color(230, 230, 0);
    }

    if(deformation<100) {
      car3.shapeColor = color(255, 0, 0);
    }
  }
  if(wall.x-car4.x < (car4.width+wall.width)/2) {
    car4.velocityX = 0;
    var deformation = 0.5 * weight*speed*speed/22509;

    if(deformation>180) {
      car4.shapeColor = color(0, 255, 0);
    }

    if(deformation<180 && deformation>100){
      car4.shapeColor = color(230, 230, 0);
    }

    if(deformation<100) {
      car4.shapeColor = color(255, 0, 0);
    }
  }
  drawSprites();
}