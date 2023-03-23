
$(document).ready(function () {

    limitAreaList();
    showTime();
    timeSelect();
    distribute();
    showList_time();

});

var myData = {
    "vos":""
}
let content = "";
function showList(e) {
    $(".mouseOver").remove();
    console.log("e");
    console.log(e);
    myData.vos = e;

    //****************************
    console.log(myData);
    var sum = myData.vos.length;
    //

    for (let i = 0; i < sum; i++) {
        if(myData.vos[i]._name == '' ||  myData.vos[i]._name == undefined || myData.vos[i]._name == null){myData.vos[i]._name = '西湖反诈中心'}else{myData.vos[i]._name = myData.vos[i]._name}
        content = "";
        content += "<div class=\"mouseOver\" id=\"page_content_"+i+"\" style=\"float: left;width: 18rem;height: 0.53rem;position: relative;\">\n";
        content +=    "                <div style=\"float:left;left:0;top:0;width:1.2rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:1px solid #02314D;position: absolute\">" + (i + 1) + "</div>\n";
        content +=    "                <div style=\"float:left;left:1.2rem;top:0;width:4.4rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._name) + "</div>\n";
        content +=    "                <div style=\"float:left;left:5.6rem;top:0;width:1.77rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._mission_sum, 0) + "</div>\n";
        content +=    "                <div style=\"float:left;left:7.37rem;top:0;width:1.77rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:1px solid #02314D;position: absolute\">" + void_number_giv_a(myData.vos[i]._call_sum, 0) + "</div>\n";
        content +=    "                <div style=\"float:left;left:9.14rem;top:0;width:1.77rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._call_count) + "</div>\n";
        content +=    "                <div style=\"float:left;left:10.91rem;top:0;width:1.77rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._action_sum) + "</div>\n";
        content +=    "                <div style=\"float:left;left:12.68rem;top:0;width:1.77rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._is_door) + "</div>\n";
        content +=     "                <div style=\"float:left;left:14.45rem;top:0;width:1.77rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._success) + "</div>\n";
        content +=    "                <div style=\"float:left;left:16.22rem;top:0;width:1.76rem;height:0.53rem;line-height:0.53rem;font-size:0.18rem;text-align:center;color:#00CCFF;border:1px solid #02314D;position: absolute\">" + void_text_giv(myData.vos[i]._unfinished) + "</div>\n";
        content +=   "             </div>";
        $("#page_content_ALL").append(content);

    }
}

var postData = {
    "startTime": 20210519000000,
    "endTime": 20210520000000
}
function distribute() {

    console.log("分配函数调用成功");

    var basicUrl = "http:/";
    var basicApp = "192.168.8.102:8080"; //177.177.0.233:8080
    var urlX = basicUrl + "/" + basicApp + "/api_model/api/countMissionUnit.do";

    $.ajax({
        //获取策略中心（下发到单位）数据
        url: urlX,
        type: "POST",
        data: postData,
        async: true,
        dataType: "json",//服务器返回类型
        scriptCharset: "UTF-8",
        success: function (data) {
            console.log("data");
            console.log(data);
            if (data.result == 1) {
                showList(data.vos);
                console.log(data.vos);
            } else if (data.result == -1) {
                alert("失败");
            } else {
                //ajaxFailResultShow(data.msg, ""); //展示提示的结果
                alert(data.msg)
            }
        },
        error: function () {
            console.log("error");
        }

    });
}

//导出为excel功能
function exportExcel() {
    // 列标题，逗号隔开，每一个逗号就是隔开一个单元格
    let str = `序号,单位,下达数,反馈数,反馈及时率,二次评判率,上门劝阻率,劝阻成功率,未完结数\n`;
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

