//一件事本该是你的，然后给别人做了
{
    //先声明小红
    let xiaohong = function(name){
        this.name = name
    }

    //这是小明,
    let xiaoming = function(girl){
        this.girl = girl
        this.sendGift = function(gift){
            console.log('hi' + girl.name + '小明送你礼物：' + gift)
        }
    }

    let proxy = function(girl){
        this.girl = girl
        this.sendGift = function(gift){
            (new xiaoming(girl).sendGift(gift))
        }
    }

    let me = new proxy(new xiaohong('奶茶妹妹'))
    me.sendGift('一把40米大刀')

}


{
    var myImage = (function(){
        var imgNode = document.createElement("img");
        document.body.appendChild(imgNode);
        return function(src){
            imgNode.src = src; 
        }
    })();
    // 代理模式
    var ProxyImage = (function(){
        var img = new Image();
        img.onload = function(){
            myImage(this.src);
        };
        return function(src) {
                    // 占位图片loading
                    myImage("http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif");
            img.src = src;
        }
    })();
    // 调用方式
    
    ProxyImage("https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png"); // 真实要展示的图片
}