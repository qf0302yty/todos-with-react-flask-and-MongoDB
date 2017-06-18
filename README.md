# todos-with-react-flask-and-MongoDB
这是React初学时常见例子：todo应用的一个扩展，在普通待办事项管理的基础上增加了已完成事件管理、事件统计图等功能。数据登记
时可以设置事件的类别和完成时间，并可以随时在done和undone之间切换。统计图分别按时间和类别展示条形图和饼状图。

前端方面，使用React作为主要框架。使用webpack对react组件及相关依赖进行打包
dom操作和ajax借用jquery，样式上使用bootstrap，图标展示方面使用highcharts，
动态文字和背景使用插件backstretch和textillate，这些插件的github或官网地址将在下面附上。同时也手写了一些css3的动画内容，如左侧弹出菜单

后端方面，使用Python的flask完成路由及数据操作服务的书写。数据库使用MongoDB，并用flask的扩展——mongoengine完成对数据库的操作。

运行方面，直接运行run.py并在浏览器中访问127.0.0.1：5000即可

附上相关插件的地址，感谢这些插件作者的优秀工作：

backstrech：实现动态且自适应的图片背景  https://github.com/jquery-backstretch/jquery-backstretch

textillate:优秀的文本动画插件 https://github.com/jschr/textillate

highcharts: 相当流行的图标插件 https://www.highcharts.com/


