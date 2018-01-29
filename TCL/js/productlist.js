define(["jquery","jquery-cookie"],function($){
    var productlist = function(){
         $(function(){
             $(".tt").click(function(){
                $(this).href = "productlist.html";
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


            //根据价格选择数据
             // $(".price").on("click","span",function(){
             //    var t = $(this).attr("type");
             //    // $(this).attr("type");

             //    if(!$(this).hasClass("active")) {//如果他没有active
             //        // $(this).attr("value"), $(this).attr("key"),
             //        $('span[type="' + t + '"]').removeClass("active"), $(this).addClass("active"),a(1)
             //    }
             // })


             $(".price").find("span").click(function(){
                    var t = $(this).attr("type");
                    // $(this).attr("type");
                    if(!$(this).hasClass("active")) {//如果他没有active
                        // $(this).attr("value"), $(this).attr("key"),
                        $('span[type="' + t + '"]').removeClass("active"), $(this).addClass("active"),a(1)
                    }
             })



             /*
            电视产品
             */
             $.ajax({
                url:"../data/productlist_tv.json",
                type:"get",
                success:function(res){
                    var html ="";
                    for(var i = 0;i<res.length;i++){
                        html += `<li>
                                    <div class = "tv_img">
                                        <a href="${res[i].href}"><img src="${res[i].src}" alt=""></a>
                                    </div>
                                    <div class = "text">
                                        <div class = "intro">
                                            <strong>${res[i].strong}</strong>
                                            <p class = "des">
                                                <a href="">
                                                    <font style="font: bold; color: red">
                                                        【<span style="color:red">${res[i].span}</span>${res[i].p}
                                                    </font>
                                                </a>
                                            </p>
                                        </div>
                                        <div class ="pri">${res[i].pri}</div>
                                        <a id = "${res[i].id}" class = "buy"  href="${res[i].a_href}">立即购买</a>
                                    </div>
                                </li>`;

                    }
                    $(".products_all ul").html(html);

                }

             })

            //  $(".products_all ul").on("click",".buy",function(){
            //     //  add($(this));
            //     // showgoods($(this));
            //     // var i = this.attr("code");
            //     // alert(1);
            //     alert(this.id);
            // })









        })
    }
    return {
        productlist:productlist
    }
})