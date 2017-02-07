方案:
1.使用swiper来操作滑动效果,它不依赖任何库,支持pc和移动端的响应。
2.使用dot js模板,让DOM看起来更具有可读性(doT.js is fast, small and has no dependencies.)
3.使用jquery,方便操作dom和事件。

todo:
1.如果只在手机端使用,可以将jquery改成zepto(相比jquery更轻量级,而且是针对移动端)。
2.希望可以通过手势,比如拖拽图片位置、改变图片大小以及旋转角度等,自定义图片在模板中的位置。
3.模板引擎可以提前编译好,加速渲染时间。
4.js打包

run:
1.npm install http-server
2.http-server
3.保持和pc同一局域网下,访问对应的IP+端口号即可