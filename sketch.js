var myVoice = new p5.Speech();
var refreshbutton, fivenewbutton, onenewbutton;
var myVoiceA = new p5.Speech();
var myVoiceB = new p5.Speech();

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
   myVoice.speak('The Speech of random numbers' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + 
    getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' +
	getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10) + ' ' + getRandomInt(10));
	refreshbutton = createButton('Refresh / New numbers');
    refreshbutton.position(40,40);
    refreshbutton.mousePressed(refresh);
	fivenewbutton = createButton('Five new numbers');
    fivenewbutton.position(40,65);
    fivenewbutton.mousePressed(fivemore);
	onenewbutton = createButton('One new number');
    onenewbutton.position(40,90);
    onenewbutton.mousePressed(onemore);
}
function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
}
function makeid() {
  var text = "";
  var possible = "0123456789"; 
   for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
   return text;
}
function onemorex() {
  var text = "";
  var possible = "0123456789";
   for (var i = 0; i < 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
   return text;
}
function refresh() {
   window.location.reload();
}
function fivemore() {
   myVoiceA.speak('New five is ' + makeid());	 
}
function onemore() {
   myVoiceB.speak('Your new number is ' + onemorex());	 
}
