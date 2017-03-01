/**
 * Created by hom on 2017/2/25.
 */
requirejs.config({
   baseUrl:'/',

   //���������·������
   paths: {
       jquery:'lib/jquery/jquery.min',
       bootstrap:'lib/bootstrap/js/bootstrap.min',

       //д��·������
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

//ҳ����Ҫjs���ȼ�������
require(['jquery','bootstrap','common']);

(function(window){



    //��ȡҳ���pathname,Ȼ���Ӧ�ļ���js
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

















