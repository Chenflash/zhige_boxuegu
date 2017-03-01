<<<<<<< HEAD
define(['jquery', 'jqueryCookie'], function($, undefined) {

    //ajax加载loading
    $(document).ajaxStart(function() {
        $('.overlay').show();
    }).ajaxStop(function() {
        $('.overlay').hide();
    });


    // 左侧导航下拉列表
=======
/**
 * Created by hom on 2017/2/25.
 */
define(['jquery'],function($){
    // 菜单下拉
>>>>>>> 71eb6ff75713c252746848c7c8af1eecf7abe744
    $('.navs a').on('click', function() {
        $(this).next().slideToggle();
    });

<<<<<<< HEAD
    /*
    * 根据页面路径的左侧导航
    * 1.获取当前页面的pathname
    * 2.获取所有的a标签，清除其他a标记的选中状态
    * 3.获取a标记的所有父ul，让其显示
    *
    * */
    //获取路径名
    var pathname=window.location.pathname;
    $('.navs a').removeClass('active').filter('[href="'+pathname+'"]').addClass('active').parents('ul').show();



    // 退出功能
    $('#logout').on('click', function() {
        $.post('/v6/logout', function(data) {
            if(data.code == 200) {
                location.href = '/html/home/login.html';
            }
        });


    });

    // 获取本地cookie用户信息，同时做容错处理
    var userInfo = null;
    try {
        userInfo = JSON.parse($.cookie('userInfo'))
    }catch(e) {
        userInfo = {};
    }

    // 然后展示到左侧导航
    $('.aside .profile h4').html(userInfo.tc_name? userInfo.tc_name: '陈光志');
    $('.aside .profile img').attr('src', userInfo.tc_avatar? userInfo.tc_avatar: '/uploads/default.jpg');








});
=======



})
>>>>>>> 71eb6ff75713c252746848c7c8af1eecf7abe744
