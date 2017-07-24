# HTML5页面布局单位由px转换rem解决方案

## 开始使用

* git clone https://github.com/hixiaoguan/html5-px2rem.git

* 或直接下载：https://github.com/hixiaoguan/html5-px2rem/archive/master.zip

* 理解帮助：https://hixiaoguan.github.io/html5-px2rem/px-em-rem-percent-points.png

* 直接将该文件直接放到页面底部即可

* 开发过程中 可以配合 gulp 的 gulp-px2rem-plugin 实现 less 文件里可以直接按设计稿的px写样式，然后通过该插件自动计算并生成对应的rem。懒人的福音！我也是懒人一个^^
* gulp 写法：

    ```    
        var gulp = require('gulp'),
        less = require('gulp-less'),
        px2rem = require('gulp-px2rem-plugin');
        //编译less文件
        gulp.task('less', function() {
            return gulp.src(paths.srcRoot + 'less/*.less')
                .pipe(less())
                .pipe(
                    px2rem({
                        'width_design': 640, // width_design：设计稿宽度。默认为640，如果你的屏幕是750的可以直接修改该参数为750即可
                        'pieces': 10, // pieces：将整屏切份。默认为10，相当于10rem = width_design(设计稿宽度)
                        'valid_num': 6, // valid_num：生成rem后的小数位数。默认值4
                        'ignore_px': [1, 2], // ignore_px：让部分px不在转换成rem。默认为空数组
                        'ignore_selector': ['.views'] // ignore_selector：让部分选择器不在转换为rem。默认为空数组
                    })
                )
                .pipe(gulp.dest(paths.srcRoot + 'css'));
        });
    ```
## 祝你使用愉快！遇坑请留言：https://github.com/hixiaoguan/html5-px2rem/issues
