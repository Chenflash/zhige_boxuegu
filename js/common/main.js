requirejs.config({
    baseUrl: '/',
    paths: {

        // 第三方库的路径配置
        jquery: 'lib/jquery/jquery',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',

        // 自己写的路径配置
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        common: 'js/common/common',
        login:'js/home/login'

    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

// 所有的页面都需要这两个js，先加载他们。
require(['jquery', 'bootstrap','common'],function(){

});

/*
 *这里获取页面的pathname，然后对应的加载js。
 * */
(function(window){

    //获取路径
    var pathname = window.location.pathname;

    /*
    * 判断登录的状态
    *
    * 1.当前在登录页的时候，
    * 没有session,则无需管
    * 有session，跳转到首页
    *
    * 2.其他页
    * 2.1没有session。则跳转到登录页
    * 2.2有session，则无需管
    * */

   require(['jquery','jqueryCookie'],function($,undefined){

        var sessionID= $.cookie('PHPSESSID');

       //在登录之前判断状态验证
       if(pathname==='/html/home/login.html'&&sessionID){
           location.href='/';
       }else if(pathname!=='/html/home/login.html'&&!sessionID){
           location.href='/html/home/login.html';
       }

        //当没有发生页面跳转的时候，加载对应的js模块
       switch(pathname) {
           case '/html/user/list.html':
               console.log(234);
               require(['userList']);
               break;
           case '/html/user/profile.html':
               require(['userProfile']);
               break;
           case '/html/home/login.html':
               require(['login']);
               break;

       }



   })






}(window));
