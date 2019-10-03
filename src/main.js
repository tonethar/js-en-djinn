import {Rectangle,stage,Text} from './../lib/display.js';
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
	bg.fillStyle = "yellow";
	stage.addChild(bg);
	
	let r = new Rectangle(0,0,100,100,"red");
	r.rotation = Math.PI/8;

	
	let r2 = new Rectangle(100,0,100,100,"purple");
	r2.rotation = Math.PI/12;
	r2.pivotX=1;
	r2.pivotY=1;
	
	stage.addChild(r);
	stage.addChild(r2);
	
	let eye1 = new Rectangle(0,0,10,10,"green");
	r.addChild(eye1);
	
	let title = new Text(200,0,"Title Goes Here");
	bg.addChild(title)
	
	
	
	loop();
	
	function loop(){
		requestAnimationFrame(loop);
		r.rotation += .05;
		r2.rotation += .05;
		stage.render(ctx);
	}
	
}