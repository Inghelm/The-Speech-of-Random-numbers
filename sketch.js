// The Speech of random numbers - P5JS - Speech lib.
// It`s a kind of sound book - of the book of random numbers.
// Design By : MR K.ING
var myVoice = new p5.Speech();
var reloadbutton;

function setup() {
   let canvas = createCanvas(windowWidth, 400);
   canvas.parent('canvascontainer');
   background(255, 0, 0);
   fill(255, 255, 255, 100);
   textSize(30);
   textAlign(CENTER);
   text("The Speech of", width/2, height/4);
   text("Random numbers", width/2, height/2.8);
   text(getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10), width/2, height/1.8);
   text(getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10), width/2, height/1.5);
   text(getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10), width/2, height/1.3);
   reloadbutton = createButton('New numbers');
   reloadbutton.position(50,50);
   reloadbutton.mousePressed(reload);
   myVoice.speak('The Speech of random numbers' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + 
    getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10));
}
function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
}
function reload() {
   window.location.reload();
}
function windowResized() {
   resizeCanvas(windowWidth, 400);
   background(255, 0, 0);
   fill(255, 255, 255, 100);
   textSize(30);
   textAlign(CENTER);
   text("The Speech of", width/2, height/3);
   text("Random numbers", width/2, height/2);
   text(getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10), width/2, height/1.8);
   text(getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10), width/2, height/1.5);
   text(getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + '   ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10), width/2, height/1.3);
   reloadbutton = createButton('New numbers');
   reloadbutton.position(50,50);
   reloadbutton.mousePressed(reload);
   myVoice.speak(getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + 
    getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10));
}
