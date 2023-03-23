var rem = 0;
var height = 0;
var width = 0;
//随着屏幕变化而变化REM
$(window).resize(function () {
    //浙江
    rem = $(window).width() / 19.2;
    $('html').css('font-size', rem + "px");
    height = $(window).height() / rem;


    $("#all_screen").css("height",height+"rem");
    $("#area_list").css("height",(height-2.56)+"rem");
    $("#page_content_ALL").css("height",(height-2.56-0.53)+"rem");
    $("#mask").css("height",height+"rem");
    $("#login").css("top",(height/11)*2+"rem");

});

//限制areaList引用内容的高度
function limitAreaList(){
    console.log("limitAreaList success");

    rem = $(window).width() / 19.2;
    $('html').css('font-size', rem + "px");
    height = $(window).height() / rem;

    console.log("-----------------------------");
    console.log(height);
    console.log(rem);

    // 所有页面方式JS加载过程需要时间，所以首先是隐藏，然后REM计算完以后，再进行显示。
    $("#all_screen").css("height",height+"rem");

    $("#area_list").css("height",(height-2.56)+"rem");
    $("#page_content_ALL").css("height",(height-2.56-0.53)+"rem");

    console.log(document.getElementById("all_screen").style.height);
    console.log(document.getElementById("area_list").style.height);

}

//展示动态时间
function showTime() {
    var timeNowObject = new Date();
    let timeNow = getTimeSee(timeNowObject).toString().substring(0, 8);
    timeNowStr = getTimeString(getTimeSee(timeNowObject), "年", "月", "日", "&nbsp&nbsp", ":", ":", " ");
    $("#time_show").html(timeNowStr.substring(0, timeNowStr.length - 4));
    // 设置当前日期
    //     $("#startTime2").val(timeNow.substring(4,6));
    //     $("#endTime2").val(timeNow.substring(4,6));
    //     $("#startTime3").val(timeNow.substring(6,8));
    //     $("#endTime3").val(timeNow.substring(6,8));
    //     timeSelect();
    //     distribute();
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

//时间筛选功能
function timeSelect(){
    var startTime1 = $("#startTime1").val();
    var startTime2 = $("#startTime2").val();
    var startTime3 = $("#startTime3").val();
    var endTime1 = $("#endTime1").val();
    var endTime2 = $("#endTime2").val();
    var endTime3 = $("#endTime3").val();
    startTime1 *= 10000000000;
    startTime2 *= 100000000;
    startTime3 *= 1000000;
    endTime1 *= 10000000000;
    endTime2 *= 100000000;
    endTime3 *= 1000000;
    startTime = startTime1 + startTime2 + startTime3;
    endTime = endTime1 + endTime2 + endTime3;
    endTime += 999999;
    postData.startTime = startTime;
    postData.endTime = endTime;
    console.log("-------------------------------------");
    console.log(postData.startTime);
    console.log("-------------------------------------");
    console.log(postData.endTime);
    // var startTime_str_cut = startTime_str.substring()
}
//时间数据搜索功能
function showList_time(){
    $("#startTime1").blur(function (){
        timeSelect();
        distribute();
    });
    $("#startTime2").blur(function (){
        timeSelect();
        distribute();
    });
    $("#startTime3").blur(function (){
        timeSelect();
        distribute();
    });
    $("#endTime1").blur(function (){
        timeSelect();
        distribute();
    });
    $("#endTime2").blur(function (){
        timeSelect();
        distribute();
    });
    $("#endTime3").blur(function (){
        timeSelect();
        distribute();
    });
}

//点击切换排名情况
function rankList(siteX) {
    let timeNowObject = new Date();
    let timeNow = getTimeSee(timeNowObject).toString().substring(0, 8);
    console.log(timeNow);
    switch (siteX) {
        case 0:
            console.log(siteX);
            $("#rank_img_0_on").hide();
            $("#rank_img_1_on").hide();
            $("#rank_img_2_on").hide();
            $("#rank_img_0").show();
            $("#rank_img_1").show();
            $("#rank_img_2").show();



            $("#rank_img_0").hide();
            $("#rank_img_0_on").show();
            console.log("9679769769769--------------------");
            console.log(timeNow.substring(6,8));
            $("#startTime2").val(timeNow.substring(4,6));
            $("#endTime2").val(timeNow.substring(4,6));
            $("#startTime3").val(timeNow.substring(6,8));
            $("#endTime3").val(timeNow.substring(6,8));

            timeSelect();
            distribute();

            break;
        case 1:
            console.log(siteX);
            $("#rank_img_0_on").hide();
            $("#rank_img_1_on").hide();
            $("#rank_img_2_on").hide();
            $("#rank_img_0").show();
            $("#rank_img_1").show();
            $("#rank_img_2").show();



            $("#rank_img_1").hide();
            $("#rank_img_1_on").show();

            //本周周一时间
            // WeekFirstDay=new Date(timeNowObject-(timeNowObject.getDay()-1)*86400000); // 本周第一天
            // WeekLastDay=new Date((WeekFirstDay/1000+6*86400)*1000);// 本周第最后一天

            WeekLastDay  =new Date(timeNowObject-(timeNowObject.getDay()-1)*86400000); // 本周最后一天
            WeekFirstDay=new Date((WeekLastDay/1000-6*86400)*1000);// 本周第一天

            console.log(getTimeSee(WeekFirstDay).toString());
            console.log(getTimeSee(WeekLastDay));
            $("#startTime2").val(getTimeSee(WeekFirstDay).toString().substring(4,6));
            $("#endTime2").val(getTimeSee(WeekLastDay).toString().substring(4,6));
            $("#startTime3").val(getTimeSee(WeekFirstDay).toString().substring(6,8));
            $("#endTime3").val(getTimeSee(WeekLastDay).toString().substring(6,8));

            timeSelect();
            distribute();
            break;
        case 2:
            console.log(siteX);
            $("#rank_img_0_on").hide();
            $("#rank_img_1_on").hide();
            $("#rank_img_2_on").hide();
            $("#rank_img_0").show();
            $("#rank_img_1").show();
            $("#rank_img_2").show();


            $("#rank_img_2").hide();
            $("#rank_img_2_on").show();

            $("#startTime2").val((getTimeSee(timeNowObject)-100000000000).toString().substring(4,6));
            $("#endTime2").val(timeNow.substring(4,6));
            $("#startTime3").val("20");
            $("#endTime3").val("21");

            timeSelect();
            distribute();
            break;

    }

}

//遮罩层消息
function dialogMSG(){
    //获取页面的高度和宽度
    var sWidth=document.getElementById("all_screen").style.width;
    var sHeight=document.getElementById("all_screen").style.height;
    // var sHeight=document.body.scrollHeight || document.documentElement.scrollHeight;
    console.log("dialogMSG success-------------------------------");
    console.log(sWidth);
    console.log(sHeight);
    // //获取页面的可视区域高度和宽度
    // var wHeight=document.documentElement.clientHeight || document.body.clientHeight;

    //创建遮罩层
    var oMask=document.createElement("div");
    oMask.id="mask";
    oMask.style.height=sHeight;
    oMask.style.width=sWidth;
    document.body.appendChild(oMask);            //添加到body末尾

    //创建登录框
    var oLogin=document.createElement("div");
    oLogin.id="login";
    oLogin.innerHTML="<div class=\"loginCon\" style=\"float: left;position: relative;\">\n" +
        "        <div style=\"float: left;top: 0;left: 0;width: 100%;height: 0.7rem;position: absolute;\">\n" +
        "            <div style=\"float: left;width: 100%;height: 0.7rem;position: relative\">\n" +
        "                <div style=\"float:left;top: 0.3rem;left: 0.3rem;width:0.5rem;height:0.22rem;line-height:0.22rem;font-size:0.22rem;text-align:center;position: absolute;color: #AEE7FF;\">消息</div>\n" +
        "                <div id=\"close\"></div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div style=\"float:left;top:0.7rem;left:0;width:100%;height:5.12rem;position:absolute;\">\n" +
        "            <div style=\"float: left;top:0;left:0;width:100%;height:0.64rem;position: absolute;\">\n" +
        "                <div style=\"float: left;margin-left: 0.61rem;margin-top:0.26rem;width:2.2rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">【系统预警】16条未处理</div>\n" +
        "                <div style=\"float: right;margin-right: 0.2rem;margin-top:0.26rem;width:1.9rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">2021-03-18 09:00:00</div>\n" +
        "            </div>\n" +
        "            <div style=\"float: left;top:0.64rem;left:0;width:100%;height:0.64rem;position: absolute;\">\n" +
        "                <div style=\"float: left;margin-left: 0.61rem;margin-top:0.26rem;width:2.2rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">【系统预警】16条未处理</div>\n" +
        "                <div style=\"float: right;margin-right: 0.2rem;margin-top:0.26rem;width:1.9rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">2021-03-18 09:00:00</div>\n" +
        "            </div>\n" +
        "            <div style=\"float: left;top:1.28rem;left:0;width:100%;height:0.64rem;position: absolute;\">\n" +
        "                <div style=\"float: left;margin-left: 0.61rem;margin-top:0.26rem;width:2.2rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">【系统预警】16条未处理</div>\n" +
        "                <div style=\"float: right;margin-right: 0.2rem;margin-top:0.26rem;width:1.9rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">2021-03-18 09:00:00</div>\n" +
        "            </div>\n" +
        "            <div style=\"float: left;top:1.92rem;left:0;width:100%;height:0.64rem;position: absolute;\">\n" +
        "                <div style=\"float: left;margin-left: 0.61rem;margin-top:0.26rem;width:2.2rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">【系统预警】16条未处理</div>\n" +
        "                <div style=\"float: right;margin-right: 0.2rem;margin-top:0.26rem;width:1.9rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">2021-03-18 09:00:00</div>\n" +
        "            </div>\n" +
        "            <div style=\"float: left;top:2.56rem;left:0;width:100%;height:0.64rem;position: absolute;\">\n" +
        "                <div style=\"float: left;margin-left: 0.61rem;margin-top:0.26rem;width:2.2rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">【系统预警】16条未处理</div>\n" +
        "                <div style=\"float: right;margin-right: 0.2rem;margin-top:0.26rem;width:1.9rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">2021-03-18 09:00:00</div>\n" +
        "            </div>\n" +
        "            <div style=\"float: left;top:3.2rem;left:0;width:100%;height:0.64rem;position: absolute;\">\n" +
        "                <div style=\"float: left;margin-left: 0.61rem;margin-top:0.26rem;width:2.2rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">【系统预警】16条未处理</div>\n" +
        "                <div style=\"float: right;margin-right: 0.2rem;margin-top:0.26rem;width:1.9rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">2021-03-18 09:00:00</div>\n" +
        "            </div>\n" +
        "            <div style=\"float: left;top:3.84rem;left:0;width:100%;height:0.64rem;position: absolute;\">\n" +
        "                <div style=\"float: left;margin-left: 0.61rem;margin-top:0.26rem;width:2.2rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">【系统预警】16条未处理</div>\n" +
        "                <div style=\"float: right;margin-right: 0.2rem;margin-top:0.26rem;width:1.9rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">2021-03-18 09:00:00</div>\n" +
        "            </div>\n" +
        "            <div style=\"float: left;top:4.48rem;left:0;width:100%;height:0.64rem;position: absolute;\">\n" +
        "                <div style=\"float: left;margin-left: 0.61rem;margin-top:0.26rem;width:2.2rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">【系统预警】16条未处理</div>\n" +
        "                <div style=\"float: right;margin-right: 0.2rem;margin-top:0.26rem;width:1.9rem;height:0.2rem;line-height:0.2rem;font-size:0.18rem;text-align:center;color: #00CCFF;\">2021-03-18 09:00:00</div>\n" +
        "            </div>\n" +
        "\n" +
        "        </div>\n" +
        "        <div style=\"float: left;top:5.82rem;left:0;width:100%;height:0.98rem;position:absolute;\">\n" +
        "            <div style=\"float: left;left:0.61rem;bottom:0.35rem;width:0.71rem;height:0.15rem;position: absolute;\">\n" +
        "                <div class=\"bottom_page_count\" >\n" +
        "                    共\n" +
        "                </div>\n" +
        "                <div class=\"bottom_page_count\" id=\"bottom_page_column_All\"\n" +
        "                     style=\"width:0.43rem;text-align: center\">\n" +
        "                    999\n" +
        "                </div>\n" +
        "                <div class=\"bottom_page_count\" style=\"text-align:right;\">\n" +
        "                    条\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div id=\"select_page_ALL\" style=\"float: left;left:1.54rem;bottom:0.3rem;width:auto;height:0.36rem;position: absolute;\">\n" +
        "                <div id=\"pre_page\" class=\"bottom_page_yema select_page\" style=\"margin-left:-1px;width: 0.72rem;height: 0.36rem;line-height:0.36rem;font-size:0.18rem;text-align:center;color:#0AB7FFFF;border: 1px solid #036E9A;\">\n" +
        "                    上一页\n" +
        "                </div>\n" +
        "                <div class=\"bottom_page_yema select_page\" style=\"float: left;margin-left:-1px;width: 0.4rem;height: 0.36rem;line-height:0.36rem;font-size:0.18rem;text-align:center;border: 1px solid #036E9A;\">\n" +
        "                    1\n" +
        "                </div>\n" +
        "                <div class=\"bottom_page_yema select_page\" style=\"float: left;margin-left:-1px;width: 0.4rem;height: 0.36rem;line-height:0.36rem;font-size:0.18rem;text-align:center;border: 1px solid #036E9A;\">\n" +
        "                    2\n" +
        "                </div>\n" +
        "                <div class=\"bottom_page_yema select_page\" style=\"float: left;margin-left:-1px;width: 0.4rem;height: 0.36rem;line-height:0.36rem;font-size:0.18rem;text-align:center;border: 1px solid #036E9A;\">\n" +
        "                    3\n" +
        "                </div>\n" +
        "                <div class=\"bottom_page_yema select_page\" style=\"float: left;margin-left:-1px;width: 0.4rem;height: 0.36rem;line-height:0.36rem;font-size:0.18rem;text-align:center;border: 1px solid #036E9A;\">\n" +
        "                    4\n" +
        "                </div>\n" +
        "                <div class=\"bottom_page_yema select_page\" style=\"float: left;margin-left:-1px;width: 0.4rem;height: 0.36rem;line-height:0.36rem;font-size:0.18rem;text-align:center;border: 1px solid #036E9A;\">\n" +
        "                    5\n" +
        "                </div>\n" +
        "                <div id=\"next_page\" class=\"bottom_page_yema select_page\" style=\"width: 0.72rem;\">\n" +
        "                    下一页\n" +
        "                </div>\n" +
        "                <div id=\"last_page\" class=\"bottom_page_yema select_page\" style=\"width: 0.6rem;\">\n" +
        "                    末页\n" +
        "                </div>\n" +
        "                <div id=\"pagecount_navigator\" class=\"bottom_page_yema select_page\" style=\"float: left;margin-left:0.2rem;width: 0.4rem;height: 0.36rem;line-height:0.36rem;font-size:0.18rem;text-align:center;border: 1px solid #036E9A;\">\n" +
        "                    GO\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "\n" +
        "    </div>";
    document.body.appendChild(oLogin);

    //获取登陆框的宽和高
    var dHeight=oLogin.offsetHeight;
    var dWidth=oLogin.offsetWidth;
    console.log(dHeight);
    console.log(dWidth);
    //设置登陆框的left和top
    oLogin.style.left=(19.2/19)*6+"rem";
    // oLogin.style.left=sWidth.substring(0,sWidth.length-3);
    // oLogin.style.top=(parseFloat(sHeight.substring(0,sHeight.length-3))-dHeight/100)/2+"rem";
    oLogin.style.top=(height/11)*2+"rem";

    //获取关闭按钮
    var oClose=document.getElementById("close");
    console.log(oClose);

    //点击关闭按钮和点击登陆框以外的区域都可以关闭登陆框
    oClose.onclick=oMask.onclick=function(){
        document.body.removeChild(oLogin);
        document.body.removeChild(oMask);
    };
}
