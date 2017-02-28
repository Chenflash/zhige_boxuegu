/**
 * Created by hom on 2017/2/25.
 */
define(['jquery','jqueryCookie'],function($,undefined){

    /*
    * 展示用户的历史登录头像：
    * 1.获取userInfo这个cookie的值
    * 2.把cookie的字符串转换为对象
    * 3.设置登录页的img-src为对象中的tc_avatar属性值如果没有，
    * 就给一个默认的头像地址
    *
    *
    *
    * */
    var userInfo=null;
    try{
        userInfo=JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo={};
    }
    $('.login .acatar img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/uploads/default.png');




    /*
    * 登录页面实现的几个步骤：
    * 1.先监听form表单的提交事件
    * 2.事件回调return false阻止默认的事件
    * 3.事件回调通过ajax的方式发送表单数据
    * 4.如果返回的结果code为200的话，证明登录成功，跳转到首页
    *
    *
    * */
    //先监听form表单的提交事件
    $('#form-login').on('submit',function(){

        //事件回调通过ajax的方式发送表单数据
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            //成功请求回调
            success:function(data){
                //如果返回的结果code为200的话，证明登录成功
                if(data.code===200){

                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    //跳转到首页
                    location.href='/';
                }

            }


        });


        //阻止事件的默认行为
        return false;
    });



});