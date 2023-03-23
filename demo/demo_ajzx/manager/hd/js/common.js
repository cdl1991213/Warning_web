function htmlspecialchars(str){
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#039;');
    return str;
}

var numbers = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖","拾"];

var x=0
/*$("#checksumsql").attr("value",numbers[2]);*/



//编辑功能变量
var isreportEditdown = 0; //是否编辑
var isSavetable = 1; //是否保存


//编辑功能
$("#checkedit").click(function(){
    isSavetable = 0;
    isreportEditdown = 1;
    let tableID = $("#tableCheck");
    allowWirte(tableID);
    $("#button_save").show();
});


//保存
function save(){
    x=0
    console.log("save success");
    let tableID = $("#tableCheck");
    if(isSavetable == 0){ //未保存
        isSavetable = 1;
        isreportEditdown = 0;
        forbidWrite(tableID);
        $("#button_save").hide();

        alert("保存成功");
    }else if(isSavetable == 1){
        alert("已保存");
        $("#button_save").hide();
    }

    for (var i=1;i<=8;i++){
        if ($(".querynum"+i).val() !== ""){
            x=x+1
            console.log(x)
        }
        console.log($(".querynum"+i).val())
        console.log(x)
        //$("#checksumsql").attr("value",numbers[x]);
    }
    $("#checksumsql").attr("value",numbers[x]);
// console.log($(".querynum").val())

}
//不可编辑
function forbidWrite(tableID){
    tableID.find("input").css('color','#000');
    tableID.find("textarea").css('color','#000');
    $("#djzh").css('color','#000');
    $("#bz").css('color','#000');
    $("#shyj").css('color','#000');
    $("#spyj").css('color','#000');
    tableID.find("input").attr('disabled','disabled');
    tableID.find("textarea").attr('disabled','disabled');
    tableID.find("input").attr('readonly','readonly');
    tableID.find("textarea").attr('readonly','readonly');
    $("#djzh").attr('contenteditable','false');
    $("#bz").attr('contenteditable','false');
    $("#shyj").attr('contenteditable','false');
    $("#spyj").attr('contenteditable','false');
}
//审批表可编辑
function allowWirte(tableID){
    tableID.find("input").css('color','#666');
    tableID.find("textarea").css('color','#666');
    $("#djzh").css('color','#666');
    $("#bz").css('color','#666');
    $("#shyj").css('color','#666');
    $("#spyj").css('color','#666');
    tableID.find("input").removeAttr('disabled');
    tableID.find("textarea").removeAttr('disabled');
    tableID.find("input").removeAttr('readonly');
    tableID.find("textarea").removeAttr('readonly');
    $("#djzh").attr('contenteditable','true');
    $("#bz").attr('contenteditable','true');
    $("#shyj").attr('contenteditable','true');
    $("#spyj").attr('contenteditable','true');
}

//措施报告书打印
$("#checkprint").click(function(){
    x=0
    console.log(isSavetable)
    if(isSavetable==1){
        console.log(111111)
        Print("#tableCheck");
        //Print("#tableCheck_2");
    }else{
        alert("请先保存当前操作再打印");
    }
});

//下载功能
//措施报告书下载
$("#checkdown").click(function(){
    x=0
    console.log(isSavetable)
    // tableID在这里是要打印的对象的id
    // var tableID = "#tableReport";
    var tableID1 = "#tableCheck";
    //var tableID2 = "#tableCheck_2";
    if(isSavetable==1){
        convert(tableID1,1);
        //convert(tableID2,1);
    }
    else{
        alert("请先保存当前操作再下载");
    }

});
//下载
function convert(tableID,tabletype) {
    var downname;
    if(tabletype===1){
        downname = "提请公安机关技术侦察部门数据查询审批表";
    }else if(tabletype===0){
        downname = "呈请采取网络信息查询监控措施报告书";
    }
    html2canvas(document.querySelector(tableID),{
        backgroundColor:"#fff",
    }).then(canvas => {
        canvas.toBlob(function(blob) {
            saveAs(blob, downname+".png");
        });
    });

}



//审批表签章
$("#checksign").click(function(){
    isSavetable = 0;
    let shsealID = $("#checksuggestsh").children(".markseal");//审核意见章
    let shsignID = $("#checksuggestsh").children(".markname");//审核意见签名
    let spsealID = $("#checksuggestsp").children(".markseal1");//审批意见章
    let spsignID = $("#checksuggestsp").children(".markname1");//审批意见签名
    if(ischeckSealdown ===0){//如果没有签章过
        //ischeckSealdown = 1;
        //生成0/1随机数
        let qianzhang_radom = Math.round((Math.random() * 1));
        console.log(qianzhang_radom)
        switch (qianzhang_radom){
            case 0:
                $(".markname").css('background-image','url(\'./img/qm/fang4.png\')')
                break;
            case 1:
                $(".markname").css('background-image','url(\'./img/qm/tao4.png\')')
                break;
        }
        // for (var i=0;i<2;i++){
        //     if (i==1){
        //         $(".markname").css('background-image','url(\'./img/qm/tao4.png\')')
        //     }else{
        //         $(".markname").css('background-image','url(\'./img/qm/fang4.png\')')
        //     }
        // }
        sealltRandomseal(shsealID,40,30,150,20);  //上下 左右
        sealltRandomseal(shsignID,100,70,150,100);
        sealltRandomseal(spsealID,35,25,380,350);
        sealltRandomseal(spsignID,100,70,480,450);
        $(".markseal").show(300);
        //$(".markseal").css('display','block')
        $(".markseal1").show(300); //审批意见章
        $(".markname").show(300); //签名
        $(".markname1").show(300); //签名
        //$("#checkmarktimesh").show(300);

    }else{
        ischeckSealdown = 0;
        $(".markseal").hide(300);
        //$(".markseal").css('display','none')
        $(".markseal1").hide(300); //审批意见章
        $(".markname").hide(300); //签名
        $(".markname1").hide(300); //签名
       // $("#checkmarktimesh").hide(300);
    }
    showTimeInHand()
});

//随机签章
function sealltRandomseal(idName,bmax,bmin,lmax,lmin){
    var bnum=Math.random()*(bmax-bmin);
    var lnum=Math.random()*(lmax-lmin);
    var bvalue = parseInt(bnum+bmin);
    var lvalue = parseInt(lnum+lmin);
    idName.css({'bottom':bvalue,'left':lvalue});
}


//展示手写时间
function showTimeInHand() {
    //时间img的地址前缀
    let IMGTimeUrl = './img/mathInHand/'
    //当前时间
    let timeNowObject = new Date();
    //时间容器div
    let IMGTime_id = '';
    //需要设置的background-image的属性
    let IMGTimeUrl_STR = '';
    //时间数字
    let num = 0;
    console.log(getTimeSee(timeNowObject).toString().substring(0, 4))
    console.log(getTimeSee(timeNowObject).toString().substring(4, 6))
    console.log(getTimeSee(timeNowObject).toString().substring(7, 9))
    //申请人签名--年
    for (let i = 1; i <= 4; i++) {
        num = getTimeSee(timeNowObject).toString().substring(i - 1, i)

        IMGTimeUrl = './img/mathInHand/';
        IMGTimeUrl_STR = '';

        IMGTimeUrl += num + '.png';
        console.log(IMGTimeUrl);
        IMGTime_id = '.qm_year_' + i;
        IMGTimeUrl_STR = 'url(\'' + IMGTimeUrl + '\')';
        $(IMGTime_id).css('background-image', IMGTimeUrl_STR)
    }
    //申请人签名--月
    for (let i = 1; i <= 2; i++) {
        num = getTimeSee(timeNowObject).toString().substring(i - 1 + 4, i + 4);
        IMGTimeUrl = './img/mathInHand/';
        IMGTimeUrl_STR = '';

        IMGTimeUrl += num + '.png';
        console.log(IMGTimeUrl);
        IMGTime_id = '.qm_month_' + i;
        IMGTimeUrl_STR = 'url(\'' + IMGTimeUrl + '\')';
        $(IMGTime_id).css('background-image', IMGTimeUrl_STR)
    }
    //申请人签名--日
    for (let i = 1; i <= 2; i++) {
        num = getTimeSee(timeNowObject).toString().substring(i - 1 + 6, i + 6);
        IMGTimeUrl = './img/mathInHand/';
        IMGTimeUrl_STR = '';

        IMGTimeUrl += num + '.png';
        console.log(IMGTimeUrl);
        IMGTime_id = '.qm_day_' + i;
        IMGTimeUrl_STR = 'url(\'' + IMGTimeUrl + '\')';
        $(IMGTime_id).css('background-image', IMGTimeUrl_STR)
    }
}


//打印
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


// 显示动态的时间
function run(){
    var time = new Date();//获取系统当前时间
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var date= time.getDate();//系统时间月份中的日

    var newDate = year+"年"+month+"月"+date+"日";
    $("#checkintime").val(newDate);
}
run()



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


/*var len;
$(function () {
    //var pageCount=50;  //分页总数量
    // $("#pages").pagination(pageCount); //简单初始化方法
    pagelist(1);
    //debugger;
    //alert(len);
    // console.log(len+'len数据');

});
function getpage(){
    new Pagination({
        element: '#pages', // 渲染的容器  [必填]
        type: 1, // 样式类型，默认1 ，目前可选 [1,2] 可自行增加样式   [非必填]
        layout: 'total, sizes, home, prev, pager, next, last, jumper', // [必填]
        pageIndex: 1, // 当前页码 [非必填]
        // pageSize: 20, // 每页显示条数   TODO: 默认选中sizes [非必填]
        pageCount: 5, // 页码显示数量，页码必须大于等于5的奇数，默认页码9  TODO:为了样式美观，参数只能为奇数， 否则会报错 [非必填]
        total: len, // 数据总条数 [必填]
        singlePageHide: false, // 单页隐藏， 默认true  如果为true页码少于一页则不会渲染 [非必填]
        pageSizes: [5, 20, 30, 40, 50], // 选择每页条数  TODO: layout的sizes属性存在才生效
        prevText: '上一页', // 上一页文字，不传默认为箭头图标  [非必填]
        nextText: '下一页', // 下一页文字，不传默认为箭头图标 [非必填]
        ellipsis: true, // 页码显示省略符 默认false  [非必填]
        disabled: true, // 显示禁用手势 默认false  [非必填]
        currentChange: function(pageIndex, pageSize) { // 页码改变时回调  TODO:第一个参数是当前页码，第二个参数是每页显示条数数量，需使用sizes第二参数才有值。
            pagelist(pageIndex);
        }
    });
}
function pagelist(pageIndex){
    $.ajax({
        //请求方式
        type:"GET",
        //文件位置
        url:"data.json",
        //返回数据格式为json,也可以是其他格式如
        data : {
            pageIndex : pageIndex, //必须的参数，当前页
            //pageSize : pageSize, //必须的参数，当前显示的数据量
        },// 传递页面索引
        dataType: "json",
        //请求成功后要执行的函数，拼接html
        //data:"pageIndex="+(),
        success: function(data){
            len = data.length;
            var str="<ul>";
            $.each(data,function(i,n){
                str+="<li>"+"ID："+n.id+"</li>";
                str+="<li>"+"标题："+n.title+"</li>";
                str+="<li>"+"地址："+n.url+"</li>";
            });
            str+="</ul>";
            $("#ullist").append(str);
            console.log(len);
            //$(selector).pagination(option, callback);
            // $(#pages).Pagination(total);
            getpage(len);
        },
    });
}*/

