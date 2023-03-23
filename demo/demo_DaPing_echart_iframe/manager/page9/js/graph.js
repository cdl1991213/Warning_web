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

})



var page_graph_test = document.getElementById("graph");
var ctx_graph_test = echarts.init(page_graph_test);
//显示loading，将加载的卡顿覆盖掉，showLoading必须和hideLoading配套使用




var data = {
    "name": "省A级类目",
    "children": [
        {
            "name": "市A级类目1",
            "children": [
                {
                    "name": "区A级类目1",
                    "children": [
                        {"name": "Converters", "value": 721},
                        {"name": "DelimitedTextConverter", "value": 4294}
                    ],
                    'lineStyle': {
                        color:'#00ff00',
                        width:1.5,

                    },

                },
                {
                    "name": "区A级类目2",
                    "value": 3322
                }
            ]
        },
        {
            "name": "市B级类目1",
            "children": [
                {"name": "区B级类目1", "value": 8833},
                {"name": "区B级类目2", "value": 1732},
                {"name": "区B级类目3", "value": 3623}
            ],
            'lineStyle': {
                color:'#8a1a8c',
                width:1.5,

            },
        },
        {
            "name": "市C级类目1",
            "children": [
                {"name": "区C级类目1", "value": 4116}
            ],
            'lineStyle': {
                color:'#741426',
                width:1.5,

            },
            'label':{
                color:'#ff00ff',
                fontWeight:'bold',
                backgroundColor:'#000000',
                borderColor:'#f0f000',
                borderWidth:1.5,
                borderType:'solid',
                borderRadius:10,
            }
        },
        {
            "name": "市D级类目1",
            "children": [
                {"name": "区D级类目1", "value": 1616},
                {"name": "区D级类目2", "value": 1027},
                {"name": "区D级类目3", "value": 3891},
                {"name": "区D级类目4", "value": 891},
                {"name": "区D级类目5", "value": 2893},
                {"name": "区D级类目17", "value": 3748},
                {"name": "区D级类目18", "value": 843},
                {
                    "name": "区D级类目19",
                    "children": [
                        {"name": "add", "value": 593},
                        {"name": "and", "value": 330},
                        {"name": "average", "value": 287},
                        {"name": "count", "value": 277},
                        {"name": "distinct", "value": 292},
                        {"name": "div", "value": 595},
                        {"name": "eq", "value": 594},
                        {"name": "fn", "value": 460},
                        {"name": "gt", "value": 603},
                        {"name": "gte", "value": 625},
                        {"name": "iff", "value": 748},
                        {"name": "isa", "value": 461},
                        {"name": "lt", "value": 597},
                        {"name": "lte", "value": 619},
                        {"name": "max", "value": 283},
                        {"name": "min", "value": 283},
                        {"name": "mod", "value": 591},
                        {"name": "mul", "value": 603},
                        {"name": "neq", "value": 599},
                        {"name": "not", "value": 386},
                        {"name": "or", "value": 323},
                        {"name": "orderby", "value": 307},
                        {"name": "range", "value": 772},
                        {"name": "select", "value": 296},
                        {"name": "stddev", "value": 363},
                        {"name": "sub", "value": 600},
                        {"name": "sum", "value": 280},
                        {"name": "update", "value": 307},
                        {"name": "variance", "value": 335},
                        {"name": "where", "value": 299},
                        {"name": "xor", "value": 354},
                        {"name": "_", "value": 264}
                    ]
                },
                {"name": "区D级类目20", "value": 843},
                {"name": "区D级类目21", "value": 1554},
                {"name": "区D级类目22", "value": 970},
                {"name": "区D级类目23", "value": 13896},
                {"name": "区D级类目24", "value": 1594},
                {"name": "区D级类目25", "value": 4130},
                {"name": "区D级类目26", "value": 791},
                {"name": "区D级类目27", "value": 1124},
                {"name": "区D级类目28", "value": 1876},
                {"name": "区D级类目29", "value": 1101}
            ]
        },
        {
            "name": "市E级类目1",
            "children": [
                {"name": "区E级类目1", "value": 2105},
                {"name": "区E级类目2", "value": 1316},
                {
                    "name": "区E级类目3",
                    "value": 3151,

                },
                {"name": "区E级类目4", "value": 3770},
                {"name": "区E级类目5", "value": 2435},
                {"name": "区E级类目6", "value": 4839},
                {"name": "区E级类目7", "value": 1756},
                {"name": "区E级类目8", "value": 4268},
                {"name": "区E级类目9", "value": 1821},
                {"name": "区E级类目10", "value": 5833}
            ],
            'lineStyle': {
                color:'#1c6f98',
                width:1.5,
            },
        },

    ]
};

var data2 = {
    "name": "flare",
    "children": [
        {
            "name": "flex",
            "children": [
                {"name": "FlareVis", "value": 4116}
            ]
        },
        {
            "name": "scale",
            "children": [
                {"name": "IScaleMap", "value": 2105},
                {"name": "LinearScale", "value": 1316},
                {"name": "LogScale", "value": 3151},
                {"name": "OrdinalScale", "value": 3770},
                {"name": "QuantileScale", "value": 2435},
                {"name": "QuantitativeScale", "value": 4839},
                {"name": "RootScale", "value": 1756},
                {"name": "Scale", "value": 4268},
                {"name": "ScaleType", "value": 1821},
                {"name": "TimeScale", "value": 5833}
            ]
        },
        {
            "name": "display",
            "children": [
                {"name": "DirtySprite", "value": 8833}
            ]
        }
    ]
};




ctx_graph_test.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: 'tree1',
            icon: 'rectangle'
        },
            {
                name: 'tree2',
                icon: 'rectangle'
            }],
        borderColor: '#c23531'
    },
    series:[
        {
            type: 'tree',

            name: 'tree1',

            data: [data],

            top: '5%',
            left: '7%',
            bottom: '2%',
            right: '60%',

            edgeShape:'polyline',

            symbolSize: 7,

            itemStyle:{
                borderColor: '#000000',
                borderWidth: 1,
                borderType: 'solid',

            },

            label: {
                show:'false',
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                borderColor:'#000000',
                borderWidth:2,
                borderType:'solid',
                padding:[10,10],
                lineHeight:0,


            },
            labelLayout: {
                hideOverlap:true
            },

            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            emphasis: {
                focus: 'descendant'
            },

            expandAndCollapse: true,
            animationDelay:2000,
            animationDuration: 2000,
            animationDurationUpdate: 100

        },
        {
            type: 'tree',
            name: 'tree2',
            data: [data2],

            top: '20%',
            left: '60%',
            bottom: '22%',
            right: '18%',

            symbolSize: 7,

            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
            },

            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            expandAndCollapse: true,

            emphasis: {
                focus: 'descendant'
            },

            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
});



