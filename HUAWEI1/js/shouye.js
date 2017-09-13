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

//banner选项卡
$("#banner-left li").mouseenter(function(){
	var index=$(this).index()+1
	$(".banner-list-li").css("display","block")
	$(".banner-list-li img").attr("src","../img/banner-list-li"+index+".png")
})
$("#banner-left li").mouseleave(function(){
	$(".banner-list-li").css("display","none")
})
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
//小轮播图结束
//手机开始
$(".phone-main .move-t").mouseenter(function(){
	$(this).stop().animate({"top":"-2px"}).css("box-shadow","0 0 10px #999")
})
$(".phone-main .move-t").mouseleave(function(){
	$(this).stop().animate({"top":""}).css("box-shadow","")
})
$(".phone-main .move").mouseenter(function(){
	$(this).stop().animate({"bottom":"2px"}).css("box-shadow","0 0 10px #999")
})
$(".phone-main .move").mouseleave(function(){
	$(this).stop().animate({"bottom":""}).css("box-shadow","")
})
//手机结束
//笔记本电脑开始
$(".computer-main .move-t").mouseenter(function(){
	$(this).stop().animate({"top":"-2px"}).css("box-shadow","0 0 10px #999")
})
$(".computer-main .move-t").mouseleave(function(){
	$(this).stop().animate({"top":""}).css("box-shadow","")
})
//笔记本电脑结束
//平板电脑开始
$(".pad-main .move-t").mouseenter(function(){
	$(this).stop().animate({"top":"-2px"}).css("box-shadow","0 0 10px #999")
})
$(".pad-main .move-t").mouseleave(function(){
	$(this).stop().animate({"top":""}).css("box-shadow","")
})
$(".pad-main .move").mouseenter(function(){
	$(this).stop().animate({"bottom":"2px"}).css("box-shadow","0 0 10px #999")
})
$(".pad-main .move").mouseleave(function(){
	$(this).stop().animate({"bottom":""}).css("box-shadow","")
})
//平板电脑结束
//智能穿戴开始
$(".watch-main .move-t").mouseenter(function(){
	$(this).stop().animate({"top":"-2px"}).css("box-shadow","0 0 10px #999")
})
$(".watch-main .move-t").mouseleave(function(){
	$(this).stop().animate({"top":""}).css("box-shadow","")
})
$(".watch-main .move").mouseenter(function(){
	$(this).stop().animate({"bottom":"2px"}).css("box-shadow","0 0 10px #999")
})
$(".watch-main .move").mouseleave(function(){
	$(this).stop().animate({"bottom":""}).css("box-shadow","")
})
//智能穿戴结束
//智能家居开始
$(".ehome-main .move-t").mouseenter(function(){
	$(this).stop().animate({"top":"-2px"}).css("box-shadow","0 0 10px #999")
})
$(".ehome-main .move-t").mouseleave(function(){
	$(this).stop().animate({"top":""}).css("box-shadow","")
})
$(".ehome-main .move").mouseenter(function(){
	$(this).stop().animate({"bottom":"2px"}).css("box-shadow","0 0 10px #999")
})
$(".ehome-main .move").mouseleave(function(){
	$(this).stop().animate({"bottom":""}).css("box-shadow","")
})
//智能家居结束
//热销配件开始
$(".fittings-main .move-t").mouseenter(function(){
	$(this).stop().animate({"top":"-2px"}).css("box-shadow","0 0 10px #999")
})
$(".fittings-main .move-t").mouseleave(function(){
	$(this).stop().animate({"top":""}).css("box-shadow","")
})
$(".fittings-main .move").mouseenter(function(){
	$(this).stop().animate({"bottom":"2px"}).css("box-shadow","0 0 10px #999")
})
$(".fittings-main .move").mouseleave(function(){
	$(this).stop().animate({"bottom":""}).css("box-shadow","")
})
//热销配件结束
//品牌配件开始
$(".brand-fittings-main .move-t").mouseenter(function(){
	$(this).stop().animate({"top":"-2px"}).css("box-shadow","0 0 10px #999")
})
$(".brand-fittings-main .move-t").mouseleave(function(){
	$(this).stop().animate({"top":""}).css("box-shadow","")
})
$(".brand-fittings-main .move").mouseenter(function(){
	$(this).stop().animate({"bottom":"2px"}).css("box-shadow","0 0 10px #999")
})
$(".brand-fittings-main .move").mouseleave(function(){
	$(this).stop().animate({"bottom":""}).css("box-shadow","")
})
//品牌配件结束
//楼梯开始
$(".Loutinav li").mouseenter(function(){
	$(this).find("span").stop().animate({"right":15});
	$(this).find("span").css("color","#CA151D")
})
$(".Loutinav li").mouseleave(function(){
	$(this).find("span").stop().animate({"right":12})
	$(this).find("span").css("color","#666666")
})



$(".Loutinav span").click(function(){
	var index=$(this).parent().index()
		//改变楼层号的样式
	$(".Loutinav li").css("border-bottom","")
	$(".Loutinav li").eq(index).css("border-bottom","1px solid #CA151D")
	$(this).css("color","#CA151D")
		//根据点击的楼层号  找到楼层 
	var t = $(".Louti").eq(index).offset().top;
		//以动画的方式 操作滚动条
	$("body,html").stop().animate({"scrollTop" : t},1000,function(){
	});
})


//根据滚动条的操作 设置楼层号的样式
$(window).scroll(function(){
	var sTop = $(document).scrollTop();
	if(sTop>=1300&&sTop<=6000){
		$(".Loutinav").show(500)
	}else{
		$(".Loutinav").hide(500)
	}
	for( var i = 0 ; i < $(".Louti").length ; i++ ){
		
		if( Math.abs( $(".Louti").eq(i).offset().top - sTop ) < $(".Louti").eq(i).height()/2){//$(".Louti").eq(i).height()/2 ){
			$(".Loutinav li").eq(i).find("span").css("color","#CA151D")
			$(".Loutinav li").eq(i).css("border-bottom","1px solid #CA151D")
		}else{
			$(".Loutinav li").eq(i).find("span").css("color","#666666")
			$(".Loutinav li").eq(i).css("border-bottom","")
		}	
	}
})

