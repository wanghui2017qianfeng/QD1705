define(["jquery","jquery-cookie"],function($){
    var register = function(){
        $(function(){
            var arr = [0,0,0];
            $(".shouji_num").focus();
            $(".shouji_num").blur(function(){
                var reg =  /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if(!reg.test($(this).val())){
                    var html = `不是正确的手机号`;
                    $(this).next().html(html).css({display:"block"});

                }else{
                    //成功
                    var html = `<span class="regist-success" style="width:40px;">&nbsp;&nbsp;&nbsp;&nbsp;</span>`;
                    $(this).next().css({display:"none"});
                    arr[0] = 1;
                    /*alert(arr);*/
                }
                if($(this).val() == ""){
                    var html =`请输入手机号`;
                    $(this).next().html(html).css({display:"block"});
                }


            })

            //图片验证码
            function testCode1(n){   //验证码的个数
                var arr = [];
                for(var i = 0 ;i < n;i++){
                  var tmp = Math.floor(Math.random() * 10);
                  if(tmp == 10){
                    tmp = 0;
                  }
                  arr.push(tmp);
                }
                return arr.join("");
            }

            $(".code1").html(testCode1(4));
            $(".code1").click(function(){
                $(this).html(testCode1(4));
            })


            //点击获取验证码时进行判断图片验证码是否错误
            $(".code2").click(function(){
                if($(".pic_num").val() != $(".code1").html()){
                    $(".hide2").css({display:"block"})
                }
            })


            // 输入密码
            $(".mima1").blur(function(){
                var reg1 = /\d+/g;//匹配数字
                var reg2 = /[azAZ]+/g;//匹配字符
                var len = $(this).val().length;
                console.log(len);
                if(!(reg1.test($(this).val())&&reg2.test($(this).val())&& len >=8 &&len<=16)){//

                    $(".password").find("span").css({display:'block'});
                }else{
                    $(".password").find("span").css({display:'none'});
                    arr[1] = 1;
                    /*alert(arr);*/
                }
                if($(this).val() == ""){
                    $(".password").find("span").css({display:'none'});
                    var html =`请输入密码`;
                   $(".password").find("span").html(html).css({display:'block'});
                }
            })

            // 确认密码
            $(".mima2").blur(function(){
                var pre = $(".mima1");
                if($(this).val() != pre.val()){
                     $(".confirm").find("span").css({display:'block'});
                }else{
                    $(".confirm").find("span").css({display:'none'});
                    arr[2] = 1;
                    /*alert(arr);*/
                }
                if($(this).val() == ""){
                    $(".confirm").find("span").css({display:'none'});
                    var html =`请输入确认密码`;
                    $(".confirm").find("span").html(html).css({display:'block'});
                }
            })

            //
                $("button").click(function(){
                var sum = 0;
                for(var i in arr){
                    sum+= arr[i];
                }
                /*$.cookie('user',null)*/
                console.log('arr:'+arr)
                console.log("sum ="+sum);
                var phone =$('.shouji_num').val();
                var password = $(".mima2").val();
                if (sum == 3) {
                    if($.cookie("user")){
                        var str = $.cookie("user");
                        var arr1 = eval(str);
                        console.log(arr1)
                        var obj = {phone:`${phone}`,password:`${password}`};
                        arr1.push(obj);
                        $.cookie("user",JSON.stringify(arr1),{expires:7});
                    }else{
                        $.cookie("user",`[{phone:"${phone}",password:"${password}"}]`,{
                        expires:7
                    });
                    }
                    alert("注册成功");
                    console.log($.cookie("user"));
                }else{
                    console.log($.cookie("user"));
                    alert("error");
                    return false;
                }
            })









        })
    }
    return {
        register:register
    }

})