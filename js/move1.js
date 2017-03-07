//获取外部样式兼容 obj标签  arrt属性
function getStyle(obj,arrt){
	if(obj.currentStyle){
		return obj.currentStyle[arrt];
	}else{
		return getComputedStyle(obj,null)[arrt];
	}
}  
//move(要变得标签，{"属性"："属性值"，"属性"："属性值"}，function(){})
//改变样式属性  将json当做一个对象
function move(obj,json,fn){
	clearInterval(obj.timer);
	var iSpeed=0;
	obj.timer = setInterval(function(){
		var isover=true;
		
		for(var arrt in json){//遍历它的属性
			var iCur=0;
		var iTarget;
			//第一步 ：判断它的属性
			if(arrt=="opacity"){	 	        				
				iCur=parseFloat(getStyle(obj,"opacity"))*100;//保留它的小数点
				iTarget= parseInt(json[arrt]*100);	
			}else{
				iCur= Math.round(parseFloat(getStyle(obj,arrt)));
				iTarget=parseInt(json[arrt]);
			}
			
			//第二步：定义变化的属性  缓冲速度 
		   iSpeed = (iTarget - iCur)/5;	        			
		   iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);;
			//第三步：判断当前值和目的值
			if(iCur != iTarget){
				isover=false;
			//第四步：再判断它的属性
				if(arrt=="opacity"){
					obj.style.opacity=(iCur+iSpeed)/100;
					obj.style.filter='alpha(opacity:'+(iCur + iSpeed)+')';
				}else{
					 obj.style[arrt] =iCur + iSpeed +"px";
				}
			}			
		}
		if(isover){//任务完成
            clearInterval(obj.timer);
            if(fn){
            	fn();  //如果有回调函数，执行回调函数
            }

        }
	},30)
}