{
    function Car(model,year,miles){
        this.model = model
        this.year = year
        this.miles = miles
        this.toString = function(){
            return this.model + 'has done' + this.miles + 'miles'
        }
    }

    let carBean = new Car('CGI','2018','20000')
    console.log(carBean.toString())
}

//避免toString重复定义，带原型的Constructor
{
    function Car(model,year,miles){
        this.model = model
        this.year = year
        this.miles = miles
    }
    Car.prototype.toString = function(){
        return this.model + 'has done' + this.miles + 'miles'
    }

    let carBean = new Car('CGI','2018','20000')
    console.log(carBean.toString())
}