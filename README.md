
gulpjs

#### Browser Support

* Last 2 Versions FF, Chrome, IE 10+, Safari Mac
* IE 10+
* Android 4

Browser prefixes are present for Internet Explorer 9, but the browser is not officially supported.

### Install

### Dependencies Support

####第一步：安装Node
首先，最基本也最重要的是，我们需要搭建node环境。访问[http://nodejs.org](http://nodejs.org)，然后点击大大的绿色的install按钮，下载完成后直接运行程序，就一切准备就绪。[npm](https://npmjs.org/)会随着安装包一起安装，稍后会用到它。

####第二步：安装gulp
NPM是基于命令行的node包管理工具，它可以将node的程序模块安装到项目中，在它的官网中可以查看和搜索所有可用的程序模块。

在命令行中输入

```bash
$ sudo npm install -g gulp (全局安装)
$ npm install --save-dev gulp (局部安装)
```

####安装这些插件需要运行如下命令

```bash
$ (sudo) npm install gulp-less gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-copy gulp-livereload gulp-cache del --save-dev
```

说明
* gulp-less less组件
* gulp-autoprefixer 自动添加css前缀
* gulp-minify-css 压缩css
* gulp-jshint js代码校验
* gulp-concat 合并javascript文件
* gulp-uglify 压缩js代码
* gulp-imagemin 压缩图片
* gulp-notify 显示报错信息和报错后不终止当前gulp任务
* gulp-rename 给文件重命名
* gulp-copy 复制文件
* gulp-livereload 自动刷新页面
* gulp-cache 图片缓存，只有图片替换了才压缩
* del

备注
* npm是安装node模块的工具，执行install命令
* -g表示在全局环境安装，以便任何项目都能使用它
* gulp是将要安装的node模块的名字

运行时注意查看命令行有没有错误信息，安装完成后，你可以使用下面的命令查看gulp的版本号以确保gulp已经被正确安装。

```bash
$ gulp -v
```

#### 压缩命令

```bash
gulp
```
