define(["jquery","jquery-cookie"],function($){
    var goodcookie = function(){



        $(function(){
            var totalnum =0;//总的数量
            var _total_price =0;//总的价格

            $(".products_all ul").on("click",".buy",function(){
                add(this);
                showgoods(this);


            })



            function add(obj){
                var id = obj.id;
                alert(id);
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

                    $(".allgoods").html(arr.length);
                    if (arr.length ==0) {
                        $(".allgoods").html(0);
                    }
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
            }


            //显示数量
            function showNum(){
                var str = $.cookie("goods");
                var arr = eval(str);
                var sum =0;
                for(var i = 0;i < arr.length;i++){
                    sum += arr[i].num;
                    $(".allgoods").html(sum);//购物车一共有 多少件商品
                }
                totalnum = sum;
                if (sum == 0) {
                   $(".allgoods").html(sum);
                   $(".checkNum").html(0);
                }
            }




            //对于每个添加进来的商品进行列表展示
            function showgoods(obj){
                var i = obj.id;//获取列表页的商品的id


                $.ajax({
                        url:"../data/productlist_tv.json",
                        type:"get",
                        success:function(res1){
                        $(".shop_list").find(".list1").html("");
                            var obj1 = res1[i];
                            var str = $.cookie("goods");
                            var arrCookie = eval(str);

                                 var html= `<div class = "goods_1">

                                    <div class = "goods_item sel-wid">
                                        <span class ="opt_box ">
                                             <svg class="icon" aria-hidden="true" >
                                                <use xlink:href="#icon-xuanze"></use>
                                            </svg>
                                        </span>
                                    </div>

                                    <div class = "goods_item pro-wid">
                                        <span class ="goods_left">
                                            <a href="">
                                                <img src="${res1[i].src}" alt="">
                                            </a>
                                        </span>
                                        <span class = "goods_right">
                                            <div class ="right_cont">
                                                <a href="">
                                                    <p class = "goods_title">${res1[i].strong}</p>
                                                    <p class= "goods_p1">颜色：银色<br/>屏幕尺寸：49英寸<br/></p>
                                                </a>
                                            </div>
                                        </span>
                                    </div>

                                    <div class = "goods_item pri-wid">
                                        <span class = "pri1"><span class = "now_0">${res1[i].now_0}</span><span class = "now_00">.00元</span></span>
                                    </div>

                                    <div class = "goods_item num-wid">
                                        <span class = "cut_l">-</span>
                                        <input type="text" value= "1" class = "goods_num1">
                                        <span class = "add_r">+</span>
                                    </div>

                                    <div class = "goods_item sub-wid">
                                        <div class = "price1">
                                            <span class = "now_pri"><span class = "now_1">${res1[i].now_1}</span><span class = "now_11">.00元</span></span>
                                            <span class = "old_pri" style="color:gray;text-decoration:line-through;"><span class = "now_2">3799</span><span class = "now_22">.00元</span></span>
                                        </div>
                                    </div>

                                    <div class = "goods_item ope-wid">
                                        <span class = "collect">
                                            <svg class="icon" aria-hidden="true" >
                                                <use xlink:href="#icon-xingxingshixin"></use>
                                            </svg>
                                        </span>
                                        <span class = "remove">
                                            <svg class="icon" aria-hidden="true" >
                                                <use xlink:href="#icon-shanchu"></use>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            `;


                        $(".list1").html(html);

                       }
                })
            }

        })


return "goodcookie";
    }
    return {
        goodcookie:goodcookie
    }
})








   // $(".buy_sub").click(function(){
   //                  $.ajax({
   //                      url:"../data/productlist_tv.json",
   //                      type:"get",
   //                      success:function(res1){
   //                          var html = "";
   //                          for(var i = 0;i<3;i++){
   //                              html += `<div class = "list1" >
   //                                          <div class = "goods_1">

   //                                              <div class = "goods_item sel-wid">
   //                                                  <span class ="opt_box ">
   //                                                       <svg class="icon" aria-hidden="true" >
   //                                                          <use xlink:href="#icon-xuanze"></use>
   //                                                      </svg>
   //                                                  </span>
   //                                              </div>

   //                                              <div class = "goods_item pro-wid">
   //                                                  <span class ="goods_left">
   //                                                      <a href="">
   //                                                          <img src="${res1[i].src}" alt="">
   //                                                      </a>
   //                                                  </span>
   //                                                  <span class = "goods_right">
   //                                                      <div class ="right_cont">
   //                                                          <a href="">
   //                                                              <p class = "goods_title">${res1[i].strong}</p>
   //                                                              <p class= "goods_p1">颜色：银色<br/>屏幕尺寸：49英寸<br/></p>
   //                                                          </a>
   //                                                      </div>
   //                                                  </span>
   //                                              </div>

   //                                              <div class = "goods_item pri-wid">
   //                                                  <span class = "pri1"><span class = "now_0">${res1[i].now_0}</span><span class = "now_00">.00元</span></span>
   //                                              </div>

   //                                              <div class = "goods_item num-wid">
   //                                                  <span class = "cut_l">-</span>
   //                                                  <input type="text" value= "1" class = "goods_num1">
   //                                                  <span class = "add_r">+</span>
   //                                              </div>

   //                                              <div class = "goods_item sub-wid">
   //                                                  <div class = "price1">
   //                                                      <span class = "now_pri"><span class = "now_1">${res1[i].now_1}</span><span class = "now_11">.00元</span></span>
   //                                                      <span class = "old_pri" style="color:gray;text-decoration:line-through;"><span class = "now_2">3799</span><span class = "now_22">.00元</span></span>
   //                                                  </div>
   //                                              </div>

   //                                              <div class = "goods_item ope-wid">
   //                                                  <span class = "collect">
   //                                                      <svg class="icon" aria-hidden="true" >
   //                                                          <use xlink:href="#icon-xingxingshixin"></use>
   //                                                      </svg>
   //                                                  </span>
   //                                                  <span class = "remove">
   //                                                      <svg class="icon" aria-hidden="true" >
   //                                                          <use xlink:href="#icon-shanchu"></use>
   //                                                      </svg>
   //                                                  </span>
   //                                              </div>
   //                                          </div>
   //                                      </div>`

   //                          }

   //                      }
   //                  })

   //              })