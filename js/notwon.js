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
     * 渲染页面
     */
    function onLoad() {
        var txnId = getQueryVariable('txnId');
        utils.request('');
    }

    var wonList = $('#won-list').html();
    var list = [{
        atavar: '头像',
        name: '风吹鸡蛋壳',
        code: '中奖码10973387'
    },
    {
        atavar: '头像',
        name: '鸡蛋吹风格',
        code: '中奖码10973387'
    }
    ];
    var listHtml = ejs.render(wonList, {
        list
    });

    $('#winner').html(listHtml);
})