// JavaScript Document
window.onload=function(){
	var div1=document.getElementById("div1");
	div1.onmouseover=function(){
	   startMove(0);
	  }
	div1.onmouseout=function(){
		startMove(-200);
		}
    var timer=null;
	function startMove(target){
		clearInterval(timer);
		var div1=document.getElementById("div1");
		timer=setInterval(function(){
		  var speed=(target-div1.offsetLeft)/20;
		  speed=speed>0?Math.ceil(speed):Math.floor(speed);
		  if(div1.offsetLeft==target){
			clearInterval(timer);
			 }
		  else{
		div1.style.left=div1.offsetLeft+speed+"px";}
	    },30)
	}

}