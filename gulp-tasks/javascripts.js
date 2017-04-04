var BUILD_DIR = require('../gulpdirs.js');
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('js', function(){
  return gulp.src('./src/js/*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest(BUILD_DIR.js))
});