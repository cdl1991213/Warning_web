

//随着屏幕变化而变化REM
$(window).resize(function(){
        rem=$(window).width()/19.2;
        $('html').css('font-size',rem+"px");
        height = $(window).height()/rem;
        $("html").css("height",height+"rem");
        width = $(window).width()/rem;
        $("html").css("width",width+"rem");




});

// 文件加载完就新型计算REM
$(document).ready(function(){
        rem=$(window).width()/19.2;
        $('html').css('font-size',rem+"px");
        height = $(window).height()/rem;
        $("html").css("height",height+"rem");
        width = $(window).width()/rem;
        $("html").css("width",width+"rem");

});

// 显示动态的时间
function run(){
        var time = new Date();//获取系统当前时间
        var year = time.getFullYear();
        var month = time.getMonth()+1;
        var date= time.getDate();//系统时间月份中的日
        var day = time.getDay();//系统时间中的星期值
        var weeks = ["周日","周一","周二","周三","周四","周五","周六"];
        var week = weeks[day];//显示为星期几
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
       /* if(month<10){
        month = "0"+month; 
        }*/
        /*if(date<10){
        date = "0"+date; 
        }*/
        if(hour<10){
        hour = "0"+hour; 
        }
        if(minutes<10){
        minutes = "0"+minutes; 
        }
        if(seconds<10){
        seconds = "0"+seconds; 
        }
        var newDate = year+"年"+month+"月"+date+"日";
        var newtime = hour+":"+minutes+":"+seconds;
        $(".year").html(newDate);
        $(".week").html(week);
        $(".time").html(newtime);

        setTimeout(function () {
                run();
            }, 1);
}
run()  


function clickDownload(){
    let str=`姓名,年龄,性别,工作\n`;
   /* for(let i = 0 ; i < jsonData.length ; i++ ){
        for(const key in jsonData[i]){
            /!*\t为了不让表格显示其他格式*!/
            str+=`${jsonData[i][key] + '\t'},`;
        }
        str+='\n';
    }*/
    console.log(str)
    /*通过动态创建a标签来实现前端导出功能*/
    const link = document.createElement("a");
    /*href 加上 data:text/txt;charset=utf-8  分别设置点击link 是下载文件， 编码是utf-8 . 这个逗号后面的就是保存在文件中的内容了。*/
    /*encodeURIComponent防止乱码问题*/
    /*'data:text/csv;charset=utf-8,\ufeff'*/
    link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(str);
    /*download 设置下载的文件名*/
    link.download =  '学生信息.xls';
    link.click();
}




    var myData = {
        "data":"",
        "sessionId":"",
        "busParam":"",
        "operParam":""
};