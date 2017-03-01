/**
 * Created by hom on 2017/2/25.
 */
define(['jquery','common','nprogress','template'],function($,undefined,nprogress,template){
    //��ҳ�������js������Ϻ�ִ��
    nprogress.done();

    //��Ⱦ��ʦ���б�
    $.get('/v6/teacher',function(data){
        if(data.code===200){
            //��Ⱦ�б�
            var html=template('teacher-list-tpl',{list:data.result});
            $('#teacher-list-tbody').html(html);

        }

    });

    /*
    * ͨ��ʵ��ί�еķ�ʽ����̬���ɵ�a��ǩ���¼�
    * �ٻ�ȡ��ʦ����ϸ��Ϣ��չʾ
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
