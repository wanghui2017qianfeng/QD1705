define(["jquery","jquery-cookie"],function($){
    var login = function(){
        $(function(){
            var arr_login = [0,0];
            $(".user_name").blur(function(){
                if(!$(this).val()){
                     $(".user").find(".hide1").html(`请输入手机号 / 邮箱 / 用户名！`).css({display:"block"});
                }else{
                    if ($.cookie("user")) {
                        var str = $.cookie("user");
                        var arr = eval(str);
                        var isEqual = false;
                        for(var i in arr){
                            if(arr[i].phone == $(this).val() ){
                                isEqual = true;
                                arr_login[0]=1;
                                  $(".user").find(".hide1").html(``).css({display:"none"})
                                break;
                            }
                        }
                        if (!isEqual) {
                            $(".user").find(".hide1").html(`用户名不存在`).css({display:"block"});
                        }
                    }else{
                         $(".user").find(".hide1").html(``).css({display:"none"});
                    }
                }
            })

            // mima
            $(".mima_msg").blur(function(){
                if(!$(this).val()){
                     $(".mima").find(".hide2").html(`请输入登录密码！`).css({display:"block"});
                }else{
                     if ($.cookie("user")) {
                        var str = $.cookie("user");
                        var arr = eval(str);
                        var isEqual = false;
                        for(var i in arr){
                            if(arr[i].phone == $(".user_name").val() && arr[i].password == $(this).val() ){
                                isEqual = true;
                                arr_login[1]=1;
                                 $(".mima").find(".hide2").html(``).css({display:"none"});
                                break;
                            }
                        }
                        if (!isEqual) {
                             $(".mima").find(".hide2").html(`密码错误`).css({display:"block"});
                        }
                    }else{
                        // var html = ``;18705620871
                        $(".mima").find(".hide2").html(`请输入正确的账号和密码`).css({display:"block"});
                    }
                }
            })

            //登录
            $(".denglu").click(function(){
                var sum = 0;
                for(var i in arr_login){
                    sum+= arr_login[i];
                }
                if (sum ==2) {
                    alert("登录成功！")
                }else{
                    alert("error");

                }
            })


        })
    }
    return {
        login:login
    }
})