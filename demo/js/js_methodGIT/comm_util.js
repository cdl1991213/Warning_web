/**
 * Created by wlj on 2016/4/23.
 * 	 * 
	 *    2019-4-18
	 *    By 吴朗极   
	 *    email:wlj@shopleve.com
	 *    phone:18758178881
	 *    开发：杭州筱岚科技有限公司
	 *    所有权：杭州筱岚科技有限公司 
	 * 
	 *    上行参数类：FOR 客户端  OperPARAM
 */

 function void_checkNull(str){
 
    if(str==null || str=="null" || str.length==0 || str==undefined || str=="undefined"){
       return 1;
    }else{
       return 0;
    }
 
 }

function void_getContent(str){

     var obj = document.getElementById(str);
     if(obj) {
         if (void_checkNull($("#" + str).val()) == 1){
             return null;
         } else {
             return $("#" + str).val();
         }
     }else{
         return null;
     }
}
 
 function void_clickClear(divName){
 
    $("#"+divName).val("");
 
 }

 //获取32随机数
function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid.replace(/-/g,"");
}

//获取url方法
function getUrl(name) {
    // var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    // var r = window.location.search.substr(1).match(reg);
    // if (r != null)
    //     return (r[2]);
    // return null;

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

//判断是否为空 为空时为 ""
function void_text_giv(text){
    if(text==null || text==undefined || text=="undefined" || text.length==0){
        text = "";
    }
    return text;
}

//判断是否为空 为空时有默认值
function void_text_giv_a(text,str){
    if(text==null || text==undefined || text=="undefined" || text.length==0){
        text = str;
    }
    return text;
}

//判断是否是 数字，不是的情况下，默认值为0
function void_number_giv(text){

    if(!isNaN(text)){
        return Number(text);
    }else{
        return 0;
    }
}

//判断是否是数字，不是的情况下，有默认值
function void_number_giv_a(text,numX){
     if(void_checkNull(text)==1){
         return numX;
     }else {
         if (!isNaN(text)) {
             return Number(text);
         } else {
             return numX;
         }
     }
}

//定义为时间STR
function void_time_giv(time){
     var year = Math.floor(time/10000000000000);
     var month = Math.floor(time/100000000000) - Math.floor(time/10000000000000)*100;
     var day =  Math.floor(time/1000000000) - Math.floor(time/100000000000)*100;
     var hour =  Math.floor(time/10000000) - Math.floor(time/1000000000)*100;
     var minute = Math.floor(time/100000) - Math.floor(time/10000000)*100;
     var second = Math.floor(time/1000) - Math.floor(time/100000)*100;
     return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
}

// 图片的不同像素的URL
function void_url_giv(urlH,len){

    var urlReturn = "";

     if(void_checkNull(urlH)==0) {
         var urlHs = urlH.split(".");
         var sumUrl = urlHs.length;
         for (var i = 0; i < sumUrl - 1; i++) {

             if (i == sumUrl - 2) {
                 urlReturn += urlHs[i] + "_" + len + "." + urlHs[sumUrl - 1];
             } else {
                 urlReturn += urlHs[i] + ".";
             }
         }
     }

     return urlReturn;

}

// 删除 DIV
function void_drop_div(divName){

    var box = document.getElementById(divName);
    if(box) {
        box.parentNode.removeChild(box);
    }

}


function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

// 获得8位随机值
function void_guid() {

    return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
}

// 获得随机值 带位数
function void_guids(su) {

    var gd = "";
    for(var i=0;i<su;i++){
        gd += S4();
    }
    return gd;
}

// 获得数组中的位置  -1是没有
function void_getSite(listNameX,nameX){

     var siteX = -1;
     var sumListNameX = listNameX.length;
     for(var i=0;i<sumListNameX;i++){
         if(nameX==listNameX[i]){
             siteX = i;
         }
     }
     return siteX;
}

//文本域自适应
function autoTextAreaHeight(divName,lineMax,heightItem) {

     var taConS = $("#"+divName).val().split("\n");
     var sumN = taConS.length;
     var sumLine = 2;
     var con = "";
     for(var i=0;i<sumN;i++){
        var s = Math.floor(getLength(taConS[i])/lineMax);
        for(var j=1;j<s;j++){
            sumLine++;
        }
        sumLine++;
     }
     if(sumLine>10){
         sumLine = 10;
     }
    $("#"+divName).css("height",(heightItem*sumLine)+ "rem");
}

// 获得长度
function getLength(str){
    var l = str.length;
    var blen = 0;
    for(var i=0; i<l; i++) {
        if ((str.charCodeAt(i) & 0xff00) != 0) {
            blen +=1.5;
        }
        blen +=1;
    }
    return blen;
}




 var curCV1 = "";
 var curCV2 = "";
 var curCV3 = "";

var timeClick = 0;
var timeClickEvent = 0;
var timeOutEvent=0;//定时器
var isA = 0;
var isR = 0;
//开始按
function gtouchstart(voidNameX,curCV1X,curCV2X,curCV3X){
    curCV1 = curCV1X;
    curCV2 = curCV2X;
    curCV3 = curCV3X;
    timeOutEvent = setTimeout("doFunction(\""+voidNameX+"\",0)",500);
    //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
    return false;
};

//手释放
function gtouchend(voidNameX1,voidNameX2,curCV1X,curCV2X,curCV3X){

    curCV1 = "";
    curCV2 = "";
    curCV3 = "";
    curCV1 = curCV1X;
    curCV2 = curCV2X;
    curCV3 = curCV3X;
    clearTimeout(timeOutEvent);//清除定时器
    if(timeOutEvent!=0){
        //这里写要执行的内容（尤如onclick事件）
        var timeClickX = new Date().getTime();
        if((timeClickX-timeClick)>200){
            timeClick = timeClickX;
            if(isA==0 && isR == 0) {
                window.clearTimeout(timeClickEvent);
                timeClickEvent = setTimeout("doFunction(\"" + voidNameX1 + "\",1)", 250);
            }
        }else{
            timeClick = 0;
            isR = 1;
            clearTimeout(timeClickEvent);
            if(isA==0) {
                doFunction(voidNameX2, 1);
            }
        }
        timeOutEvent = 0;
    }
    return false;
};
// 移动
function gtouchmove(){
    if(isA==0) {
        clearTimeout(timeOutEvent);//清除定时器
        timeOutEvent = 0;
    }
};

//执行方法
function doFunction(voidNameY,sL){

    console.log("执行方法："+voidNameY);

    isA = 1;
    timeOutEvent = 0;
    if(sL == 0){
        if(void_checkNull(voidNameY)==0) {
            console.log("执行长按方法");
            eval(voidNameY);
        }
    }else{
        if(isR == 0) {
            console.log("执行单击方法");
            isR = 0;
            timeClickEvent = 0;
            if (void_checkNull(voidNameY) == 0) {
                eval(voidNameY);
            }
        }else{
            console.log("执行双击方法");
            if (void_checkNull(voidNameY) == 0) {
                eval(voidNameY);
            }
            isR = 0;
        }
    }
    isA = 0;
}


/**
 * 加密（需要先加载lib/aes/aes.min.js文件）
 * @param word
 * @returns {*}
 */
function encrypt(word,key){
    var key = CryptoJS.enc.Utf8.parse(key);
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
}

/**
 * 解密
 * @param word
 * @returns {*}
 */
function decrypt(word,key){
    var key = CryptoJS.enc.Utf8.parse(key);
    var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

function void_jump_page(page){

    var urlTo = page + "?com="+com+"&appId="+appId;

    let ifrmX;
    let ifrmY;
    var ap = 0;
    if( parent.apCur == 1 ) {
        ap = 0;
        ifrmX= window.parent.document.getElementById("area_page_y");
        ifrmY = window.parent.document.getElementById("area_page_x");
    }else{
        ap= 1;
        ifrmX= window.parent.document.getElementById("area_page_x");
        ifrmY = window.parent.document.getElementById("area_page_y");
    }
    ifrmY.setAttribute("src",urlTo,0);

    ifrmY.onload = function () {
        ifrmY.style.left = "19.2rem";
        ifrmY.style.display="block";
        var left1 = 0;
        var left2 = 192;
        var pv = setInterval(function (){
            left1 -= 16;
            left2 -= 16;
            ifrmX.style.left = (left1/10)+"rem";
            ifrmY.style.left = (left2/10)+"rem";
            if(left2==0){
                clearInterval(pv);
                ifrmX.style.left = "19.2rem";
                ifrmY.style.left = "0rem";
                parent.apCur = ap;
            }
        },10)
    };

}

function void_open_page(siteX,pageX){

        var urlX = pageX + "?com="+com+"&appId="+appId;
        let ifrm = window.parent.document.getElementById("area_page_x"+siteX);
        ifrm.setAttribute("src",urlX,0);
        ifrm.onload = function () {
            ifrm.style.display = "block";
            var ifrmBtn = window.parent.document.getElementById("btn_page_x" + siteX);
            ifrmBtn.style.display = "block";
        }
}

function ajaxWaitingStart(){
    window.parent.showPageX(99);
}

function ajaxWaitingEnd(){
    window.parent.dismissPageX(99);
}

function makeOperParam(){
    operParam = {
        "userId": $.cookie("userId"+com),
        "os": "",
        "browser": "",
        "imei": "",
        "mac": "",
        "gpsX": "",
        "gpsY": ""
    }
}

var aseKey = function(){
    var key = "";
    if(void_checkNull($.cookie("userId"+com))==1 || void_checkNull($.cookie("sessionId"+com))==1 || void_checkNull($.cookie("key"+com))==1){
        key = com.substring(0,16);
    }else{
        key = $.cookie("key"+com);
    }
    return key;
}
