
//外观模式（Facade）为子系统中的一组接口提供了一个一致的界面，
//此模块定义了一个高层接口，这个接口值得这一子系统更加容易使用。
//使用外观模式创建一个跨浏览器的检验方法
var addEvent = function(el,ev,fn){
    if(el.addEventListener){
        el.addEventListener(ev,fn,false)
    }else if(el.attachEvent){
        el.attachEvent('on' + ev,fn)
    }
}