var BUILD_DIR = require('./gulpdirs.js');
var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

require('require-dir')('./gulp-tasks');

// gulp.task('serve', function(){
//   browserSync.init({
//     server: {
//       baseDir: "./build"
//     }
//   });
// })

// gulp.task

/** watch **/
gulp.task('watch', ['serve'] ,function(){
  // console.log(browserSync)
  gulp.watch('src/scss/**/*.scss', ['scss', 'refresh-browser']);
  gulp.watch('src/js/**/*.js', ['js', 'refresh-browser']);
  gulp.watch('src/img/*.*', ['img', 'refresh-browser']);
  gulp.watch(['src/fonts/*.*', 'src/*.html'], ['files', 'refresh-browser']);
})

gulp.task('default', ['watch']);