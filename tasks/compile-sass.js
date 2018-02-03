var gulp = require('gulp');
var sass = require('gulp-sass');;

var tsConfig = require("../tsconfig.json").compilerOptions;

gulp.task('sass',function(){
    return gulp.src([
    	"./src/**/*.scss"
    	])
    	.pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(tsConfig.outDir));   
});