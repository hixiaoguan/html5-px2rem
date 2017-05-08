/*
* 痛点：HTML5页面布局单位由px转换rem解决方案
* 作者：jonyguan [309678100@qq.com]
* 下载: git clone https://github.com/hixiaoguan/html5-px2rem.git
* 理解：px-em-rem-percent-points.png 可以看看这个图是rem和其他单位之间的关系
* pieces: 把屏幕10等分，我们需要根据实际页面尺寸除10得到页面根元素html字体大小font-size，比如320屏html字体设置为32px
*/
(function (doc, win) {
    var pieces = 10;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = doc.body.clientWidth;
            if (!clientWidth) return;
            var theHtml = doc.getElementsByTagName("html");
            theHtml[0].style.fontSize = clientWidth / pieces + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);