var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./source/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./source/sass/**/*.scss', ['sass']);
});