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