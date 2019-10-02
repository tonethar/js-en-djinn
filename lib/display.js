

/*
DisplayObject
------

The abstract parent class for all sprites

*/
export {Rectangle,stage};

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
    
    this.pivotX = 0.5;
    this.pivotY = 0.5;
    
    this.children = []
    this.parent = undefined;
    
  }
  
   addChild(sprite) {
    //Remove the sprite from its current parent, if it has one, and
    //the parent isn't already this object
    if (sprite.parent) {
      sprite.parent.removeChild(sprite);
    }
    //Make this object the sprite's parent and
    //add it to this object's `children` array
    sprite.parent = this;
    this.children.push(sprite);
  }
}


let stage = new DisplayObject()
stage.render = function render(ctx) {
	let canvas = ctx.canvas;
  //Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Loop through each sprite object in the stage's `children` array
  this.children.forEach(sprite => {

    //Display a sprite 
    displaySprite(sprite);
  });
  
  
  function displaySprite(sprite) {

    //Only display the sprite if it's visible
    //and within the area of the canvas
   //  if (
//       sprite.visible
//       && sprite.gx < canvas.width + sprite.width
//       && sprite.gx + sprite.width >= -sprite.width
//       && sprite.gy < canvas.height + sprite.height
//       && sprite.gy + sprite.height >= -sprite.height
//     ) {

      //Save the canvas's present state
      ctx.save();

      //Shift the canvas to the center of the sprite's position
      ctx.translate(
        sprite.x + (sprite.width * sprite.pivotX),
        sprite.y + (sprite.height * sprite.pivotY)
      );

      //Set the sprite's `rotation`, `alpha` and `scale`
      ctx.rotate(sprite.rotation);
      ctx.globalAlpha = sprite.alpha * sprite.parent.alpha;
      ctx.scale(sprite.scaleX, sprite.scaleY);

      //Display the sprite's optional drop shadow
      if(sprite.shadow) {
        ctx.shadowColor = sprite.shadowColor;
        ctx.shadowOffsetX = sprite.shadowOffsetX;
        ctx.shadowOffsetY = sprite.shadowOffsetY;
        ctx.shadowBlur = sprite.shadowBlur;
      }

      //Display the optional blend mode
      if (sprite.blendMode) ctx.globalCompositeOperation = sprite.blendMode;

      //Use the sprite's own `render` method to draw the sprite
      if (sprite.render) sprite.render(ctx);

      //If the sprite contains child sprites in its
      //`children` array, display them by recursively calling this very same
      //`displaySprite` function again

      if (sprite.children && sprite.children.length > 0) {

        //Reset the context back to the parent sprite's top left corner,
        //relative to the pivot point
        ctx.translate(-sprite.width * sprite.pivotX , -sprite.height * sprite.pivotY);

        //Loop through the parent sprite's children
        sprite.children.forEach(child => {

          //display the child
          displaySprite(child);
        });
      }

      //Restore the canvas to its previous state
      ctx.restore();
  //   }
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
  	ctx.save();
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
    ctx.restore();
  }
}

export class Text extends DisplayObject{

}