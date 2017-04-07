var BUILD_DIR = require('../gulpdirs.js');
var gulp = require('gulp');
var bowerFiles = require('main-bower-files')

gulp.task('vendors', function(){
  var vendorCss = gulp.src(bowerFiles( '**/*.css', {
    'overrides': {
      'bootstrap': {
        'main': ['dist/css/bootstrap.min.css']
      }
    }
  }))
  .pipe(gulp.dest(BUILD_DIR.vendors))

  var vendorJS = gulp.src(bowerFiles({
    'overrides': {
      'bootstrap': {
        'main': ['dist/js/bootstrap.min.js']
      },
      'waypoints': {
        'main': ['lib/jquery.waypoints.min.js']
      }
    }
  })).pipe(gulp.dest(BUILD_DIR.vendors));
});
