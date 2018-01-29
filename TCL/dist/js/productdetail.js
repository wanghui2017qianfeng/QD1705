define(["jquery","jquery-cookie"],function($){
    var productdetail = function(){
        $(function(){
            $(".tt").click(function(){
                $(this).href = "productdetail.html";
            })

            // 只有移入电视，手机等才会下拉，弹性菜单滑动
            var oLi = $(".title").find(".ul1").find(".li1");//先获取这些li
            oLi.mouseenter(function(){
                var i = $(this).index();
                ajax3(i);
                $(".blank").slideDown().show();
                $(".bg").css({width:$(this).width()+25}).animate({left:$(this).offset().left-220},200)
            });
            $(".blank").mouseleave(function(){
                $(".blank").stop().slideUp();
            });
            $(".top").mouseover(function(){
                $(".blank").stop().slideUp();
            });
            $(".blank").mouseleave(function(){
                $(".bg").css({width:30}).animate({left:0},200);
            });

            //上面商品列表下拉i多一
            var ajax3 = function(index){
                $.ajax({
                    url:"../data/data.json",
                    type:"get",
                    success:function(res){
                        var arr = res[index-1];
                        var html = "";
                        for(let i = 0;i < arr.length;i++){
                            html += `<li>
                                        <a href="${arr[i].href}">
                                            <span>
                                                <img src="${arr[i].src}" alt="">
                                            </span>
                                            <p class = "dec">${arr[i].alt}</p>
                                            <p class = "pri">${arr[i].price}</p>
                                        </a>
                                   </li> `;
                        }
                        $(".blank ul").html(html);
                    }
                })
            }


        // 点击下面的图片上面的大图进行切换
        $(".imglist").find("span").click(function(){
            var t = $(this).attr("class");
            if(!$(this).hasClass('active')){
               $(this).siblings().removeClass('active');
               $(this).addClass('active');
            }
              var i = $(this).index();
              // console.log(i);
             $(".item").removeClass('active');
             $(".item").eq(i).addClass('active');

             var src = $(".item").eq(i).find("img").attr("src");
             // console.log(src);


             $("#magnify").find("img").attr("src",src);
        })

        // 移入二维码显示
        $(".qrcode").hover(function(){
            $(".fixed-code").css({display:"block"});
        },function(){
             $(".fixed-code").css({display:"none"});
        })

        $(".fixed-code").mouseover(function(){
             $(".fixed-code").css({display:"block"});
        });
        $(".fixed-code").mouseout(function(){
             $(".fixed-code").css({display:"none"});
        });

        // 配送地址
        $(".dizhi").mouseover(function(){
            $(".add_list").css({display:"block"}).animate({opacity:1},1000)
        })
       $(".delete").click(function(){
            $(".add_list").css({display:"none"})
       })

        ///顶部悬浮747
        $(window).scroll(function() {
            var i = $(window).scrollTop();
            // console.log(i);
           if(i >= 780){
            $(".fixed-buy").css({display:"block"});
            $(".details-r").css({display:"block",top:i+100})
           }else{
            $(".fixed-buy").css({display:"none"});
            $(".details-r").css({display:"none"})
           }

           if(i>=780 && i<23400){
                 $(".details-r").find("ul").find("li").eq(0).addClass('active').siblings().removeClass('active');
           }else if(i>=23400 && i<24192){
                    $(".details-r").find("ul").find("li").eq(1).addClass('active').siblings().removeClass('active');
           }else if(i >= 24192 && i<24324){
                    $(".details-r").find("ul").find("li").eq(2).addClass('active').siblings().removeClass('active');
           }else if(i >= 24324 && i<25300){
                    $(".details-r").find("ul").find("li").eq(3).addClass('active').siblings().removeClass('active');
           }else{
                    $(".details-r").find("ul").find("li").eq(4).addClass('active').siblings().removeClass('active');
           }


        });

        //点击左边的菜单导航,跳转到相对应的页面
        $(".details-r").find("ul").on("click","li",function(){
             $(this).addClass('active').siblings().removeClass('active');
        })


        // 点击顶部悬浮的二维码
         $(".fixed_qrcode1").hover(function(){
            $(".fixed-code1").css({display:"block"});
        },function(){
             $(".fixed-code1").css({display:"none"});
        })

        $(".fixed-code1").mouseover(function(){
             $(".fixed-code1").css({display:"block"});
        });
        $(".fixed-code1").mouseout(function(){
             $(".fixed-code1").css({display:"none"});
        });

        // 点击add数量加一
        var num = $(".num1").val();
        // console.log(num);
        $(".add").click(function() {
            num++;
            $(".num1").val(num);
        });

        $(".cut").click(function() {
            num--;
            if(num<=1){
                num=1;
            }
            $(".num1").val(num);

        });














        })
    }
    return {
        productdetail:productdetail
    }
})