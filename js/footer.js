var footer = document.getElementById('footerTemplate').innerHTML;
var footerHtml = ejs.render(footer, {
    title: '每日抽奖'
});
document.getElementById('footer').innerHTML = footerHtml;


