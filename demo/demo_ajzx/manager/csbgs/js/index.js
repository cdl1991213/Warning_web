//变量  用于判断是否可编辑及是否可保存
var isreportEditdown = 0; //是否编辑
var isSavetable = 1; //是否保存

//数据  拿取的后端数据用于渲染表格
var myData = {
    /*"mj":"秘密",
    "bgbh":"HZ06XJS",//
    "qx":"长期",
    "tbdw":"杭州市公安局西湖区分局刑侦大队",
    "asjmc":"贺旭辉被诈骗案",
    "asjlb":"刑事案件",
    "wsh":"杭西公(刑)立字[2020]03503",
    "cbr":"纪锦军",
    "lxfs":"18768155074",
    "jbqk":"",
    "syzy":"公开数据，身份数据，地址数据，群聊数据，行为数据，轨迹数据",
    "symd":"对拟采取网络信息查询监控措施的对象、目标或特定信息进行落地茶人、目标定位、信息溯源等。",
    "bz":"",
    "vos":[
        {
            "xm": "不详",
            "zjzlyhm": "不详",
            "mbhtdxx":"QQ：1482316419",
            "bz":"无"
        },
        {
            "xm": "不详",
            "zjzlyhm": "不详",
            "mbhtdxx":"QQ：1665575488",
            "bz":"无"
        }
    ],
    "dx":"零",
    "mb":"",
    "tdxx":"零",
    "sdcx":{
        "startTime":"2020年09月08日",
        "endTime":"2020年10月08日"
    }*/

    "mj":"秘密",
    "bgbh":"HZ06XJS",//
    "qx":"长期",
    "tbdw":"杭州市公安局西湖区分局刑侦大队",
    "asjmc":"",
    "asjlb":"",
    "wsh":"",
    "cbr":"纪锦军",
    "lxfs":"18768155074",
    "jbqk":"",
    "syzy":"公开数据，身份数据，地址数据，群聊数据，行为数据，轨迹数据",
    "symd":"对拟采取网络信息查询监控措施的对象、目标或特定信息进行落地茶人、目标定位、信息溯源等。",
    "bz":"",
    "vos":[
        {
            "xm": "不详",
            "zjzlyhm": "不详",
            "mbhtdxx":"",//QQ：1482316419
            "bz":"无"
        },
        {
            "xm": "不详",
            "zjzlyhm": "不详",
            "mbhtdxx":"", //QQ：1665575488
            "bz":"无"
        }
    ],
    "dx":"零",
    "mb":"",
    "tdxx":"零",
    "sdcx":{
        "startTime":"2020年09月08日",
        "endTime":"2020年10月08日"
    }

}
// var count = (12 < sum)?sum:12;
var sum = myData.vos.length;


$(document).ready(function () {

    /*渲染数据*/
    myData.mb = transform(sum);
    showList();
    makeLine();

    /*   页面功能  */
    functionBar();

});


//拿取数据
function getMessage() {
    console.log("分配函数调用成功");

    /*var _name = "";
    var _mission_sum = 0;
    var _call_sum = 0;
    var _call_count = "";
    var _action_sum = 0;
    var _is_door = "";
    var _success = "";
    var _unfinished = 0;*/


    var postData = {
        /*"_name":_name,
        "_mission_sum":_mission_sum,
        "_call_sum":_call_sum,
        "_call_count":_call_count,
        "_action_sum":_action_sum,
        "_is_door":_is_door,
        "_success":_success,
        "_unfinished":_unfinished,*/
        "startTime": 20210519000000,
        "endTime": 20210519235959,
        "level":0
    }

    var basicUrl = "http:/";
    var basicApp = "177.177.3.114:8080";
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
                showList(data.vos);
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
//展示数据
function showList(){
    console.log("showList success");

    // myData.tbdw = vos._name;

    //1
    $("#mj").text(void_text_giv(myData.mj));
    $("#qx").text(void_text_giv(myData.qx));
    $("#bgbh").val(void_text_giv(myData.bgbh));

    //2
    $("#tbdw").val(void_text_giv(myData.tbdw));
    // $("#tbrq").val(void_text_giv(myData.tbrq));

    //3
    $("#asjmc").val(void_text_giv(myData.asjmc));
    $("#asjlb").val(void_text_giv(myData.asjlb));
    $("#wsh").val(void_text_giv(myData.wsh));
    $("#cbr").val(void_text_giv(myData.cbr));
    $("#lxfs").val(void_text_giv(myData.lxfs));

    //4
    $("#reportbasicinfo").val(void_text_giv(myData.jbqk));
    $("#reportresource").val(void_text_giv(myData.syzy));
    $("#reportobjective").val(void_text_giv(myData.symd));
    $("#reportmakenote").val(void_text_giv(myData.bz));

    //5
    $("#dx").val(void_text_giv(myData.dx));
    $("#mb").val(void_text_giv(myData.mb));//计算数据
    $("#tdxx").val(void_text_giv(myData.tdxx));
    $("#startTime").val(void_text_giv(myData.sdcx.startTime));
    $("#endTime").val(void_text_giv(myData.sdcx.endTime));

    //6
    $("#reportsuggesttimeunit").val(timeNowStr.substring(0, timeNowStr.length - 22));
    $("#reportsuggesttimenetwork").val(timeNowStr.substring(0, timeNowStr.length - 22));

}
//渲染   拟录取网络信息查询监控措施的对象、目标或特定信息
function makeLine(){
    $("#reportlist").html("");
    for(var i=0;i<sum;i++){
        var con = "                  <tr id=\"line_"+i+"\">\n" +
            "                        <td colspan=\"2\"><input id=\"netnum_"+i+"\" type=\"number\" name=\"netnum\" value=\""+(i+1)+"\" readonly=\"readonly\"></td>\n" +
            "                        <td colspan=\"2\"><input id=\"netname_"+i+"\"  type=\"text\" name=\"netname\" value=\""+void_text_giv(myData.vos[i].xm)+"\" readonly=\"readonly\"></td>\n" +
            "                        <td colspan=\"2\"><input id=\"netcard_"+i+"\"  type=\"text\" name=\"netcard\" value=\""+void_text_giv(myData.vos[i].zjzlyhm)+"\" readonly=\"readonly\"></td>\n" +
            "                        <td colspan=\"8\"><input id=\"netinfo_"+i+"\"  type=\"text\" name=\"netinfo\" value=\""+void_text_giv(myData.vos[i].mbhtdxx)+"\" readonly=\"readonly\"></td>\n" +
            "                        <td colspan=\"2\"><input id=\"netnote_"+i+"\"  type=\"text\" name=\"netnote\" value=\""+void_text_giv(myData.vos[i].bz)+"\" readonly=\"readonly\"></td>\n" +
            "                    </tr>";
        $("#reportlist").append(con);
    }
    if(sum < 12){
        leave_sum = 12 - sum;
        for(var i=0;i< leave_sum ;i++){
            var con = "                  <tr id=\"line_space_"+i+"\">\n" +
                "                        <td colspan=\"2\"><input id=\"netnum_"+i+"\" type=\"number\" name=\"netnum\" value=\"\" readonly=\"readonly\"></td>\n" +
                "                        <td colspan=\"2\"><input id=\"netname_"+i+"\"  type=\"text\" name=\"netname\" value=\"\" readonly=\"readonly\"></td>\n" +
                "                        <td colspan=\"2\"><input id=\"netcard_"+i+"\"  type=\"text\" name=\"netcard\" value=\"\" readonly=\"readonly\"></td>\n" +
                "                        <td colspan=\"8\"><input id=\"netinfo_"+i+"\"  type=\"text\" name=\"netinfo\" value=\"\" readonly=\"readonly\"></td>\n" +
                "                        <td colspan=\"2\"><input id=\"netnote_"+i+"\"  type=\"text\" name=\"netnote\" value=\"\" readonly=\"readonly\"></td>\n" +
                "                    </tr>";
            $("#reportlist").append(con);
        }
    }

}

//把sum渲染成中文字
function transform(sum){
        var str = "";
        var dw2 = new Array("","万","亿");//大单位
        var dw1 = new Array("拾","佰","仟");//小单位
        var dw = new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖");//整数部分用
        if(sum < 10 && sum >= 0 ){
            str += ""+dw[sum];
            return str;
        }else if(sum >= 10 && sum < 100){
            var sum_g = sum % 10;
            var sum_s = sum / 10;
            str += ""+ sum_s + dw[0] +dw[sum_g];
            return str;
        }else{
            alert("数字过大");
        }
}
//拼接表格编号中的末尾4位数1000-9999
//last4Num什么情况下加1    ？？？？？？？？---------------------------------------------------------------？？？？
// var last4Num = 1000;
function combineBGBH_last_4_num(timeNowObject){
    var last4Num = 1000;
    if(last4Num >= 9999){
        alert("表格已满");
    }
    $("#reportsign").click(function(){
        last4Num += 1;
        myData.bgbh="HZ06XJS"
        console.log(last4Num)
        // combineBGBH_last_4_num(timeNowObject);
        console.log( myData.bgbh)
        bgbn = myData.bgbh + (getTimeSee(timeNowObject)).toString().substring(0, 8) + last4Num;
        console.log( bgbn)
        myData.bgbh=bgbn
    });
    //console.log(last4Num)
    myData.bgbh += "" + (getTimeSee(timeNowObject)).toString().substring(0, 8) + last4Num;
    //myData.bgbh += "" + (getTimeSee(timeNowObject)).toString().substring(0, 8) + last4Num;
    //last4Num += 1;
}



//编辑功能
// 若要修改表格中所有input中的文字的颜色
// 在tablestyle.css中搜索/*控制表格中所有input内文字的color*/
function allowWirte(tableID){
    tableID.find("input").css('color','#000');
    tableID.find("textarea").css('color','#000');
    $("#jbqk").css('color','#000');
    $("#syzy").css('color','#000');
    $("#symd").css('color','#000');
    $("#bz").css('color','#000');
    $("#tqdwyj").css('color','#000');
    $("#wnbmyj").css('color','#000');
    $("#gnjgyj").css('color','#000');
    tableID.find("input").removeAttr('disabled');
    tableID.find("textarea").removeAttr('disabled');
    tableID.find("input").removeAttr('readonly');
    tableID.find("textarea").removeAttr('readonly');
    $("#jbqk").attr('contenteditable','true');
    $("#syzy").attr('contenteditable','true');
    $("#symd").attr('contenteditable','true');
    $("#bz").attr('contenteditable','true');
    $("#tqdwyj").attr('contenteditable','true');
    $("#wnbmyj").attr('contenteditable','true');
    $("#gnjgyj").attr('contenteditable','true');
}
// 使粘贴过来的文本无格式
function setpaste(item){
    window.setTimeout("change("+item.id+")",10);
}
function change(item){

    var new_content = item.innerHTML;
    var new_content = new_content.replace(/class="[^"]+"/ig, '');

    new_content = new_content.replace(/class\="[^"]+"/gi, '');

    new_content = new_content.replace(/&lt;h1.*?>(.*?)&lt;\/h1>/ig,"$1");

    new_content = new_content.replace(/&lt;h2.*?>(.*?)&lt;\/h2>/ig,"$1");

    new_content = new_content.replace(/&lt;h3.*?>(.*?)&lt;\/h3>/ig,"$1");

    new_content = new_content.replace(/&lt;h4.*?>(.*?)&lt;\/h4>/ig,"$1");

    new_content = new_content.replace(/&lt;h5.*?>(.*?)&lt;\/h5>/ig,"$1");

    new_content = new_content.replace(/&lt;h6.*?>(.*?)&lt;\/h6>/ig,"$1");

    new_content = new_content.replace(/style\="[^"]+"/gi, '');

    new_content = new_content.replace(/&lt;\/?strong>/gi,'');
    item.innerHTML=new_content;
}

//打印功能
(function (window, document) {
    var Print = function (dom, options) {
        if (!(this instanceof Print)) return new Print(dom, options);

        this.options = this.extend({
            noPrint: '.no-print',
            onStart: function () { },
            onEnd: function () { }
        }, options);

        if ((typeof dom) === "string") {
            this.dom = document.querySelector(dom);
        } else {
            this.dom = dom;
        }

        this.init();
    };
    Print.prototype = {
        init: function () {
            var content = this.getStyle() + this.getHtml();
            this.writeIframe(content);
        },
        extend: function (obj, obj2) {
            for (var k in obj2) {
                obj[k] = obj2[k];
            }
            return obj;
        },

        getStyle: function () {
            var str = "",
                styles = document.querySelectorAll('style,link');
            for (var i = 0; i < styles.length; i++) {
                str += styles[i].outerHTML;
            }
            str += "<style>" + (this.options.noPrint ? this.options.noPrint : '.no-print') + "{display:none;}</style>";

            return str;
        },

        getHtml: function () {
            var inputs = document.querySelectorAll('input');
            var textareas = document.querySelectorAll('textarea');
            var selects = document.querySelectorAll('select');

            for (var k in inputs) {
                if (inputs[k].type == "checkbox" || inputs[k].type == "radio") {
                    if (inputs[k].checked == true) {
                        inputs[k].setAttribute('checked', "checked")
                    } else {
                        inputs[k].removeAttribute('checked')
                    }
                } else if (inputs[k].type == "text") {
                    inputs[k].setAttribute('value', inputs[k].value)
                }
            }

            for (var k2 in textareas) {
                if (textareas[k2].type == 'textarea') {
                    textareas[k2].innerHTML = textareas[k2].value
                }
            }

            for (var k3 in selects) {
                if (selects[k3].type == 'select-one') {
                    var child = selects[k3].children;
                    for (var i in child) {
                        if (child[i].tagName == 'OPTION') {
                            if (child[i].selected == true) {
                                child[i].setAttribute('selected', "selected")
                            } else {
                                child[i].removeAttribute('selected')
                            }
                        }
                    }
                }
            }

            return this.dom.outerHTML;
        },

        writeIframe: function (content) {
            var w, doc, iframe = document.createElement('iframe'),
                f = document.body.appendChild(iframe);
            iframe.id = "myIframe";
            iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
            w = f.contentWindow || f.contentDocument;
            doc = f.contentDocument || f.contentWindow.document;
            doc.open();
            doc.write(content);
            doc.close();
            this.toPrint(w, function () {
                document.body.removeChild(iframe)
            });
        },

        toPrint: function (w, cb) {
            var _this = this;
            w.onload = function () {
                try {
                    setTimeout(function () {
                        w.focus();
                        typeof _this.options.onStart === 'function' && _this.options.onStart();
                        if (!w.document.execCommand('print', false, null)) {
                            w.print();
                        }
                        typeof _this.options.onEnd === 'function' && _this.options.onEnd();
                        w.close();
                        cb && cb()
                    });
                } catch (err) {
                    console.log('err', err);
                }
            }
        }
    };
    window.Print = Print;
}(window, document));

//下载功能
function convert(tableID,tabletype) {
    var downname;
    if(tabletype==1){
        downname = "呈请采取网络信息查询监控措施报告书1";
    }else if(tabletype==0){
        downname = "呈请采取网络信息查询监控措施报告书2";
    }
    html2canvas(document.querySelector(tableID),{
        backgroundColor:"#fff",
    }).then(canvas => {
        canvas.toBlob(function(blob) {
            saveAs(blob, downname+".png");
        });
    });
}

//签章
//随机签章
function sealltRandomseal(idName,bmax,bmin,lmax,lmin){
    var bnum=Math.random()*(bmax-bmin);
    var lnum=Math.random()*(lmax-lmin);
    var bvalue = parseInt(bnum+bmin);
    var lvalue = parseInt(lnum+lmin);
    idName.css({'bottom':bvalue,'left':lvalue});
}

//保存
function save(){
    console.log("save success");
    let tableID = $("#tableReport");
    if(isSavetable == 0){
        //未保存
        isSavetable = 1;
        isreportEditdown = 0;
        limitWrite(tableID);
        $("#button_save").hide();
        alert("保存成功");
    }else if(isSavetable == 1){
        alert("已保存");
        $("#button_save").hide();
    }
}
//禁止编辑功能-------保存
function limitWrite(tableID){
    tableID.find("input").css('color','#666');
    tableID.find("textarea").css('color','#666');
    $("#jbqk").css('color','#666');
    $("#syzy").css('color','#666');
    $("#symd").css('color','#666');
    $("#bz").css('color','#666');
    $("#tqdwyj").css('color','#666');
    $("#wnbmyj").css('color','#666');
    $("#gnjgyj").css('color','#666');
    tableID.find("input").attr('disabled','disabled');
    tableID.find("textarea").attr('disabled','disabled');
    tableID.find("input").attr('readonly','readonly');
    tableID.find("textarea").attr('readonly','readonly');
    $("#jbqk").attr('contenteditable','false');
    $("#syzy").attr('contenteditable','false');
    $("#symd").attr('contenteditable','false');
    $("#bz").attr('contenteditable','false');
    $("#tqdwyj").attr('contenteditable','false');
    $("#wnbmyj").attr('contenteditable','false');
    $("#gnjgyj").attr('contenteditable','false');
}

//功能导航栏功能集合
function functionBar(){
    //编辑
    $("#reportedit").click(function(){
        isSavetable = 0;
        isreportEditdown = 1;
        let tableID = $("#tableReport");
        allowWirte(tableID);
        $("#button_save").show();
    });

    //打印
    $("#reportprint").click(function(){
        if(isSavetable==1){
            Print("#tableReport");
        }
        else{
            alert("请先保存当前操作再打印");
        }
    });

    //下载
    // var last4Num = 1000;
    $("#reportdown").click(function(){
        // tableID在这里是要打印的对象的id
        // var tableID = "#tableReport";
        var tableID1 = "#shang";
        var tableID2 = "#xia";
        if(isSavetable==1){
            convert(tableID1,0);
            convert(tableID2,1);
        }
        else{
            alert("请先保存当前操作再下载");
        }
        // last4Num += 1;
        // console.log(last4Num)
    });

    //签章
    var isreportSealdown = 0;
    $("#reportsign").click(function(){
        isSavetable = 0;

        let unitsealID = $("#reportsuggestunit").children(".markseal");//提请单位意见章
        let unitsignID = $("#reportsuggestunit").children(".markname");//提请单位意见签名
        // let netsealID = $("#reportsuggestnetwork").children(".markseal");//网安部门意见章
        // let netsignID = $("#reportsuggestnetwork").children(".markname");//网安部门意见签名
        if(isreportSealdown ==0){//如果没有签章过
            console.log("isreportSealdown success");
            $(".markseal2").css('background-image','url(\'./img/gz/dadui_rotation_6.png\')')


            //单位签章
            sealltRandomseal(unitsealID,110,90,150,20);  //40,30,150,20    120,100,150,80
            sealltRandomseal(unitsignID,150,120,180,80);  //100,70,150,100   150,120,150,120

            // //网安签章
            // sealltRandomseal(netsealID,100,80,440,360);
            // sealltRandomseal(netsignID,160,90,450,360);

            //单位签章
            $("#reportsuggestunit").find(".markseal").show(300);
            $("#reportsuggestunit").find(".markname").show(300);

            //显示单位签章时间
            $("#reportmarktimeunit").show(300);


            //网安签章
            // $("#reportsuggestnetwork").find(".markseal").show(300);
            // $("#reportsuggestnetwork").find(".markname").show(300);
            // //显示网安签章时间
            // $("#reportmarktimenetwork").show(300);
            // isreportSealdown=1;
        }else{
            console.log("isreportSealdown havnt success");
            // $(this).find(".markseal").hide(300);
            // $(this).find(".markname").hide(300);
            // $("#reportsuggesttimeunit").hide(300);
            isreportSealdown = 0;
        }
    });
}