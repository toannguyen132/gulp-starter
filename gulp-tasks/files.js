var BUILD_DIR = require('../gulpdirs.js');
var gulp = require('gulp');

gulp.task('files', function(){
  return gulp.src(['./src/*.html', './src/fonts/*.*'], {base: './src/'})
    .pipe(gulp.dest(BUILD_DIR.base))
});