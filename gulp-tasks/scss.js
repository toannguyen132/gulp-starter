var BUILD_DIR = require('../gulpdirs.js');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('./src/scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('build/css'))
});