//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}
//js保留几位小数（四舍五入）
getFloat = function(num, n) {
    n = n ? parseInt(n) : 0;
    if(n <= 0) {
        return Math.round(num);
    }
    num = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); //四舍五入
    num = Number(num).toFixed(n); //补足位数
    return num;
};