requirejs.config({
    baseUrl: '/',
    paths: {

        // 第三方库的路径配置
        jquery: 'lib/jquery/jquery',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
        nprogress:'/lib/nprogress/nprogress',
        template:'/lib/artTemplate-3.0.1/template',

        // 自己写的路径配置
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        common: 'js/common/common',
        login:'js/home/login',
        repass:'js/home/repass',
        courseAdd:'js/course/add',
        courseAdd_step1:'js/course/add_step1',
        courseAdd_step2:'js/course/add_step2',
        courseAdd_step3:'js/course/add_step3',
        courseCategory:'js/course/category',
        courseCategoryAdd:'js/course/category_add',
        courseList:'js/course/list',
        courseTopic:'js/course/topic',
        teacherAdd:'js/teacher/add',
        teacherList:'js/teacher/list',
        index:'js/index.js'


    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

//优先以最快速度开启页面加载进度条，其他页面随后加载
require(['nprogress'],function(nprogress){
    nprogress.start();

})

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

           case '/html/user/repass.html':
               require(['repass']);
               break;

           case '/html/course/add.html':
               require(['courseAdd']);
               break;
           case '/html/course/add_step1.html':
               require(['courseAdd_step1']);
               break;
           case '/html/course/add_step2.html':
               require(['courseAdd_step2']);
               break;
           case '/html/course/add_step3.html':
               require(['courseAdd_step3']);
               break;
           case '/html/course/category.html':
               require(['courseCategory']);
               break;
           case '/html/course/category_add.html':
               require(['courseCategoryAdd']);
               break;
           case '/html/course/list.html':
               require(['courseList']);
               break;
           case '/html/course/topic.html':
               require(['courseTopic']);
               break;
           case '/html/teacher/add.html':
               require(['teacherAdd']);
               break;
           case '/html/teacher/list.html':
               require(['teacherList']);
               break;




       }



   })






}(window));
