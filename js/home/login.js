/**
 * Created by hom on 2017/2/25.
 */
define(['jquery'],function($){
    /*
    * 1.先监听form表单的提交事件
    * 2。事件回调中的return false组织默认的提交
    * 3.事件回调中通过ajax的方式发送表单数据
    * 4.如果结果返回为200，证明成功，否则，跳转到首页
    *
    *
    * */
    $('#form-login').on('submit',function(){

        $.ajax({
           url:'/v6/login',
           type:'post',
           data:$(this).serialize(),
           success:function(data){

               if(data.code===200){
                   $.cookie('userInfo',JSON.stringify(data.result),{
                       path:'/'
                   });
                   location.href='/';
               }


           }



        });

    })











});