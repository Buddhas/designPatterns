//Singleton(单例) 模式限制类的实例化次数只能是一次。也就是说，
//在不存在该类实例的情况下，可以通过方法来创建实例；如果实例已经存在，返回该实例对象的引用


//利用闭包实现只实例化一次
var Singleton = (function(){
    var instantiated
    function init(){
        //定义单例代码
        return{
            publicMethod:function(){
                console.log('hello world')
            },
            publicProperty:'test'
        }
    }

    return {
        getInstance:function(){
            if(!instantiated){
                instantiated = init()
            }
            return instantiated
        }
    }
})()

Singleton.getInstance().publicMethod()
