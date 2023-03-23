//随着屏幕变化而变化REM
var rem = 0;
$(window).resize(function () {
    rem = $(window).width() / 19.2;
    $('html').css('font-size', rem + "px");
});

//$(function(){code代码}) == $(document).ready(function(){code代码块})
$(function (){
    init();
    showTime();
});







//引入页面各个板块
function init(){
    $("#page_header").load('../topNavigationBar.html');
}

//顶部导航栏二线程展示动态时间
function showTime() {
    console.log("showTime success");
    var timeNowObject = new Date();
    timeNowStr = getTimeString(getTimeSee(timeNowObject), "年", "月", "日", "&nbsp&nbsp", ":", ":", " ");
    console.log(getTimeSee(timeNowObject));
    //endTime
    timeMonthLaterStr = getTimeString((getTimeSee(timeNowObject)+100000000000), "年", "月", "日", "&nbsp&nbsp", ":", ":", " ");
    // console.log(timeNowStr.substring(0, timeNowStr.length - 22));
    //2021年05月26日  14:12:40
    $("#time_show").html(timeNowStr.substring(0, timeNowStr.length - 4));
    //2021年05月26日
    $("#tbrq").val(timeNowStr.substring(0, timeNowStr.length - 22));
    //20210526



    //拼接表格编号
    combineBGBH_last_4_num(timeNowObject);
    //let last4Num=1000;
    // $("#reportdown").click(function(){
    //     last4Num += 1;
    //     myData.bgbh="HZ06XJS"
    //     console.log(last4Num)
    //     // combineBGBH_last_4_num(timeNowObject);
    //     console.log( myData.bgbh)
    //     bgbn = myData.bgbh + (getTimeSee(timeNowObject)).toString().substring(0, 8) + last4Num;
    //     console.log( bgbn)
    //     myData.bgbh=bgbn
    // });
    //重置postData中的startTime 和 endTime
    myData.sdcx.startTime = timeNowStr.substring(0, timeNowStr.length - 22);
    myData.sdcx.endTime = timeMonthLaterStr.substring(0, timeMonthLaterStr.length - 22);

    // 二线程，开始按照一秒启动一次
    //worker监听onmessage的变化
    var worker = new Worker("js/timeshow_jishi.js");
    worker.onmessage = function () {
        if (event.data > 0) {
            timeNowObject = new Date();
            timeNowStr = getTimeString(getTimeSee(timeNowObject), "年", "月", "日", "&nbsp&nbsp", ":", ":", " ");
            $("#time_show").html(timeNowStr.substring(0, timeNowStr.length - 4));
        }
    };


}