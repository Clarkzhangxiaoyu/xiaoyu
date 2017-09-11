<?php
	header("content-type:text/html;charset=utf-8");
	$username=$_POST["uname"];
	$userpwd=$_POST["upwd"];
	$db=mysql_connect("localhost","root","root");
	mysql_select_db("h5_1705",$db);
	mysql_query("set names utf8");
	$sql="select * from users where uname='$username'";
	$res=mysql_query($sql);
	$arr=mysql_fetch_array($res);
	if($arr){
		if($userpwd==$arr["upwd"]){
			echo "<script>alert('成功');</script>";
		}else{
			echo "<script>alert('密码错误');</script>";
			
		}
	}else{
		echo "<script>alert('用户名不存在');;</script>";
	}
?>