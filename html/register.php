<?php
	header("content-type","text/html;charset=uft-8");
	$userName=$_POST['userName'];
	$userPass=$_POST['userPass'];
	//1.建立连接
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		console.log("连接成功");
	}else{
		console.log("连接失败");
	}
	//2.选择数据库
	mysql_select_db("db1609",$coon);
	//3.执行语句
	$sqlStr="insert into vipTable(userName,userPass)
	 values=('".userName."','".userPass."');
	"
	mysql_query($sqlStr);
	//4.关闭数据库
	mysql_close($coon);
	
?>