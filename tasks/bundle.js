var gulp = require('gulp');
var reqConfig = require("../require-config.json");

var pathsJoin = [];
pathsJoin.push("node_modules/requirejs/**/*");
Object.keys(reqConfig.paths).forEach(path => {
	pathsJoin.push("node_modules/"+path+"/**/*");
});

gulp.task("copy:index",function(){
    return gulp.src("index.html", { "base" : "." })
        .pipe(gulp.dest("public"));
});

gulp.task("build:public",["copy:index"],function(){
    return gulp.src(pathsJoin, { "base" : "." })
        .pipe(gulp.dest("public"));
});

