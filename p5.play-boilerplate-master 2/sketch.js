var apple, appleImg;
var a , p , p1 , l , e;
var aImg , pImg , lImg , eImg ;

function preload(){
appleImg= loadImage("fruits/apple.png");

aImg = loadImage("alphabet/a.png");
pImg = loadImage("alphabet/p.png");
lImg = loadImage("alphabet/l.png");
eImg = loadImage("alphabet/e.png");

}









function setup() {
  createCanvas(800,700);
  apple = createSprite(400, 550, 50, 50);
  apple.addImage(appleImg) ;

  a = createSprite(300, 250 );
  a.addImage(aImg);

  p = createSprite(100 , 150);
  p.addImage(pImg);

  p1 = createSprite(250, 110);
  p1.addImage(pImg);

  l = createSprite(150,240);
  l.addImage(lImg);

  e = createSprite(50,60);
  e.addImage(eImg);
}

function draw() {
  background("pink");  
  aa();

  drawSprites();
}

function aa(){
  if(mousePressedOver(a)){
    pp();
    a.visible =false;
    console.log("A is pressed");
    
  }
  

}

function pp(){
  if(mousePressedOver(p1) || mousePressedOver(p)){
    pp1()
    console.log("P is pressed");
    if(mousePressedOver(p1)){
      p1.visible = false;
    }
    else{
      p.visible=false;

    }
   
  }
  

}

function pp1(){
  if(mousePressedOver(p1) || mousePressedOver(p)){
    ll();
    console.log("P is pressed");
    if(mousePressedOver(p1)){
      p1.visible = false;
    }
    else{
      p.visible=false;

    }
    
  }
  

}

function ll(){
  ee(); 
  if(mousePressedOver(l)){
    l.visible = false;
    
}

  

}

function ee(){
  if(mousePressedOver(e)){
    e.visible = false;
  }

}

