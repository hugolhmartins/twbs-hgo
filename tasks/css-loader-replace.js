var replace = require('gulp-string-replace');
var gulp = require('gulp');

gulp.task('css:loader-replace', function() {
  gulp.src(["./dist/ui/**/*.pug.js"]) // Any file globs are supported
    .pipe(replace(new RegExp('css-loader!', 'g'), ''))
    .pipe(gulp.dest('./dist/ui'))
});

