$(document).ready(function () {
    /**
     * 获取浏览器search值
     */
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }

    /**
     * 展示页面数据
     */
    function details() {
        // 获取奖品信息
        var txnId = getQueryVariable('txnId');
        utils.request('/v1/marketing/JiFenDuoBao/LingYuanChouDetail', {
            "txnId": txnId
        }, function (res) {
            console.log(res);
            if (res.code === 0) {
                let data = res.data.normalProduct.product;
                let endTime = new Date(res.data.normalProduct.endTime);
                let nowTime = new Date();
                let timeText = endTime.getMonth() + 1 + '月' + endTime.getDate() + '日 ' + endTime.getHours() + ':00';
                if (endTime.getTime() < nowTime.getTime()) {
                    // 已经过期
                    $("#lottery").text('本期活动已结束').css({
                        'background': 'linear-gradient(90deg,rgba(231,231,231,1),rgba(187,187,187,1))',
                        'color': 'rgba(255,255,255,1)'
                    }).attr('disabled', 'disabled');
                    $('#pro-time').html(timeText + '已开奖');
                } else {
                    $('#pro-time').html(timeText + ' 自动开奖');
                    $("#lottery").on('click', function () {
                        window.location.href = './shareCopy.html?txnId=' + txnId;
                    })
                }
                console.log(timeText);
                $('#pro-name').text(data.productName);
                $('#pro-img').attr('src', data.productImg);
                $('#pro-text').text(data.text);
                $('#pro-title').text(data.title);
                $('#pro-price').text('价值' + data.markingPrice + ' 共1份');
            }
        })
        // 用户个人信息
        utils.request('/v1/marketing/JiFenDuoBao/LingYuanChouShare', {
            "txnId": txnId
        }, function (res) {
            console.log(res);
            if (res.code == '0') {
                var data = res.data;
                console.log(data);
                $("#msg-title").text(data.title);
                $("#msg-text").text(data.text);
                $("#user-img").attr('src', data.img);
            }
        })
    }
    
    details();
})