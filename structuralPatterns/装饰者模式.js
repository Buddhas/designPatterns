
//需要装饰的类
function vehicle(type){
    this.vehicleType = type || 'car'
    this.model = 'defalut'
    this.setModel = function(modelName){
        this.model = modelName
    }
}

var car = new vehicle('car')
car.setModel('carModel')
console.log(car.model)

var truck = new vehicle('truck')
truck.setColor = function(color){
    this.color = color
}

truck.setColor('blue')
console.log(truck.color)
