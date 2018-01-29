define(["jquery","jquery-cookie"],function($){
    var main = function(){
        $(function(){

            //点击向上箭头
            $(".tt").click(function(){
                $(this).href = "index.html";
            })



            // 只有移入电视，手机等才会下拉，弹性菜单滑动
            var oLi = $(".title").find(".ul1").find(".li1");//先获取这些li
            oLi.mouseenter(function(){
                var i = $(this).index();
                ajax2(i);
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
            var ajax2 = function(index){
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

            //左边菜单
            var ajax1 = function(index){
                $.ajax({
                    url:"../data/dataleft.json",
                    type:"get",
                    success:function(res){
                        var arr = res[index];
                        var html = "";
                        for(let i = 0;i < arr.length;i++){
                            html += `<div class = "cont">
                                        <ul class = "cont_ul">
                                            <li>
                                                <a href="${arr[i].href}">
                                                    <img src="${arr[i].img}" alt="">
                                                    <div class = "dj">
                                                        <p>${arr[i].des}</p>
                                                        <button>${arr[i].opt}</button>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>`;
                        }
                        $(".item_box").html(html);
                    }
                })
            }

        //移入显示左边商品
        var oLi = $(".sc_left").find(".left").find("li");
        oLi.mouseenter(function(){
            $(".item_box").css({
                display:"block"
            });
            var i = $(this).index();
            ajax1(i);
        });
        oLi.mouseleave(function(){
            $(".item_box").css({
                display:"none"
            })
        });

        $(".item_box").mouseleave(function(){
            $(this).css({
                display:"none"
            })
        });
        $(".item_box").mouseenter(function(){
            $(this).css({
                display:"block"
            })
        });

        //中间三个大图
        $.ajax({
            url:"../data/datamid.json",
            type:"get",
            success:function(res){
                var html = "";
                for(var i = 0;i < res.length;i++){
                    html += `<li>
                        <a href="${res[i].href}">
                            <img src="${res[i].src}" alt="">
                        </a>
                    </li>`
                }
                $(".mid ul").html(html);
            }
        })


        //电视上移入上浮
        $.ajax({
            url:"../data/datatv.json",
            type:"get",
            success:function(res){
                var html = "";
                for(var i = 0;i < res.length;i++){
                    html += `<li>
                            <img class ="tv_lt" src="${res[i].img}" alt="">
                            <a href="${res[i].href}">
                                <img src="${res[i].src}" alt="">
                                <p class = "name">${res[i].p1}</p>
                                <p class = "dice">${res[i].p2}</p>
                                <p class = "price">${res[i].price}</p>
                            </a>
                        </li>`
                }
                $(".tv_right").html(html);
            }
        })

        $(".tv_right").on("mouseenter","li",function(){
            $(this).addClass('hovering');
        })
        $(".tv_right").on("mouseleave","li",function(){
            $(this).removeClass('hovering');
        })

        //冰箱
         $.ajax({
            url:"../data/databing.json",
            type:"get",
            success:function(res){
                var html = "";
                for(var i = 0;i < res.length;i++){
                    html += `<li>
                            <img class ="bing_lt" src="${res[i].img}" alt="">
                            <a href="${res[i].href}">
                                <img src="${res[i].src}" alt="">
                                <p class = "name">${res[i].p1}</p>
                                <p class = "dice">${res[i].p2}</p>
                                <p class = "price">${res[i].price}</p>
                            </a>
                        </li>`
                }
                $(".bing_right").html(html);
            }
        })

        $(".bing_right").on("mouseenter","li",function(){
            $(this).addClass('hovering');
        })
        $(".bing_right").on("mouseleave","li",function(){
            $(this).removeClass('hovering');
        })

        //下面的人物
        $.ajax({
            url:"../data/dataperson.json",
            type:"get",
            success:function(res){
                var html = "";
                for(var i = 0 ; i < res.length;i++){
                    html += `<li class = "per_li">
                            <a href="${res[i].href}">
                                <img src="${res[i].src}" alt="">
                            </a>
                            <div class = "box">
                                <div class = "news">
                                    <span class = "box1">新闻</span>${res[i].news}
                                </div>
                                <div class = "msg">"${res[i].des}"</div>
                                <a class = "details" href="${res[i].a}">查看详情 >></a>
                            </div>
                        </li>`;
                }
                $(".per_ul").html(html);
            }
        })








        })
    }
    return {
        main:main
    }
})