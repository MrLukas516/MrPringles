var grid,gh,gw;

function gridInit(){
	level = loadLevel(levelIndex);
	
	gw = level.gw;
	gh = level.gh;
	grid = new Array(gw);
	for(x=0;x<gw;x++){grid[x]=new Array(gh);}
	
	for(x=0;x<gw;x++){
		for(y=0;y<gh;y++){
			grid[x][y]={
				type:"air",		//später level-daten
				pos:{
					x: x,
					y: y-level.gl
				},
				objectData:null
			};
		}
	}
}

var levelIndex;
var level;
//temporär, später json-datei laden
var levels = [
	JSON.stringify({gw:200,gh:64,gl:32,data:'',objects:[]})
];

function loadLevel(l){
	var lvlData = levels[l];	//temporär, später json-datei laden
	return JSON.parse(lvlData);
}