var code_data = [], value = 1001,yourPoint=null;
var h_box_data = [{}];
var h_box_code = $("#hotShop").html();
var h_box_html = ejs.render(h_box_code, h_box_code);
$('#h-box').html(h_box_html);
; (function ($) {
      // 积分判断
      $.post({
        url: 'https://mall-app.sogrumpy.cn/app/api/v1/marketing/JiFenDuoBao/GetIndexProduct',
        headers: {
         'X-Token': "e6c46781833345f4a94ccf51916ab61c000186b705da1dbc2",
         'Content-Type': 'application/json',
         },
         data: JSON.stringify({ 'txnId': value}),
        success: function(res){
            // yourPoint = res.data.yourPoint;
            // console.log(res)
            yourPoint=500;
        },
        error: function() {
         console.log(1);
        }
       });
    $.post({
        url: 'https://mall-app.sogrumpy.cn/app/api/v1/marketing/JiFenDuoBao/JiFenChouDetail',
        headers: {
            'X-Token': "e6c46781833345f4a94ccf51916ab61c000186b705da1dbc2",
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({ 'txnId': value }),
        success: function (res) {
            // 获取商品数据
            award_data = res.data.pointProduct;
            console.log(award_data);
            var awardBox = $("#award_data").html();
            var awardHtml = ejs.render(awardBox, award_data);
            $('#award').html(awardHtml);

            // 获取幸运码
            code_data = res.data.luckyCodeList;
            console.log(code_data)
            var codeBox = $("#code_data").html();
            var codeHtml = ejs.render(codeBox, code_data);
            $('#codeBox').html(codeHtml);
			
			// 获取进度条宽度
			 if (document.getElementById("span")) {
				  var nowAmount = award_data.nowAmount
				  var needAmount = award_data.needAmount
				document.getElementById("span").style.width = (nowAmount)/parseInt((nowAmount+needAmount))*100+'%';
			}
			
			// 获取txnInfo.isPublished
			var isPublished = res.data.txnInfo.isPublished
			console.log(isPublished)

        },
        error: function () {
            console.log(1);
        }
    });
    // 兑换次数
    var exc_num = Number($('#exc_num').text());
    $('#exc_cut').click(function () {
        if (exc_num > 0) {
            exc_num--;
            $('#exc_num').text(exc_num);
        }
    });
    $('#exc_add').click(function(){
        console.log(exc_num,yourPoint)
        if(exc_num*100 < yourPoint){
            exc_num++;
            $('#exc_num').text(exc_num)
        }else{
            $('#bzJfen').text('很遗憾您的积分不足'+ (exc_num+1)*100 +'积分')
            box2.addClass('block')
        }
    });
    // 弹窗交互
    var box1 = $('#box1'), box2 = $('#box2');
    $('#exc_req').click(function () {
        box1.addClass('block');
        $('#num_count').text($('#exc_num').text() * 100);
    });
    // $('#button1_1').click(function(){
    //     box1.removeClass('block');
    //     box2.addClass('block')
    // })
    $('#button1_1').click(function () {
        box1.removeClass('block');
        $.post({
            url: 'https://mall-app.sogrumpy.cn/app/api/v1/marketing/JiFenDuoBao/JiFenChouDetail',
            headers: {
                'X-Token': "e6c46781833345f4a94ccf51916ab61c000186b705da1dbc2",
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({ 'txnId': value }),
            success: function (res) {
                // 获取幸运码
                code_data = res.data.luckyCodeList;
                console.log(code_data)
                var codeBox = $("#code_data").html();
                var codeHtml = ejs.render(codeBox, code_data);
                $('#codeBox').html(codeHtml);
            },
            error: function () {
                console.log(1);
            }
        });
    })
    $('#button1_2').click(function () {
        box1.removeClass('block')
    })
    // 跳转首页
    $('#button2_1').click(function () {
        window.location.href = './index.html'
    })
    // 跳转到规则页面
    $('#active').click(function () {
        window.location.href = './rules.html'
    })
    // 点击X关闭弹窗
    $('#clean1').click(function () {
        box1.removeClass('block')
    })
    $('#clean2').click(function () {
        box2.removeClass('block')
    });
    $('#showCode').click(function () { $('.codeBox').eq(0).toggleClass('no_height') })
})(jQuery);

 