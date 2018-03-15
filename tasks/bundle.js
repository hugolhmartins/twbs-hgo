var gulp = require('gulp');
var reqConfig = require("../require-config.json");

var permitedFormats = "js|css|woff|woff2|ttf|svg";

var pathsJoin = [];
pathsJoin.push(`node_modules/requirejs/**/*.+(${permitedFormats})`);
pathsJoin.push(`node_modules/require-css/**/*.+(${permitedFormats})`);
Object.keys(reqConfig.paths).forEach(path => {
	pathsJoin.push(`node_modules/${path}/**/*.+(${permitedFormats})`);
});

gulp.task("build:public",["copy:package-json","copy:index","copy:dist","copy:test","copy:src"],function(){
    return gulp.src(pathsJoin, { "base" : "./node_modules" })
        .pipe(gulp.dest("public/vendors"));
});

gulp.task("copy:index",function(){
    return gulp.src(["index.html","require-config.json"], { "base" : "." })
        .pipe(gulp.dest("public"));
});

gulp.task("copy:dist",function(){
    return gulp.src(["dist/ui/**/*"], { "base" : "./dist" })
        .pipe(gulp.dest("public/vendors/twbs-hgo/dist"));
});

gulp.task("copy:test",function(){
    return gulp.src(["dist/test/**/*"], { "base" : "./dist/test/" })
        .pipe(gulp.dest("public/test"));
});

gulp.task("copy:src",function(){
    return gulp.src(["src/test/apps/**/*"], { "base" : "." })
        .pipe(gulp.dest("public"));
});

gulp.task("copy:package-json",function(){
    return gulp.src(["package.json"], { "base" : "." })
        .pipe(gulp.dest("public"));
});