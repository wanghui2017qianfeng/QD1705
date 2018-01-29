const gulp = require("gulp");

gulp.task("copy-html",() => {
    return gulp.src("html/*.html")
    .pipe(gulp.dest("dist")).pipe(connect.reload());
})

gulp.task("scripts",() =>{
    return gulp.src("js/*.js").pipe(gulp.dest("dist/js")).pipe(connect.reload());
})

gulp.task("images",() =>{
    return gulp.src("image/**/*").pipe(gulp.dest("dist/image")).pipe(connect.reload());
})

const scss = require("gulp-sass-china");
const rename = require("gulp-rename");
const minify = require("gulp-minify-css");

gulp.task("scss-index",() =>{
    return gulp.src("scss/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("scss-register",() =>{
    return gulp.src("scss/register.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("register.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("scss-login",() =>{
    return gulp.src("scss/login.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("login.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("scss-productdetail",() =>{
    return gulp.src("scss/productdetail.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("productdetail.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("scss-productlist",() =>{
    return gulp.src("scss/productlist.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("productlist.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("scss-order",() =>{
    return gulp.src("scss/order.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())
    .pipe(rename("order.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})




gulp.task("data",function(){
    return gulp.src("data/*.json").pipe(gulp.dest("dist/data")).pipe(connect.reload());
})

gulp.task("dataleft",function(){
    return gulp.src("data/dataleft.json").pipe(gulp.dest("dist/data")).pipe(connect.reload());
})
//
gulp.task("build",["data","scss-login","scss-order","scss-productlist","scss-productdetail","scripts","scss-index","images","copy-html","dataleft","scss-register"],()=>{
    console.log("编译成功");
})




//启动监听
gulp.task("watch",() => {
    gulp.watch("html/*.html",["copy-html"]);
    gulp.watch("js/*.js",["scripts"]);
    gulp.watch("images/**/*",["images"]);
    gulp.watch("scss/index.scss",["scss-index"]);
    gulp.watch("scss/register.scss",["scss-register"]);
    gulp.watch("scss/login.scss",["scss-login"]);
    gulp.watch("scss/productdetail.scss",["scss-productdetail"]);
    gulp.watch("scss/productlist.scss",["scss-productlist"]);
    gulp.watch("scss/order.scss",["scss-order"]);
    gulp.watch("data/*.json",["data"]);
})

/*
    gulp-connect  修改index.html 能够同时更新dist下的index.html
    gulp-concat 在这里我们将两个js文件进行合并
    gulp-uglify文件压缩  压缩js代码
    gulp-rename重命名
    gulp-minify-css压缩css
    gulp-imagemin图片压缩
*/

const connect = require("gulp-connect");


gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true
    })
})

gulp.task("default",["server","watch"]);

