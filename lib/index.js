(function(window, undefined) {

  // Sprites
  class Sprite{
    constructor(x=0,y=0,width=10,height=10,fwd={x:1,y:0},speed=0,color="black"){
	    Object.assign(this,{x,y,width,height,fwd,speed,color});
    }

		draw(ctx){
	    ctx.save();
			ctx.translate(this.x,this.y);
			ctx.beginPath();
			ctx.rect(-this.width/2,-this.height/2,this.width, this.height);
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
		constructor(x,y,width,height,fwd,speed,image){
			super(x,y,width,height,fwd,speed);
			this.image=image;
		}
		
		draw(ctx){
			ctx.save();
			ctx.translate(this.x,this.y);
			ctx.drawImage(this.image,-this.width/2,-this.height/2,this.width, this.height);
			ctx.restore();
		}
	}
	
	class RingSprite extends Sprite{
		draw(ctx){
      const radius = this.width / 2;
			ctx.save();
			ctx.translate(this.x,this.y);
			ctx.beginPath();
			ctx.arc(0,0,radius,0,Math.PI * 2,false);
			ctx.arc(0,0,radius/2,0,Math.PI * 2,true);
			ctx.closePath();
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.restore();
		}
		
	}

  // Utilities
  function getRandomUnitVector(){
    let x = getRandom(-1,1);
    let y = getRandom(-1,1);
    let length = Math.sqrt(x*x + y*y);
    if(length == 0){ // very unlikely
      x=1; // point right
      y=0;
      length = 1;
    } else{
      x /= length;
      y /= length;
    }
    return {x:x, y:y};
  }

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandomColor(){
    const getByte = _ => 35 + Math.round(Math.random() * 220);
    return `rgba(${getByte()},${getByte()},${getByte()},1)`;
  }

  function createLinearGradient(ctx,startX,startY,endX,endY,colorStops){
    let lg = ctx.createLinearGradient(startX,startY,endX,endY);
    for(let stop of colorStops){
      lg.addColorStop(stop.percent,stop.color);
    }
    return lg;
  }

  function preloadImage(url,callback){
    let img = new Image();
    img.onload = () => callback(img);
    img.onerror = () => console.log(`Image at url "${url}" wouldn't load! Check your URL!`);
    img.src = url;
  }

  function preloadImages(urls,callback){
  const length = urls.length;
  const images = [];
  let counter = 0;
  
  for (let url of urls){
    let img = new Image();
    img.onload = () => {
      counter ++;
      images.push(img);
      if(counter === length) callback(images);
    };
    img.onerror = () => console.log(`Image at url "${url}" wouldn't load! Check your URL!`);
    img.src = url;
  };
}

  // Export
  if (window) {
    const q6 = {};
    Object.assign(q6,{Sprite,ImageSprite,RingSprite});
    Object.assign(q6,{getRandomUnitVector,getRandomColor,getRandom,getRandomInt,createLinearGradient});
    Object.assign(q6,{preloadImage,preloadImages});
    window['q6'] = q6;
  }

})(typeof window !== 'undefined' ? window : null);