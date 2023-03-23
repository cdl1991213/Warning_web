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

    MonthDataSelect();
})

var content_gfsq = "";
function showList_gfsq(){
    console.log("showList_gfsq  success");
    for(let i = 1; i <= 6; i++){
        content_gfsq = "";
        content_gfsq += "<div id=\"content_gfsq_"+i+"\"  style=\"float: left;margin-top:0.1rem;width: 19.2rem;height:1rem; position: relative;\">\n" +
            "                        <div style=\"float: left;left:0;width: 3.9rem;height:1rem;background-color:rgba(46,154,223,0.5);line-height: 1rem;font-size:0.457rem;text-align: center;color: #A0BDFF; position: absolute;\">本月</div>\n" +
            "                        <div style=\"float: left;left:4rem;width: 5rem;height:1rem;background-color:rgba(46,154,223,0.5);line-height: 1rem;font-size:0.457rem;text-align: center;color: #A0BDFF; position: absolute;\">所在街道</div>\n" +
            "                        <div style=\"float: left;left:9.1rem;width: 5rem;height:1rem;background-color:rgba(46,154,223,0.5);line-height:1rem;font-size:0.457rem;text-align: center;color: #A0BDFF; position: absolute;\">案件数量</div>\n" +
            "                        <div style=\"float: left;left:14.2rem;width: 5rem;height:1rem;background-color:rgba(46,154,223,0.5);line-height: 1rem;font-size:0.457rem;text-align: center;color: #A0BDFF; position: absolute;\">案损价值总和</div>\n" +
            "                    </div>"
        $("#content_gfsq_list").append(content_gfsq);
    }
}

//右1
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
                    color: '#969696',
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
                    color: '#969696',
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
                color: '#969696',
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
                        color: '#969696',
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
                        color: '#969696',
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
                        color: '#969696',
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
                        color: '#969696',
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
                        color: '#969696',
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
                        color: '#969696',
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



