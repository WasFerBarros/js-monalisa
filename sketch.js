function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("#FF5722");
  fill("#03A9F4");
  circle(200,200,300);// rosto
  fill("white");
  circle(150,150,60); //olha esquerdo
  circle(250,150,60); //olho direito
  line(150,270,250,270); //boca
  fill("blue")
  triangle(200,180,170,220,220,220); //nariz
  line(120,110,176,116); //sombrancelha esquerda
  line(225,116,277,110); //sombrancelha direita
  olhoX=map(mouseX,0,800,130,165); // nova pupila esquerda
  olhoY=map(mouseY,0,800,130,165); //nova pupila direita
  
  circle(olhoX,olhoY,10);
  circle(olhoX+100,olhoY,10);
  
 
}
