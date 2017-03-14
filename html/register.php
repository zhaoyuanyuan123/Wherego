<?php

	$userName = $_GET['userName'];//把客户数据拿过来
//1.建立连接
	$conn = mysql_connect("localhost","root","root");
//2.选择数据库
	mysql_select_db("db1609",$conn);
//3.执行语句   进行查询
	$sqlstr = "select * from vipTable where userName='".$userName."'";//查询
	$result = mysql_query($sqlstr,$conn);//

	$rows = mysql_num_rows($result);//查看行数
	
//4.关闭数据库
	mysql_close($conn);
?>

