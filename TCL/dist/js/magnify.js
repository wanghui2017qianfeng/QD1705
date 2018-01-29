define(["jquery","jquery-cookie"],function($){
     var magnify= function(){
        $(function(){
            $(".bannerimg").hover(function(){
                $("#glass").css("display","block");
                $("#normal2").css("display","block");
                $("#magnify").css("display","block");
            },function(){
                $("#glass").css("display","none");
                $("#normal2").css("display","none");
                $("#magnify").css("display","none");
            })
             $(".item").mousemove(function(ev){
                var left = ev.pageX - $(this).offset().left-$("#glass").outerWidth()/2;
                var top = ev.pageY -$(this).offset().top -$("#glass").outerHeight()/2;
                if(left < 0){
                    left = 0;
                }else if(left > this.offsetWidth - $("#glass").outerWidth()){
                    left = this.offsetWidth - $("#glass").outerWidth();
                }
                if(top < 0){
                    top = 0;
                }else if(top > this.offsetHeight - $("#glass").outerHeight()){
                    top = this.offsetHeight - $("#glass").outerHeight();
                }
                $("#glass").css("left",left);
                $("#glass").css("top",top);

                var proportionX = left / (this.offsetWidth - $("#glass").outerWidth());
                var proportionY = top / (this.offsetHeight - $("#glass").outerWidth());

                var mLeft = - proportionX * ($("#magnify").outerWidth() - $(
                    "#normal2").outerWidth());
                var mTop = - proportionY * ($("#magnify").outerHeight() - $("#normal2").outerHeight());
                $("#magnify").css("left",mLeft);
                $("#magnify").css("top",mTop);
             })







        })
     }
    return {
        magnify:magnify
    }
})