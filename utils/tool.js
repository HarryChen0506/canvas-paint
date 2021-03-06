// canvas 基础库
function Arrow() { 
  this.x = 0;  //初始位置 
  this.y = 0; 
  this.rotation = 0; //初始旋转角度 
  this.color = '#ffff00'; 
} 
// 箭头模型 
Arrow.prototype.translate = function (x, y) {
  this.x = x;  //初始位置 
  this.y = y;
  return this
}
Arrow.prototype.getCenter = function () {
  return {
    x: this.x,
    y: this.y
  }
}
Arrow.prototype.rotate = function (rotation) {
  this.rotation = rotation
  return this
}
Arrow.prototype.draw = function(context){ 
  context.save(); 
  context.translate(this.x , this.y); //将坐标移到this.x 和 this.y 
  context.rotate(this.rotation); //设置旋转角度 
  context.lineWidth = 5;  //设置线宽 
  context.fillStyle = this.color; //设置填充色 
  context.beginPath();  //路径开始 
  context.moveTo(-50,-25); 
  context.lineTo(0,-25); 
  context.lineTo(0,-50); 
  context.lineTo(50,0); 
  context.lineTo(0,50); 
  context.lineTo(0,25); 
  context.lineTo(-50,25); 
  context.closePath(); //路径闭合 
  context.stroke(); //描边 
  context.fill(); //填充 
  context.restore(); 
} 

// 小球模型
function Ball(radius, color) {
  this.radius = radius || 30
  this.x = 0
  this.y = 0
  this.vx = 0
  this.vy = 0
  this.scaleX = 1
  this.scaleY = 1
  this.color = color || '#f00'
}
Ball.prototype = {
  translate: function (x, y) {
    this.x = x
    this.y = y
    return this
  },
  move: function (vx, vy) {
    this.vx = vx
    this.vy = vy
    return this
  },
  scale: function (scaleX, scaleY) {
    this.scaleX = scaleX
    this.scaleY = scaleY
    return this
  },
  draw: function (context) {
    context.save()
    context.translate(this.x, this.y)
    context.lineWidth = 0
    context.fillStyle = this.color
    context.scale(this.scaleX, this.scaleY)
    context.beginPath()
    context.arc(0, 0, this.radius, 0, Math.PI*2, false)
    context.closePath()
    // context.stroke() //描边 
    context.fill() //填充 
    context.restore()
    return this
  }
}