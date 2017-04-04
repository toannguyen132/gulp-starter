var BUILD_DIR = require('../gulpdirs.js');
var gulp = require('gulp');
var inject = require('gulp-inject');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bowerFiles = require('main-bower-files')

gulp.task('inject', function(){
  var target = gulp.src('./src/*.html');
  var sources = gulp.src([BUILD_DIR.base + '/css/*.css', BUILD_DIR.base + '/js/*.js'], {read: false, base: '.src/'});

  var vendorCss = gulp.src(bowerFiles( '**/*.css', {
    'overrides': {
      'bootstrap': {
        'main': ['dist/css/bootstrap.min.css']
      }
    }
  }))
  .pipe(gulp.dest(BUILD_DIR.css))

  var vendorJS = gulp.src(bowerFiles({
    'overrides': {
      'bootstrap': {
        'main': ['dist/js/bootstrap.min.js']
      }
    }
  })).pipe(gulp.dest(BUILD_DIR.js));

  return target.pipe(inject(vendorCss, {name: 'bower', ignorePath: BUILD_DIR.base}))
    .pipe(inject(vendorJS, {name: 'bower', ignorePath: BUILD_DIR.base}))
    .pipe(inject(sources, {ignorePath: BUILD_DIR.base}))
    .pipe(gulp.dest(BUILD_DIR.base));
});