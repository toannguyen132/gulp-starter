var BUILD_DIR = require('./gulpdirs.js');
var gulp = require('gulp');

require('require-dir')('./gulp-tasks');

gulp.task('test', ['sass', 'inject']);