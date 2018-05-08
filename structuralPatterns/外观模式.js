

//使用外观模式创建一个跨浏览器的检验方法
var addEvent = function(el,ev,fn){
    if(el.addEventListener){
        el.addEventListener(ev,fn,false)
    }
}