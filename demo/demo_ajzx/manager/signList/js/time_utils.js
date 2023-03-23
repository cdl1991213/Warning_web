// 输入时间对象，获取时间如：20201231235959222
function getTimeSee(timeEn){

    var timeD = timeEn;

    var fullYear = timeD.getFullYear();
    var month = timeD.getMonth()+1;
    var monthString = "";
    if(month<10){
        monthString = "0"+month;
    }else{
        monthString = ""+month;
    }
    var date = timeD.getDate();
    var dateString = "";
    if(date<10){
        dateString = "0"+date;
    }else{
        dateString = ""+date;
    }
    var hour = timeD.getHours();
    var hourString = "";
    if(hour<10){
        hourString = "0"+hour;
    }else{
        hourString = ""+hour;
    }
    var muniter = timeD.getMinutes();
    var muniterString = "";
    if(muniter<10){
        muniterString = "0" + muniter;
    }else{
        muniterString = "" + muniter;
    }
    var second = timeD.getSeconds();
    var secondString = "";
    if(second<10){
        secondString = "0"+second;
    }else{
        secondString = ""+second;
    }
    var milliSecond = timeD.getMilliseconds();
    var milliSecondString = "";
    if(milliSecond<10){
        milliSecondString = "00"+milliSecond;
    }else if(milliSecond<100){
        milliSecondString = "0"+milliSecond;
    }else{
        milliSecondString = ""+milliSecond;
    }
    var timeSee = fullYear+monthString+dateString+hourString+muniterString+secondString+milliSecondString;

    return Number(timeSee);

}

function getTimeString(timeNumber,pa1,pa2,pa3,pa4,pa5,pa6,pa7){

    var timeCut = 0;
    var year = Math.floor(timeNumber/10000000000000);
    var yl = (""+year).length;
    var timeString = ""+timeNumber;
    var year = timeString.substring(0,yl);
    var month = timeString.substring(yl,yl+2);
    var date = timeString.substring(yl+2,yl+4);
    var hour = timeString.substring(yl+4,yl+6);
    var muniter = timeString.substring(yl+6,yl+8);
    var second = timeString.substring(yl+8,yl+10);
    var milliSecond = timeString.substring(yl+10,(timeNumber+"").length);

    return ""+year+pa1+month+pa2+date+pa3+pa4+hour+pa5+muniter+pa6+second+pa7+milliSecond;
}

//获得北京时间 对象
function getBeijingTimeEnNow() {

    //获得当前运行环境时间
    var d = new Date(), currentDate = d, tmpHours = d.getHours();
    //算得时区
    var time_zone = -d.getTimezoneOffset() / 60;

    currentDate.setHours(Number(tmpHours)+8-time_zone);

    //少于0的是西区 西区应该用时区绝对值加京八区 重新设置时间（西区时间比东区时间早 所以加时区间隔）
    if (time_zone < 0) {
        time_zone = Math.abs(time_zone) + 8; currentDate.setHours(tmpHours + time_zone);
    } else {
        //大于0的是东区  东区时间直接跟京八区相减
        time_zone -= 8; currentDate.setHours(tmpHours - time_zone);
    }
    return currentDate;

}