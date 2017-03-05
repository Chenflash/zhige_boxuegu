/**
 * Created by hom on 2017/2/25.
 */
define(['jquery','common','nprogress'],function($,undefined,nprogress){

    nprogress.done();

    //密码修改
    $("#form-Submit").on("submit",function(){
        $.ajax({
            url:'/v6/teacher/repass',
            type:'post',
            data:$(this).serialize(),
            success:function(data){
                if(data.code==200){

                    //绑定事件,实现提交编辑密码后，绑定退出的点击按钮，退出登录
                    $('#logout').trigger('click');


                }


            }



        })



    });




});
