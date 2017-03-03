/**
 * Created by hom on 2017/3/3.
 */
define(['jquery', 'common', 'nprogress', 'template', 'region', 'datepicker', 'datepickerLanguage', 'ckeditor','uploadify'],
    function($, undefined, nprogress, template, undefined, datepicker, undefined, ckeditor,undefined) {
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
          var edit= ckeditor.replace('ckeditor', {
                toolbarGroups: [
                    { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
                    { name: 'links' },
                    { name: 'insert' },
                    { name: 'forms' },
                    { name: 'tools' },
                    { name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
                    { name: 'others' },

                ]
            });


            //配置头像上传插件
            $("#upfile").uploadify({
                swf: '/lib/uploadify/uploadify.swf',
                uploader: '/v6/uploader/avatar',
                fileObjName: 'tc_avatar',
                fileTypeExts: '*.gif; *.jpg; *.png',
                height:$('.preview').height(),
                buttonText:'',
                //在头像上传成功的时候，解析字符串数据，然后把上传的地址设置。
                // 同时将上传的地址设置到表单中，同时供用户浏览查看
                onUploadSuccess:function(file,data){
                   var data=JSON.parse(data);
                   $('.preview img').attr('src',data.result.path);;


                }



            });




            //监听提交的事件
            $(".form-horizontal").on("submit",function(){

                // 生成一个tc_hometown参数，格式为：省|市|县
                var hometown = $('.hometown select').map(function() {
                    return $(this).find('option:selected').text();
                }).toArray().join('|');
                $('#ckeditor').val(edit.getData());
                $.post('/v6/teacher/modify',$('.form-horizontal'));

                $.ajax({
                    url: '/v6/teacher/modify',
                    type: 'post',
                    data: $(this).serialize() + '&tc_hometown=' + hometown,
                    success: function(data) {
                        if(data.code == 200) {
                            location.reload();
                        }
                    }
                })

                return false;

            });


        }


    });

});

