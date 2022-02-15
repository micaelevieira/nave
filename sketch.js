var fundo;
var jogador;
var inimigo;
var balaImg;
var inimigoImg;
var jogadorImg;
var balaJ;

function preload(){
  fundoImg = loadImage("fundo.png")
  balaImg = loadImage("bala.png");
  inimigoImg = loadImage("inimigo.png")
  jogadorImg = loadImage("jogador.png")
}
  
function setup(){

  fundo = createSprite(200,200,400,400);
  fundo.addImage(fundoImg);
  fundo.velocityY = 1

  jogador = createSprite(200,350);
  jogador.addImage(jogadorImg);
  jogador.scale = 0.3;

  inimigo = createSprite(200,80);
  inimigo.scale = 0.3;
  inimigo.addImage(inimigoImg);
  inimigo.velocityX = -5;
}  
  
  
function draw() {
  background(180);
  console.log(fundo.y)
  if(fundo.y>400){
    fundo.y = 100;
    
  }
  fundo.velocityY = 3;
  if(keyDown("space")){
    atirar();
    
    
  }
  jogador.x = World.mouseX;
  jogador.y = World.mouseY;
  
  
  createEdgeSprites();
  //inimigo.bounceOff(edges);
 
 drawSprites(); 
}
function atirar(){
  
balaJ = createSprite(jogador.x,jogador.y);  
balaJ.addImage(balaImg);
balaJ.scale = 0.05;
balaJ.velocityY = -3;
balaJ.depth = jogador.depth;
jogador.depth = jogador.depth+1;
  
}