/**
 * Created by hom on 2017/2/25.
 */
requirejs.config({
   baseUrl:'/',

   //第三方库的路径配置
   paths: {
       jquery:'lib/jquery/jquery.min',
       bootstrap:'lib/bootstrap/js/bootstrap.min',

       //写的路径配置
       userList:'js/user/list',
       userProfile:'js/user/profile',
       common:'js/common',
       login:'js/home/login'


   } ,

    shim: {
        bootstrap: {
            deps: ['jquery']
        }

    }


});

//页面需要js，先加载他们
require(['jquery','bootstrap','common']);

(function(window){



    //获取页面的pathname,然后对应的加载js
    var pathname=window.location.pathname;
    switch (pathname){
        case '/html/user/list.html':
            require(['userList']);
            break;
        case '/html/user/profile.html':
            require(['userProfile']);
            break;
        case '/html/home/login.html':
            require(['login']);
            break;

    }


})(window);

















