function inputHandlerInit(){
	window.addEventListener("keyup", keyUp, false);
	window.addEventListener("keydown", keyDown, false);
}

var keys = [];
var keyConfig = {
	up: 87,
	down: 83,
	left: 65,
	right: 68,
};

function keyDown(e){
	keys[e.keyCode]=true;
}

function keyUp(e){
	keys[e.keyCode]=false;
}