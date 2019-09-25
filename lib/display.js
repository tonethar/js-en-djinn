

/*
DisplayObject
------

The abstract parent class for all sprites

*/

const Display = Object.freeze({
	strokeStyleNone : null,
	fillStyleNone : null
});

class DisplayObject {
  constructor() {
  	//if (new.target === DisplayObject) throw TypeError("ERROR: new instance of abstract class DisplayObject not allowed");
  	this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    this.rotation = 0;
    this.alpha = 1;
    this.visible = true;
    this.scaleX = 1;
    this.scaleY = 1;
  }
  
}

class Rectangle extends DisplayObject {
  constructor(
    width = 32, 
    height = 32, 
    fillStyle = "gray", 
    strokeStyle = Display.strokeStyleNone, 
    lineWidth = 0, 
    x = 0, 
    y = 0
  ){
    //Call the DisplayObject's constructor
    super();

    //Assign the argument values to this sprite 
    Object.assign(
      this, {width, height, fillStyle, strokeStyle, lineWidth, x, y}
    );

  }
  //The `render` method explains how to draw the sprite
  render(ctx) {
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.fillStyle;
    ctx.beginPath();
    ctx.rect(
      //Draw the sprite around its `pivotX` and `pivotY` point
      -this.width * this.pivotX, 
      -this.height * this.pivotY, 
      this.width, 
      this.height
    );
    if (this.strokeStyle !== Display.strokeStyleNone) ctx.stroke();    
    if (this.fillStyle !== Display.fillStyleNone) ctx.fill();
  }
}