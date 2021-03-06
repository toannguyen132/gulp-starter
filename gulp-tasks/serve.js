var BUILD_DIR = require('../gulpdirs.js');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: "./build"
    },
    reloadDelay: 2000
  });
})

gulp.task('refresh-browser', function(){
  browserSync.reload();
})