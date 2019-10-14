var utils = {};
var ua = navigator.userAgent;
utils.device = {
    isIOS: /(?:ipad|iphone|ipod).*os\s+(\S+)\s+like\s+mac\s+os/i.test(ua),
    isAndroid: /android\s+(\S+);/i.test(ua),
    isPC: (function () {
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (ua.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    })(),
    wx: /MicroMessenger/i.test(ua),
    qq: /mobile.*qq\/(\S+)\s+.*nettype/i.test(ua)
};

/**
 * ajax请求
 */
var baseURL = "https://mall-app.sogrumpy.cn/app/api";
utils.request = function (url, option, callback) {
    $.ajax({
        method: "post",
        url: baseURL + url,
        data: JSON.stringify(option),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        headers: {
            "X-Token": '599c5d06dcf945d4a17b9da274280f20000186b905da2f3e8'
        },
        success: function (response) {
            if (response && response.msg && response.code != 0) {
                alert(response.msg);
                return;
            }
            callback(response)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { //上线前delete
            console.warn(textStatus)
        },
        cache: false,
        // xhrFields: {
        //     withCredentials: true // 跨域请求默认不携带票据，true携带cookie信息，并且该信息为不跨域形式，所以cookie信息外域访问不到
        // },
        crossDomain: true
    })
};

/**
 * 转日期格式
 * eg: 2019-10-14 23:00:00 ---> 10月14日 23:00 
 */
utils.resetData = function (data) {
    var time = new Date(data)
    var month = time.getMonth() + 1
    var date = time.getDate()
    var hour = time.getHours()
    var minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    return month + '月' + date + '日 ' + hour + ':' + minutes
}