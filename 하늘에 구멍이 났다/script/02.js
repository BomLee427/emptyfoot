// JavaScript Document



function hole1(){
	var txt7 = $("#text7");
	var txt2 = $("#text2");
	var hole = $("#hole");
	
	txt7.css("display","inline");
	setTimeout(function(){txt2.css("display","inline");},1000);
	hole.attr("onClick","hole2()");
}


function hole2(){
	var txt3 = $("#text3");
	var txt4 = $("#text4");
	var hole = $("#hole");
	
	txt3.css("display","inline");
	setTimeout(function(){txt4.css("display","inline");},250);
	hole.attr("onClick","hole3()");
}


function hole3(){
	var txt5 = $("#text5");
	var txt6 = $("#text6");
	var hole = $("#hole");
	
	txt5.css("display","inline");
	setTimeout(function(){txt6.css("display","inline");},800);
	hole.attr("onClick","location.href='03.html'");
}

