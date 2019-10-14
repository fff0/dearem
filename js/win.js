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
     * 点击领取奖品
     */
    function receive(e) {
        $('#inner').hide();
        $('#prize').show();
    }

    /**
     * 点击取消按钮
     */
    function cancel(e) {
        $('#prize').hide();
        $("#inner").show();
    }

    /**
     * 点击确定按钮
     */
    function confirm(e) {
        cancel();
        $('#btns-cancel').css('display', 'none');
        $('#btns-confirm').css('flex', 1);
    }

    /**
     * 发送请求
     */
    function address() {
        // 获取中奖用户填写信息
        var txnId = getQueryVariable('txnId');
        var name = $("#user-name").val().trim();
        var idCardNumber = $("#user-idcard").val().trim();
        var address = $("#user-address").val().trim();
        var phone = $("#user-number").val().trim();
        if (!name || !idCardNumber || !address || !phone) {
            alert('请输入完整的收件人信息！');
            return;
        }
        utils.request('/v1/marketing/JiFenDuoBao/UpdateAddr', {
            "address": address,
            "idCardNumber": idCardNumber,
            "name": name,
            "phone": phone,
            "txnId": txnId
        }, function (res) {
            console.log(res)
            if (res.code == '1003') {
                window.confirm('请登录') ? $(location).attr('href', 'https://mall-app.sogrumpy.cn/pages/login/login') : "";
            } else if (res.code == '0') {
                confirm();
            } else {
                alert(res.msg);
                cancel();
            }
        })
    }

    /**
     * 回到首页
     */
    function goIndex() {
        window.location.href = './index.html';
    }

    /**
     * 渲染数据以及是否已经填写地址
     */
    function isHaveAddress() {
        // 发送请求获取展示地址
        var txnId = getQueryVariable('txnId');
        console.log('isHaveAddress', txnId);
        utils.request('/v1/marketing/JiFenDuoBao/LingYuanChouDetail', {
            "txnId": txnId
        }, function (res) {
            if (res.code == '0') {
                var data = res.data;
                var product = res.data.normalProduct.product;
                var endTime = new Date(res.data.normalProduct.endTime);
                var timeText = endTime.getMonth() + 1 + '月' + endTime.getDate() + '日' + endTime.getHours() + ':00';
                console.log(data);
                console.log(product);
                if (data.txnInfo && data.txnInfo.idCardNumber && data.txnInfo.name
                    && data.txnInfo.phone && data.txnInfo.address) {
                    $("#user-name").val(data.txnInfo.name).attr('disabled', 'disabled');;
                    $("#user-number").val(data.txnInfo.phone).attr('disabled', 'disabled');;
                    $("#user-idcard").val(data.txnInfo.idCardNumber).attr('disabled', 'disabled');;
                    $("#user-address").val(data.txnInfo.address).attr('disabled', 'disabled');
                    $('#btns-confirm').on('click', confirm);
                    confirm();
                } else {
                    $('#btns-confirm').on('click', address)
                }
                $("#pro-time").text(timeText);
                $("#pro-img").attr('src', product.productImg);
                $("#pro-name").text(product.productName)
                $("#pro-price").text('价值' + product.markingPrice + '元 共1份')
            }
        })
    }

    $('#keep').on("click", receive);
    $('#btns-cancel').on("click", cancel);
    $('#go-index').on('click', goIndex);
    $('#close').on('click', cancel);
    isHaveAddress();
})