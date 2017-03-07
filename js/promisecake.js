
	var lastOrd= -1;
	var currOrd= 0;
	var myTimer;
	function goStep(){
		lastOrd++;
		currOrd++;		
		if(lastOrd>5){
			lastOrd=0;
		}		
		if(currOrd>5){
			currOrd=0;
		}
		moveImgStep(lastOrd,currOrd);
			
	}	
	
	function autoPlay(){
		
		myTimer = setInterval(goStep,2000);
	}	
	//ord = 3;	
	function goImg(ord){
		clearInterval(myTimer);
		if(currOrd==ord){
			return;
		}
		moveImgStep(currOrd,ord);
		currOrd = ord;
		lastOrd = currOrd-1;
		if(lastOrd<0){
			lastOrd = 5;
		}
	}

function moveImgStep(ord1,ord2){
	$("img").eq(ord2).css({"left":$("#wrap").outerWidth()+"px","top":"200px"});
	$("img").eq(ord1).animate({"left":(-1*$("#wrap").outerWidth())+"px"},1000);
	$("img").eq(ord2).animate({"left":"0px"},1000);		
	$("ul li").eq(ord2).css({"backgroundColor":"white"}).siblings().css({"backgroundColor":"red"});
	
}