var ischeckSealdown = 0; //是否盖章
var isreportSealdown = 0; //是否盖章
var ischeckEditdown = 0; //是否编辑
var isreportEditdown = 0; //是否编辑
var isSavetable = 1; //是否保存

var totalSum;
var pageSum;
var curPage;
var numbers = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖","拾"];

var isDone = 1;

// function htmlspecialchars(str){
//     str = str.replace(/&/g, '&amp;');
//     str = str.replace(/</g, '&lt;');
//     str = str.replace(/>/g, '&gt;');
//     str = str.replace(/"/g, '&quot;');
//     str = str.replace(/'/g, '&#039;');
//     return str;
// }

$(function(){

    //切换表格类型
    $(".tabletext").click(function(){
        $(this).next('.tablelist').slideToggle(300);
    });
    $(".tablelist li").click(function(){
        let casetype = $(this).text();
        $("#search_casetype").attr('value',casetype);
        $(".tablelist").slideUp(300);
    });

    //搜索
    $("#searchinput").bind('keypress',function(event){
        if(event.keyCode == "13"){
            $("#searchbtn").click();
        }
    });
    $("#searchbtn").click(function(){
        //$("#searchiinput").val(htmlspecialchars($("#searchinput").val()));
        var val = $('#searchinput').val()
        //var postdata = $("#search_ajax").serialize();
        alert("搜索内容"+val);//搜索接口暂时没有
        //alert("55555")
    });

    //文书签章列表
    function gettablelist(){
        isDone = 1;
        $.ajax({
            type:"GET",
            url:"http://177.177.2.221:8080/model/project/getTableNo?param",
            success: function(data){
                totalNum = data.length;
                let opalink = "";
                console.log(data);
                var str="";
                $.each(data,function(i,item){

                });
                // $("#caseList").append(str);causeNo='A3301065200002021045005'
                return totalNum;
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
            },
        });
    }



});



