var BUILD_DIR = require('../gulpdirs.js');
var gulp = require('gulp');

gulp.task('img', function(){
  return gulp.src('./src/img/**.*')
    .pipe(gulp.dest(BUILD_DIR.img))
});