import * as sprite from "./sprite.js";
(function(window, undefined) {

  class Sprite{
		constructor(x=0,y=0,span=10,fwd={x:1,y:0},speed=0,color="black"){
			Object.assign(this,{x,y,span,fwd,speed,color});
		}

		draw(ctx){
			ctx.save();
			ctx.translate(this.x,this.y);
			ctx.beginPath();
			ctx.rect(-this.span/2,-this.span/2,this.span, this.span);
			ctx.closePath();
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.restore();
		}

		move(){
			this.x += this.fwd.x * this.speed;
			this.y += this.fwd.y * this.speed;
		}

		reflectX(){
			this.fwd.x *= -1;
		}

		reflectY(){
			this.fwd.y *= -1;
		}
	}


  if (window) { // for browser
    const q6 = {};
    q6.Sprite = Sprite;
    q6.ImageSprite = sprite.ImageSprite;
    window['q6'] = q6;

  }
  

})(typeof window !== 'undefined' ? window : null);