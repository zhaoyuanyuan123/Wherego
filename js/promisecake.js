
function project(){
			$(".time1>img:eq(0)").mouseenter(function(){
				$("#leftImg").animate({
					"left":"-5px"
				},1500);				
			})			
			$(".time1>img").mouseleave(function(){
				$("#leftImg").animate({
					"left":"-1000px"
				},1000);
			})
			$(".time2>img:eq(1)").mouseenter(function(){
				$("#centerImg").animate({
					"top":"0px"
				},1500);
			})
			$(".time2>img").mouseleave(function(){
				$("#centerImg").animate({
					"top":"-560px"
				},1000);
			})			
			$(".time3>img:eq(0)").mouseenter(function(){
				$("#rightImg").animate({
					"right":"10px"
				},1500);
			})
			$(".time3>img").mouseleave(function(){
				$("#rightImg").animate({
					"right":"-1060px"
				},1000);
			})
			
					
//			$("#prolist").moseover(function(){
//				$("#odd").stop();
//				$("#odd1").stop();
//				$("#odd2").stop();
//			})
			$("#odd").mouseenter(function(){
							
				$(".shopping").animate({
					"bottom":"0px"
				},1500)
			})
			$("#odd").mouseleave(function(){
				$(".shopping").animate({
					"bottom":"-300px"
				},1000)
			})
			
			$("#odd1").mouseenter(function(){
				
				$(".shopping1").animate({
					"bottom":"0px"
				},1500)
			})
			$("#odd1").mouseleave(function(){
				$(".shopping1").animate({
					"bottom":"-300px"
				},1000)
			})						
			$("#odd2").mouseenter(function(){
				
				$(".shopping2").animate({
					"bottom":"0px"
				},1500)
			})
			$("#odd2").mouseleave(function(){
				$(".shopping2").animate({
					"bottom":"-300px"
				},1000)
			})
			
			$(".oLserver").mouseover(function(){
				$(".help").css({
					"display":"block"
				})
			})
			$(".oLserver").mouseout(function(){
				$(".help").css({
					"display":"none"
				})
			})
			$(".letter").mouseover(function(){
				$(".wechat").css({
					"display":"block"
				})
			})
			$(".letter").mouseout(function(){
				$(".wechat").css({
					"display":"none"
				})
			})			
		}

function AutoPlayerImgs(boxId,width,height,imgs,urls,speed,btn){
		//属性：
		this.boxId = boxId;
		this.width = width;
		this.height = height;		
		this.left = 0;		
		this.imgs = imgs;		
		this.urls = urls;
		this.speed = speed;		
		this.timer = null;		
		this.btn = btn;		
		this.currOrd = 0;//当前图片序号；
		this.initUI();		
	}
	
	AutoPlayerImgs.prototype.initUI=function(){
		var boxObj = document.getElementById(this.boxId);
		var that = this;
		boxObj.onmouseover = function(){
			that.stopPlay();	
		};
		boxObj.onmouseout = function(){
			that.go();	
		};
		var ulObj = document.createElement("ul");
		ulObj.style.cssText = " width:9999px;height:100%;position:relative;left:0px";
		for(var i=0;i<this.imgs.length;i++){
			var liObj = document.createElement("li");
			liObj.style.cssText = "float:left;";
			var imgObj = document.createElement("img");
			imgObj.src = this.imgs[i];
			imgObj.style.cssText ="width:1024px;height:344px;";
			
			liObj.appendChild(imgObj);
			liObj.ord = i;
			var that = this;
			liObj.onclick = function(){
				location.href = that.urls[this.ord];
			}
			ulObj.appendChild(liObj);
		}	
		document.getElementById(this.boxId).appendChild(ulObj);
		
		ulObj = document.createElement("ul");
		ulObj.style.cssText = "position:absolute;left:180px;bottom:0;";
		for(var i=0;i<this.imgs.length;i++){
			var liObj = document.createElement("li");
			liObj.style.cssText = "float:left;width:"+this.btn.width+"px;height:"+this.btn.height+"px;background:"+this.btn.bgColor+";margin:10px;";
			liObj.ord = i;
			var that = this;
			liObj.onmouseover = function(){
				that.goImg(this.ord);	
			};
			
			ulObj.appendChild(liObj);
		}	
		document.getElementById(this.boxId).appendChild(ulObj);
		ulObj.children[0].style.backgroundColor = this.btn.highLightColor;
	}			
	AutoPlayerImgs.prototype.goStep = function(){
		this.currOrd++;
		if(this.currOrd>=this.imgs.length){
			this.currOrd=0;
		}
		//1、
		var boxObj = document.getElementById(this.boxId);
		var ulImgObj = boxObj.getElementsByTagName("ul")[0];		
		var that = this;
		move(ulImgObj,{"left":(-1)*this.currOrd*that.width});		
		//变换按钮的颜色
		var ulBtnObj = boxObj.getElementsByTagName("ul")[1];
		for(let i=0;i<ulBtnObj.children.length;i++){
			ulBtnObj.children[i].style.backgroundColor = this.btn.bgColor;
		}
		ulBtnObj.children[this.currOrd].style.backgroundColor = this.btn.highLightColor;
	}	
	AutoPlayerImgs.prototype.go = function(){
		var that = this;
		this.timer = setInterval(function(){
												that.goStep();
											},
								 this.speed
							);
	}
	
	AutoPlayerImgs.prototype.stopPlay = function(){		
		clearInterval(this.timer);
	}	
	AutoPlayerImgs.prototype.goImg=function(ord){
		var boxObj = document.getElementById(this.boxId);
		var ulImgObj = boxObj.getElementsByTagName("ul")[0];
		
		move(ulImgObj,{"left":(-1)*ord*this.width});
		this.currOrd = ord;
		
		var ulBtnObj = boxObj.getElementsByTagName("ul")[1];
		for(let i=0;i<ulBtnObj.children.length;i++){
			ulBtnObj.children[i].style.backgroundColor = this.btn.bgColor;
		}
		ulBtnObj.children[this.currOrd].style.backgroundColor = this.btn.highLightColor;
		
	}	
function username(data){	
	console.log(data);
			let txt=$(".userName").val();	
			var  flag=1;
			$(".userPwd").val("");
			$("pwdSpan").html("");
			for(i=0;i<data.length;i++){
				if(data[i].name==txt){							
					flag=1;
					break;
				}
				if(data[i].name!=txt){					
					flag=0;						
				}								
			}
			if(flag==0){
					$(".nameSpan").html("*你输入的用户不存在,请重新输入！！！");
					$(".userName").focus(function(){
						$(".nameSpan").html("");
					})
			}
			
		}
function userPwd(data){			
		if($(".userName").val()==""){
			$(".nameSpan").html("*—*亲！请输入用户名！");
		}else{
				let pwdTxt=$(".userPwd").val();	
			 	let txt=$(".userName").val();	
				var  flag=1;
				for(i=0;i<data.length;i++){
					if(data[i].password==pwdTxt&&data[i].name==txt){							
						flag=1;
						break;
					}
					if(data[i].password!=pwdTxt&&data[i].name==txt){					
						flag=0;						
					}								
				}
				if(flag==0){
						$(".pwdSpan").html("*密码不正确,请重新输入！！！");
						$(".userPwd").focus(function(){
							$(".pwdSpan").html("");
						})
				}
		}
	 		
	}
