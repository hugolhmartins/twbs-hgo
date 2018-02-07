var gulp = require('gulp');
var reqConfig = require("../require-config.json");

var pathsJoin = [];
pathsJoin.push("node_modules/requirejs/**/*");
pathsJoin.push("node_modules/require-css/**/*");
Object.keys(reqConfig.paths).forEach(path => {
	pathsJoin.push("node_modules/"+path+"/**/*");
});

gulp.task("copy:index",function(){
    return gulp.src(["index.html","require-config.json"], { "base" : "." })
        .pipe(gulp.dest("public"));
});

gulp.task("copy:dist",function(){
    return gulp.src(["dist/ui/**/*"], { "base" : "./dist" })
        .pipe(gulp.dest("public/node_modules/twbs-hgo/dist"));
});

gulp.task("copy:test",function(){
    return gulp.src(["dist/test/**/*"], { "base" : "./dist/test/" })
        .pipe(gulp.dest("public/test"));
});

gulp.task("copy:src",function(){
    return gulp.src(["src/test/apps/**/*"], { "base" : "." })
        .pipe(gulp.dest("public"));
});

gulp.task("build:public",["copy:index","copy:dist","copy:test","copy:src"],function(){
    return gulp.src(pathsJoin, { "base" : "." })
        .pipe(gulp.dest("public"));
});

