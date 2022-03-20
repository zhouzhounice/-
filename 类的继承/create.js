Object.create = function (obj){
  function fn(){}
  fn.prototype = obj;
  return new fn()
}

const Obj = {
  name : "张三",
  age : 13
}

const b1 = Object.create(Obj)
console.log(b1.name)
console.log(b1.age)