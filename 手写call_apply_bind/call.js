// call 接收多个参数 第一个参数为函数改变后的this指向 
// 第二个参数之后都是形参
/* 
  call做了那些事情？
    1.调用函数
    2.改变函数this指向 
*/

/* Function.prototype.myCall = function (content ,...args){
  //判断content是否为null或undefined
  content = content == undefined?window:Object(content);
  let fn = Symbol()
  content[fn] = this;
  const res = content[fn](...args);
  delete content[fn]
  return res
} */
Function.prototype.myCall = function (context,...args){
  //1.改变this指向，如果第一个参数为undefined，或者null则指向windew
  context = context == undefined?window:Object(context)
  //2.同步调用函数，并且使得函数的this指向传入的第一个参数
  let fn = Symbol()
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}

function test(a,b){
  console.log(this)
  return a+b;
}

console.log(test.call(0,1,2));
console.log(test.myCall(0,1,2));
console.log(undefined == null)