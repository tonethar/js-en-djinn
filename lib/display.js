

/*
DisplayObject
------

The abstract parent class for all sprites

*/
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

class Rectangle extends DisplayObject{


}