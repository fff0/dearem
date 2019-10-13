var code_data =[
    {number:'10973486',time:'2019.09.20 14:55:00'},
    {number:'10973486',time:'2019.09.20 14:55:00'},
    {number:'10973486',time:'2019.09.20 14:55:00'}
  ];
var codeBox = $("#code_data").html();
var codeHtml  = ejs.render(codeBox,code_data);
$('#codeBox').html(codeHtml);