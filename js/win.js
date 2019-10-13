$(document).ready(function () {
    /**
     * 点击领取奖品
     */
    function receive(e) {
        $('#inner').hide();
        $('#prize').show();
    }
    /**
     * 点击取消按钮
     */
    function cancel(e) {
        $('#prize').hide();
        $("#inner").show();
    }
    /**
     * 点击确定按钮
     */
    function confirm(e) {
        cancel();
        $('#btns-cancel').css('display', 'none');
        $('#btns-confirm').css('flex', 1);
    }
    $('#keep').on("click", receive);
    $('#btns-cancel').on("click", cancel);
    $('#btns-confirm').on("click", confirm);
})