function ajax(url){
  return new Promise((resolve,reject)=>{
    // 1.创建一个XHR对象
    const xhr = new XMLHttpRequest()

    // 此时xhr创建了，但是还未调用open方法，则readyState为0

    // 2.初始化一个异步请求(还没发送请求)
    xhr.open('GET',url,true)
    // 这里的true代表支持异步发送请求，false就是同步发送

    // open方法被调用 xhr.readyState为1

    // 4.监视请求是否响应成功
    xhr.onreadystatechange = function () {
      /* 
        ajax引擎得到响应数据后
          将xhr的readyState属性指定为4
          将响应数据保存在response / responseText 属性上
          调用此回调函数
      */

          // 如果readyState为3时，说明正在下载数据中 如果为4 则说明下载完成了
     if(xhr.readyState !== 4){
       // 如果状态值不为4，直接结束（请求还没有结束）
       return
     }

     // 如果响应码在200~299之间，说明请求都是成功的
     if(xhr.status>=200 && xhr.status<300){
       // 指定promise成功及结果值
       resolve(JSON.parse(xhr.responseText))
     } else {
       // 请求失败 指定promise失败及其结果值
       reject(new Error('request error status' + request.status))
     }

    }
    // 3.发送请求，并携带请求体参数
    xhr.send(null) 
    // send方法被调用后xhr.readyState为2
  })
}