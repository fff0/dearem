var award_data = []
var code_data = []
var data = ''
var urlinfo = window.location.href,  //获取url 
	// value = urlinfo.split("?")[1].split("=")[1];   //拆分url得到=后面的参数 
	value = 1001
// 
var time ={};
var time_inter =null;
var h_box_data = [{}];
var h_box_code = $("#hotShop").html();
var h_box_html = ejs.render(h_box_code, h_box_code);
$('#h-box').html(h_box_html);
$.post({
	url: 'https://mall-app.sogrumpy.cn/app/api/v1/marketing/JiFenDuoBao/LingYuanChouDetail',
	headers: {
		'X-Token': "e6c46781833345f4a94ccf51916ab61c000186b705da1dbc2",
		'Content-Type': 'application/json',
	},
	data: JSON.stringify({ 'txnId': value }),
	success: function (res) {
		console.log(res)
		// 获取商品数据
		award_data = res.data.normalProduct;
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

		// 倒计时
		data = res.data.normalProduct.endTime
		// console.log(time)
		// data = '2019-10-17 12:00:00'
		
		
		// console.log(time,now)
		
		time_inter =setInterval(function(){
			if(last_time-now>0){
			var last_time = new Date(data).getTime()
			var now = new Date().getTime()
			var last = (last_time-now)/1000;
			time.miao = parseInt(last%60)
			time.fen = parseInt(last/60%60)
			time.hour = parseInt(last/60/60)
			$('#time').text(time.hour + '时' + time.fen+ '分'+time.miao+ '秒后自动开奖');
			}else{
				console.log('1');
				$('#t_title').text('已开奖')
				window.clearInterval(time_inter)
				
			}

		},1000)

	},
	error: function () {
		console.log(1);
	}
});
$('#showCode').click(function () { $('.codeBox').eq(0).toggleClass('no_height') })//幸运码隐藏显示
// 跳转到规则页面
$('#active').click(function () {
	window.location.href = './rules.html'
})
// 跳转分享页面带参数txnId
$('#share-button').click(function () {
	window.location.href = './share2.html?txnId=' + value;
})

