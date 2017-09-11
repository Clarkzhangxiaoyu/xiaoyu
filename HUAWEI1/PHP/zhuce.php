<?php
	header("content-type:text/html;charset=utf-8");
	$username=$_POST["uname"];
	$userpwd=$_POST["upwd"];
	$db=mysql_connect("localhost","root","root");
	mysql_select_db("h5_1705",$db);
	mysql_query("set names utf8");
	$sql="insert into users (uname,upwd) values('$username','$userpwd')";
	$res=mysql_query($sql);
	if($res){
		echo "<script>alert('注册成功');</script>";
	}else{
		echo "<script>alert('注册失败');</script>";
	}
	
?>