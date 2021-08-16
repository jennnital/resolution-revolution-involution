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

function draw(){

	glitch.resetBytes();

	glitch.replaceBytes(minByte, maxByte); // swap all decimal byte 100 for 104
	glitch.randomBytes(1); // add one random byte for movement

	glitch.buildImage();
	image(glitch.image, width/2, height/2)

}
function mousePressed(){
	glitch.resetBytes();
	glitch.replaceBytes(minByte*randomByte, maxByte*randomByte); // swap all decimal byte 100 for 104
	glitch.randomBytes(4); // add one random byte for movement

	glitch.buildImage();
	image(glitch.image, width/2, height/2)
}
