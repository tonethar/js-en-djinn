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

  class ImageSprite extends Sprite{
		constructor(x,y,span,fwd,speed,image){
			super(x,y,span,fwd,speed);
			this.image=image;
		}
		
		draw(ctx){
			ctx.save();
			ctx.translate(this.x,this.y);
			ctx.drawImage(this.image,-this.span/2,-this.span/2,this.span, this.span);
			ctx.restore();
		}
	}
	
	class RingSprite extends Sprite{
		draw(ctx){
			ctx.save();
			ctx.translate(this.x,this.y);
			ctx.beginPath();
			ctx.arc(0,0,this.span/2,0,Math.PI * 2,false);
			ctx.arc(0,0,this.span/4,0,Math.PI * 2,true);
			ctx.closePath();
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.restore();
		}
		
	}


  if (window) { // for browser
    const q6 = {};
    Object.assign(q6,{Sprite,ImageSprite,RingSprite});
    window['q6'] = q6;

  }
  

})(typeof window !== 'undefined' ? window : null);