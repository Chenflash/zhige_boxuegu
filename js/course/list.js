/**
 * Created by hom on 2017/2/25.
 */
define(['jquery','common','nprogress','template'],function($,undefined,nprogress,template){
    // 该页所有的js加载完毕，进度条结束。
    nprogress.done();

    //渲染课程列表的页面
    $.get("/v6/course",function(data){
       if(data.code==200){
           $('.courses').append(template('course-list',{list:data.result}));
       }


    });




});
