var BUILD_DIR = require('../gulpdirs.js');
var gulp = require('gulp');
var inject = require('gulp-inject');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bowerFiles = require('main-bower-files')
var order = require('gulp-order');
var series = require('stream-series');

gulp.task('inject', function(){
  var target = gulp.src('./src/*.html');
  var sources = gulp.src([BUILD_DIR.base + '/css/*.css', BUILD_DIR.base + '/js/*.js'], {read: false})
    .pipe(order([
      'object-watch.js',
      '*.*'
    ]))
  var vendors = gulp.src([BUILD_DIR.vendors + '/*.*'], {read: false})
    .pipe(order([
      'jquery.js',
      '*'
    ]))

  return target.pipe(inject(vendors, {name: 'bower', ignorePath: BUILD_DIR.base + '/', addRootSlash: false}))
    .pipe(inject(sources, {ignorePath: BUILD_DIR.base + '/', addRootSlash: false}))
    .pipe(gulp.dest(BUILD_DIR.base + '/'));
});