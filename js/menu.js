var buttons = [];
var buttonOff = 0.5;
var buttonWidth = 0.5;
var buttonHeight = 0.1;
var buttonSpacing = 0.01;
var menuOpen = true;

function menuInit(){
	if(ctx==null){
		console.error("Canvas not initialized");
		return;
	}
	
	window.addEventListener("click", menuClick, false);
	
	buttons.push({text:"Start", fctn:startGame});
	
	
	for(b=0;b<buttons.length;b++){
		ctx.fillStyle="gray";
		var x = (cw-buttonWidth*cw)/2;
		var y = ch*buttonOff + b*buttonHeight*ch + b*buttonSpacing*ch;
		ctx.fillRect(x,y,buttonWidth*cw,buttonHeight*ch);
	}
}

function menuClick(e){
	if(menuOpen==false)return;
	
	for(b=0;b<buttons.length;b++){
		var x = (cw-buttonWidth*cw)/2;
		var y = ch*buttonOff + b*buttonHeight*ch + b*buttonSpacing*ch;
		var w = cw*buttonWidth;
		var h = ch*buttonHeight;
		
		var mx = e.pageX-cOffX;
		var my = e.pageY-cOffY;
		
		if(mx>x && mx<x+w && my>y && my<y+h){
			buttons[b].fctn();
			console.log(buttons[b].text+" clicked");
			break;
		}
	}
}

function startGame(){
	menuOpen = false;
	
	levelIndex=0;
	gameInit();
}