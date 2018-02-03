var gulp = require('gulp');
var rename = require('gulp-rename');
var ferrugemjs = require('gulp-ferrugemjs');
var tsConfig = require("../tsconfig.json").compilerOptions;
var beautify = require('gulp-jsbeautify');
var pug = require('gulp-pug');

gulp.task('template',function(){
    return gulp.src([
        "./src/**/*.pug"
    ])
    .pipe(pug({
    	// Your options in here. 
  	}))
    .pipe(ferrugemjs({templateExtension:".pug"}))
    .pipe(beautify({indentSize: 2}))
    .pipe(rename({
        extname: ".pug.js"
    }))
    .pipe(gulp.dest(tsConfig.outDir));
});
