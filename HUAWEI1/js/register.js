//注册手机号验证
$("#phone-input input").blur(function(){
	var reg=/^1[3|5|7|8]\d{9}$/;
	strPhone=$("#phone-input input").val();
	if(reg.test(strPhone)){
		$("#check-phone").html("该手机号可以注册")
		$("#check-phone").css({"color":"green","display":"block"})
	}else{
		$("#check-phone").html("请输入正确手机号")
		$("#check-phone").css({"color":"red","display":"block"})
	}
	
})
$("#phone-input input").focus(function(){
		$("#check-phone").css({"display":"none"})
	
})
//注册手机号验证结束
//注册密码验证开始
$("#pwd-input input").blur(function(){
	var reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,32}$/;
	strPwd=$("#pwd-input input").val();
	console.log(strPwd)
	if(reg.test(strPwd)){
		$("#pwd-reg").find("div").css("color","green")
		$("#check-pwd").css("display")
		$(".pwd-strong").css("background","green")
	}else{
		$("#check-pwd").html("请按要求输入密码");
		$("#check-pwd").css({"color":"red","display":"block"})
		
	}
})

$("#pwd-input input").focus(function(){
	$("#check-pwd").css({"display":"none"})
	$(".pwd-strong").css("background","#EEEEEE")
	$("#pwd-reg").find("div").css("color","#999999")
})
//注册密码结束
//确认密码开始
$("#surepwd-input input").blur(function(){
	if($("#surepwd-input input").val()==$("#pwd-input input").val()){
		
	}else{
		$("#sure-pwd").html("两次密码不一致");
		$("#sure-pwd").css({"color":"red","display":"block"})
	}
})

$("#surepwd-input input").focus(function(){
	$("#sure-pwd").css({"display":"none"})
})
//确认密码结束