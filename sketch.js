var fundoImg, fundo;
var fogueteImg, foguete;
var meteoro, meteoroImg;

function preload() {

   fundoImg = loadImage("fundo.webp");
   fogueteImg = loadImage("foguete.png");
   meteoroImg = loadImage("meteoro.jpg");


}


function setup() {
  createCanvas(800,800);
  fundo = createSprite(400, 400);
  fundo.addImage(fundoImg);
  fundo.scale = 1.8;
  foguete = createSprite(400, 400);
  foguete.addImage(fogueteImg);
  foguete.scale = 0.2;
  meteoro = createSprite(300, 300);
  meteoro.addImage(meteoroImg);
  meteoro.scale = 0.1;

  
}

function draw() {
  background(fundoImg); 
  
  fundo.velocityY = 4;

  if (fundo.y > 800) {
     fundo.y = 400;
  }

  foguete.x = mouseX;
  foguete.y = mouseY;

  edges = createEdgeSprites();

  foguete.collide(edges[3]);
  

  drawSprites();

}