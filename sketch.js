var dog,happyDog
var database
var foodS,foodStock

function preload()
{
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  this.Sprite = loadImage("dogImg.png");
  
}


function draw() {  
  if(keyWentDown(UP_ARROW)) {
   writeStocks(foodS);
   dog.addImage(dogHappy)
  }
  drawSprites();
  text(pressuparrowtogivedogfood)
  //add styles here

}

function readStocks(data) {
  foodS=data.val();
}


function writeStocks(x) {
  database.ref('/').update({
    Food:x
  })
}





