var numberC = 0;
function mainFunc(){
    numberC = numberC + 1;
    postMessage(numberC);
}
var timeShowTh = setInterval(mainFunc,1000);