function sendAjax(url, dataType, param) {
	// if (type === 'get') {
	// 	// var urlEncode = function(param, key, encode) {
	// 		if (param == null) return '';
	// 		var paramStr = '';
	// 		var t = typeof(param);
	// 		if (t == 'string' || t == 'number' || t == 'boolean') {
	// 			paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
	// 		} else {
	// 			for (var i in param) {
	// 				var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
	// 				paramStr += urlEncode(param[i], k, encode)
	// 			}
	// 		}
	// 		param = paramStr;
	// }
	$.ajax({
		url: url,
		data: param,
		dataType: dataType,
		success: callback,
		error: function() {
			console.log(1);		}
	});
}

$.post({
	url: url,
	data: param,
	headers: {
		'X-Token': "",
	 },
	success: function(res){
		console.log(res)
	},
	error: function() {
		console.log(1);
	}
});
