/**
 * Created by hom on 2017/2/25.
 */
define(['jquery'],function($){
    /*
    * 1.�ȼ���form�����ύ�¼�
    * 2���¼��ص��е�return false��֯Ĭ�ϵ��ύ
    * 3.�¼��ص���ͨ��ajax�ķ�ʽ���ͱ�����
    * 4.����������Ϊ200��֤���ɹ���������ת����ҳ
    *
    *
    * */
    $('#form-login').on('submit',function(){

        $.ajax({
           url:'/v6/login',
           type:'post',
           data:$(this).serialize(),
           success:function(data){

               if(data.code===200){
                   $.cookie('userInfo',JSON.stringify(data.result),{
                       path:'/'
                   });
                   location.href='/';
               }


           }



        });

    })











});