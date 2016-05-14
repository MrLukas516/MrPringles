function inputHandlerInit(){
	window.addEventListener("keyup", keyUp, false);
	window.addEventListener("keydown", keyDown, false);
	
	player = {x:0,y:0,jumping:false,v:0};
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
	
	if(keys[keyConfig.right]==true){player.x+=horizontalSpeed;}
	if(keys[keyConfig.left]==true){player.x-=horizontalSpeed;}
	if(keys[keyConfig.up]==true){
		if(player.jumping==false){
			player.v = verticalSpeed;
			player.jumping = true;
		}
	}
	
	if(player.jumping==true){
		player.y-=player.v;
		player.v-=gravity;
		
		if(player.y>0){player.jumping=false;player.y=0;}	//hier später kollisionsabfrage
	}
}