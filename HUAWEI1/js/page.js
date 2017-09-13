var str = location.href;
	//http://127.0.0.1:8020/HUAWEI1/html/page.html?pid=shop1
var arr = str.split("?")[1];
var pid = arr.split("=")[1];
	
$.ajax({
	type:"get",
	url:"http://127.0.0.1/HUAWEI1/json/data.json",
	success : function(res){
		console.log( res );
		var str = "";
		var str1="";
		var str2=""
		for(var i in res){
			if( pid == res[i].id ){//找到了要显示的商品详情
				str = `<img src="../img/${ res[i].src }" alt="" />`;
				str1=`<p>${res[i].pname}</p>
						<span>¥${res[i].price}.00</span>

						<span data-id=${res[i].id}  data-name=${res[i].pname} data-src=${res[i].src} data-price=${res[i].price}   style="display:none"></span>`;
				str2=`<div class="gallery" style="background-image: url(../img/${ res[i].src });background-size: 1097px 1097px;"></div>`
			}
		}
		$(".xiangqing-l").append(str);
		$(".xiangqing-r").prepend(str1)
		$(".xiangqing").append(str2)
	}
});

//放大镜
$(".xiangqing-l").mouseenter(function(){
	$(".mask").css("display","block")
	$(".gallery").css("display","block")
})
$(".xiangqing-l").mouseleave(function(){
	$(".mask").css("display","none")
	$(".gallery").css("display","none")
})

$(".xiangqing-l").mousemove(function(e){
		var e = e || event;
		var x = e.pageX - $(".xiangqing-l").offset().left- $(".mask").width()/2;
		var y = e.pageY - $(".xiangqing-l").offset().top - $(".mask").height()/2;
		var maxLeft = $(".xiangqing-l").width() - $(".mask").width();
		var maxTop = $(".xiangqing-l").height() - $(".mask").height();
		
		//边界处理
		x = x < 0 ? 0 : ( x > maxLeft ? maxLeft : x );
		y = y < 0 ? 0 : ( y > maxTop ? maxTop : y );
		
		$(".mask").css("left",x)
		$(".mask").css("top",y)
		
		var bigImgLeft =  x * 1097 / $(".xiangqing-l").width();
		
		var bigImgTop =  y * 1097 / $(".xiangqing-l").height();
		
		$(".gallery").css({"background-position-x":-bigImgLeft,"background-position-y":-bigImgTop})

})
//放大镜结束
//购物车存值

$(".xiangqing-r").on("click","#button",function(){
	var arr = [];
	var flag = true;//可以向数组中添加数据
	var _json = {
		id:$(this).parent().find("span").eq(1).data("id"),
		name:$(this).parent().find("span").eq(1).data("name"),
		src:$(this).parent().find("span").eq(1).data("src"),
		price:$(this).parent().find("span").eq(1).data("price"),
		count:1
	}
	console.log(_json);
	var cookieInfo = getCookie("shoplist");
		if( cookieInfo.length != 0 ){//表示cookie中有数据
			arr = cookieInfo;
			//点击相同商品时，需要做商品数量的累加    用当前点击的商品编号id   和  取出来的cookie的 数据中商品id做比较 发现有相等的，count++
			for(var i in arr){
				if(_json.id == arr[i].id && _json.name == arr[i].name){
					arr[i].count++;
					flag = false;
					break;
				}
			}
		}
		
		if(flag){
			arr.push(_json);
		}
		setCookie("shoplist",JSON.stringify(arr));
		var f = confirm("是否继续购买?确定--继续购买，取消---去购物车结算");
		if( !f ){
			location.href = "shopCars.html";
		}


})
