var BUILD_DIR = require('../gulpdirs.js');
var gulp = require('gulp');
var inject = require('gulp-inject');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bowerFiles = require('main-bower-files')

gulp.task('inject', function(){
  var target = gulp.src('./src/*.html');
  var sources = gulp.src([BUILD_DIR.base + '/css/*.css', BUILD_DIR.base + '/js/*.js'], {read: false});

  var vendorFiles = gulp.src(bowerFiles({
    'overrides': {
      'bootstrap': {
        'main': ['dist/css/bootstrap.min.css', 'dist/js/bootstrap.min.js']
      }
    }
  }), {
    read: false
  });

  return target.pipe(inject(vendorFiles, {name: 'bower'}))
    .pipe(inject(sources))
    .pipe(gulp.dest(BUILD_DIR.base));
});