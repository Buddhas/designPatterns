function Car(opt){
    this.doors = opt.doors
    this.state = opt.state
    this.color = opt.color
}

function Truck(opt){
    this.state = opt.state
    this.whellSize = opt.whellSize
    this.color = opt.color
}

//创建工厂
function vehicleFactory(){

}
//默认创建值
vehicleFactory.prototype.vehicleClass = Car

//创建工厂方法
vehicleFactory.prototype.createVehicle = function(opt){
    if(opt.vehicleType === 'car'){
        this.prototype.vehicleClass = Car
    }else if(opt.vehicleType === 'truck'){
        this.prototype.vehicleClass = Truck
    }else{
        this.prototype.vehicleClass = Car
    }
    return this.prototype.vehicleClass(opt)
}

var factory = new vehicleFactory()

//创建一个汽车实例
var carBean = factory.createVehicle({
    vehicleType:'car',
    color:'yellow',
    doors:6,
    state:'new'
})

//创建一个卡车实例
var truckBean = factory.createVehicle({
    vehicleType:'truck',
    color:'red',
    doors:2,
    state:'二手'
})