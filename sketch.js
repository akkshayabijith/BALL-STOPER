var canvas;
var music,block1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(10,300,10,600);
    block1.shapeColor = "orange";

    block2 = createSprite(400,590,800,10);
    block2.shapeColor = "silver";

    block3 = createSprite(790,300,10,600);
    block3.shapeColor = "red";

    block4 = createSprite(400,10,800,10);
    block4.shapeColor = "yellow";
    //create 4 different surfaces


    //create box sprite and give velocity
    ball = createSprite(random(20,700),random(20,500),20,20);
    ball.shapeColor = "white";
    ball.velocityY = -5;
    ball.velocityX = -5;
}

function draw() {
    background("black");
    //create edgeSprite

    colorQ();  

    drawSprites();

    //add condition to check if box touching surface and make it bo
}

function colorQ(){
    if(block1.isTouching(ball)   &&  ball.bounceOff(block1)  ){
        ball.shapeColor = "orange";
        music.play();
    }

    if(block2.isTouching(ball)  && ball.bounceOff(block2)  ){
        ball.shapeColor = "silver";
        music.play();
    }
    if(block3.isTouching(ball)  &&  ball.bounceOff(block3) ){
        ball.shapeColor = "red";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    if(block4.isTouching(ball)  && ball.bounceOff(block4) ){
        ball.shapeColor = "yellow";
        music.stop();
    }
    
}
