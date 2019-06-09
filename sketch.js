var xbeg = 320;
var x = 200;
var y = 360;
var ybeg = 165;
var xtut = 80;
var ytut = 165;
var xj = 320;
var yj = 450;
var disparo = false;
var xd;
var yd;
var vidas=3;
var pontos=0;
var dificuldade=1;
var xi=[];
var yi=[];
var tela = 1;
var velo = 1;
var contEx = 0; 
var contpac = 0;
var animaEx = false;
var xe;
var ye;
var fc = 0;

let img1,img2,img3,im4,img5,img6,expl;
function preload() {
  mySound = loadSound('pacman_beginning.wav');
  img1 = [loadImage('pacc4.png'), loadImage('pacc312.png')]
  //img1 = loadImage('pacc4.png');
  img2 = loadImage('tromb3.png');
  img3 = loadImage('ini222.png');
  img4 = loadImage('ini111.png');
  img5 = loadImage('ini33.png');
  img6 = loadImage('ini4444.png');
  expl = [loadImage('explo1.png'), loadImage('explo2.png'), loadImage('explo3.png'), loadImage('explo4.png'), loadImage('explo5.png')]
}

function abre(i){
  
	if (i==0){
          image(img3,xi[i],yi[i]);
          imageMode(CENTER);
		xi[i]=xi[i]-(velo+4.6);
		 if(xi[i] < -30){
	     xi[i] = 665;
		 yi[i] = random(55, 55+105-35)
		 }
	 }else{
	 if (i==1){
         image(img4,xi[i],yi[i]);
          imageMode(CENTER);
		 xi[i]=xi[i]-(velo+6);
		 if(xi[i] < -30){
	 xi[i] = 665;
		 yi[i] = random(105+55, 55+2*105-35)
		 }
	 }else{
		 if (i==2){
           image(img5,xi[i],yi[i]);
          imageMode(CENTER);
		 xi[i]=xi[i]-(velo+5);
		 if(xi[i] < -30){
		 xi[i] = 665;
			 yi[i] = random(210+55, 55+3*105-35)
		 }
		 }else{
		 if (i==3){
             image(img6,xi[i],yi[i]);
            imageMode(CENTER);
			 xi[i]=xi[i]-(velo+5.5);
			 if(xi[i] < -30){
		 xi[i] = 665;
			 yi[i] = random( 315+55, 55+4*105-35)
			 }
		 } 
		 }
	 }
	 }
}

function calculaY(){
	// geração de cada retangulo(obstáculo) em partes da tela(4 partes)
	// criação de uma função a fim de otimizar o código
		for (i=0; i<4; i++){
	    abre(i);
		}
}
  function setup() {
      mySound.setVolume(0.09);
      mySound.play();
      createCanvas(640, 480);
      frameRate(60)
        xj = 40;
        xd = xj;
        yj = 250;
        yd = yj;
      for(i=0;i<4;i++){
        xi[i] = -50;
	   }
    calculaY();
  }
  function draw() {
    fc++
  if (tela==1){
  background(0);
  fill(255)
  stroke('#fff700')
  strokeWeight(2)
  textSize(40.20)
  fill('#0029ff')
  text("Welcome to Explosive Pacman", 320,60) 
  textAlign(CENTER)
  image(img1[contpac],xbeg,ybeg, 300,300);
          if(fc%10==0){
            contpac++;
          }
          if(contpac>1){
           contpac = 0; 
          }
          
  imageMode(CENTER);
  stroke('#fff700')
  strokeWeight(2)
  textSize(40.20)
  fill('#0029ff')
  text("Press ' T ' for the tutorial", 320,y-50) 
  textAlign(CENTER)
  stroke('#fff700')
  strokeWeight(2)
  textSize(40.20)
  fill('#0029ff')
  text("Press ' Enter ' to start playing", 320,440) 
  textAlign(CENTER)
  image(img3,x,y,100,100)
  imageMode(CENTER)
  image(img6,x+80 ,y,100,100)
  imageMode(CENTER)
  image(img5,x+160 ,y,100,100)
  imageMode(CENTER)
  image(img4,x+240 ,y,100,100)
  imageMode(CENTER) 
    if(keyIsDown(ENTER)){
      tela = 3;
    }
    if(keyIsDown(84)){
      tela = 2;
    }
      }
  if(tela == 2){
  background(0);
  fill(255)
  stroke('#fff700')
  strokeWeight(2)
  textSize(40.20)
  fill('#0029ff')
  text("Tutorial", 320,60) 
  textAlign(CENTER)
  image(img1[contpac],xtut,ytut, 300,300);
          if(fc%10==0){
            contpac++;
          }
          if(contpac>1){
           contpac = 0; 
          }
          
  imageMode(CENTER);
  stroke('#fff700')
  strokeWeight(2)
  textSize(30)
  text("The objective of the game is to des-", 380,140) 
  textAlign(CENTER)
  stroke('#fff700')
  strokeWeight(2)
  textSize(30)
  text("troy the more annoying enemies of", 375,170) 
  textAlign(CENTER)
  stroke('#fff700')
  strokeWeight(2)
  textSize(30)
  text("Pacman who do not let him live in", 370,200) 
  textAlign(CENTER)
  stroke('#fff700')
  strokeWeight(2)
  textSize(30)
  text("peace.", 370,230) 
  textAlign(CENTER)
  stroke('#fff700')
  strokeWeight(2)
  textSize(30)
  text("Press ' Control ' to destroy them.", 363,300) 
  textAlign(CENTER)
  stroke('#fff700')
  strokeWeight(2)
  textSize(30)
  text("Press ' up ' or ' down ' to scroll.", 350,362.5) 
  textAlign(CENTER)
  stroke('#fff700')
  strokeWeight(2)
  textSize(30)
  text("Press ' Enter ' to start.", 292,435) 
  textAlign(CENTER)
    if(keyIsDown(ENTER)){
     tela = 3; 
    }
    }
	  if (tela==4){
	      // tela do game over
		  background(0);
		  fill(random(0,255),random(0,255),random(0,255))
		  textSize(60);
		  textAlign(CENTER);
		  text('GAME OVER', 320, 240);
		  rect(143, 245, 360, 7);
		  fill(255, 255, 255);
		  fill(random(0,255),random(0,255),random(0,255))
		  textSize(20);
		  textAlign(CENTER);
		  text("Press ' Enter ' to restart", 320, 280);
        if(keyIsDown(ENTER)){
         tela = 3; 
         vidas = 3;
         dificuldade = 1;
         pontos = 0;
        }
	  }
	  if(tela == 3){
		noStroke();
		if (keyIsDown(CONTROL) && (! disparo)){
			disparo = true;
			xd = xj;
			yd = yj;
			}
		if (disparo){
		   xd = xd +10;
		
		   if (xd > width){
			  disparo = false;
		   }
		}
		
		
		// controle do personagem (cima em baixo)
		if (keyIsDown(UP_ARROW))
		  yj-=6
		if (keyIsDown(DOWN_ARROW))
		  yj+=6
      if( yj<73){
        yj=73
      }
		if (yj>=450)
		  yj=450;
		  background(0)
		//Desenhos do cenario//
		  fill (255, 255, 255)
		  textSize(32);
		  text('Life: '+vidas, 50, 30);
		  text('Points: '+pontos, 320, 30);
		  text('Level: '+dificuldade, 583, 30);
		  rect(-1, 40, 645, 12);
          //text(mouseX, 70, 70);
		  //text(mouseY, 140, 70);
        
          //animação pacman
          image(img1[contpac],xj,yj);
          if(fc%10==0){
            contpac++;
          }
          if(contpac>1){
           contpac = 0; 
          }
          
          imageMode(CENTER);
		  /*text(mouseX, 10, 70);
		  text(mouseY, 70, 70);*/
		if (disparo){
			//elipse disparada
            ellipse(xd, yd, 8, 8);
            image(img2,xd,yd); 
            imageMode(CENTER);
		  }
		
		for (i=0; i<4; i++){
			// geração de 4 inimigos 
		}
		// geração de cada retangulo(obstáculo) em partes da tela(4 partes)
		calculaY();
        if (animaEx == true){
          image(expl[contEx],xe,ye);
          contEx++;
          if(contEx>4){
          contEx = 0;
          animaEx = false;
          }
        }
        for(i=0;i<4;i++){
          if(dist(xj,yj,xi[i],yi[i]) < 35){
                xj = 40;
				yj = 250;
				xi[i] = 665;
                abre();
				vidas--;
				if(vidas==0){
					// Fim do jogo
					tela = 4;
				}
			}
          
          
          
          if(dist(xi[i],yi[i],xd,yd)<19 && disparo==true){
                disparo = false;
                xe = xd;
                ye = yd; 
			  	xd = xj;
				yd = yj;
				pontos++;
                animaEx = true;
                xi[i] = 1000;
                if(i==0){
                  yi[i] = random(55, 55+105-35)
                }
                else{
                  if(i==1){
                     yi[i] = random(105+55, 55+2*105-35) 
                  }
                  else{
                    if(i==2){
                    yi[i] = random(210+55, 55+3*105-35)
                  }
                }
                if(i==3){
                  yi[i] = random( 315+55, 55+4*105-35)
                }
                }
                if(pontos%10 == 0 && pontos>0){
                 velo++; 
                 dificuldade++;
                }
          }
          }
		
		}
	}