;(function($){
  // 兑换次数
  var exc_num =Number($('#exc_num').text());
  $('#exc_cut').click(function(){
      if(exc_num > 0){
          exc_num--;
          $('#exc_num').text(exc_num);
      }
  });
  $('#exc_add').click(function(){
      exc_num++;
      $('#exc_num').text(exc_num)
  });
  $('#open_model').click(function(){
    $('#box1').addClass('block');
});
$('#clean').click(function(){
  $('#box1').removeClass('block');
});
})(jQuery);

var code_data =[
  {number:'10973486',time:'2019.09.20 14:55:00'},
  {number:'10973486',time:'2019.09.20 14:55:00'},
  {number:'10973486',time:'2019.09.20 14:55:00'}
];
var codeBox = $("#code_data").html();
var codeHtml  = ejs.render(codeBox,code_data);
$('#codeBox').html(codeHtml);
