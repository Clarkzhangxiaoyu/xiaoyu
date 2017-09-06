//轮播图js开始
var timer=setInterval(autoPlay,5000)
var index=0
function autoPlay(){
	index++
	if(index==8){
		index=0
	}
	$("#banner-ol li").eq(index).addClass("current").siblings().removeClass("current")
		
	$("#banner-imgs li").eq(index).fadeTo(1000,1).siblings().fadeTo(1000,0)
		
}
$("#banner-ol li").mouseover(function(){
		clearInterval( timer );
		index = $(this).index() - 1;
		autoPlay();
	})
$("#banner-ol li").mouseout(function(){
		timer = setInterval(autoPlay,5000);
})
//轮播图js结束
//热门单品开始
$(".hot-sail-single-l").mouseenter(function(){
	$(this).animate({"margin-top":"-2px"}).css("box-shadow","0 0 10px #999")
})
$(".hot-sail-single-l").mouseleave(function(){
	$(this).animate({"margin-top":""}).css("box-shadow","")
})
$(".hot-sail-single-r li").mouseenter(function(){
	$(this).stop().animate({"margin-top":"-2px"}).css("box-shadow","0 0 10px #999")
})
$(".hot-sail-single-r li").mouseleave(function(){
	$(this).stop().animate({"margin-top":""}).css("box-shadow","")
})

$(".hot-sail-single-r .move").mouseenter(function(){
	$(this).stop().animate({"bottom":"2px"}).css("box-shadow","0 0 10px #999")
})
$(".hot-sail-single-r .move").mouseleave(function(){
	$(this).stop().animate({"bottom":""}).css("box-shadow","")
})

//热门单品结束
//小轮播图开始
var timer1=setInterval(autoPlay1,2000)
var index1=0
function autoPlay1(){
	index1++
	if(index1==6){
		index1=0
	}
	$("#small-lunbo-ol li").eq(index1).addClass("current1").siblings().removeClass("current1")
		
	$("#small-lunbo-imgs li").eq(index1).fadeTo(1000,1).siblings().fadeTo(1000,0)
		
}
$("#small-lunbo-ol li").mouseover(function(){
		clearInterval( timer1 );
		index1 = $(this).index() - 1;
		autoPlay1();
})
$("#small-lunbo-ol li").mouseout(function(){
		timer1 = setInterval(autoPlay1,2000);
})