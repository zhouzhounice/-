function A(X){
  this.X = X
}

A.prototype.setX = function(){
  console.log(this.X)
}

function B(Y) {
  A.call(this,200)
  this.Y = Y
}

B.prototype.setY = function () {
  
  console.log(this.Y)
}

const b1 = new B(100)
console.log(b1.X)
console.log(b1.Y)