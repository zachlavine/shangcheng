/* 
* @Author: anchen
* @Date:   2017-05-03 20:22:42
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-15 18:11:24
*/
var url = location.href;
if(url.indexOf("?") != -1){
	var tmp1 = url.split("?")[1];
	var tmp2 = tmp1.split("&")[0];
	var selectPage = tmp2.split("=")[1];
	$(".section").removeClass("active");
	$(".section").eq(selectPage).addClass("active");
	$("#nav li").removeClass("active");
	$("#nav li").eq(selectPage).addClass("active");
}
$(function() {
	$("#ido").fullpage({
		continuousVertical: false,  //循环演示
		//绑定菜单
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4','page5','page6', 'page7'],
		'navigation': true,
		'navigationPosition': 'right'
	});
});
$("#menu a").click(function() {
	if($(this).index()!=0) {
		$("#menu").css({"display": "none"});
	}
})
console.log($("#ido").scrollTop());
// function back() {
// 	if($("#ido".scrollTop()==0)) {
// 		console.log($("#ido".scrollTop());
// 	}
// }
// $(".index_tab .right").click(function() {
	// $(".bigpic img").addClass('active').siblings().removeClass("active");
	// $(".bigpic .index_bigpic").stop(true, true).animate({scrollLeft: "33.33%"},1000);
// 	$(".bigpic img").fadeIn(400, function() {
// 		$(".bigpic img").next("img").fadeOut(400);
// 	});
// 	console.log(1);
// });
$(".wrap_four .main dl").click(function() {
	// console.log(1);
	$(this).stop(true, true).animate({
		"width": "650px"
	}).siblings("dl").stop(true, true).animate({
		"width": "183.33px"
	});
	$(this).children('dt').children("img").css({"opacity": "1"});
	$(this).siblings("dl").children('dt').children("img").css({"opacity": "0.5"});
	$(this).children().children("div").addClass('none_tit');
	$(this).siblings("dl").children().children("div").removeClass('none_tit');
})

var outer = document.getElementById("right_img");
var inner = document.getElementById("slide1");
var btnLeft = document.getElementById("left_tab");
var btnRight = document.getElementById("right_tab");

var maxScroll = outer.scrollWidth - outer.clientWidth;
console.log(maxScroll, outer.scrollWidth, outer.clientWidth);
console.log(outer.scrollLeft);

$(".left_tab").click(function() {
	// console.log(1);
	if($(".right_img").scrollLeft() == maxScroll) {
		$(".right_img").stop().animate({
			"scrollLeft": 0
		})
		return;
	}
	$(".right_img").stop().animate({
		"scrollLeft": outer.scrollLeft + outer.clientWidth
	})
})
$(".right_tab").click(function() {
	// console.log(1);
	if($(".right_img").scrollLeft() == 0) {
		$(".right_img").stop().animate({
			"scrollLeft": maxScroll
		})
		return;
	}
	$(".right_img").stop().animate({
		"scrollLeft": outer.scrollLeft - outer.clientWidth
	})
})

var main = document.getElementById("con");
// var con = document.getElementById("con");
var scrollBarX = document.getElementById("scrollBarX");
var box = document.getElementById("box");

scrollBarX.onmousedown = function(event) {
	var e = event || window.event;
	var startX = e.clientX;
	console.log(startX);
	var sX = scrollBarX.offsetLeft;
	// console.log(sX);
	prevent(e);
	document.onmousemove = function(event) {
		var e = event || window.event;
		var nowX = e.clientX;
		// console.log(nowX);
		var lengthX = nowX - startX;
		// console.log(lengthX);
		var endX = sX + lengthX;
		console.log(endX);
		console.log(box.clientWidth);
		if(endX >= box.clientWidth - scrollBarX.offsetWidth) {
			endX = box.clientWidth - scrollBarX.offsetWidth;
		}
		if(endX <= 0) {
			endX = 0;
		}
		// 滚动条运动对应内容按比例滚动
		var scale = endX / (box.clientWidth - scrollBarX.offsetWidth);
		// console.log(scale);
		// console.log(box.clientWidth, scrollBarX.offsetWidth);
		main.scrollLeft = scale * (main.scrollWidth - main.clientWidth);
		scrollBarX.style.left = endX + "px";
		prevent(e);
		console.log(main.scrollLeft, main.scrollWidth, main.clientWidth);
	}
}

document.onmouseup = function() {
	document.onmousemove = null;
}

function prevent(e) {
	if(e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}

$(".right_list dl").hover(
	function() {
		$(this).children('dd').css({"background-color": "#3279c0"}).stop().animate({
			"height": 111
		});
		$(this).siblings("dl").children("dd").css({"background-color": "#094e93"}).stop().animate({
			"height": 96
		});
		$(this).children("dt").children("a").children('img').stop().animate({
			"opacity": 1
		})
	},
	function() {
		$(".right_list dl dd").css({"background-color": "#094e93"}).stop().animate({
			"height": 96
		});
		$(this).children("dt").children("a").children('img').stop().animate({
			"opacity": 0.6
		})
	}
)
// Page.7
$(".news li").click(function() {
	$(".news_detail").slideDown('slow');
})
$(".fuck").click(function() {
	$(".news_detail").slideUp('slow');
})

var outerx = document.getElementById("news");
var innerx = document.getElementById("allNews");
var btnLeftx = document.getElementById("L_tab");
var btnRightx = document.getElementById("R_tab");

var maxScrollx = outerx.scrollWidth - outerx.clientWidth;
console.log(maxScrollx, outerx.scrollWidth, outerx.clientWidth);
console.log(outerx.scrollLeft);

$("#L_tab").click(function() {
	console.log(1);
	if($("#news").scrollLeft() == maxScrollx) {
		$("#news").stop().animate({
			"scrollLeft": 0
		})
		return;
	}
	$("#news").stop().animate({
		"scrollLeft": outerx.scrollLeft + 400
	})
})
$("#R_tab").click(function() {
	console.log(1);
	if($("#news").scrollLeft() == 0) {
		$("#news").stop().animate({
			"scrollLeft": maxScrollx
		})
		return;
	}
	$("#news").stop().animate({
		"scrollLeft": outerx.scrollLeft - 400
	})
})

var news_main = document.getElementById("news_main");
var news_all = document.getElementById("news_all");
var scrollBarY = document.getElementById("scrollBarY");
var boxN = document.getElementById("boxN");

scrollBarY.onmousedown = function (e){
	var evt = e || window.event;
	var startY = evt.clientY;
	var sportY = scrollBarY.offsetTop;
	// 绑定到document上
	document.onmousemove = function(e) {
		var evt = e || window.event;

		var nowY = evt.clientY;
		var lengY = nowY - startY;
		endY = sportY + lengY;

		// 临界值判断
		if(endY >= boxN.clientHeight - scrollBarY.offsetHeight){
			endY = boxN.clientHeight - scrollBarY.offsetHeight;
		}
		if(endY <= 0){
			endY = 0;
		}
		console.log(boxN.clientHeight, scrollBarY.offsetHeight, nowY, scrollBarY.style.marginTop, (boxN.clientHeight-scrollBarY.offsetHeight));

		scrollBarY.style.marginTop = endY + "px";
		scale = endY / (boxN.clientHeight - scrollBarY.offsetHeight);
		news_main.scrollTop = scale * (news_main.scrollHeight - news_main.clientHeight);
		preventDefault(evt);
	}
};
function preventDefault(evt) {
	// 阻止默认
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
}


$(document).ready(function() {
	function request(index){
		var xhr = new XMLHttpRequest();
		xhr.open("get", "json/contact.json", true);
		xhr.send(null);
		xhr.onload = function() {
			var obj = JSON.parse(xhr.responseText);
			// console.log(obj);
			$(".box_min p").html(obj[index]);
		}
	}
	// request(0);

	// $(".down span").click(function() {
	// 	$(this).addClass("active").siblings().removeClass("active");
	// 	$(".outer_num em").html(parseInt($(this).text()));
	// })

	// var i = 0;
	var spoo = document.getElementById("spoo");
	var spans = spoo.getElementsByTagName("span");
	console.log(spans);
	for(var i = 0; i < spans.length; i++) {
		// console.log(i);
		spans[i].index = i;
		spans[i].onclick = function() {
			for(var j = 0; j < spans.length; j++) {
				console.log(this.index);
				request(this.index);
				$(this).addClass("active").siblings().removeClass("active");
				$(".outer_num em").html(parseInt($(this).text()));
			}
		}
	}
});