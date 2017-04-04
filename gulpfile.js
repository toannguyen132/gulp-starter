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
  gulp.watch('src/scss/**/*.scss', ['sass', 'inject', 'refresh-browser']);
  gulp.watch('src/js/**/*.js', ['js', 'inject', 'refresh-browser']);
  gulp.watch('src/img/*.*', ['img', 'refresh-browser']);
  gulp.watch('src/*.html', ['files', 'inject', 'refresh-browser']);
  gulp.watch('src/fonts/*.*', ['files', 'refresh-browser']);
})

gulp.task('default', ['watch']);