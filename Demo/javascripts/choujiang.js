// JavaScript Document
var data=["iPhone7 plus","三星NOTE7","IMac","马尔代夫七日游","6666元现金大礼","佳能相机","惠普打印机","谢谢参与","50元话费"],
     timer=null;
window.onload=function(){
   var title=document.getElementById("title");
   var start=document.getElementById("start");
   var end=document.getElementById("end");
   var text=document.getElementById("text");
   var flag=0;
   start.onclick=startFun;
   end.onclick=endFun;
   document.onkeyup=function(event){
	   event=event||window.event;
	   if(event.keyCode==13){
		   if(flag==0){
			   startFun();
			   flag=1;
			   }
			else{
				endFun();
			    flag=0;
				}
		   }
	   }
   function startFun(){
	   clearInterval(timer);
	   timer=setInterval(function(){
		  var random=Math.floor(Math.random()*data.length);
		  text.innerHTML=data[random];
		   },50);
		   start.style.backgroundColor="gray";
	   }
	function endFun(){
		clearInterval(timer);
		start.style.backgroundColor="#036";
		}
	}