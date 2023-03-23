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

    MonthDataSelect();
})




//左1
var page_right_line_faqs = document.getElementById("page_right_line_faqs")
var ctx_line_faqs = echarts.init(page_right_line_faqs);
var option_line_faqs = {
    dataset:{
        source: {
            'label':["3/30", "3/31", "4/1", "4/2", "4/3"],
            'thisMonth':[100, 290, 210, 200, 300],
            'nextMonth':[300, 350, 270, 280, 200],
            'thisMonthMax':[300, 300, 300, 300, 300],
            'lastMonthMax':[350, 350, 350, 350, 350]
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
    tooltip:{
        trigger:'axis',
        axisPointer:{
            type:'line',
            animation:true,
            animationEasing:'backIn',
            animationDuration:1000
        },
    },
    //表右上方的工具栏
    // toolbox:{},
    //表右方的缩略数值条
    // visualMap:{},
    //表下方的缩略拉条
    // dataZoom:{},
    yAxis:[
        {
            show:true,
            type:'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['rgba(150,150,150,0.2)']
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#969696FF',
                }
            },
            max:400,
            min:0,
        },

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
                color: '#969696FF',
            }
        },
    },
    series:[
        {
            type:'line',
            encode:{
                x:'label',
                y:'nextMonth'
            },
            name:'上月',
            itemStyle:{
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#2E9ADF'},
                        {offset: 0.7, color: '#4d87dc'},
                        {offset: 1, color: '#46D5E8'}
                    ]
                ),
            },
            lineStyle:{
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#2E9ADF'},
                        {offset: 0.7, color: '#4d87dc'},
                        {offset: 1, color: '#46D5E8'}
                    ]
                ),
            },
            areaStyle:{
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#2E9ADF'},
                        {offset: 0.5, color: '#4d87dc'},
                        {offset: 0.8, color: 'rgba(70,213,232,0)'}
                    ]
                ),
            },
            smooth:true,
            emphasis: {
                focus: 'series'
            },
        },
        {
            type:'line',
            encode:{
                x:'label',
                y:'thisMonth'
            },
            name:'本月',
            //包括图例和点
            itemStyle:{
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#A7DF2E'},
                        {offset: 0.7, color: '#46E88B'},
                        {offset: 1, color: '#09ff00'}
                    ]
                ),
            },
            lineStyle:{
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#A7DF2E'},
                        {offset: 0.7, color: '#46E88B'},
                        {offset: 1, color: 'rgba(9,255,0,0)'}
                    ]
                ),
            },
            areaStyle:{
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#07AC55'},
                        {offset: 0.5, color: '#46E88B'},
                        {offset: 0.8, color: 'rgba(9,255,0,0)'}
                    ]
                ),
            },
            smooth:true,
            cursor:'pointer',
            connectNulls:true,
            emphasis: {
                focus: 'series'
            },
            // stack:'总量2'
        },
        {
            type:'line',
            encode:{
                x:'label',
                y:'thisMonthMax'
            },
            name:'本月最大',
            symbolSize: 0, // symbol的大小设置为0
            showSymbol: false, // 不显示symbol
            lineStyle: {
                width: 0, // 线宽是0
                color: 'rgba(0, 0, 0, 0)' // 线的颜色是透明的
            },
        },
        {
            type:'line',
            encode:{
                x:'label',
                y:'lastMonthMax'
            },
            name:'上月最大',
            symbolSize: 0, // symbol的大小设置为0
            showSymbol: false, // 不显示symbol
            lineStyle: {
                width: 0, // 线宽是0
                color: 'rgba(0, 0, 0, 0)' // 线的颜色是透明的
            },
        },

    ],

}
ctx_line_faqs.setOption(option_line_faqs);

function MonthDataSelect(){
    ctx_line_faqs.on('click', function (params) {
        console.log(params);
        ctx_line_faqs.clear();
        ctx_line_faqs.setOption(option_line_faqs);
    });
    $('#thisMonth').click(function(){
        // option_bar_afs.series.unshift();
        // option_bar_afs.series.pop();
        option_line_faqs.series =[
            {
                type:'line',
                encode:{
                    x:'label',
                    y:'nextMonth'
                },
                name:'thisMonth',
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.7, color: '#4d87dc'},
                            {offset: 1, color: '#46D5E8'}
                        ]
                    ),
                },
                lineStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.7, color: '#4d87dc'},
                            {offset: 1, color: '#46D5E8'}
                        ]
                    ),
                },
                areaStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.5, color: '#4d87dc'},
                            {offset: 0.8, color: 'rgba(70,213,232,0)'}
                        ]
                    ),
                },
                smooth:true,
                emphasis: {
                    focus: 'series'
                },
            },
            {
                type:'line',
                encode:{
                    x:'label',
                    y:'thisMonth'
                },
                name:'thisMonth',
                //包括图例和点
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#A7DF2E'},
                            {offset: 0.7, color: '#46E88B'},
                            {offset: 1, color: '#09ff00'}
                        ]
                    ),
                },
                lineStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#A7DF2E'},
                            {offset: 0.7, color: '#46E88B'},
                            {offset: 1, color: 'rgba(9,255,0,0)'}
                        ]
                    ),
                },
                areaStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#07AC55'},
                            {offset: 0.5, color: '#46E88B'},
                            {offset: 0.8, color: 'rgba(9,255,0,0)'}
                        ]
                    ),
                },
                smooth:true,
                cursor:'pointer',
                connectNulls:true,
                emphasis: {
                    focus: 'series'
                },
                // stack:'总量2'
            }
        ];

        option_line_faqs.series =option_line_faqs.series.slice(1,2);

        console.log(option_line_faqs.series);
        ctx_line_faqs.clear();
        ctx_line_faqs.setOption(option_line_faqs);
    });
    $('#lastMonth').click(function(){
        // option_bar_afs.series.unshift();
        // option_bar_afs.series.pop();
        option_line_faqs.series =[
            {
                type:'line',
                encode:{
                    x:'label',
                    y:'nextMonth'
                },
                name:'thisMonth',
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.7, color: '#4d87dc'},
                            {offset: 1, color: '#46D5E8'}
                        ]
                    ),
                },
                lineStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.7, color: '#4d87dc'},
                            {offset: 1, color: '#46D5E8'}
                        ]
                    ),
                },
                areaStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.5, color: '#4d87dc'},
                            {offset: 0.8, color: 'rgba(70,213,232,0)'}
                        ]
                    ),
                },
                smooth:true,
                emphasis: {
                    focus: 'series'
                },
            },
            {
                type:'line',
                encode:{
                    x:'label',
                    y:'thisMonth'
                },
                name:'thisMonth',
                //包括图例和点
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#A7DF2E'},
                            {offset: 0.7, color: '#46E88B'},
                            {offset: 1, color: '#09ff00'}
                        ]
                    ),
                },
                lineStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#A7DF2E'},
                            {offset: 0.7, color: '#46E88B'},
                            {offset: 1, color: 'rgba(9,255,0,0)'}
                        ]
                    ),
                },
                areaStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#07AC55'},
                            {offset: 0.5, color: '#46E88B'},
                            {offset: 0.8, color: 'rgba(9,255,0,0)'}
                        ]
                    ),
                },
                smooth:true,
                cursor:'pointer',
                connectNulls:true,
                emphasis: {
                    focus: 'series'
                },
                // stack:'总量2'
            }
        ];

        option_line_faqs.series =option_line_faqs.series.slice(0,1);

        console.log(option_line_faqs.series);
        ctx_line_faqs.clear();
        ctx_line_faqs.setOption(option_line_faqs);
    });
    $('#shuliang').click(function(){
        // option_bar_afs.series.unshift();
        // option_bar_afs.series.pop();
        option_line_faqs.series =[
            {
                type:'line',
                encode:{
                    x:'label',
                    y:'nextMonth'
                },
                name:'thisMonth',
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.7, color: '#4d87dc'},
                            {offset: 1, color: '#46D5E8'}
                        ]
                    ),
                },
                lineStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.7, color: '#4d87dc'},
                            {offset: 1, color: '#46D5E8'}
                        ]
                    ),
                },
                areaStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2E9ADF'},
                            {offset: 0.5, color: '#4d87dc'},
                            {offset: 0.8, color: 'rgba(70,213,232,0)'}
                        ]
                    ),
                },
                smooth:true,
                emphasis: {
                    focus: 'series'
                },
            },
            {
                type:'line',
                encode:{
                    x:'label',
                    y:'thisMonth'
                },
                name:'thisMonth',
                //包括图例和点
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#A7DF2E'},
                            {offset: 0.7, color: '#46E88B'},
                            {offset: 1, color: '#09ff00'}
                        ]
                    ),
                },
                lineStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#A7DF2E'},
                            {offset: 0.7, color: '#46E88B'},
                            {offset: 1, color: 'rgba(9,255,0,0)'}
                        ]
                    ),
                },
                areaStyle:{
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#07AC55'},
                            {offset: 0.5, color: '#46E88B'},
                            {offset: 0.8, color: 'rgba(9,255,0,0)'}
                        ]
                    ),
                },
                smooth:true,
                cursor:'pointer',
                connectNulls:true,
                emphasis: {
                    focus: 'series'
                },
                // stack:'总量2'
            }
        ];

        console.log(option_line_faqs.series);
        ctx_line_faqs.clear();
        ctx_line_faqs.setOption(option_line_faqs);
    });
}

//左图2
var page_right_bar_ajlx = document.getElementById("page_right_bar_ajlx")
var ctx_bar_ajlx = echarts.init(page_right_bar_ajlx);
var option_bar_ajlx ={
    tooltips:{},
    grid:{
        // show:true,
        left:'center',
        top:'0%',
        width:'100%',
        height:'100%',
        containLabel:true,
        // borderColor:"rgba(150,150,150,0.2)",

    },
    series: [
        {
            color:['#4E4FBC','#C9655D','#9EC6D0','#C2AE4C'],
            name:'案件类型',
            type:'pie',
            radius:['40%','75%'],
            // roseType: 'radius',
            clockwise:false,
            cursor:'pointer',
            width:'80%',
            height:'80%',
            left:'center',
            top:'middle',
            emphasis:{
                scale:true,
                focus:'self',
                label:{
                    position:'end',
                    show:true,
                    formatter: '{a}:{b}\n案件比例: {d}%',
                    color:'#ffffff',
                    fontWeight:'start',
                    fontSize:15,
                    lineHeight:25,
                    backgroundColor:'rgba(46,154,223,0.5)',
                    borderWidth:1,
                    borderColor:'#2E9ADF',
                    borderRadius:5,
                    width:120,
                    height:50,
                    align:'center',
                    verticalAlign:'middle',
                    overflow:'breakAll'
                }
            },
            labelLine:{
                show:true,
                length:5,
                length2:100,
                lineStyle:{
                    width:3,
                }
            },
            data:[
                {
                    value:70,name:'杀猪盘'
                },
                {
                    value:30,name:'虚假征信类'
                },
                {
                    value:50,name:'冒充公检法'
                },
                {
                    value:50,name:'招聘兼职'
                }
            ],
            label:{
                position: 'outer',
                color:'#ffffff',
                fontWeight: 'normal',
                fontStyle:'normal',
                fontSize: 12,
                align:'right',
                alignTo:'none',


            }
        },
    ]
}
ctx_bar_ajlx.setOption(option_bar_ajlx);







