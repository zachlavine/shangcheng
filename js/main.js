/* 
* @Author: anchen
* @Date:   2017-05-04 17:31:27
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-04 22:33:58
*/

// 这是team_main.js

var con = document.getElementById("wrap");
var per = document.getElementById("person");
var btnLeft = document.getElementById("left_tab");
var btnRight = document.getElementById("right_tab");
var maxScroll = con.scrollWidth - con.clientWidth;

console.log(maxScroll, con.scrollWidth, per.clientWidth)
$("#left_tab").click(function() {
	console.log(1);
	if($("#wrap").scrollLeft() == maxScroll) {
	console.log(1);
		$("#wrap").stop().animate({
			"scrollLeft": 0
		})
		return;
	}
	$("#wrap").stop().animate({
		"scrollLeft": con.scrollLeft + per.clientWidth
	})
	console.log($("#wrap").scrollLeft());
	console.log($("#wrap"), con.scrollLeft, per.clientWidth);
})
$("#right_tab").click(function() {
	if($("#wrap").scrollLeft() == 0) {
		$("#wrap").stop().animate({
			"scrollLeft": maxScroll
		})
		return;
	}                                                                                                 
 	$("#wrap").stop().animate({
		"scrollLeft": con.scrollLeft - con.clientWidth
	})
})

// 大图滚动区域
var choose_team = document.getElementById("content");
var tab_choose = document.getElementById("btns");
var btns_Left = document.getElementById("btns_Left");
var brtns_Right = document.getElementById("btns_Right");
var innerBox = document.getElementById("innerBox");
var num = document.getElementById("nums");
var round = document.getElementById("round");

var maxScroll = tab_choose.scrollWidth - tab_choose.clientWidth;
console.log(maxScroll, tab_choose.scrollWidth, btns.clientWidth)
$("#btns_Left").click(function() {
	console.log(1);
	if($("#btns").scrollLeft() == maxScroll) {
	console.log(1);
		$("#btns").stop().animate({
			"scrollLeft": 0
		})
		return;
	}
	$("#btns").stop().animate({
		"scrollLeft": tab_choose.scrollLeft + num.clientWidth
	})
}) 
$("#btns_Right").click(function() {
	if($("#btns").scrollLeft() == 0) {
		$("#btns").stop().animate({
			"scrollLeft": maxScroll
		})
		return;
	}                                                                                                 
 	$("#btns").stop().animate({
		"scrollLeft": tab_choose.scrollLeft - num.clientWidth
	})
})