/* 
* @Author: anchen
* @Date:   2017-05-04 16:27:03
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-15 17:26:42
*/


$(document).ready(function() {
	var url = location.href;
	var temp1 = url.split("?")[1];
	var index = temp1.split("=")[1];
	function request(index) {
		var xhr = new XMLHttpRequest();
		xhr.open("get", "../json/house.json", true);
		xhr.send(null);
		xhr.onload = function() {
			var obj = JSON.parse(xhr.responseText);
			// console.log(obj, obj.Eng_add[index], obj.url[index]);
			$(".pic_left").children('h2').html(obj.Eng_add[index]);
			$(".pic_left").children('em').html(obj.Chi_add[index]);
			$(".pic_left").children('p').html(obj.Descripe[index]);
			$(".pic_left").css({"background-image": "url(" + obj.url[index] + ")"});
		}
	}
	request(index);

	var i = 0;
	$("#tab_right").click(function() {
		if(i > 5) {
			i = 0;
		}
		request(i);
		i++;
	})
	$("#tab_left").click(function() {
		if(i < 0) {
			i = 5;
		}
		request(i);
		i--;
	})
});

var outer = document.getElementById("pic_s");
var btnLeft = document.getElementById("tab_left");
var btnRight = document.getElementById("tab_right");

var maxScroll = outer.scrollWidth - outer.clientWidth;
console.log(outer.scrollWidth, outer.clientWidth, maxScroll);

function tabImg(tabLeft, tabRight, scrollDis) {
	console.log(scrollDis);

	$(tabRight).click(function() {
		console.log(1);
		if($(this).parent().scrollLeft() == scrollDis) {
			$(this).parent().stop().animate({
				"scrollLeft": 0
			})
			return;
		}
		$(this).parent().stop().animate({
			"scrollLeft": $(this).parent().scrollLeft() + $(".chicago").width()
		})
	})
	$(tabLeft).click(function() {
		if($(this).parent().scrollLeft() == 0) {
			$(this).parent().stop().animate({
				"scrollLeft": scrollDis
			})
			return;
		}
		$(this).parent().stop().animate({
			"scrollLeft": $(this).parent().scrollLeft() - $(".chicago").width()
		})
		console.log(1);
	})
}
tabImg(btnLeft, btnRight, maxScroll);