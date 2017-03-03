/**
 * Created by hom on 2017/2/25.
 */
define(['jquery','common','nprogress','util','template'],function($,undefined,nprogress,util,template){

    //该页所有的js加载完毕，进度条结束
    nprogress.done();

    //课程分类管理
    function categoryManage(){
        this.cg_id=util.getQueryString('cg_id');  //需要编辑的id。，如果没有则为添加
        this.isEdit=!!this.cg_id;                //用来判断当前是不是编辑页面
        this.selectorTpl='category-list-tpl';   //模块Id
        this.selectorTplParent='.course-category'; //模块的Id选择器
        this.selectorform='#category-manage-form'; //表单的选择器
        this.getCategoryEditUrl='/v6/category/edit'; //获取课程分类
        this.submitUrl=this.isEdit?'/v6/category/modify':'/v6/category/add' //表单提交的url
        this.init();  //页面的初始化




    }

    //原型方法
    categoryManage.prototype={

        //初始化页面==>获取渲染的数据=>渲染页面==》表单提交数据
        init:function(){
            var self=this;
            this.getRenderData(function(data){
                self.render(data);
                self.onSubmit();


            });

        },




        //获取模板的数据，由于请求的是异步获取数据，所以需要一个回调函数来接收
        getRenderData:function(fn){
            //判断是否是编辑页面
            if(this.isEdit){
                $.get(this.getCategoryEditUrl,{cg_id:this.cg_id},function(data){
                   if(data.code==200){
                       fn(data.result);
                     }

                });
            }else
            {
               fn({});
            }

         },




        //渲染模块到页面
       render:function(data){
          $(this.selectorTplParent).html(template(this.selectorTpl,data));

       },

        //获取表单提交的数据
        getSubmitData:function(){
          return this.isEdit?($(this.selectorform).serialize()+'&cg_id='+this.cg_id):$(this.selectorform).serialize();

        },

        //监听表单的submit提交事件，转换为ajax方式的提交方式
        onSubmit:function(){
            var self=this;
            //指向form表单，需要缓存categoryManage实例，才能访问对应的属性和方法
            $(this.selectorform).on('submit',function(){
                $.ajax({
                    url:self.submitUrl,
                    type:'post',
                    data:self.getSubmitData(),
                    success:function(data){
                        if(data.code==200){
                            location.href='/html/course/category.html';
                        }

                     }



                }) ;


            });



        }






    };








    //创建实例，自动调用初始化方法
     new categoryManage();




});









