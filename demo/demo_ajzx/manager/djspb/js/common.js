function htmlspecialchars(str){
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#039;');
    return str;
}
function forbidWrite(tableID){
    tableID.find("input").css('color','#666');
    tableID.find("textarea").css('color','#666');
    tableID.find("input").attr('disabled','disabled');
    tableID.find("textarea").attr('disabled','disabled');
    tableID.find("input").attr('readonly','readonly');
    tableID.find("textarea").attr('readonly','readonly');
}
function allowWirte(tableID){
    tableID.find("input").css('color','#000');
    tableID.find("textarea").css('color','#000');
    tableID.find("input").removeAttr('disabled');
    tableID.find("textarea").removeAttr('disabled');
    tableID.find("input").removeAttr('readonly');
    tableID.find("textarea").removeAttr('readonly');
}
//随机签章
function sealltRandomseal(idName,bmax,bmin,lmax,lmin){
    var bnum=Math.random()*(bmax-bmin);
    var lnum=Math.random()*(lmax-lmin);
    var bvalue = parseInt(bnum+bmin);
    var lvalue = parseInt(lnum+lmin);
    idName.css({'bottom':bvalue,'left':lvalue});
}
//下载
function convert(tableID,tabletype) {
    var downname;
    if(tabletype==1){
        downname = "提请公安机关技术侦察部门数据查询审批表";
    }else if(tabletype==0){
        downname = "呈请采取网络信息查询监控措施报告书";
    }
    html2canvas(document.querySelector(tableID),{
        backgroundColor:"#fff",
    }).then(canvas => {
        canvas.toBlob(function(blob) {
            saveAs(blob, downname+".png");
        });
    });
}
//打印
(function (window, document) {
    var Print = function (dom, options) {
        if (!(this instanceof Print)) return new Print(dom, options);

        this.options = this.extend({
            noPrint: '.no-print',
            onStart: function () { },
            onEnd: function () { }
        }, options);

        if ((typeof dom) === "string") {
            this.dom = document.querySelector(dom);
        } else {
            this.dom = dom;
        }

        this.init();
    };
    Print.prototype = {
        init: function () {
            var content = this.getStyle() + this.getHtml();
            this.writeIframe(content);
        },
        extend: function (obj, obj2) {
            for (var k in obj2) {
                obj[k] = obj2[k];
            }
            return obj;
        },

        getStyle: function () {
            var str = "",
                styles = document.querySelectorAll('style,link');
            for (var i = 0; i < styles.length; i++) {
                str += styles[i].outerHTML;
            }
            str += "<style>" + (this.options.noPrint ? this.options.noPrint : '.no-print') + "{display:none;}</style>";

            return str;
        },

        getHtml: function () {
            var inputs = document.querySelectorAll('input');
            var textareas = document.querySelectorAll('textarea');
            var selects = document.querySelectorAll('select');

            for (var k in inputs) {
                if (inputs[k].type == "checkbox" || inputs[k].type == "radio") {
                    if (inputs[k].checked == true) {
                        inputs[k].setAttribute('checked', "checked")
                    } else {
                        inputs[k].removeAttribute('checked')
                    }
                } else if (inputs[k].type == "text") {
                    inputs[k].setAttribute('value', inputs[k].value)
                }
            }

            for (var k2 in textareas) {
                if (textareas[k2].type == 'textarea') {
                    textareas[k2].innerHTML = textareas[k2].value
                }
            }

            for (var k3 in selects) {
                if (selects[k3].type == 'select-one') {
                    var child = selects[k3].children;
                    for (var i in child) {
                        if (child[i].tagName == 'OPTION') {
                            if (child[i].selected == true) {
                                child[i].setAttribute('selected', "selected")
                            } else {
                                child[i].removeAttribute('selected')
                            }
                        }
                    }
                }
            }

            return this.dom.outerHTML;
        },

        writeIframe: function (content) {
            var w, doc, iframe = document.createElement('iframe'),
                f = document.body.appendChild(iframe);
            iframe.id = "myIframe";
            iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";
            w = f.contentWindow || f.contentDocument;
            doc = f.contentDocument || f.contentWindow.document;
            doc.open();
            doc.write(content);
            doc.close();
            this.toPrint(w, function () {
                document.body.removeChild(iframe)
            });
        },

        toPrint: function (w, cb) {
            var _this = this;
            w.onload = function () {
                try {
                    setTimeout(function () {
                        w.focus();
                        typeof _this.options.onStart === 'function' && _this.options.onStart();
                        if (!w.document.execCommand('print', false, null)) {
                            w.print();
                        }
                        typeof _this.options.onEnd === 'function' && _this.options.onEnd();
                        w.close();
                        cb && cb()
                    });
                } catch (err) {
                    console.log('err', err);
                }
            }
        }
    };
    window.Print = Print;
}(window, document));