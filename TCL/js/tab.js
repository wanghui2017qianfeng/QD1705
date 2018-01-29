define(["jquery","jquery-cookie"],function($){
    var tab = function(){
        $(function(){
            //这是要进行点击才可以
            $(".first").on("click","li",function(){
                var i = $(this).index();
                var _this = this;
                $(this).addClass('hover').siblings().removeClass('hover');
                $(this).find("span").css({borderBottom:"none"});
                $(".sheng").eq(i).addClass('active').siblings().removeClass('active');
                $(".sheng").eq(i).find("li").click(function(){
                    var html = $(this).html();
                    $(_this).find("span").html(html);
                    $(".sheng").eq(i+1).addClass('active').siblings().removeClass('active');
                });

            })






        })
    }
    return {
        tab:tab
    }
})