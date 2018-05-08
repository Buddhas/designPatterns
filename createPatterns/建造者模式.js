function workerBuilder() {
	this.workOne = function() {
		console.log('workOne')
	}
	this.workTwo=function() {
		console.log('workTwo')
	}
	this.workThree=function() {
		console.log('workThree')
	}
	this.workFour=function() {
		console.log('workFour')
	}
	
	this.getResult = function() {
	   
	   var house = new House();
	   return house;
	}
}

function Director() {
	this.construct = function(builder) {
		builder.workOne();
		builder.workTwo();
		builder.workThree();
		builder.workFour();
	}
}

function House() {
    this.HouseFrame = '';
    this.Room = '';
    this.Kitchen = '';
    this.LivingRoom = '';
}


var director = new Director(); // 房主人请 Director 工头来建房子
var builder = new workerBuilder(); // 工头带来了建造者
director.construct(builder); // 工头指挥建造者来建房子
var house = builder.getResult(); // 房主人从建造者那里取得建好的房子