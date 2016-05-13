var canvas,ctx,cw,ch,cOffX,cOffY,cu;

var ratio = 4/3;	//Verhältnis Breite / Höhe

function renderInit(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	resizeCanvas();
	window.addEventListener("resize",resizeCanvas,false);
	
	ctx.fillStyle="black";
	ctx.fillRect(0,0,cw,ch);
}

function resizeCanvas(){
	cw = document.body.clientWidth;
	ch = document.body.clientHeight;
	
	if(ch * ratio < cw){
		cw = Math.round(ch * ratio);
		cOffX = (document.body.clientWidth - cw)/2;
		cOffY = 0;
	}else{
		ch = Math.round(cw * 1/ratio);
		cOffX = 0;
		cOffY = (document.body.clientHeight - ch)/2;
	}
	
	cu = ch/20;
	
	canvas.style.width = cw + "px";
	canvas.style.height = ch + "px";
	canvas.width = cw;
	canvas.height = ch;
	
	canvas.style.left = cOffX + "px";
	canvas.style.top = cOffY + "px";
}

function startDrawLoop(){
	window.requestAnimationFrame(draw);
}

//render Options

var groundPer = 0.1; //Bodenhöhe

function draw(){
	ctx.clearRect(0,0,cw,ch);
	
	for(x=0;x<gw;x++){
		for(y=0;y<gh;y++){
			var g = grid[x][y];
			
			//textur anhand type
			
			ctx.fillStyle="black";
			ctx.fillRect(g.pos.x*cu,ch*groundPer+g.pos.y*cu,cu,cu);
		}
	}
	
	window.requestAnimationFrame(draw);
}