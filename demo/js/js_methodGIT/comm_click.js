// 计算点击次数
var clickSum = 0;
var voidValue = "";
var clickTime = 0;
var clickTimeOut = null;
var timeLenth = 300;

// 点击一次，点击两次，点击三次，点击四次 。。。。
function void_click(clickSumX,voidValueX){

        voidValueX = voidValueX.replace(/~/g,",");
        // console.log(voidValueX);
        voidValueX = voidValueX.replace(/:/g,"'");
        // console.log(voidValueX);

        var clickTimeCur = new Date().getTime();
        if(clickSumX==1){
                // 单次点击执行
                clickSum = 0;
                voidValue = "";
                console.log("直接执行");
                eval(voidValueX);
                //方法
        }else {
                var voidValueXS = voidValueX.split(";");
                if (voidValue == voidValueX) {
                        // console.log(clickTimeCur,clickTime);
                        if ((clickTimeCur - clickTime) < timeLenth) {
                                clickSum += 1;
                                if (clickSum >= clickSumX) {
                                        clearTimeout(clickTimeOut);
                                        clickTimeOut = null;
                                        //最大点击次数
                                        clickSum = 0;
                                        voidValue = "";
                                        clickTime = 0;
                                        console.log("最大点击数执行");
                                        if("null"!=voidValueXS[clickSumX - 1]) {
                                                eval(voidValueXS[clickSumX - 1]);
                                        }
                                } else {
                                        //计数 按照 点击的次数进行安排 执行方法
                                        clickTime = clickTimeCur;
                                        clearTimeout(clickTimeOut);
                                        clickTimeOut = null;
                                        if("null"!=voidValueXS[clickSum - 1]) {
                                                clickTimeOut = setTimeout(function () {
                                                        eval(voidValueXS[clickSum - 1]);
                                                        console.log("计数点击数执行"+clickSum);
                                                        clickTimeOut = null;
                                                        clickSum = 0;
                                                        clickTime = 0;
                                                }, timeLenth)
                                        }
                                }
                        } else {
                                clearTimeout(clickTimeOut);
                                clickTimeOut = null;
                                clickSum = 1;
                                voidValue = voidValueX;
                                clickTime = clickTimeCur;
                                if("null"!=voidValueXS[clickSum - 1]) {
                                        clickTimeOut = setTimeout(function () {
                                                eval(voidValueXS[clickSum - 1]);
                                                console.log("计数点击数执行"+clickSum);
                                                clickTimeOut = null;
                                                clickSum = 0;
                                                clickTime = 0;
                                        }, timeLenth)
                                }
                        }
                } else {
                        clearTimeout(clickTimeOut);
                        clickTimeOut = null;
                        clickSum = 1;
                        voidValue = voidValueX;
                        clickTime = clickTimeCur;
                        if("null"!=voidValueXS[0]) {
                                clickTimeOut = setTimeout(function () {
                                        eval(voidValueXS[0]);
                                        console.log("单击执行"+clickSum);
                                        clickTimeOut = null;
                                        clickSum = 0;
                                        clickTime = 0;
                                }, timeLenth)
                        }
                }
        }
}

