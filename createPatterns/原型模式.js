var car = {
    name:'ford Escort',
    drive:function(){
        console.log('wee,i am driving')
    },
    panic:function(){
        console.log('wait,how do you stop this')
    }
}

//使用Object.create实例化一个Car，通过Object.create()创建的实例是没有原型的，除非你自己传进去
var myCar = Object.create(car)

console.log(myCar.name)

