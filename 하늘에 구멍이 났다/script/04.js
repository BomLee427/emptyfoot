// JavaScript Document



function hole1(){
	$('#wtr').css("opacity","0").stop().attr("src","../img/cut02-2.png").animate({opacity:1},800);
	setTimeout(function(){	
	window.location.href="05.html";
	},3000);
}
