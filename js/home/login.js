/**
 * Created by hom on 2017/2/25.
 */
<<<<<<< HEAD
define(['jquery','jqueryCookie'],function($,undefined){

    /*
    * չʾ�û�����ʷ��¼ͷ��
    * 1.��ȡuserInfo���cookie��ֵ
    * 2.��cookie���ַ���ת��Ϊ����
    * 3.���õ�¼ҳ��img-srcΪ�����е�tc_avatar����ֵ���û�У�
    * �͸�һ��Ĭ�ϵ�ͷ���ַ
    *
    *
    *
    * */
    var userInfo=null;
    try{
        userInfo=JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo={};
    }
    $('.login .acatar img').attr('src',userInfo.tc_avatar?userInfo.tc_avatar:'/uploads/default.png');




    /*
    * ��¼ҳ��ʵ�ֵļ������裺
    * 1.�ȼ���form�����ύ�¼�
    * 2.�¼��ص�return false��ֹĬ�ϵ��¼�
    * 3.�¼��ص�ͨ��ajax�ķ�ʽ���ͱ�����
    * 4.������صĽ��codeΪ200�Ļ���֤����¼�ɹ�����ת����ҳ
    *
    *
    * */
    //�ȼ���form�����ύ�¼�
    $('#form-login').on('submit',function(){

        //�¼��ص�ͨ��ajax�ķ�ʽ���ͱ�����
        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            //�ɹ�����ص�
            success:function(data){
                //������صĽ��codeΪ200�Ļ���֤����¼�ɹ�
                if(data.code ===200){

                    $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                    //��ת����ҳ
                    location.href='/';
                }

            }
=======
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

>>>>>>> 71eb6ff75713c252746848c7c8af1eecf7abe744


        });

<<<<<<< HEAD

        //��ֹ�¼���Ĭ����Ϊ
        return false;
    });
=======
    })








>>>>>>> 71eb6ff75713c252746848c7c8af1eecf7abe744



});