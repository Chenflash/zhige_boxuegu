/**
 * Created by hom on 2017/2/25.
 */
define(['jquery','common','nprogress','template'],
    function($,undefined,nprogress,template){
    //该页面的所有js加载完毕后执行
    nprogress.done();

    //讲师列表缓存
    var teacherListcache;
    try{
        teacherListcache=JSON.parse(localStorage.getItem('teacherListcache'));

    }catch(e){}

    //如果存在缓存，则先使用。如果没有，则重新使用ajax请求数据
    if(teacherListcache){
        var html=template('teacher-list-tpl',{list:teacherListcache});
        $('#teacher-list-tbody').html(html);
    }else {
        //渲染讲师的列表
        $.get('/v6/teacher',function(data){
            if(data.code==200){
                //设置缓存
                localStorage.setItem('teacherListcache',JSON.stringify(data.result));

                //渲染列表
                var html=template('teacher-list-tpl',{list:data.result});
                $('#teacher-list-tbody').html(html);

            }

        });

    }





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


    //讲师状态的修改
    $("#teacher-list-tbody").on('click','.teacher-status',function(){
        //存储此时的讲师状态
        var $self=$(this);
        $.ajax({
            url:'/v6/teacher/handle',
            type:'post',
            data: {
                tc_id:$(this).parent().attr('data-id'),
                tc_status:$(this).parent().attr('data-status')
            },
            //发送请求成功
            success:function(data){
                if(data.code===200){
                    //得到修改后的状态，使用该状态修改按钮名称以及父元素的data-status的值
                    $self.html(data.result.tc_status==0? '开启':'注销');
                    $self.parent().attr('data-status',data.result.tc_status);
                }

            }


        });



    });






});
