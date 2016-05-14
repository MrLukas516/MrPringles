window.addEventListener("load",init,false);

function init(){
	renderInit();
	menuInit();
	inputHandlerInit();
}

function gameInit(){
	gridInit();
	startDrawLoop();
}