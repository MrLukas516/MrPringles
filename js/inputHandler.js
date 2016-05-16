function inputHandlerInit(){
	window.addEventListener("keyup", keyUp, false);
	window.addEventListener("keydown", keyDown, false);
	
	player = {x:0,y:500,w:cu, h:cu, jumping:false,v:0};
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

var player;

function updatePlayerPos(){
	var verticalSpeed = cu/3;
	var horizontalSpeed = cu/10;
	var gravity = cu/50;
	
	if(keys[keyConfig.right]==true){movePlayer(horizontalSpeed,0);}
	if(keys[keyConfig.left]==true){movePlayer(-horizontalSpeed,0);}
	if(keys[keyConfig.up]==true){
		if(player.jumping==false && player.falling==false){
			player.v = -verticalSpeed;
			player.jumping = true;
		}
	}
	
	if(movePlayer(0,player.v).hy==true){
		player.jumping=false;
		player.v = gravity;
	}else{
		player.v+=gravity;
	}
	
	var nx1 = Math.floor((player.x)/cu);
	var nx2 = Math.floor((player.x + player.w-1)/cu);
	var ny2 = Math.floor((player.y + player.h)/cu);
	if(player.v>0 && ny2<=gh-1 && grid[nx1][ny2].type!="grass" && grid[nx2][ny2].type!="grass" ){
		player.falling=true;
	}else{
		player.falling=false;
	}
}

function movePlayer(vx,vy){
	var nvx = vx > 0 ? Math.min(Math.abs(vx),cu-1) : -Math.min(Math.abs(vx),cu-1);
	var nvy = vy > 0 ? Math.min(Math.abs(vy),cu-1) : -Math.min(Math.abs(vy),cu-1);
	
	var nx1 = Math.floor((player.x)/cu);
	var nx2 = Math.floor((player.x + player.w-1)/cu);	
	var ny1 = Math.floor((player.y + nvy)/cu);
	var ny2 = Math.floor((player.y + nvy + player.h-1)/cu);
	
	var hitX = false;
	var hitY = false;

	if(vy>0){
		if(ny2>gh-1 || grid[nx1][ny2].type=="grass" || grid[nx2][ny2].type=="grass"){
			player.y = ny1*cu;
			hitY=true;
		}
	}
	if(vy<0){
		if(ny1<0 || grid[nx1][ny1].type=="grass" || grid[nx2][ny1].type=="grass"){
			player.y = ny2*cu;
			hitY=true;
		}
	}
	
	if(hitY==false)player.y += vy;
	
	var nx1 = Math.floor((player.x + nvx)/cu);
	var nx2 = Math.floor((player.x + nvx + player.w-1)/cu);	
	var ny1 = Math.floor((player.y)/cu);
	var ny2 = Math.floor((player.y + player.h-1)/cu);
	
	if(vx>0){		
		if(nx2>gw-1|| grid[nx2][ny1].type=="grass" || grid[nx2][ny2].type=="grass"){
			player.x = nx1*cu;
			hitX = true;
		}
	}
	if(vx<0){		
		if(nx1<0 || grid[nx1][ny1].type=="grass"||grid[nx1][ny2].type=="grass"){
			player.x = nx2*cu;
			hitX = true;
		}
	}
	
	if(hitX==false)player.x += vx;
	
	return {hx:hitX , hy:hitY};
}