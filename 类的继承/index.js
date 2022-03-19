function Parent(name){
  this.name = name
}
Parent.prototype.sayHi= function (){
  console.log('我叫' + this.name + ',你好啊')
}


Son.prototype = new Parent("小花")
Son.prototype.constructor = Son;
function Son(_name){
  this._name = _name
}

Son.prototype.sayHellow = function(){
  console.log("我是"+this._name+',你好啊！')
}

const B = new Son("小明")
console.log(B.name)
console.log(B.sayHi())