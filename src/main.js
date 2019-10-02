import {Rectangle} from './../lib/display.js';
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
	
	let r = new Rectangle();
	r.x = 100;
	r.y = 100;
	r.fillStyle = "red";
	r.render(ctx);
	console.log(r);
	console.log("init called");
}