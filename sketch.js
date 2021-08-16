// p5.glitch-image
// cc teddavis.org 2020

let glitch;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	loadImage('keywords.png', function(im){
		glitch.loadImage(im);
	});
}

var minByte=100;
var maxByte=104;
var byteMultiplier=0.2;
var pixelateMultiplier=1;

function draw(){
	// glitch.resetBytes();
	background(0);
	if(mouseIsPressed){
		pixelateMultiplier-=0.05;
		glitch.replaceBytes(minByte*(byteMultiplier), maxByte*(byteMultiplier)); // swap all decimal byte 100 for 104
		glitch.randomBytes(1); // add one random byte for movement
		glitch.pixelate(pixelateMultiplier);
	}

	glitch.buildImage();
	image(glitch.image, width/2, height/2)

}
