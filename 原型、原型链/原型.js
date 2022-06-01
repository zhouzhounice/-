/* 
  1.js中，万物皆对象（除了基本数据类型）
  2.每个对象都是Object的实例对象
  3.每个函数都是Function的实例对象
  4.js中，函数是一等公民，它既是函数又是对象
  语法糖：
    Function  => new function("函数体")
    []    => new Array([])
    {}    => new Object({})
*/

function Foo() {}
const f1 = new Foo()
const f2 = new Foo()

const o1 = new Object()
const o2 =  {}

function fn(){
  console.log(this)
}
fn()
