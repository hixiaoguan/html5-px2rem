/*
* 痛点：HTML5页面布局单位由px转换rem解决方案
* 作者：jonyguan [309678100@qq.com]
* 下载: git clone https://github.com/hixiaoguan/html5-px2rem.git
* 理解：px-em-rem-percent-points.png 可以看看这个图是rem和其他单位之间的关系
* 把屏幕100等分，我们需要根据实际页面尺寸乘以100除640得到页面根元素html字体大小font-size，比如320px屏html字体设置为50px，并限制了最大宽度640，最小宽度320，实际切图过程中，可以直接除以100就可以了，比如 width:120px 转为rem width:1.2rem 
* HTML viewport:<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no,viewport-fit=cover">
*/
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
        var width = docEl.clientWidth;
        if (width > 640) {
            width = 640 ;
        }
        if (width < 320) {
            width = 320 ;
        }
        docEl.style.fontSize = 100 * (width / 640) + 'px';
    };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);
