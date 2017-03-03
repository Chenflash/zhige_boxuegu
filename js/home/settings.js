/**
 * Created by hom on 2017/3/3.
 */
define(['jquery', 'common', 'nprogress', 'template', 'region', 'datepicker', 'datepickerLanguage','ckeditor'],
    function($, undefined, nprogress, template, undefined, datepicker, undefined,ckeditor) {
        //加载页面
    nprogress.done();



    $.get('/v6/teacher/profile',function(data){

        if(data.code==200){
            //渲染个人中心模块引擎
            $("#profile").html(template('profileForm',data.result));
            //配置三级联动的插件
            $('.hometown').region({
                url: '/lib/region/region.json'
            });

            //配置日期的插件
            $('.datepicker').datepicker({
               language:'zh-CN',
               format:'yyyy-mm-dd',
               endDate:new Date()


            });

            //配置富文本编辑器
            ckeditor.replace('ckeditor', {
                toolbarGroups: [
                    { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
                    { name: 'insert' },
                    { name: 'tools' },
                    { name: 'styles' },
                    { name: 'colors' },
                ]
            });



            //监听提交的事件
            $(".form-horizontal").on("submit",function(){

               //生成一个tc_hometown参数，格式为：省|市|县
                var hometown=$('.hometown select').map(function(){
                  return $(this).find('option:selected').text();
                }).toArray().join('|');

                //发送ajax异步的请求
                $.ajax({
                    url:"/v6/teacher/modify",
                    type:'post',
                    data:$(this).serialize()+'&tc_hometown='+hometown,
                    success:function(data){
                        if(data.code==200){
                            //刷新，重新加载
                            location.reload();

                        }
                    }


                })
                return false;




            });





        }




    });





});

