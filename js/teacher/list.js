/**
 * Created by hom on 2017/2/25.
 */
define(['jquery','common','nprogress','template'],function($,undefined,nprogress,template){
    //该页面的所有js加载完毕后执行
    nprogress.done();

    //渲染讲师的列表
    $.get('/v6/teacher',function(data){
        if(data.code===200){
            //渲染列表
            var html=template('teacher-list-tpl',{list:data.result});
            $('#teacher-list-tbody').html(html);

        }

    });

    /*
    * 通过实际委托的方式给动态生成的a标签绑定事件
    * 再获取讲师的详细信息并展示
    *
    * */
    $('#teacher-list-tbody').on('click','.teacher-view',function(){
        $.get('/v6/teacher/view',{
           tc_id:$(this).parent().attr('data-id')


        },function(data){
            if(data.code===200){
                var html=template('teacher-view-tpl',data.result);
                $('#teacherModal').html(html);
            }


        });


    });












});
