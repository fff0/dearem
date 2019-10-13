var code_data = [],value = 1001;
;(function($){
    $.post({
        url: 'https://mall-app.sogrumpy.cn/app/api/v1/marketing/JiFenDuoBao/JiFenChouDetail',
        headers: {
         'X-Token': "e6c46781833345f4a94ccf51916ab61c000186b705da1dbc2",
         'Content-Type': 'application/json',
         },
         data: JSON.stringify({ 'txnId': value}),
        success: function(res){
           
           // 获取幸运码
           code_data = res.data.luckyCodeList;
           console.log(code_data)
           var codeBox = $("#code_data").html();
           var codeHtml = ejs.render(codeBox,code_data);
           $('#codeBox').html(codeHtml);
           
        },
        error: function() {
         console.log(1);
        }
       });
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
        box1.addClass('block');
        $('#num_count').text($('#exc_num').text()*100);
    });
    // $('#button1_1').click(function(){
    //     box1.removeClass('block');
    //     box2.addClass('block')
    // })
    $('#button1_1').click(function(){
        box1.removeClass('block');
        $.post({
            url: 'https://mall-app.sogrumpy.cn/app/api/v1/marketing/JiFenDuoBao/JiFenChouDetail',
            headers: {
             'X-Token': "e6c46781833345f4a94ccf51916ab61c000186b705da1dbc2",
             'Content-Type': 'application/json',
             },
             data: JSON.stringify({ 'txnId': value}),
            success: function(res){
               // 获取幸运码
               code_data = res.data.luckyCodeList;
               console.log(code_data)
               var codeBox = $("#code_data").html();
               var codeHtml = ejs.render(codeBox,code_data);
               $('#codeBox').html(codeHtml);
            },
            error: function() {
             console.log(1);
            }
           });
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
    });
    $('#showCode').click(function () {$('.codeBox').eq(0).toggleClass('no_height')})
})(jQuery);
