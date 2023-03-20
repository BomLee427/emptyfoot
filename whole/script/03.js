// JavaScript Document



function hole1(){
	$('#hana').css("display","none");
	$('#plane').css("display","none");
	$('#hole').css("display","none");
	$('#jina').addClass("fadeout");
	$('#dst').css("opacity","0").stop().attr("src","../img/cut01.png").animate({opacity:1},800);
	setTimeout(function(){	
	window.location.href="04.html";
	},3000);
}
