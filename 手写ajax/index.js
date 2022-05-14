function myAjax(url){
  // 返回出一个Promise对象
  return new Promise((resolve,reject)=>{
    // 1.创建一个XHR对象
    const XHR = new XMLHttpRequest()
    // 2.初始化一个异步请求(此时请求还没发送)
    XHR.open('GET',url,true) // 如果第三个参数为false，则请求为同步请求
    // 4.监视请求是否成功
    XHR.onreadystatechange=function(){
      /* 
      Ajax引擎得到响应数据后
        会将状态定为4
        拿到的响应数据保存在response/respenseText属性上
        调用此回调函数
      */
      // 如果状态不为4，则直接结束
      if(XHR.readyState !== 4)return
    }
    // 如果响应码为200~299之间，说明请求都是成功的
    if(XHR.status>=200&&XHR.status<=299){
      // 指定promise成功及其结果值
      resolve(JSON.parse(XHR.responseText))
    }else{
      // 指定promise失败及其结果值
      reject(new Error('request error staus'+request.status))
    }
    // 3.发送请求，并且携带请求体参数
    XHR.send(null)
  })
}