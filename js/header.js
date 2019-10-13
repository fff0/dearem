var headerTemplate = document.getElementById('headerTemplate').innerHTML;
var headerHtml = ejs.render(headerTemplate, {
    title: '每日抽奖'
});
document.getElementById('header').innerHTML = headerHtml;