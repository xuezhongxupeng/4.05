$(function(){
    $('#dowebok').fullpage({
        //����ÿһ��Ļ�ı�����ɫ
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#000'],
        scrollingSpeed:600,
        //������ĳһ����Ļص�����
        afterLoad:function(link,index){
            //console.log(index); index ��1��ʼ
            //���� ��current ����һ�����أ���һ����current��������һ����������
            $('.section').removeClass('current');
            //�ö����ӳ�100msִ�У���ҳ����س�ͻ
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);

        }
    });
});
