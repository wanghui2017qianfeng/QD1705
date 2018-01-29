//AMD
/*
	循环广告窗口实现方法：

	1、将第一张图片添加在最后一张图片的后面

*/



define(["jquery", "jquery-cookie"], function($){
	var fade = function(){
			var index = 0;
			function change(index){
				// 一个淡入，其他淡出
				$("#play #pic li").eq(index).siblings().stop().animate({opacity:0},1000);
				$("#play #pic li").eq(index).stop().animate({opacity:1},1000);

				// 小红点切换
				$("#play #dot li").eq(index).addClass("bg_red").siblings().removeClass('bg_red');

			}

			//点击切换
			$("#play #dot").on("click","li",function(){
				var _index = $(this).index();
				index = _index;
				change(index);

			});

			setInterval(function(){
				index++;
				index = index % $("#play #pic li").size();
				change(index);

			},4000)

			return "这里是循环广告";
	}
	return {
		fade: fade
	}
})












