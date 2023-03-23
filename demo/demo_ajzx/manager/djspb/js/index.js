//变量  用于判断是否可编辑及是否可保存
var isreportEditdown = 0; //是否编辑
var isSavetable = 1; //是否保存

//数据  拿取的后端数据用于渲染表格
var myData = {
    "mj":"秘密",
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
    }

}

$(document).ready(function () {


    /*   页面功能  */
    functionBar();




});


//拼接表格编号中的末尾4位数1000-9999
//last4Num什么情况下加1    ？？？？？？？？---------------------------------------------------------------？？？？
var last4Num = 1000;
function combineBGBH_last_4_num(timeNowObject){
    if(last4Num >= 9999){
        alert("表格已满");
    }
    myData.bgbh += "" + (getTimeSee(timeNowObject)).toString().substring(0, 8) + last4Num;
    last4Num += 1;
}

// //拿取数据
// function getMessage() {
//     console.log("分配函数调用成功");
//
//     /*var _name = "";
//     var _mission_sum = 0;
//     var _call_sum = 0;
//     var _call_count = "";
//     var _action_sum = 0;
//     var _is_door = "";
//     var _success = "";
//     var _unfinished = 0;*/
//
//
//     var postData = {
//         /*"_name":_name,
//         "_mission_sum":_mission_sum,
//         "_call_sum":_call_sum,
//         "_call_count":_call_count,
//         "_action_sum":_action_sum,
//         "_is_door":_is_door,
//         "_success":_success,
//         "_unfinished":_unfinished,*/
//         "startTime": 20210519000000,
//         "endTime": 20210519235959,
//         "level":0
//     }
//
//     var basicUrl = "http:/";
//     var basicApp = "177.177.3.114:8080";
//     var urlX = basicUrl + "/" + basicApp + "/api_model/api/countMission.do";
//     $.ajax({
//         //获取策略中心（下发到单位）数据
//         url: urlX,
//         type: "POST",
//         data: postData,
//         async: true,
//         dataType: "json",//服务器返回类型
//         scriptCharset: "UTF-8",
//         success: function (data) {
//             console.log(data);
//             if (data.result == 1) {
//                 showList(data.vos);
//             } else if (data.result == -1) {
//                 alert("失败");
//             } else {
//                 //ajaxFailResultShow(data.msg, ""); //展示提示的结果
//                 alert(data.msg)
//             }
//         },
//         error: function () {
//             console.log("error");
//         }
//
//     });
// }
//
//
// //展示数据
// function showList(){
//     console.log("showList success");
//
//     // myData.tbdw = vos._name;
//
//     //1
//     $("#mj").text(void_text_giv(myData.mj));
//     $("#qx").text(void_text_giv(myData.qx));
//     $("#bgbh").val(void_text_giv(myData.bgbh));
//
//     //2
//     $("#tbdw").val(void_text_giv(myData.tbdw));
//     // $("#tbrq").val(void_text_giv(myData.tbrq));
//
//     //3
//     $("#asjmc").val(void_text_giv(myData.asjmc));
//     $("#asjlb").val(void_text_giv(myData.asjlb));
//     $("#wsh").val(void_text_giv(myData.wsh));
//     $("#cbr").val(void_text_giv(myData.cbr));
//     $("#lxfs").val(void_text_giv(myData.lxfs));
//
//     //4
//     $("#reportbasicinfo").val(void_text_giv(myData.jbqk));
//     $("#reportresource").val(void_text_giv(myData.syzy));
//     $("#reportobjective").val(void_text_giv(myData.symd));
//     $("#reportmakenote").val(void_text_giv(myData.bz));
//
//     //5
//     $("#dx").val(void_text_giv(myData.dx));
//     $("#mb").val(void_text_giv(myData.mb));//计算数据
//     $("#tdxx").val(void_text_giv(myData.tdxx));
//     $("#startTime").val(void_text_giv(myData.sdcx.startTime));
//     $("#endTime").val(void_text_giv(myData.sdcx.endTime));
//
//     //6
//     $("#reportsuggesttimeunit").val(timeNowStr.substring(0, timeNowStr.length - 22));
//     $("#reportsuggesttimenetwork").val(timeNowStr.substring(0, timeNowStr.length - 22));
//
// }



//编辑功能
function allowWirte(tableID){
    tableID.find("input").css('color','#9b9797');
    tableID.find("textarea").css('color','#9b9797');
    $("#jbaq").css('color','#9b9797');
    tableID.find("input").removeAttr('disabled');
    tableID.find("textarea").removeAttr('disabled');
    $("#jbaq").attr('contenteditable','true');
    tableID.find("input").removeAttr('readonly');
    tableID.find("textarea").removeAttr('readonly');
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
//展示手写时间
function showTimeInHand(){
    //时间img的地址前缀
    let IMGTimeUrl = '../../img/mathInHand/'
    //当前时间
    let timeNowObject = new Date();
    //时间容器div
    let IMGTime_id = '';
    //需要设置的background-image的属性
    let IMGTimeUrl_STR = '';
    //时间数字
    let num = 0;
    console.log(getTimeSee(timeNowObject).toString().substring(0,4))
    console.log(getTimeSee(timeNowObject).toString().substring(4,6))
    console.log(getTimeSee(timeNowObject).toString().substring(7,9))
    //申请人签名--年
    for(let i=1; i<=4; i++ ){
        num = getTimeSee(timeNowObject).toString().substring(i-1,i)

        IMGTimeUrl = '../../img/mathInHand/';
        IMGTimeUrl_STR = '';

        IMGTimeUrl += num + '.png';
        console.log(IMGTimeUrl);
        IMGTime_id = '.qm_year_'+i;
        IMGTimeUrl_STR = 'url(\'' + IMGTimeUrl +'\')';
        $(IMGTime_id).css('background-image',IMGTimeUrl_STR)
    }
    //申请人签名--月
    for(let i=1; i<=2; i++ ){
        num = getTimeSee(timeNowObject).toString().substring(i-1+4,i+4);
        IMGTimeUrl = '../../img/mathInHand/';
        IMGTimeUrl_STR = '';

        IMGTimeUrl += num + '.png';
        console.log(IMGTimeUrl);
        IMGTime_id = '.qm_month_'+i;
        IMGTimeUrl_STR = 'url(\'' + IMGTimeUrl +'\')';
        $(IMGTime_id).css('background-image',IMGTimeUrl_STR)
    }
    //申请人签名--日
    for(let i=1; i<=2; i++ ){
        num = getTimeSee(timeNowObject).toString().substring(i-1+6,i+6);
        IMGTimeUrl = '../../img/mathInHand/';
        IMGTimeUrl_STR = '';

        IMGTimeUrl += num + '.png';
        console.log(IMGTimeUrl);
        IMGTime_id = '.qm_day_'+i;
        IMGTimeUrl_STR = 'url(\'' + IMGTimeUrl +'\')';
        $(IMGTime_id).css('background-image',IMGTimeUrl_STR)
    }



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
    tableID.find("input").css('color','#000');
    tableID.find("textarea").css('color','#000');
    $("#jbaq").css('color','#000');
    tableID.find("input").attr('disabled','disabled');
    tableID.find("textarea").attr('disabled','disabled');
    $("#jbaq").attr('contenteditable','false');
    tableID.find("input").attr('readonly','readonly');
    tableID.find("textarea").attr('readonly','readonly');
}

//功能导航栏功能集合
function functionBar(){
    //编辑功能
    $("#reportedit").click(function(){
        isSavetable = 0;
        isreportEditdown = 1;
        let tableID = $("#tableReport");
        allowWirte(tableID);
        $("#button_save").show();
    });

    //措施报告书打印
    $("#reportprint").click(function(){
        if(isSavetable==1){
            Print("#tableReport");
            Print("#tableReport_2");
        }
        else{
            alert("请先保存当前操作再打印");
        }
    });

    //下载功能
    //措施报告书下载
    $("#reportdown").click(function(){
        // tableID在这里是要打印的对象的id
        // var tableID = "#tableReport";
        var tableID1 = "#tableReport";
        var tableID2 = "#tableReport_2";
        if(isSavetable==1){
            convert(tableID1,0);
            convert(tableID2,1);
        }
        else{
            alert("请先保存当前操作再下载");
        }
    });


    //签章
    //措施报告书签章
    //表示没有签章过
    // 查询人签字栏
    var isreportSealdown_sqr = 0;
    $("#reportsign").click(function(){
        //生成0或1
        let qianzhang_radom = Math.round((Math.random() * 1));
        console.log(qianzhang_radom);
        if(qianzhang_radom == 0){
            //冯
            $('#cxr').val('冯升豪');
            let sqr_markname_image_feng_num = Math.round((Math.random() * 3)) + 1;
            $('#sqr_markname').css('background-image','url(\'../../img/ajzx_qm/feng'+sqr_markname_image_feng_num+'.png\')')

        }else if(qianzhang_radom == 1){
            //吴
            $('#cxr').val('吴卉');
            let sqr_markname_image_wu_num = Math.round((Math.random() * 3)) + 1;
            $('#sqr_markname').css('background-image','url(\'../../img/ajzx_qm/wu'+sqr_markname_image_wu_num+'.png\')')

        }

        let unitsignID = $("#reportsuggestunit_sqr").children(".sqr_markname");//提请单位意见签名
        if(isreportSealdown_sqr ==0){//如果没有签章过
            console.log("isreportSealdown success");
            //单位签章

            sealltRandomseal(unitsignID,-128,-128,70,70);

            // //网安签章
            // sealltRandomseal(netsealID,100,80,440,360);
            // sealltRandomseal(netsignID,160,90,450,360);

            //单位签章时间
            $("#reportsuggestunit_sqr").find(".sqr_markname").show(300);

            //网安签章
            // $("#reportsuggestnetwork").find(".markseal").show(300);
            // $("#reportsuggestnetwork").find(".markname").show(300);
            // //显示网安签章时间
            // $("#reportmarktimenetwork").show(300);
            // isreportSealdown=1;
        }else {
            console.log("isreportSealdown havnt success");
            isreportSealdown_sqr = 0;
        }
    });
    //办案单位意见栏
    var isreportSealdown_xzbm = 0;
    $("#reportsign").click(function(){
        //生成0或1
        let qianzhang_radom = Math.round((Math.random() * 1));

        if(qianzhang_radom == 0){
            let xzbm_markname_image_tao_num = Math.round((Math.random() * 3)) + 1;
            $('#xzbm_markname').css('background-image','url(\'../../img/ajzx_qm/tao'+xzbm_markname_image_tao_num+'.png\')')
        }else if(qianzhang_radom == 1){
            let xzbm_markname_image_fang_num = Math.round((Math.random() * 3)) + 1;
            $('#xzbm_markname').css('background-image','url(\'../../img/ajzx_qm/fang'+xzbm_markname_image_fang_num+'.png\')')
        }

        //生成2~6
        let dadui_rotation_random = Math.round((Math.random() * 4)) + 2;
        console.log("//生成2~6");
        console.log(dadui_rotation_random);
        let dadui_rotation_Url = 'url(\'img/dadui_rotation_'+dadui_rotation_random+'.png\')';
        $('#markseal_dadui').css('background-image',dadui_rotation_Url);


        let unitsealID = $("#reportsuggestunit_xzbm").children(".markseal_dadui");//提请单位意见章
        let unitsignID = $("#reportsuggestunit_xzbm").children(".xzbm_markname");//提请单位意见签名
        if(isreportSealdown_xzbm ==0){//如果没有签章过
            console.log("isreportSealdown success");
            //单位签章
            sealltRandomseal(unitsignID,-128,-128,70,70);
            sealltRandomseal(unitsealID,-152,-163,43,49);

            // //网安签章
            // sealltRandomseal(netsealID,100,80,440,360);
            // sealltRandomseal(netsignID,160,90,450,360);

            //单位签章时间
            $("#reportsuggestunit_xzbm").find(".xzbm_markname").show(300);
            $("#reportsuggestunit_xzbm").find(".markseal_dadui").show(300);

            //网安签章
            // $("#reportsuggestnetwork").find(".markseal").show(300);
            // $("#reportsuggestnetwork").find(".markname").show(300);
            // //显示网安签章时间
            // $("#reportmarktimenetwork").show(300);
            // isreportSealdown=1;
        }else{
            console.log("isreportSealdown havnt success");
            isreportSealdown_xzbm = 0;
        }
    });
    //区县级以上分局意见
    var isreportSealdown_fgld = 0;
    $("#reportsign").click(function(){
        let sqr_markname_image_agree_num = Math.round((Math.random() * 3)) + 1;
        $('#markseal_agree').css('background-image','url(\'../../img/ajzx_qm/agree'+sqr_markname_image_agree_num+'.png\')')

        let sqr_markname_image_wei_num = Math.round((Math.random() * 5)) + 1;
        $('#fgld_markname').css('background-image','url(\'../../img/ajzx_qm/wei'+sqr_markname_image_wei_num+'.png\')')

        //生成1~3
        let fenju_rotation_random = Math.round((Math.random() * 2)) + 1;
        console.log("//生成1~3---分局");
        console.log(fenju_rotation_random);
        let fenju_rotation_Url = 'url(\'img/fenju_rotation_'+fenju_rotation_random+'.png\')';
        $('#markseal_fenju').css('background-image',fenju_rotation_Url);



        let unitsealID = $("#reportsuggestunit_fgld").children(".markseal_fenju");//提请单位意见章
        let unitsignID = $("#reportsuggestunit_fgld").children(".fgld_markname");//提请单位意见签名
        let unitagreeID = $("#reportsuggestunit_fgld").children(".markseal_agree");//提请单位同意章
        if(isreportSealdown_fgld ==0){//如果没有签章过
            console.log("isreportSealdown success");
            //单位签章
            sealltRandomseal(unitsignID,-99,-99,342,342);
            sealltRandomseal(unitsealID,-172,-180,252,245);
            sealltRandomseal(unitagreeID,-130,-130,40,40);

            // //网安签章
            // sealltRandomseal(netsealID,100,80,440,360);
            // sealltRandomseal(netsignID,160,90,450,360);

            //单位签章时间
            $("#reportsuggestunit_fgld").find(".fgld_markname").show(300);
            $("#reportsuggestunit_fgld").find(".markseal_fenju").show(300);
            $("#reportsuggestunit_fgld").find(".markseal_agree").show(300);

            //网安签章
            // $("#reportsuggestnetwork").find(".markseal").show(300);
            // $("#reportsuggestnetwork").find(".markname").show(300);
            // //显示网安签章时间
            // $("#reportmarktimenetwork").show(300);
            // isreportSealdown=1;
        }else{
            console.log("isreportSealdown havnt success");
            isreportSealdown_fgld = 0;
        }
    });

    $("#reportsign").click(function(){
        showTimeInHand();
    });
}




