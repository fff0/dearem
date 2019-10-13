;(function($){
    // 兑换次数
    var exc_num =Number($('#exc_num').text());
    $('#exc_cut').click(function(){
        if(exc_num > 0){
            exc_num--;
            $('#exc_num').text(exc_num);
        }
    });
    $('#exc_add').click(function(){
        exc_num++;
        $('#exc_num').text(exc_num)
    });
    // 弹窗交互
    var box1 = $('#box1'),box2=$('#box2');
    $('#exc_req').click(function(){
        box1.addClass('block')
    });
    $('#button1_1').click(function(){
        box1.removeClass('block');
        box2.addClass('block')
    })
    $('#button1_2').click(function(){
        box1.removeClass('block')
    })
    // 跳转首页
    $('#button2_1').click(function(){
        window.location.href='./index.html'
    })
    // 点击X关闭弹窗
    $('#clean1').click(function(){
        box1.removeClass('block')
    })
    $('#clean2').click(function(){
        box2.removeClass('block')
    })
})(jQuery);
