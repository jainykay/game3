var stick, ninja;
var stick_image, ninja_image;
var boundary1, boundary2, boundary3, boundary4;
var wall1, wall2, wall3, wall4, wall5;
var wall6, wall7, wall8, wall9, wall10;
var wall11, wall12;

function preload() {
	stick_image = loadImage("images/stick.png");
	ninja_image = loadImage("images/ninja.png");
}

function setup() {
	canvas = createCanvas(600, 550);

	stick = createSprite(75, 70, 100, 100);
	stick.addImage(stick_image);
	stick.scale = 0.5;
	//stick.debug = true;
	stick.setCollider("rectangle", 0, 20, 50, 70);

	ninja = createSprite(width/2, height/2);
	ninja.addImage(ninja_image);
	ninja.scale = 0.5;

	boundary1 = createSprite(50, 275, 5, 450);
	//boundary1.debug = true;
	boundary2 = createSprite(550, 275, 5, 450);
	//boundary2.debug = true;
	boundary3 = createSprite(300, 50, 505, 5);
	//boundary3.debug = true;
	boundary4 = createSprite(300, 500, 505, 5);
	//boundary4.debug = true;

	wall1 = createSprite(100, 97, 5, 90);
	wall2 = createSprite(148, 140, 100, 5);
	wall3 = createSprite(100, 188, 100, 5);
	wall4 = createSprite(100, 215, 5, 50);
	wall5 = createSprite(148, 236, 5, 100);

	wall6 = createSprite(192, 260, 5, 150);
	wall7 = createSprite(148, 333, 91, 5);
	wall8 = createSprite(100, 370, 5, 170);
	wall9 = createSprite(242, 289, 5, 190);
	wall10 = createSprite(194, 382, 100, 5);
	wall11 = createSprite(146, 400, 5, 40);

	wall12 = createSprite(194, 450, 100, 5);

	
}

function draw() {
	background(224, 224, 224);

	if(keyDown(UP_ARROW)) {
		stick.y = stick.y - 3;
	}

	if(keyDown(DOWN_ARROW)) {
		stick.y = stick.y + 3;
	}

	if(keyDown(LEFT_ARROW)) {
		stick.x = stick.x - 3;
	}

	if(keyDown(RIGHT_ARROW)) {
		stick.x = stick.x + 3;
	}

	//collide code

	stick.collide(boundary1);
	stick.collide(boundary2);
	stick.collide(boundary3);
	stick.collide(boundary4);

	stick.collide(wall1);
	stick.collide(wall2);
	stick.collide(wall3);
	stick.collide(wall4);
	stick.collide(wall5);
	
	stick.collide(wall6);
	stick.collide(wall7);
	stick.collide(wall8);
	stick.collide(wall9);
	stick.collide(wall10);
	
	stick.collide(wall11);

	//end collide code

	drawSprites();
}