import {Rectangle,stage} from './../lib/display.js';
export {init};

let canvas,ctx;
const canvasWidth=640, canvasHeight=480;

function init(canvasRef){
	canvas = canvasRef;
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	
	ctx = canvas.getContext('2d');
	ctx.fillStyle = "#ff33cc";
	ctx.fillRect(0,0,canvasWidth,canvasHeight);
	
	let bg = new Rectangle();
	bg.x = 0;
	bg.y = 0;
	bg.width = canvasWidth;
	bg.height = canvasHeight;
	bg.fillStyle = "taupe";
	stage.addChild(bg);
	
	let r = new Rectangle();
	r.x = 0;
	r.y = 0;
	r.width = 100;
	r.height = 100;
	r.fillStyle = "red";
	r.rotation = -Math.PI/8;

	
	let r2 = new Rectangle();
	r2.x = 100;
	r2.y = 0;
	r2.width = 100;
	r2.height = 100;
	r2.fillStyle = "purple";
	r2.rotation = -Math.PI/8;
	r2.pivotX=0;
	r2.pivotY=0;
	
	stage.addChild(r);
		stage.addChild(r2);
	
	stage.render(ctx);
	
	
	// r.render(ctx);
// 	console.log(r);
// 	console.log("init called");
}