// call 接收多个参数 第一个参数为函数改变后的this指向 
// 第二个参数之后都是形参
/* 
  call做了那些事情？
    1.调用函数
    2.改变函数this指向 
*/

Function.prototype.myCall = function (content ,...args){
  //判断content是否为null或undefined
  content = content == undefined?window:Object(content) 
  let fn = Symbol()
  content[fn] = this
  const resulet = content[fn](...args)
  delete content[fn]
  return resulet
}

function test(a,b){
  console.log(this)
  return a+b;
}

console.log(test.call(0,1,2));
console.log(test.myCall(0,1,2));