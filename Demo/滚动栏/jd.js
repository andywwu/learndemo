$(function(){
$("#myslider").carousel({interval:3000});
	  $("#myslider a.left").click(function(){
		  $(".carousel").carousel("prev"); 
	  });
	  $("#myslider a.right").click(function(){
		  $(".carousel").carousel("next");  
	  });
	});// JavaScript Document