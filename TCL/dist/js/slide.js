define(["jquery"],function($){
    var slide = function(){
        var index = 0;
            function change(index){
                // 一个淡入，其他淡出
                $(".pic_banner  li").eq(index).siblings().stop().animate({opacity:0},1000);
                $(".pic_banner li").eq(index).stop().animate({opacity:1},1000);
                // 小红点切换
                $(".dots span").eq(index).addClass("active").siblings().removeClass('active');

            }

            //点击切换
            $(".dots").on("click","span",function(){
                var _index = $(this).index();
                index = _index;
                change(index);
            });


            setInterval(function(){
                index++;
                index = index % $(".pic_banner li").size();
                change(index);
            },4000)



    }

    return {
        slide:slide
    }
})