function myInstanceOf(A,B){
  while(A){
    if(A.__proto__===B.prototype){
      return true
    }
    A = A.__proto__;
  }
  return false
}


function uu(){
  console.log('11')
}

const x1 = myInstanceOf(Array, Object)
const x2 = myInstanceOf(uu,Array)
console.log(x1)
console.log(x2)