var gulp = require('gulp'),
    
    // gulp dependencies
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
    
    rename = require('gulp-rename'),
    del = require('del'),
    copy = require('gulp-copy'),
    path = require('path')
;

// 配置文件路径
var paths = {
    dist: {
        minified: 'dist/minified',
		uncompressed: 'dist/uncompressed',
        packaged: 'dist/',
    },
};

// 压缩js
gulp.task('minifyjs', function(){
    return gulp.src(['src/js/*.js', 'src/js/**/*.js'])
            // 语法检查
            //.pipe(jshint())
            //.pipe(jshint.reporter('default'))
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(paths.dist.minified + '/js'));
});


// 合并,压缩js
gulp.task('packagejs', function(){
    
    // jquery plugins
    gulp.src([
		paths.dist.minified + '/js/zepto/zepto.min.min.js', //   合并 dist/js/ 里 文件
		paths.dist.minified + '/js/touch.min.js',
		paths.dist.minified + '/js/PageSlider.min.js',
		paths.dist.minified + '/js/PxLoader.min.js',
		paths.dist.minified + '/js/PxLoaderImage.min.js',
		//paths.dist.minified + '/js/index.min.js'
        ])
        .pipe(concat('plugins.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dist.packaged + '/js'));
    
    // main
    gulp.src([
		paths.dist.minified + '/js/zepto/*.js',  //先后顺序 不兼容问题 先压缩
		paths.dist.minified + '/js/*.js'
    ])
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.dist.packaged + '/js'));
    
});

// 压缩css
gulp.task('minifycss', function(){
    // 通过pipe() 把要处理的文件导向插件,通过查找对应插件的api执行对应的命令
    gulp.src(['src/css/*.css', 'src/css/**/*.css'])
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dist.minified + '/css'));
});

// 合并,压缩css
gulp.task('packagecss', function(){
    // 合并css   
    gulp.src(paths.dist.minified + '/css/*.css')
        .pipe(concat('plugins.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dist.packaged + '/css'));
});

// Copy all static images
gulp.task('images', function() {
  return gulp.src(['src/images/*.*', 'src/images/**/*.*'])
    // Pass in options to the task
    .pipe(gulp.dest(paths.dist.packaged + '/images'));
});

// 批量命令
gulp.task('comprass', ['minifycss', 'minifyjs'], function(){
    gulp.start('packagecss', 'packagejs', 'images');
});

// 清理旧文件
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

// 设置默认任务
gulp.task('default', ['clean'], function(){
    gulp.start('comprass');
});

// 监听事件
gulp.task('watch', function(){
    // 监听文件是否修改，以便执行相应的任务
    gulp.watch('src/css/*.css', ['minifycss']);
    gulp.watch('src/css/**/*.css', ['minifycss']);
    gulp.watch('src/js/*.js', ['minifyjs']);
    gulp.watch('src/js/**/*.js', ['minifyjs']);
});
