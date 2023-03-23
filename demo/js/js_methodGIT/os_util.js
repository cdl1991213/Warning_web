var os = (function() {
    var UserAgent = navigator.userAgent.toLowerCase();
    return {
        isIpad          : /ipad/.test(UserAgent),
        isIphone        : /iphone os/.test(UserAgent),
        isAndroid       : /android/.test(UserAgent),
        isWindowsCe     : /windows ce/.test(UserAgent),
        isWindowsMobile : /windows mobile/.test(UserAgent),
        isWin2K         : /windows nt 5.0/.test(UserAgent),
        isXP            : /windows nt 5.1/.test(UserAgent),
        isVista         : /windows nt 6.0/.test(UserAgent),
        isWin7          : /windows nt 6.1/.test(UserAgent),
        isWin8          : /windows nt 6.2/.test(UserAgent),
        isWin81         : /windows nt 6.3/.test(UserAgent),
        isMac           : /mac os/.test(UserAgent)
    };
}());

var bw = (function() {
    var UserAgent = navigator.userAgent.toLowerCase();
    return {
        isUc      : /ucweb/.test(UserAgent), // UC浏览器
        isChrome  : /chrome/.test(UserAgent.substr(-33,6)), // Chrome浏览器
        isFirefox : /firefox/.test(UserAgent), // 火狐浏览器
        isOpera   : /opera/.test(UserAgent),  // Opera浏览器
        isSafire  : /safari/.test(UserAgent) && !/chrome/.test(UserAgent), // safire浏览器
        is360     : /360se/.test(UserAgent), // 360浏览器
        isBaidu   : /bidubrowser/.test(UserAgent), // 百度浏览器
        isSougou  : /metasr/.test(UserAgent), // 搜狗浏览器
        isIE6     : /msie 6.0/.test(UserAgent), // IE6
        isIE7     : /msie 7.0/.test(UserAgent), // IE7
        isIE8     : /msie 8.0/.test(UserAgent), // IE8
        isIE9     : /msie 9.0/.test(UserAgent), // IE9
        isIE10    : /msie 10.0/.test(UserAgent), // IE10
        isIE11    : /msie 11.0/.test(UserAgent), // IE11
        isLB      : /lbbrowser/.test(UserAgent), // 猎豹浏览器
        isWX      : /micromessenger/.test(UserAgent), // 微信内置浏览器
        isQQ      : /qqbrowser/.test(UserAgent) // QQ浏览器
    };
}());

function getOSName() {
    var userAgent = navigator.userAgent;
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";

    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";

    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";

    if (isWin) {
        var findFlag = userAgent.indexOf("Windows NT 5.0") > -1 || userAgent.indexOf("Windows 2000") > -1;
        if (findFlag) return "Win2000";
        var findFlag = userAgent.indexOf("Windows NT 5.1") > -1 || userAgent.indexOf("Windows XP") > -1;
        if (findFlag) return "WinXP";
        var findFlag = userAgent.indexOf("Windows NT 5.2") > -1 || userAgent.indexOf("Windows 2003") > -1;
        if (findFlag) return "Win2003";
        var findFlag= userAgent.indexOf("Windows NT 6.0") > -1 || userAgent.indexOf("Windows Vista") > -1;
        if (findFlag) return "WinVista";
        var findFlag = userAgent.indexOf("Windows NT 6.1") > -1 || userAgent.indexOf("Windows 7") > -1;
        if (findFlag) return "Win7";
        var findFlag = userAgent.indexOf("Windows NT 6.2") > -1 || userAgent.indexOf("Windows 8") > -1;
        if (findFlag) return "Win8";
        var findFlag = userAgent.indexOf("Windows NT 6.3") > -1 || userAgent.indexOf("Windows 8.1") > -1;
        if (isWifindFlagn8_1) return "Win8.1";
        var findFlag = userAgent.indexOf("Windows NT 6.4") > -1 || userAgent.indexOf("Windows 10") > -1;
        if (isWifindFlagn8_1) return "Win10";
        return 'win';
    }

    return "other";
}