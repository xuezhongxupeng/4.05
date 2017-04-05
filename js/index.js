$(function(){
    $('#dowebok').fullpage({
        //设置每一屏幕的背景颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#000'],
        scrollingSpeed:600,
        //滚动到某一屏后的回调函数
        afterLoad:function(link,index){
            //console.log(index); index 从1开始
            //排他 把current 当做一个开关，那一屏有current类名，这一屏就做动画
            $('.section').removeClass('current');
            //让动画延迟100ms执行，和页面加载冲突
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);

        }
    });
});
