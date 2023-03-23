var rem = 0;
var height = 0;

//随着屏幕变化而变化REM
$(window).resize(function () {
    rem = $(window).width() / 19.2;
    $('html').css('font-size', rem + "px");
    height = $(window).height() / rem;
});

// 文件加载完就新型计算REM
$(document).ready(function () {

    rem = $(window).width() / 19.2;
    $('html').css('font-size', rem + "px");
    height = $(window).height() / rem;

    // 所有页面方式JS加载过程需要时间，所以首先是隐藏，然后REM计算完以后，再进行显示。
    $("#all_content").show();

});

var sendData = {
    "sessionId": "",
    "data": ""
};

var myData = {
    "operParam": "",
    "busParam": ""
}

var operParam = {
    "userId": "",
    "os": "",
    "browser": "",
    "imei": "",
    "mac": "",
    "gpsX": "",
    "gpsY": ""
}