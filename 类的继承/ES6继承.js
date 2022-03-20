class A {
  constructor(X){
    this.X = X;
  }
  getX(){
    console.log(this.X)
  }
}

class B extends A{
  constructor(Y){
    super(200);
    this.Y = Y;
  }
  getY(){
    console.log(this.Y)
  }
}

const b1 = new B(100)
console.log(b1)