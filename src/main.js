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
	console.log("init called");
}