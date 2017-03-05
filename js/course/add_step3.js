/**
 * Created by hom on 2017/2/25.
 */
define(['jquery', 'common', 'nprogress', 'util', 'template'],
    function($, undefined, nprogress, util, template) {
    //��ҳ�������js������Ϻ�ִ��
    nprogress.done();

    var cs_id=util.getQueryString('cs_id');
    //页面的渲染
    $.get('/v6/course/lesson',{cs_id:cs_id},function(data){

        if(data.code==200){
            $(".steps").html(template('step-tpl',data.result));

        }


    });
     //添加章节
    $(document). on("click","#lesson-add",function(){
       $("#chapterModal").modal();
    });

    //编辑章节
    $(document). on("click","#lesson-edit",function(){
       $("#chapterModal").modal();
    });

     //点击添加按钮，发送ajax请求，跳转到列表页面刷新
     // $("#model-add-step").on("click",function(){
     //     $.post('/v6/course/chapter/add',$(this).serialize(),function(data){
     //        if(data.code==200){
     //            //刷新页面
     //            location.reload();
     //        }
     //
     //
     //     });
     //   return false;
     //
     // })










});
