var footer = $('#footerTemplate').html();
var footerHtml = ejs.render(footer, {
    title: '每日抽奖'
});
$('#footer').html(footerHtml);

// todo
// 我的抽奖
$('div.button-right').on('click', function () {
    location.href = './html/waitlottery.html';
})
// 抽奖首页
$('div.button-left').on('click', function () {
    location.href = './html/index.html';
})