/**
 * Created by hom on 2017/2/25.
 */
define(['jquery'],function($){

    // 左侧导航下拉列表
    $('.navs a').on('click', function() {
        $(this).next().slideToggle();
    });

    $.ajax({
       url:'/v6/login',
       type:'post',
       data:{
         tc_name:'123456',
         tc_pass:'123456'

       },
       success:function(){
          console.log('发送成功');

        },
        error:function(){
            console.log('失败了');
        }




    });




})