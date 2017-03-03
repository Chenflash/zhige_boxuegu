/**
 * Created by hom on 2017/2/25.
 */
define(['jquery','common','nprogress','template'],function($,undefined,nprogress,template){

    nprogress.done();

    //渲染模块，列表
    $.get('/v6/category',function(data){
       if(data.code==200){
           $("#category-table-list").append(template('category-list-tpl',{list:data.result}));

       }



    })






});
