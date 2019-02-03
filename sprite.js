class Sprite{
constructor(name, animation, speed, x, y){
  this.name = name;
  this.animation = animation;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.len = this.animation.length;
  this.index = 0;
  }

  show() {
    let index = floor(this.index) % this.len
    image(this.animation[index % this.len], 0, 0);
  }

  animate() {
    this.index += this.speed
  }

  getFrame(){
    let index = floor(this.index) % this.len
    return index;
  }
}
