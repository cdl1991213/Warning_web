var rem = 0;
var height = 0;
//随着屏幕变化而变化REM
$(window).resize(function () {

    rem = $(window).width() / 19.2;
    $('html').css('font-size', rem + "px");
    height = $(window).height() / rem;


    $("#all_screen").css("height", height + "rem");


});
$(document).ready(function () {
    rem = $(window).width() / 19.2;
    $('html').css('font-size', rem + "px");
    height = $(window).height() / rem;
    console.log(height);
    console.log(rem);
    $("#all_screen").css("height", height + "rem");
    console.log(document.getElementById("all_screen").style.height);

    showList_gfsq();

    //左图 1

     setInterval('updateDataFpm()',2000);
     MonthDataSelect();
     rotation_once();
     setInterval('rotation_B()',1);
})

var content_gfsq = "";
function showList_gfsq(){
    console.log("showList_gfsq  success");
    for(let i = 1; i <= 7; i++){
        content_gfsq = "";
        content_gfsq += "<div id=\"content_gfsq_"+i+"\"  style=\"float: left;margin-top:0.1rem;width: 15.3rem;height: 1.1rem; position: relative;\">\n" +
            "                        <div style=\"float: left;left:0;width: 3rem;height:1.1rem;background-color:rgba(46,154,223,0.5);line-height: 1.1rem;font-size:0.457rem;text-align: center;color: #A0BDFF; position: absolute;\">本月</div>\n" +
            "                        <div style=\"float: left;left:3.1rem;width: 4rem;height:1.1rem;background-color:rgba(46,154,223,0.5);line-height: 1.1rem;font-size:0.457rem;text-align: center;color: #A0BDFF; position: absolute;\">所在街道</div>\n" +
            "                        <div style=\"float: left;left:7.2rem;width: 4rem;height:1.1rem;background-color:rgba(46,154,223,0.5);line-height: 1.1rem;font-size:0.457rem;text-align: center;color: #A0BDFF; position: absolute;\">案件数量</div>\n" +
            "                        <div style=\"float: left;left:11.3rem;width: 4rem;height:1.1rem;background-color:rgba(46,154,223,0.5);line-height: 1.1rem;font-size:0.457rem;text-align: center;color: #A0BDFF; position: absolute;\">案损价值总和</div>\n" +
            "                    </div>"
        $("#content_gfsq_list").append(content_gfsq);
    }
}


var box = document.getElementById('box');
box.style.top = '2.6rem';
box.style.left = '4.5rem';
var n=0;         //正弦函数的横坐标，理解为时间轴好一点。
//让球转到正确位置
function rotation_once() {
    box.style.top=(2.6-Math.sin(1/180)*2.02)+Math.sin(n/180)*2.02+"rem";  //300是小球的没开始运动的初始位置，n表示时间轴，后边是除数是为了将时间细分，使运动更平滑，80表示半径。
    box.style.left=(4.5-Math.cos(1/180)*2.02)+Math.cos(n/180)*2.02+"rem";  //第一个括号中的内容是为了让小球在开始运动时处于初始位置（300,300）
    n++;
    if(n>135*2*Math.PI){
        return false;
    }  // 0 到 2π 为一个转动周期，如果要半圆，只需将n的取值范围减半，如需反方向转动，调换left和top的值即可。
    // setTimeout('rotation_once()',0.1);
    rotation_once();
}
//开始正向转一圈
function rotation_B() {
    box.style.top=(2.6-Math.sin(1/180)*2.05)+Math.sin(n/180)*2.05+"rem";  //300是小球的没开始运动的初始位置，n表示时间轴，后边是除数是为了将时间细分，使运动更平滑，80表示半径。
    box.style.left=(4.7-Math.cos(1/180)*2.05)+Math.cos(n/180)*2.05+"rem";  //第一个括号中的内容是为了让小球在开始运动时处于初始位置（300,300）
    n++;
    // if(n>315*2*Math.PI){
    //     return false;
    // }
    // 0 到 2π 为一个转动周期，如果要半圆，只需将n的取值范围减半，如需反方向转动，调换left和top的值即可。
    // setTimeout('rotation_B()',1);
    // rotation_once();
}




//左图 2
var page_left_bar_afs = document.getElementById("page_left_bar_afs")
var ctx_bar_afs = echarts.init(page_left_bar_afs);
var option_bar_afs = {
    dataset:{
        source: {
            'label':['三墩','蒋村','古荡','转塘','求是','西溪','翠苑','双浦','北山'],
            'thisMonth':[20,40,60,40,75,10,20,30,35],
            'nextMonth':[35,41,68,66,80,50,45,66,50],
            'decrease':[42.8,2.4,11.8,39.3,6.3,80,55.6,54.5,30.0],
        },
    },
    grid:{
        // show:true,
        top:'10%',
        left:'center',
        bottom:0,
        width:'90%',
        height:'90%',
        containLabel:true,
        // borderColor:"rgba(150,150,150,0.2)",

    },
    // legend:{},
    //表右上方的工具栏
    // toolbox:{},
    //表右方的缩略数值条
    // visualMap:{},
    //表下方的缩略拉条
    // dataZoom:{},
    yAxis:[
        {
            type:'value',
            name:'数量',
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['rgba(150,150,150,0.2)']
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                }
            },
            max:80,
            min:0,
        },
        {
            type:'value',
            name:'下降率',
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['rgba(150,150,150,0.2)']
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                }
            },
            max:100,
            min:0,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    xAxis:{
        type:'category',
        splitLine: {
            show: false,
            lineStyle: {
                color: ['rgba(150,150,150,0.2)']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff',
            }
        }
    },
    tooltip:{
        trigger:'axis',
        axisPointer:{
          type:'shadow',
            shadowStyle:{
                shadowColor: '#2E9ADF',
                shadowBlur: 1
            },
            animation:true,
            animationEasing:'backIn',
            animationDuration:1000
        },
        // triggerOn:'click'
    },
    series:[
        {
            type:'bar',
            encode:{
                x:'label',
                y:'thisMonth'
            },
            name:'上月数据',
            itemStyle:{
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#A7DF2E'},
                        {offset: 0.7, color: '#46E88B'},
                        {offset: 1, color: '#09ff00'}
                    ]
                ),
                borderColor:'#46E88B',
                borderWidth:1,
                borderRadius:[10,10,0,0],


            },
            // tooltip:{
            //     // color:'#ffffff',
            //     // fontWeight:'start',
            //     // fontSize:15,
            //     // lineHeight:25,
            //     // backgroundColor:'rgba(46,154,223,0.5)',
            //     borderWidth:10,
            //     borderColor:'#2E9ADF',
            //     // borderRadius:5,
            // },
        },
        {
            type:'bar',
            encode:{
                x:'label',
                y:'nextMonth'
            },
            name:'本月数据',
            itemStyle:{
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#2E9ADF'},
                        {offset: 0.7, color: '#4d87dc'},
                        {offset: 1, color: '#46D5E8'}
                    ]
                ),
                borderColor:'#2E9ADF',
                borderWidth:1,
                borderRadius:[10,10,0,0],


            }
        },
        {
            type:'line',
            yAxisIndex:1,
            encode:{
                x:'label',
                y:'decrease'
            },
            name:'下降率',
            itemStyle:{
                color: 'red',
                borderColor:'#46E88B',
                borderWidth:1,
                borderRadius:[10,10,0,0],


            },
            // tooltip:{
            //     // color:'#ffffff',
            //     // fontWeight:'start',
            //     // fontSize:15,
            //     // lineHeight:25,
            //     // backgroundColor:'rgba(46,154,223,0.5)',
            //     borderWidth:10,
            //     borderColor:'#2E9ADF',
            //     // borderRadius:5,
            // },
        },


    ]
}
ctx_bar_afs.setOption(option_bar_afs);

function MonthDataSelect(){
    ctx_bar_afs.on('click', function (params) {
        console.log(params);
        ctx_bar_afs.clear();
        ctx_bar_afs.setOption(option_bar_afs);
    });
    $('#thisMonth').click(function(){
        // option_bar_afs.series.unshift();
        // option_bar_afs.series.pop();
        option_bar_afs.series =[
            {
                type:'bar',
                encode:{
                    x:'label',
                    y:'thisMonth'
                },
                name:'上月数据',
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#A7DF2E'},
                            {offset: 0.7, color: '#46E88B'},
                            {offset: 1, color: '#09ff00'}
                        ]
                    ),
                    borderColor:'#46E88B',
                    borderWidth:1,
                    borderRadius:[10,10,0,0],


                },
                // tooltip:{
                //     // color:'#ffffff',
                //     // fontWeight:'start',
                //     // fontSize:15,
                //     // lineHeight:25,
                //     // backgroundColor:'rgba(46,154,223,0.5)',
                //     borderWidth:10,
                //     borderColor:'#2E9ADF',
                //     // borderRadius:5,
                // },
            },
            {
                type:'bar',
                encode:{
                    x:'label',
                    y:'nextMonth'
                },
                name:'本月数据',
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.7, color: '#4d87dc'},
                            {offset: 1, color: '#46D5E8'}
                        ]
                    ),
                    borderColor:'#2E9ADF',
                    borderWidth:1,
                    borderRadius:[10,10,0,0],


                }
            },
            {
                type:'line',
                yAxisIndex:1,
                encode:{
                    x:'label',
                    y:'decrease'
                },
                name:'下降率',
                itemStyle:{
                    color: 'red',
                    borderColor:'#46E88B',
                    borderWidth:1,
                    borderRadius:[10,10,0,0],


                },
                // tooltip:{
                //     // color:'#ffffff',
                //     // fontWeight:'start',
                //     // fontSize:15,
                //     // lineHeight:25,
                //     // backgroundColor:'rgba(46,154,223,0.5)',
                //     borderWidth:10,
                //     borderColor:'#2E9ADF',
                //     // borderRadius:5,
                // },
            },


        ];
        option_bar_afs.series =option_bar_afs.series.slice(0,1);
        option_bar_afs.yAxis = [
            {
                type:'value',
                name:'数量',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['rgba(150,150,150,0.2)']
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    }
                },
                max:80,
                min:0,
            },
            {
                type:'value',
                name:'下降率',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['rgba(150,150,150,0.2)']
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    }
                },
                max:100,
                min:0,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ]
        option_bar_afs.yAxis = option_bar_afs.yAxis.slice(0,1);
        console.log(option_bar_afs.series);
        ctx_bar_afs.clear();
        ctx_bar_afs.setOption(option_bar_afs);
    });
    $('#lastMonth').click(function(){
        // option_bar_afs.series.unshift();
        // option_bar_afs.series.pop();
        option_bar_afs.series =[
            {
                type:'bar',
                encode:{
                    x:'label',
                    y:'thisMonth'
                },
                name:'上月数据',
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#A7DF2E'},
                            {offset: 0.7, color: '#46E88B'},
                            {offset: 1, color: '#09ff00'}
                        ]
                    ),
                    borderColor:'#46E88B',
                    borderWidth:1,
                    borderRadius:[10,10,0,0],


                },
                // tooltip:{
                //     // color:'#ffffff',
                //     // fontWeight:'start',
                //     // fontSize:15,
                //     // lineHeight:25,
                //     // backgroundColor:'rgba(46,154,223,0.5)',
                //     borderWidth:10,
                //     borderColor:'#2E9ADF',
                //     // borderRadius:5,
                // },
            },
            {
                type:'bar',
                encode:{
                    x:'label',
                    y:'nextMonth'
                },
                name:'本月数据',
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.7, color: '#4d87dc'},
                            {offset: 1, color: '#46D5E8'}
                        ]
                    ),
                    borderColor:'#2E9ADF',
                    borderWidth:1,
                    borderRadius:[10,10,0,0],


                }
            },
            {
                type:'line',
                yAxisIndex:1,
                encode:{
                    x:'label',
                    y:'decrease'
                },
                name:'下降率',
                itemStyle:{
                    color: 'red',
                    borderColor:'#46E88B',
                    borderWidth:1,
                    borderRadius:[10,10,0,0],


                },
                // tooltip:{
                //     // color:'#ffffff',
                //     // fontWeight:'start',
                //     // fontSize:15,
                //     // lineHeight:25,
                //     // backgroundColor:'rgba(46,154,223,0.5)',
                //     borderWidth:10,
                //     borderColor:'#2E9ADF',
                //     // borderRadius:5,
                // },
            },


        ];
        option_bar_afs.series =option_bar_afs.series.slice(1,2);
        option_bar_afs.yAxis = [
            {
                type:'value',
                name:'数量',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['rgba(150,150,150,0.2)']
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    }
                },
                max:80,
                min:0,
            },
            {
                type:'value',
                name:'下降率',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['rgba(150,150,150,0.2)']
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    }
                },
                max:100,
                min:0,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ]
        option_bar_afs.yAxis = option_bar_afs.yAxis.slice(0,1);
        console.log(option_bar_afs.series);
        ctx_bar_afs.clear();
        ctx_bar_afs.setOption(option_bar_afs);
    });
    $('#shuliang').click(function(){
        // option_bar_afs.series.unshift();
        // option_bar_afs.series.pop();
        option_bar_afs.series =[
            {
                type:'bar',
                encode:{
                    x:'label',
                    y:'thisMonth'
                },
                name:'上月数据',
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#A7DF2E'},
                            {offset: 0.7, color: '#46E88B'},
                            {offset: 1, color: '#09ff00'}
                        ]
                    ),
                    borderColor:'#46E88B',
                    borderWidth:1,
                    borderRadius:[10,10,0,0],


                },
                // tooltip:{
                //     // color:'#ffffff',
                //     // fontWeight:'start',
                //     // fontSize:15,
                //     // lineHeight:25,
                //     // backgroundColor:'rgba(46,154,223,0.5)',
                //     borderWidth:10,
                //     borderColor:'#2E9ADF',
                //     // borderRadius:5,
                // },
            },
            {
                type:'bar',
                encode:{
                    x:'label',
                    y:'nextMonth'
                },
                name:'本月数据',
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.7, color: '#4d87dc'},
                            {offset: 1, color: '#46D5E8'}
                        ]
                    ),
                    borderColor:'#2E9ADF',
                    borderWidth:1,
                    borderRadius:[10,10,0,0],


                }
            },
            {
                type:'line',
                yAxisIndex:1,
                encode:{
                    x:'label',
                    y:'decrease'
                },
                name:'下降率',
                itemStyle:{
                    color: 'red',
                    borderColor:'#46E88B',
                    borderWidth:1,
                    borderRadius:[10,10,0,0],


                },
                // tooltip:{
                //     // color:'#ffffff',
                //     // fontWeight:'start',
                //     // fontSize:15,
                //     // lineHeight:25,
                //     // backgroundColor:'rgba(46,154,223,0.5)',
                //     borderWidth:10,
                //     borderColor:'#2E9ADF',
                //     // borderRadius:5,
                // },
            },


        ];
        option_bar_afs.yAxis = [
            {
                type:'value',
                name:'数量',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['rgba(150,150,150,0.2)']
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    }
                },
                max:80,
                min:0,
            },
            {
                type:'value',
                name:'下降率',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['rgba(150,150,150,0.2)']
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',
                    }
                },
                max:100,
                min:0,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ]
        console.log(option_bar_afs.series);
        ctx_bar_afs.clear();
        ctx_bar_afs.setOption(option_bar_afs);
    });
}




//左图1   甜甜圈图///这里使用的是chart.js_methodGIT
//获取对象
var canvas_doughnut_fpm = document.getElementById("Chart_doughnut_fpm")
var ctx_doughnut_fpm = canvas_doughnut_fpm.getContext("2d");

//创建数据
var lm = 123150;
var hm = 5000;
var hzl = 506;
var data_fpm_lmv = [99,1];
//计算绿码率
function calLML(){
    lml = (lm*100) / (hm+lm) ;
    data_fpm_lmv[0] = getFloat(lml,2);
    hml = 100-lml;
    data_fpm_lmv[1] =  getFloat(hml,2);
}

var background_Color_fpm = ctx_doughnut_fpm.createLinearGradient(100, 0, 0, 100);
background_Color_fpm.addColorStop(0.1, "#2E9ADF");
background_Color_fpm.addColorStop(0.5, '#46E88B');
var data_doughnut_fpm = {
    labels:['招聘兼职','冒充公检法','虚假征信类',"杀猪盘"],
    datasets:[
        {
            data:data_fpm_lmv,
            backgroundColor:[background_Color_fpm,'rgba(0,0,0,0)'],
            borderColor:'rgba(0,0,0,0)',
            cutout:'88%'
        }
    ]
}
var options_doughnut_fpm = {
    plugins:{
        legend:{
            display:false
        }
    },
    animations:{
        easing:'easeInBounce',
        //旋转
        animateRotate:false,
        //变大
        animateScale:true,
    }
}
//形成图表
var Chart_doughnut_fpm = new Chart(ctx_doughnut_fpm,{
    type:"doughnut",
    data:data_doughnut_fpm,
    options:options_doughnut_fpm
});

//删除原有canvas并创建一个新的
function clearChartjsCanvas(c){

    c.remove();
    var cdom = document.createElement("canvas");
    cdom.setAttribute("id",'Chart_doughnut_fpm');
    cdom.setAttribute("width",'10');
    cdom.style.setProperty("height","10");
    document.getElementById('page_left_line_fpm').appendChild(cdom);

    var canvas_doughnut_fpm = document.getElementById("Chart_doughnut_fpm")
    var ctx_doughnut_fpm = canvas_doughnut_fpm.getContext("2d");

    // 并不能实际达到清楚canvas的效果
    // ctx_doughnut_fpm.clearRect(0,0,c.width,c.height);实际上只是给canvas上了个色
    // c.height=c.height;说是重设高度可以清空画布
}
//更新数据
function updateDataFpm(){
    calLML();
    console.log(data_doughnut_fpm.datasets[0].data+'--------------------');

    lm = randomNum(120000,130000);
    hm = randomNum(500,1400);
    hzl = randomNum(50,800);
    $('#lm').text(lm);
    $('#hm').text(hm);
    $('#hzl').text(hzl);


    clearChartjsCanvas(canvas_doughnut_fpm);

    canvas_doughnut_fpm = document.getElementById("Chart_doughnut_fpm")
    ctx_doughnut_fpm = canvas_doughnut_fpm.getContext("2d");

    Chart_doughnut_fpm = new Chart(ctx_doughnut_fpm,{
        type:"doughnut",
        data:data_doughnut_fpm,
        options:options_doughnut_fpm
    });
    $('#lml').text(data_doughnut_fpm.datasets[0].data[0]+'%');

}








