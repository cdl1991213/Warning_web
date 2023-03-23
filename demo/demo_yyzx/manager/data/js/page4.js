


$(document).ready(function () {

    limitAreaList();
    showTime();
    timeSelect();
    distribute();
    showList_time();

});




//从后台拿取的数据
var myData = {
    "vos":"",
}
let content = "";
//渲染数据
function showList(data) {
    $(".mouseOver").remove();
    console.log("data");
    console.log(data);
    myData.vos = data.vos;
    myData.jbSum = data.jbSum;
    /*$(e).each(function (i,d){
        console.log(i);
        console.log(d);
        /!*myData.vos[i]._action_sum = d._action_sum;
        myData.vos[i]._call_count= d._call_count;
        myData.vos[i]._call_sum= d._call_sum;
        myData.vos[i]._is_door= d._is_door;
        myData.vos[i]._mission_sum= d._mission_sum;
        myData.vos[i]._name= d._name;
        myData.vos[i]._success= d._success;
        myData.vos[i]._unfinished= d._unfinished;*!/
    })*/
    // myData.vos[0]._name = e._name;
    // myData.vos[0]._mission_sum = e._mission_sum;

    //****************************
    console.log(myData);
    var sum = myData.vos.length;
    $("#emergency_zhiling").text(myData.jbSum);
    // let j = 0;
    // for (let i = 0; i < sum; i++) {
    //     content = "";
    //     switch (level){
    //         case 0:
    //             content += "<div class=\"mouseOver\" id=\"page_content_" + i + "\"  style=\"float:left;margin-right:0.57rem;width:17.95rem;height:0.53rem;position: relative;\">\n";
    //             content += "    <div style=\"float:left;width:1.18rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + (i+1) + "</div>\n";
    //             content += "    <div style=\"float:left;margin-left:1.2rem;width:4.36rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._name) + "</div>\n";
    //             content += "    <div style=\"float:left;margin-left:5.58rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._level, 0) + "</div>\n";
    //             content += "    <div style=\"float:left;margin-left:8.68rem;width:3.07rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._sum, 0) + "</div>\n";
    //             content += "    <div style=\"float:left;margin-left:11.77rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._success) + "</div>\n";
    //             content += "    <div style=\"float:left;margin-left:14.87rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._false) + "</div>\n";
    //             content += "</div>";
    //             j += 1;
    //             break;
    //         case 1:
    //             if(myData.vos[i]._level > 30){
    //                 content += "<div class=\"mouseOver\" id=\"page_content_" + j + "\"  style=\"float:left;margin-right:0.57rem;width:17.95rem;height:0.53rem;position: relative;\">\n";
    //                 content += "    <div style=\"float:left;width:1.18rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + (j + 1) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:1.2rem;width:4.36rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._name) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:5.58rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._level, 0) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:8.68rem;width:3.07rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._sum, 0) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:11.77rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._success) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:14.87rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._false) + "</div>\n";
    //                 content += "</div>";
    //                 j += 1;
    //             }
    //             break;
    //         case 2:
    //             if(myData.vos[i]._level > 20 && myData.vos[i]._level <= 30){
    //                 content += "<div class=\"mouseOver\" id=\"page_content_" + j + "\"  style=\"float:left;margin-right:0.57rem;width:17.95rem;height:0.53rem;position: relative;\">\n";
    //                 content += "    <div style=\"float:left;width:1.18rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + (j + 1) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:1.2rem;width:4.36rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._name) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:5.58rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._level, 0) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:8.68rem;width:3.07rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._sum, 0) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:11.77rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._success) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:14.87rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._false) + "</div>\n";
    //                 content += "</div>";
    //                 j += 1;
    //             }
    //             break;
    //         case 3:
    //             if(myData.vos[i]._level > 10 && myData.vos[i]._level <= 20){
    //                 content += "<div class=\"mouseOver\" id=\"page_content_" + j + "\"  style=\"float:left;margin-right:0.57rem;width:17.95rem;height:0.53rem;position: relative;\">\n";
    //                 content += "    <div style=\"float:left;width:1.18rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + (j + 1) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:1.2rem;width:4.36rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._name) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:5.58rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._level, 0) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:8.68rem;width:3.07rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._sum, 0) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:11.77rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._success) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:14.87rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._false) + "</div>\n";
    //                 content += "</div>";
    //                 j += 1;
    //             }
    //             break;
    //         case 4:
    //             if(myData.vos[i]._level <= 10){
    //                 content += "<div class=\"mouseOver\" id=\"page_content_" + j + "\"  style=\"float:left;margin-right:0.57rem;width:17.95rem;height:0.53rem;position: relative;\">\n";
    //                 content += "    <div style=\"float:left;width:1.18rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + (j + 1) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:1.2rem;width:4.36rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._name) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:5.58rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._level, 0) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:8.68rem;width:3.07rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._sum, 0) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:11.77rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._success) + "</div>\n";
    //                 content += "    <div style=\"float:left;margin-left:14.87rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._false) + "</div>\n";
    //                 content += "</div>";
    //                 j += 1;
    //             }
    //             break;
    //     }
    //
    //
    //     $("#page_content_ALL").append(content);
    //
    // }

    for (let i = 0; i < sum; i++) {
        content = "";
        content += "<div class=\"mouseOver\" id=\"page_content_" + i + "\"  style=\"float:left;margin-right:0.57rem;width:17.95rem;height:0.53rem;position: relative;\">\n";
        content += "    <div style=\"float:left;width:1.18rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + (i+1) + "</div>\n";
        content += "    <div style=\"float:left;margin-left:1.2rem;width:4.36rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._name) + "</div>\n";
        content += "    <div style=\"float:left;margin-left:5.58rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._level, 0) + "</div>\n";
        content += "    <div style=\"float:left;margin-left:8.68rem;width:3.07rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._sum, 0) + "</div>\n";
        content += "    <div style=\"float:left;margin-left:11.77rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._success) + "</div>\n";
        content += "    <div style=\"float:left;margin-left:14.87rem;width:3.08rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:0.1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._false) + "</div>\n";
        content += "</div>";
        $("#page_content_ALL").append(content);
    }
}

//要提交的数据
var postData = {
    "startTime": 20210519000000,
    "endTime": 20210519235959,
    "level":0
}
//重新提交数据，读取后台信息
function distribute() {
    console.log("分配函数调用成功");

    /*var _name = "";
    var _mission_sum = 0;
    var _call_sum = 0;
    var _call_count = "";
    var _action_sum = 0;
    var _is_door = "";
    var _success = "";
    var _unfinished = 0;*/


    var basicUrl = "http:/";
    var basicApp = "192.168.8.102:8080"; //177.177.0.233:8080
    var urlX = basicUrl + "/" + basicApp + "/api_model/api/countMission.do";
    $.ajax({
        //获取策略中心（下发到单位）数据
        url: urlX,
        type: "POST",
        data: postData,
        async: true,
        dataType: "json",//服务器返回类型
        scriptCharset: "UTF-8",
        success: function (data) {
            console.log(data);
            if (data.result == 1) {
                showList(data);
            } else if (data.result == -1) {
                alert("失败");
            } else {
                //ajaxFailResultShow(data.msg, ""); //展示提示的结果
                alert(data.msg);
            }
        },
        error: function () {
            console.log("error");
        }

    });
}


//优先级弹窗
function showPageListSign(siteX){
    console.log("showPageListSign success");

    if(siteX == 0){
        // 显示下拉框
        $("#icon_filter_down").hide();
        $("#icon_filter_up").show();
        // $("#yxj_sign").show();
        document.getElementById("yxj_sign").style.display="block";
    }else if(siteX == 1){
        //隐藏下拉框
        $("#icon_filter_down").show();
        $("#icon_filter_up").hide();
        // $("#yxj_sign").hide();
        document.getElementById("yxj_sign").style.display="none";
    }
}

//优先级筛选
function  selectPageListSign(siteX){
    //1 全部   2 紧急    3 高危    4 中危    5 低危
    $("#page_content_ALL").html("");
    postData.level = siteX;
    distribute();

    //文字 优先级 变为 选择的文字
    var x=siteX+1
    console.log($("#yxj_sign_list"+x).text())
    $("#yxj").html($("#yxj_sign_list"+x).text())
    //单击了优先级中的文字后隐藏
    $("#icon_filter_down").show();
    $("#icon_filter_up").hide();
    // $("#yxj_sign").hide();
    document.getElementById("yxj_sign").style.display="none";
}

//导出为excel功能
function exportExcel() {
    // 列标题，逗号隔开，每一个逗号就是隔开一个单元格
    let str = `序号,单位,优先级,任务数,成功率,无效率\n`;
    // 增加\t为了不让表格显示科学计数法或者其他格式
    for (let i = 0; i < myData.vos.length; i++) {
        str += `${i + '\t'},`;
        for (const key in myData.vos[i]) {
            str += `${myData.vos[i][key] + '\t'},`;
        }
        str += '\n';
    }

    console.log("str");
    console.log(str);
    // encodeURIComponent解决中文乱码
    const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
    // 通过创建a标签实现
    const link = document.createElement("a");
    link.href = uri;
    // 对下载的文件命名
    link.download = "json数据表.csv";
    link.click();

}



