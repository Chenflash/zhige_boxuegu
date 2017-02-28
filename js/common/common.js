/**
 * Created by hom on 2017/2/25.
 */
define(['jquery'],function($){
    // 菜单下拉
    $('.navs a').on('click', function() {
        $(this).next().slideToggle();
    });




})