/**
 * Created by hom on 2017/2/25.
 */
define(['jquery','common','nprogress'],function($,undefined,nprogress){

    nprogress.done();

    //发送ajax请求， 表单提交后，跳转到第一个页面
    $("#add-form").on("submit",function(){
        $.post('/v6/course/create', $(this).serialize(), function(data) {
            //alert("请求成功");
            if(data.code==200){
                alert("请求成功");
                console.log(data);
                location.href = '/html/course/add_step1.html?cs_id=' + data.result.cs_id;
            }

        });
        return false;


    });



});
