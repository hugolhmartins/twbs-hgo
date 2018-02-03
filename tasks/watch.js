var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('static_serve', function() {
  connect.server({
    root: ".",
    port: 9001,
    livereload: true
  });
});

gulp.task('reload',function(){
	connect.reload();
});



gulp.task('watch',['compile','template','sass'],function(){
    gulp.run('static_serve');
    gulp.watch("./src/**/*.pug", ['template']);
    gulp.watch('./src/**/*.ts', ['compile']);
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch('./dist/**/*.*').on('change',function(file){
    	gulp.src(file.path).pipe(connect.reload());
    });
});