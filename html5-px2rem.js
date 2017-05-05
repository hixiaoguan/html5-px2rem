/*
* 痛点：HTML5页面布局单位由px转换rem解决方案
* 作者：jonyguan [309678100@qq.com]
* 下载: git clone https://github.com/hixiaoguan/html5-px2rem.git
* 理解：px-em-rem-percent-points.png 可以看看这个图是rem和其他单位之间的关系
*/
(function (doc, win) {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = doc.body.clientWidth;
            if (!clientWidth) return;
            var theHtml = doc.getElementsByTagName("html");
            theHtml[0].style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);