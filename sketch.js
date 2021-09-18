// p5.glitch-image
// cc teddavis.org 2020

let glitch;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	loadImage('./textures/keywords.png', function(im){
		glitch.loadImage(im);
	});
}

var minByte=100;
var maxByte=104;
var byteMultiplier=0.2;
var pixelateMultiplier=1;
var mouseclickedcount=0;

function draw(){
	// glitch.resetBytes();
	background(0);
	fill(255);
	text('click to glitch', 40, 10);
	textAlign(CENTER, CENTER);

	if(mouseIsPressed){

		mouseclickedcount+=1;
		pixelateMultiplier-=0.05;
		glitch.replaceBytes(minByte*(byteMultiplier), maxByte*(byteMultiplier)); // swap all decimal byte 100 for 104
		glitch.randomBytes(1); // add one random byte for movement
		glitch.pixelate(pixelateMultiplier);
	}

	glitch.buildImage();
	image(glitch.image, width/2, height/2)
	if(mouseIsPressed){
		noStroke();
		text(mouseclickedcount,mouseX,mouseY-10);
	}

	if(mouseclickedcount>3){
		background(0,0,0,20);
		text('Generation loss occurs when the transduction of data creates artifacts, thus, these progressive,',width/2, height/2+20);
		text('overlapping processes compound themselves into a spiral of self-destruction.,',width/2, height/2+30);
		textAlign(CENTER, CENTER);

	}
}
