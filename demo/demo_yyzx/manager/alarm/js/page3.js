
$(document).ready(function(){

    limitAreaList();
    showTime();
    timeSelect();
    distribute();
    showList_time();
    bindPageNavigator();

});


//渲染数据
var myData = {
    "vos":"",
    "sum":0
}
let content = "";
let content_PageNum = "";
//data 数据  count 当前数据页码  column 一页数据条数
function showList(data){
    $(".mouseOver").remove();
    console.log("showList success");
    myData.vos = data.vos;
    myData.sum = data.sum;
    //计算总页码
    let count_ALL = parseInt(myData.sum / postData.sizePage) + 1;
    $(".dijiye").remove();
    //渲染页码
    if(count_ALL <= 5){
        for(let i = 1; i <= count_ALL;i++){
            // //将底部栏右侧的99页、条向右移
            // left_NUM = parseFloat($("#page_right").css("left").substring(3));
            // left_NUM += 0.4;
            // $("#page_right").css("left",left_NUM + "rem");
            // console.log("---------------------");
            // console.log($("#page_right").css("left"));
            //拼接页码
            content_PageNum = "";
            content_PageNum += "<div class=\"bottom_page_yema select_page \" id=\"yema_"+i+"\" onclick=\"selectPageCount("+i+")\">\n"+i+"</div>";
            $("#select_page_num").append(content_PageNum);
        }
    }else if(count_ALL >5){
        for(let i = 1; i <= 3;i++){
            // //将底部栏右侧的99页、条向右移
            // left_NUM = parseFloat($("#page_right").css("left").substring(3));
            // left_NUM += 0.4;
            // $("#page_right").css("left",left_NUM + "rem");
            // console.log("---------------------");
            // console.log($("#page_right").css("left"));
            //拼接页码
            content_PageNum = "";
            content_PageNum += "<div class=\"bottom_page_yema select_page dijiye\" id=\"yema_"+i+"\" onclick=\"selectPageCount("+i+")\">\n"+i+"</div>";
            $("#select_page_num").append(content_PageNum);
        }
        //拼接...
        content_PageNum = "";
        content_PageNum += "<div class=\"bottom_page_yema select_page \" id=\"yema_"+"x"+"\" >\n"+"..."+"</div>";
        $("#select_page_num").append(content_PageNum);
        //拼接末页
        content_PageNum = "";
        content_PageNum += "<div class=\"bottom_page_yema select_page \" onclick=\"selectPageCount(5)\">\n"+"5"+"</div>";
        $("#select_page_num").append(content_PageNum);
    }
    //让当前页亮
    let curPageID = "";
    for (let i = 1;i <= count_ALL;i ++){
        curPageID = "yema_" + i;
        if(i == postData.curPage ){
            document.getElementById(curPageID).style.backgroundColor = "#0D364E";
        }else{
            document.getElementById(curPageID).style.backgroundColor = "rgba(0,0,0,0)";
        }
    }
    //显示共xxx条消息
    console.log(myData.sum);
    $("#bottom_page_column_All").text(myData.sum);
    $("#bottom_page_column").text(postData.sizePage);

    //页面渲染 ＋拼接
    //判断是否是最后一页  ||  第一页且数据不足展示一页
    // for(let i =0; i < (myData.sum - (count_ALL-1)*postData.sizePage)-1 ; i++){
    //
    //     content = "";
    //     //序号
    //     content += " <div class=\"mouseOver\" id=\"page_content_" + i + "\" style=\"float: left;width: 18rem;height: 0.54rem;position:relative;\">\n" +
    //         "                  <div style=\"float: left;left:0;margin-left: 0;width: 0.8rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + (i + 1) + "</div>\n" +
    //         "                  <div style=\"float: left;left:0.8rem;margin-left: 0;width: 2.7rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_text_giv(myData.vos[i]._name) + "</div>\n" +
    //         "                  <div style=\"float: left;left:3.5rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[i]._time_out, 0) + "</div>\n" +
    //         "                  <div style=\"float: left;left:4.75rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[i]._words, 0) + "</div>\n" +
    //         "                  <div style=\"float: left;left:6rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + "高危异常" + "</div>\n" +
    //         "                  <div style=\"float: left;left:7.25rem;margin-left: 0;width: 1.5rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[i]._cheated_Sum, 0) + "</div>\n" +
    //         "                  <div style=\"float: left;left:8.75rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[i]._one_Sum, 0) + "</div>\n" +
    //         "                  <div style=\"float: left;left:10rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[i]._many_Sum, 0) + "</div>\n" +
    //         "                  <div style=\"float: left;left:11.25rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[i]._connect, 0) + "</div>\n" +
    //         "                  <div style=\"float: left;left:12.25rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_text_giv(myData.vos[i]._connect_percentage) + "</div>\n" +
    //         "                  <div style=\"float: left;left:13.5rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[i]._admit, 0) + "</div>\n" +
    //         "                  <div style=\"float: left;left:14.5rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_text_giv(myData.vos[i]._admint_percentage) + "</div>\n" +
    //         "                  <div style=\"float: left;left:15.75rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[i]._zl_sum, 0) + "</div>\n" +
    //         "                  <div style=\"float: left;left:16.75rem;margin-left: 0;width: 1.23rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[i]._shr_sum, 0) + "</div>\n" +
    //         "              </div>";
    //     $("#page_content_ALL").append(content);
    //
    // }
    //拿数据的序号,也就是当前循环的次数
    let num_xuhao = 0;
    //展示的序号
    let xh = 0;
    //页面数据足够展示完整
    if(     (myData.vos.length - (count_ALL - 1)*postData.sizePage) <= postData.sizePage    ){

        for(let i =0; i < myData.vos.length ; i++) {

            //
            // if(void_checkNull(myData.vos[num_xuhao]._name)==1  && isNaN()){
            //
            // }
            // console.log(myData.vos[num_xuhao]._name)
            // myData.vos[num_xuhao].hasOwnProperty('_name')
            if (myData.vos[num_xuhao]._name != undefined){
                content = "";
                //序号
                content += " <div class=\"mouseOver\" id=\"page_content_" + xh + "\" style=\"float: left;width: 18rem;height: 0.54rem;position:relative;\">\n" +
                    "                  <div style=\"float: left;left:0;margin-left: 0;width: 0.8rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + (xh + 1) + "</div>\n" +
                    "                  <div style=\"float: left;left:0.8rem;margin-left: 0;width: 2.7rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_text_giv(myData.vos[num_xuhao]._name) + "</div>\n" +
                    "                  <div style=\"float: left;left:3.5rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._time_out, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:4.75rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._words, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:6rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + "高危异常" + "</div>\n" +
                    "                  <div style=\"float: left;left:7.25rem;margin-left: 0;width: 1.5rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._cheated_Sum, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:8.75rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._one_Sum, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:10rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._many_Sum, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:11.25rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._connect, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:12.25rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_text_giv(myData.vos[num_xuhao]._connect_percentage) + "</div>\n" +
                    "                  <div style=\"float: left;left:13.5rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._admit, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:14.5rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_text_giv(myData.vos[num_xuhao]._admint_percentage) + "</div>\n" +
                    "                  <div style=\"float: left;left:15.75rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._zl_sum, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:16.75rem;margin-left: 0;width: 1.23rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._shr_sum, 0) + "</div>\n" +
                    "              </div>";
                $("#page_content_ALL").append(content);

                xh += 1;
                // }else if(i>0) {
                //     i -= 1;
                //     postData.sizePage -= 1;
                // }
                // }else{

            }

            num_xuhao += 1;

        }

    }else{
        for(let i =0; i < postData.sizePage ; i++) {

            //
            // if(void_checkNull(myData.vos[num_xuhao]._name)==1  && isNaN()){
            //
            // }
            // console.log(myData.vos[num_xuhao]._name)
            // myData.vos[num_xuhao].hasOwnProperty('_name')
            if (myData.vos[num_xuhao]._name != undefined){
                content = "";
                //序号
                content += " <div class=\"mouseOver\" id=\"page_content_" + xh + "\" style=\"float: left;width: 18rem;height: 0.54rem;position:relative;\">\n" +
                    "                  <div style=\"float: left;left:0;margin-left: 0;width: 0.8rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + (xh + 1) + "</div>\n" +
                    "                  <div style=\"float: left;left:0.8rem;margin-left: 0;width: 2.7rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_text_giv(myData.vos[num_xuhao]._name) + "</div>\n" +
                    "                  <div style=\"float: left;left:3.5rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._time_out, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:4.75rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._words, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:6rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + "高危异常" + "</div>\n" +
                    "                  <div style=\"float: left;left:7.25rem;margin-left: 0;width: 1.5rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._cheated_Sum, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:8.75rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._one_Sum, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:10rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._many_Sum, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:11.25rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._connect, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:12.25rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_text_giv(myData.vos[num_xuhao]._connect_percentage) + "</div>\n" +
                    "                  <div style=\"float: left;left:13.5rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._admit, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:14.5rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_text_giv(myData.vos[num_xuhao]._admint_percentage) + "</div>\n" +
                    "                  <div style=\"float: left;left:15.75rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._zl_sum, 0) + "</div>\n" +
                    "                  <div style=\"float: left;left:16.75rem;margin-left: 0;width: 1.23rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">" + void_number_giv_a(myData.vos[num_xuhao]._shr_sum, 0) + "</div>\n" +
                    "              </div>";
                $("#page_content_ALL").append(content);

                xh += 1;
                // }else if(i>0) {
                //     i -= 1;
                //     postData.sizePage -= 1;
                // }
                // }else{

            }

            num_xuhao += 1;

        }
    }




    //渲染合计
    content = "";
    content += "<div id=\"page_content_bottom\">\n" +
        "                <div style=\"float: left;width: 18rem;height: 0.54rem;position:relative;\">\n" +
        "                    <div class=\"page_content_header_str\" style=\"float: left;left:0;margin-left: 0;width: 0.8rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "                        合计\n" +
        "                    </div>\n" +
        "                    <div class=\"page_content_header_str\" style=\"float: left;left:0.8rem;margin-left: 0;width: 2.7rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "                       \n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_csfk\" class=\"page_content_header_str\" style=\"float: left;left:3.5rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_ycrc\" class=\"page_content_header_str\" style=\"float: left;left:4.75rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_gwyc\" class=\"page_content_header_str\" style=\"float: left;left:6rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_ybpla\" class=\"page_content_header_str\" style=\"float: left;left:7.25rem;margin-left: 0;width: 1.5rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_dcyj\" class=\"page_content_header_str\" style=\"float: left;left:8.75rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_dcyj_max\" class=\"page_content_header_str\" style=\"float: left;left:10rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_wjt\" class=\"page_content_header_str\" style=\"float: left;left:11.25rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_wjtl\" class=\"page_content_header_str\" style=\"float: left;left:12.25rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_wcr\" class=\"page_content_header_str\" style=\"float: left;left:13.5rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_wcrl\" class=\"page_content_header_str\" style=\"float: left;left:14.5rem;margin-left: 0;width: 1.25rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_zls\" class=\"page_content_header_str\" style=\"float: left;left:15.75rem;margin-left: 0;width: 1rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div id=\"page_content_bottom_shrs\" class=\"page_content_header_str\" style=\"float: left;left:16.75rem;margin-left: 0;width: 1.22rem;height: 0.54rem;line-height:0.54rem;font-size: 0.18rem;text-align: center;color: #00CCFF;border: 1px solid #02314D;position: absolute;\">\n" +
        "\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";
    $("#page_content_ALL").append(content);


    //显示合计数量
    //text()中填入后端接口拿到的数据
    // $('#page_content_bottom_csfk').text();
    // $('#page_content_bottom_ycrc').text();
    //  $('#page_content_bottom_gwyc').text(sum_gwyc);
    // $('#page_content_bottom_ybpla').text();
    // $('#page_content_bottom_dcyj').text();
    // $('#page_content_bottom_dcyj_max').text();
    // $('#page_content_bottom_wjt').text();
    // $('#page_content_bottom_wjtl').text();
    // $('#page_content_bottom_wcr').text();
    // $('#page_content_bottom_wcrl').text();
    // $('#page_content_bottom_zls').text();
    // $('#page_content_bottom_shrs').text();
}

var postData ={
    "startTime":20210319000000,
    "endTime":20210519235959,
    "curPage":1,
    "sizePage":50
}
//从接口拿数据
function distribute(){
    console.log("getMessage success");
    var basicUrl = "http:/";
    var basicApp = "192.168.8.102:8080";
    var urlX = basicUrl + "/" + basicApp + "/api_model/api/countTime.do";
    console.log(postData);

    $.ajax({
        url:urlX,
        type:"POST",
        data:postData,
        async:true,
        dataType:"json",
        scriptCharset:"UTF-8",
        success:function(data){
            console.log("ajax success");
            console.log(data);
            if(data.result == 1){
                console.log("查询成功");
                showList(data);
            }else if(data.result == -1){
                console.log("查询失败");
            }else{
                console.log("数据为空");
                alert(data.msg);
            }
        },
        error:function(){
            console.log("ajax error")
        }
    });

}


//每页条数选择
function selectPageColumn(siteX){

}

//绑定上一页，下一页，末页，跳转至
function bindPageNavigator(){
    //上一页
    document.getElementById("pre_page").addEventListener('click',function (){
        if(postData.curPage == 1){
            alert("已经是首页");
        }else{
            postData.curPage -= 1;
            $("#page_content_ALL").html("");
            $("#select_page_num").html("");
            distribute();
        }
    },false);
    // 下一页
    document.getElementById("next_page").addEventListener('click',function (){
        if(postData.curPage == Math.ceil(myData.sum/postData.sizePage)){
            alert("已经是末页");
        }else{
            postData.curPage += 1;
            $("#page_content_ALL").html("");
            $("#select_page_num").html("");
            distribute();
        }
    },false);
    // 末页
    document.getElementById("last_page").addEventListener('click',function (){
        if(postData.curPage == parseInt( myData.sum/postData.sizePage +1)){
            alert("已经是末页");
        }else{
            postData.curPage =parseInt( myData.sum/postData.sizePage +1);
            $("#page_content_ALL").html("");
            $("#select_page_num").html("");
            distribute();
        }
    },false);
    //跳转至
    document.getElementById("pagecount_navigator").addEventListener('click',function (){
        //页码跳转
        //根据跳转至后的input中输入的数字，点击GO，将page_count修改为该值，进行渲染
        if($("#navigate_page").val() <= (parseInt(myData.sum/postData.sizePage + 1) )){
            postData.curPage = $("#navigate_page").val();
            $("#page_content_ALL").html("");
            $("#select_page_num").html("");
            distribute();
        }else{
            alert("请先输入跳转页码或者输入页码过大");
        }
    },false);

    // let yemaID = "yema_" + postData.curPage;
}

//页码选择
//先做123的页面，其他为假页码
function selectPageCount(siteX){
    postData.curPage = siteX;
    $("#select_page_num").html("");
    $("#page_content_ALL").html("");
    distribute();
}

function getElementByClassName(classnames) {
    var objArray = new Array();//定义返回对象数组
    var tags = document.getElementsByTagName("*");//获取页面所有元素
    var index = 0;
    for (var i in tags) {
        if (tags[i].nodeType == 1) {
            if (tags[i].getAttribute("class") == classnames) { //如果某元素的class值为所需要
                objArray[index] = tags[i];
                index++;
            }
        }
    }
    return objArray;

}


/*//让第几页显示被选中状态的css，默认为第一页
function pageSelectLighten(){
    let ye  = postData.curPage;
    console.log(getElementByClassName('bottom_page_yema select_page dijiye')[ye-1].className);
    let sum = getElementByClassName('bottom_page_yema select_page dijiye yema_selected').length;
    for(let i = 0 ;i< sum;i++){
        getElementByClassName('bottom_page_yema select_page dijiye yema_selected')[i].className -= ' yema_selected';
    }
    console.log(getElementByClassName('bottom_page_yema select_page dijiye yema_selected'));
    getElementByClassName('bottom_page_yema select_page dijiye')[ye-1].className += ' yema_selected'; //在原来的后面加这个
    console.log(i);
}*/

