var isOverAreaLoginText = 0;
var isMoveOut = 1;
var lastZhuanTime = 0;
var countZhuan = 0;
var interval;
var isRemember = 0;
var marginTop = 1.5;


$(document).ready(function () {

    console.log("---testDiv---");

    //随着屏幕变化而变化REM
    $(window).resize(function () {
        rem = $(window).width() / 16;
        $('html').css('font-size', rem + "px");
        height = $(window).height() / rem;
        marginTop = (height - 5.5) / 2;
        $("#area_title").css("top", marginTop + "rem");
        $("#area_login").css("top", (marginTop + 0.5) + "rem");
    });

});
