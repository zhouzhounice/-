Function.prototype.myApply = function (ctx,arr=[]){
  ctx = ctx == undefined ? window : Object(ctx)
  //给context新增一个独一无二的属性以免覆盖原有属性
  const key = Symbol()
  ctx[key] = this
  const result = ctx[key](...arr)
  delete ctx[key]
  return result

}

function fn(a,b){
  console.log(this)
  return a+b
}

console.log(fn.apply(null,[1,2]))
console.log(fn.myApply(null,[1,2]))