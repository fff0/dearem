var code_data =[
  {number:'10973486',time:'2019.09.20 14:55:00'},
  {number:'10973486',time:'2019.09.20 14:55:00'},
  {number:'10973486',time:'2019.09.20 14:55:00'},
  {number:'10973486',time:'2019.09.20 14:55:00'},
  {number:'10973486',time:'2019.09.20 14:55:00'}
];
var codeBox = $("#code_data").html();
var codeHtml  = ejs.render(codeBox,code_data);
$('#codeBox').html(codeHtml);

var award_data = []

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
	award_data = res.data.pointProduct;
	console.log(award_data);
	var awardBox = $("#award_data").html();
	var awardHtml  = ejs.render(awardBox,award_data);
	$('#award').html(awardHtml);
 },
 error: function() {
  console.log(1);
 }
});
$('#showCode').click(function () {$('.codeBox').eq(0).toggleClass('no_height')})
