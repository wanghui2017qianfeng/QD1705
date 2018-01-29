define(["jquery","jquery-cookie"],function($){
    var order = function(){

        $(function(){





            //     // 关于购物车
            // var totalnum =0;//总的数量
            // var _total_price =0;//总的价格


            //列表页的商品进行点击

            $(".products_all ul").on("click",".buy",function(){
                add(this);
                buy();

            })
            function add(obj){

                var id = obj.id;
                // alert(id);
                var first = $.cookie("goods") == null ? true :false;//判断是否是第一次加入购物车
                if (first) {
                    //创建cookie
                    $.cookie("goods","[{id:"+id+",num:1"+"}]",{
                        expires:7
                    });
                }else{
                   //不是第一次添加商品，判断是否有同类型商品
                    var cookieStr = $.cookie("goods");
                    var arr = eval(cookieStr);

                    // $(".allgoods").html(arr.length);
                    // if (arr.length ==0) {
                    //     $(".allgoods").html(0);
                    // }
                    var same = false;//默认没有同类型商品
                    for (var i in arr) {
                        if(arr[i].id == id ){
                            same = true;
                            arr[i].num++;
                            $.cookie("goods",JSON.stringify(arr),{expires:7});
                            break;
                        }
                    }
                    if (!same) {
                        var obj = {id:id,num:1};
                        var cookieStr = $.cookie('goods');
                        var arr = eval(cookieStr);
                        arr.push(obj);
                        $.cookie("goods",JSON.stringify(arr),{
                            expires:7
                        });
                    }
                }
                // alert( $.cookie("goods"));
            }
             // alert( $.cookie("goods"));
            // buy();
            // 跳转到详情页进行点击，才会载入到购物车
            function buy(){
                $.ajax({
                    url:"../data/productlist_tv.json",
                    type:"get",
                    success:function(res){
                       var str = $.cookie("goods");
                       var arr = eval(str);
                       // alert(arr[1].id);
                       var html = "";
                       var sum = null;//总价
                       var n = null;//所有数量
                       for(var i = 0 ;i < arr.length;i++){
                            // alert(res[arr[i].id].now_0);
                            var oPrice = arr[i].num * (res[arr[i].id].now_0);//单个商品总的价格
                            var oPriceold = arr[i].num *(res[arr[i].id].now_0+1000);//单个商品原先的总价
                            sum += oPrice;
                            n += arr[i].num;
                            var obj = res[arr[i].id];
                                html += `
                                  <div class = "goods_1">
                                    <div class = "goods_item sel-wid">
                                        <span class ="opt_box oo${res[arr[i].id].id}" tab_num= ${i}>
                                             <svg class="icon" aria-hidden="true" >
                                                <use xlink:href="#icon-xuanze"></use>
                                            </svg>
                                        </span>
                                    </div>

                                    <div class = "goods_item pro-wid">
                                        <span class ="goods_left">
                                            <a href="">
                                                <img src="${obj.src}" alt="">
                                            </a>
                                        </span>
                                        <span class = "goods_right">
                                            <div class ="right_cont">
                                                <a href="">
                                                    <p class = "goods_title">${obj.strong}</p>
                                                    <p class= "goods_p1">颜色：银色<br/>屏幕尺寸：49英寸<br/></p>
                                                </a>
                                            </div>
                                        </span>
                                    </div>

                                    <div class = "goods_item pri-wid">
                                        <span class = "pri1"><span class = "now_0">${obj.now_0}</span><span class = "now_00">.00元</span></span>
                                    </div>

                                    <div class = "goods_item num-wid">
                                        <span class = "cut_l order cut_l${res[arr[i].id].id}">-</span>
                                        <input type="text" value= "${arr[i].num}" class = "goods_num1">
                                        <span class = "add_r order add_r${res[arr[i].id].id}">+</span>
                                    </div>

                                    <div class = "goods_item sub-wid">
                                        <div class = "price1">
                                            <span class = "now_pri"><span class = "now_1">${oPrice}</span><span class = "now_11">.00元</span></span>
                                            <span class = "old_pri" style="color:gray;text-decoration:line-through;"><span class = "now_2">${oPriceold}</span><span class = "now_22">.00元</span></span>
                                        </div>
                                    </div>

                                    <div class = "goods_item ope-wid">
                                        <span class = "collect oo${res[arr[i].id].id}">
                                            <svg class="icon" aria-hidden="true" >
                                                <use xlink:href="#icon-xingxingshixin"></use>
                                            </svg>
                                        </span>
                                        <span class = "remove oo${res[arr[i].id].id}">
                                            <svg class="icon" aria-hidden="true" >
                                                <use xlink:href="#icon-shanchu"></use>
                                            </svg>
                                        </span>
                                    </div>
                                </div>`;
                        }
                        $("#list11").html(html);
                        // $(".font30").html(sum);
                        $(".allgoods").html(n);
                        $(".sc_num").html(n);
                        allCheck(n,sum);
                        check();
                    }
                })
            }

            buy();
                // 单选按钮
                function check(){
                    var tab_sum = 0;
                    var tab_totalPrice = 0;
                    var arr_count = [];//每个单选框的计数；
                    for(var i = 0;i<100;i++){
                        arr_count[i] = 0;
                    }
                    $(".list11").on("click",".opt_box",function(){
                        var str = $.cookie("goods");
                        var arr = eval(str);
                        var btnId =this.className.substring(10);
                        var i = $(this).attr("tab_num");
                        // alert(i);
                        $(this).toggleClass('active');
                        var check_num = Number($(this).parents(".goods_1").find(".goods_num1").val());
                        // alert(check_num);
                        var check_price = Number($(this).parents(".goods_1").find(".now_1").html());
                        // alert(check_price);
                        if(arr_count[i] % 2 == 0){
                            //选中
                            tab_sum += check_num;
                            tab_totalPrice += check_price;
                            console.log(tab_totalPrice +'添加');
                        }else{
                            //不选
                            tab_sum -= check_num;
                            tab_totalPrice -= check_price;
                            console.log(tab_totalPrice +'delete');
                        }
                        $(".checkNum").html(tab_sum);
                        $(".font30").html(tab_totalPrice);
                        arr_count[i]++;
                    })
                }




            // 对应商品的加减
            $(".list11").on("click",".order",function(){
                var str = $.cookie("goods");
                var arr = eval(str);
                // 点击的按钮对应的ID
                var btnId =this.className.substring(17);
                for(var i = 0; i < arr.length; i++){
                    if(btnId == arr[i].id){
                        switch($(this).html()){
                            case "+":
                                arr[i].num += 1;

                                break;
                            case "-":
                                if(arr[i].num <=1){
                                    arr[i].num=1;
                                    var cookieStr = JSON.stringify(arr);
                                    $.cookie("goods", cookieStr, {
                                        expires: 7
                                    });
                                    buy();

                                }else{
                                    arr[i].num -=1;
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
                var cookieStr = JSON.stringify(arr);
                $.cookie("goods", cookieStr, {
                    expires: 7
                });
                buy();
                goodsNum();


            })



                    //计算商品总数 一共有多少件商品
                    function goodsNum(){
                        var str = $.cookie("goods");
                        var arr = eval(str);
                        var sum = null;
                        for(var i = 0; i < arr.length; i++){
                            sum += arr[i].num;
                        }
                        $(".allgoods").html(sum);
                    }

                    //页面载入时计算商品总数
                    goodsNum();

                //       全选时
                function allCheck(n,sum){
                    var count = 0;//点击计数
                    $(".check_all").find(".opt_box").click(function(){
                        if(count%2 == 0){
                            $(this).addClass("active");
                            $(".list11").find(".opt_box").addClass("active");
                            $(".checkNum").html(n);
                            $(".font30").html(sum);
                        }else{

                            $(this).removeClass("active");
                             $(".list11").find(".opt_box").removeClass("active");
                            $(".checkNum").html(0);
                            $(".font30").html(0);
                        }
                        count ++;
                    })
                }












                // 删除商品
                $(".list11").on("click",".remove",function(){
                        var str = $.cookie("goods");
                        var arr = eval(str);
                        var btnId =this.className.substring(9);
                        // alert(btnId);
                        $("#mb_box").css({display:"block"});
                        $(".remove_menu").css({display:"block"});

                        $(".btnl").click(function(){
                             $("#mb_box").css({display:"none"});
                             $(".remove_menu").css({display:"none"});
                        })

                        $(".btnr").click(function(){
                            for(var i = 0; i < arr.length; i++){
                                if(btnId == arr[i].id){
                                    arr.splice(i,1);
                                    var cookieStr = JSON.stringify(arr);
                                    $.cookie("goods", cookieStr, {
                                        expires: 7
                                    });
                                   buy();
                                }
                            }
                            $("#mb_box").css({display:"none"});
                            $(".remove_menu").css({display:"none"});
                        })
                    })

                // 收藏
                 $(".list11").on("click",".collect",function(){
                     $("#mb_box").css({display:"block"});
                    $(".login_menu").css({display:"block"});
                 })




























        })
    }
    return{
        order:order
    }
})