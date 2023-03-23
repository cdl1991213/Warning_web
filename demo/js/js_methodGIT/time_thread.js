var numberC = 500;
function mainFunc(){
    numberC = numberC - 1;
    postMessage(numberC);
}
var timeShowTh = setInterval(mainFunc,20);