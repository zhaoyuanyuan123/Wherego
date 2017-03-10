//封装时间
function changeData(n){
	var d=new Date();
	d.setDate(d.getDate()+n);
	return d;
}
//存储cookie
function saveCookie(key,value,n){
	document.cookie=encodeURIComponent(key)+
	"="+encodeURIComponent(value)+
	";expires="+changeData(n);			
}
saveCookie("name","zhangsan",7);
saveCookie("aaa","123456",7);
saveCookie("bbb","haha",7);
saveCookie("bbb","哈哈",7);		
//封装获取它的cookie
function getCookie(key){
	var data=decodeURIComponent(document.cookie).replace(/\s/g,"").split(";");			
	for(i=0;i<data.length;i++){
		if(data[i].split("=")[0]==key){
			return data[i].split("=")[1];
		}
	}
}
//删除cookie
function deleteCookie(key){
	saveCookie(key,"",-1);
}
