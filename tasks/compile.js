var gulp = require('gulp');

var ts = require('gulp-typescript');

var tsConfig = require("../tsconfig.json").compilerOptions;

gulp.task('compile',function(){
    return gulp.src([
    	"./src/**/*.ts"
    	])
        .pipe(ts(tsConfig))
        .pipe(gulp.dest(tsConfig.outDir));   
});

