var award_data = []
var code_data = []

var urlinfo = window.location.href,  //获取url 
// value = urlinfo.split("?")[1].split("=")[1];   //拆分url得到=后面的参数 
value = 1001
// 
$.post({
 url: 'https://mall-app.sogrumpy.cn/app/api/v1/marketing/JiFenDuoBao/JiFenChouDetail',
 headers: {
  'X-Token': "e6c46781833345f4a94ccf51916ab61c000186b705da1dbc2",
  'Content-Type': 'application/json',
  },
  data: JSON.stringify({ 'txnId': value}),
 success: function(res){
  // console.log(res)
  // 获取商品数据
	award_data = res.data.pointProduct;
	console.log(award_data);
	var awardBox = $("#award_data").html();
	var awardHtml  = ejs.render(awardBox,award_data);
	$('#award').html(awardHtml);
	
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
$('#showCode').click(function () {$('.codeBox').eq(0).toggleClass('no_height')})
