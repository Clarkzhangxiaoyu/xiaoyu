$(function(){
	var arr = getCookie("shoplist");
		var html = "";
		for(var i in arr){
			var shopinfo = arr[i];
			html +=`<div class="choose-single">
						<input type="checkbox" name="" id="" value="" class="ck"/>
					</div>
					<div class="shop-list-main">
						<a href="">
							<img src="../img/${shopinfo.src}"/>
						</a>
						<ul>
							<li style="width: 450px;margin: 0;">${shopinfo.name}</li>
							<li class="sigle-price">${shopinfo.price}</li>
							<li>
								<div class="shop-count">
									<input type="text" value="${shopinfo.count}" class="all-count"/>
									<p>
										<a href="javascript:;" class="countplus">+</a>
										<a href="javascript:;" class="countsubtract">-</a>
									</p>
								</div>
							</li>
							<li class="allprice">${shopinfo.price}</li>
							<li style="text-align: center;">
								<a href="javascript:;" class="delete-list">删除</a>
							</li>
						</ul>
					</div>`;
			
		}
		$(".shop-list-prolist").append( html );
	//全选
	$(".selectAll").click(function(){
		$(".ck").prop("checked", $(this).prop("checked"));	
		jiesuan()
	})
	//删除
	$(".shop-list-prolist").on("click",".delete-list",function(){
		$(this).parent().parent().parent().remove();
		$(".choose-single").remove()
	})
	//添加，减少
	$(".shop-list-prolist").on("click",".countplus",function(){
		for(var i in arr){
			arr[i].count++
			$(this).parent().parent().parent().parent().find(".all-count").val(arr[i].count);
			$(this).parent().parent().parent().parent().find(".allprice").html( (arr[i].count*arr[i].price)  );	
		}
	})
	$(".shop-list-prolist").on("click",".countsubtract",function(){
		for(var i in arr){
			arr[i].count--
			if(arr[i].count<=1){
				arr[i].count=1
			}
			$(this).parent().parent().parent().parent().find(".all-count").val(arr[i].count);
			$(this).parent().parent().parent().parent().find(".allprice").html( (arr[i].count*arr[i].price)  );
		}
	})

	
})

//结算
function jiesuan(){
		var money = 0;
		
		$(".ck:checked").each(function(){
			
			money += parseInt($(this).parent().parent().parent().parent().find(".allprice").html())
		})
	
		$("#final-money").html( money );
	}





