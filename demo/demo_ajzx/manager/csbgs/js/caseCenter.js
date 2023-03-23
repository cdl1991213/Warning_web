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

$(function(){
    //搜索
    $(".tabletext").click(function(){
        $(this).next('.tablelist').slideToggle(300);
    });
    $(".tablelist li").click(function(){
        let casetype = $(this).text();
        $("#search_casetype").attr('value',casetype);
        $(".tablelist").slideUp(300);
    });
    $("#searchinput").bind('keypress',function(event){
        if(event.keyCode == "13"){
            $("#searchbtn").click();
        }
    });
    $("#searchbtn").click(function(){
        $("#searchiinput").val(htmlspecialchars($("#searchinput").val()));
        var postdata = $("#search_ajax").serialize();
        alert("搜索内容"+postdata);//搜索接口暂时没有
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
                    str+="<div class=\"caselist_line\">";
                    str+="<p class=\"caseid\">i</p>";
                    str+="<p class=\"casenum\"><a href=\"#\" target=\"_blank\">item._cause_no</a></p>";
                    str+="<p class=\"casename\"><a href=\"#\" target=\_blank\">item._cause_title</a></p>";
                    str+="<p class=\"tablenum\"><a href=\"#\" target=\"_blank\">item._table_number</a></p>";
                    str+="<p class=\"detailtype\">网警</p>";
                    str+="<p class=\"oparate\"><a href=\"#\" target=\"_blank\" class=\"editcase\"></a><a href=\"#\" target=\"_blank\" class=\"signcase\"></a></p>";
                    str+="<div class=\"clear\"></div>";
                    str+="</div>";
                });
                // $("#caseList").append(str);causeNo='A3301065200002021045005'
                return totalNum;
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
            },
        });
    }
    forbidWrite($("#tableCheck"));
    forbidWrite($("#tableReport"));
    //审批表编辑
    $("#checkedit").click(function(){
        isSavetable = 0;
        ischeckEditdown = 1;
        let tableID = $("#tableCheck");
        allowWirte(tableID);
    });
    //编辑表格
    $("#reportedit").click(function(){
        isSavetable = 0;
        isreportEditdown = 1;
        let tableID = $("#tableReport");
        allowWirte(tableID);
    });

    //编辑表格
    $("#btn_delete_line").click(function(){
        deleteLastLine();
    });

    //编辑表格
    $("#btn_add_line").click(function(){
        addLine();
    });

    //审批表签章
    $("#checksign").click(function(){
        isSavetable = 0;
        let shsealID = $("#checksuggestsh").children(".markseal");//审核意见章
        let shsignID = $("#checksuggestsh").children(".markname");//审核意见签名
        let spsealID = $("#checksuggestsp").children(".markseal");//审批意见章
        let spsignID = $("#checksuggestsp").children(".markname");//审批意见签名
        if(ischeckSealdown ==0){//如果没有签章过
            sealltRandomseal(shsealID,45,10,150,20);
            sealltRandomseal(shsignID,75,40,165,35);
            //sealltRandomseal(spsealID,45,10,440,320);
            //sealltRandomseal(spsignID,75,40,450,325);
            $(this).find(".markseal").show(300);
            $(this).find(".markname").show(300);
            $("#checkmarktimesh").show(300);
            ischeckSealdown=1;
        }else{
            $(this).find(".markseal").hide(300);
            $(this).find(".markname").hide(300);
            $("#checkmarktimesh").hide(300);
        }
    });
    //措施报告书签章
    $("#reportsign").click(function(){
        isSavetable = 0;
        let unitsealID = $("#reportsuggestunit").children(".markseal");//提请单位意见章
        let unitsignID = $("#reportsuggestunit").children(".markname");//提请单位意见签名
        let netsealID = $("#reportsuggestnetwork").children(".markseal");//网安部门意见章
        let netsignID = $("#reportsuggestnetwork").children(".markname");//网安部门意见签名
        if(isreportSealdown ==0){//如果没有签章过
            sealltRandomseal(unitsealID,100,80,150,70);
            sealltRandomseal(unitsignID,160,90,170,70);
            //sealltRandomseal(netsealID,100,80,440,360);
            //sealltRandomseal(netsignID,160,90,450,360);
            $(this).find(".markseal").show(300);
            $(this).find(".markname").show(300);
            $("#reportsuggesttimeunit").show(300);
            isreportSealdown=1;
        }else{
            $(this).find(".markseal").hide(300);
            $(this).find(".markname").hide(300);
            $("#reportsuggesttimeunit").hide(300);
        }
    });
    //审批表下载
    $("#checkdown").click(function(){
        var tableID = "#checkdown";
        if(isSavetable==1){
            convert(tableID,1);
        }
        else{
            alert("请先保存当前操作再下载");
        }
    });
    //措施报告书下载
    $("#reportdown").click(function(){
        var tableID = "#reportdown";
        if(isSavetable==1){
            convert(tableID,0);
        }
        else{
            alert("请先保存当前操作再下载");
        }
    });
    //审批表打印
    $("#checkprint").click(function(){
        if(isSavetable==1){
            Print("#tableCheck");
        }
        else{
            alert("请先保存当前操作再打印");
        }
    });
    //措施报告书打印
    $("#reportprint").click(function(){
        if(isSavetable==1){
            Print("#tableReport");
        }
        else{
            alert("请先保存当前操作再打印");
        }
    });
});