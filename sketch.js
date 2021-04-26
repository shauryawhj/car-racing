var hypnoticBall, database;
var position;
var gameState=0
var playerCount
var player1,form1,game1;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game1=new game()
game1.getState()
game1.start()
}

function draw(){
  background("white");
  
    
}

