class EventEmitter{
  constructor(){
    this._events = {};
  }
  on(eventName,callback){
    if(this._events[eventName]){
      if(this.eventName !== "newListener"){
        this.emit("newListener",eventName)
      }
    }
    const callbacks = this._events[eventName] || [] ;
    callbacks.push(callback);
    this._events[eventName] = callbacks
  }
}

const events = new EventEmitter()

events.on("newListener",function(eventName){
  console.log(eventName)
})

events.on("hello",function(){
  console.log("hello")
})
let cb = function () {
  console.log('cb')
}
events.on('hello', cb)
