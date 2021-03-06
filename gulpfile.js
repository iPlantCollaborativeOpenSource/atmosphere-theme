var gulp = require('gulp'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync');

gulp.task('style', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions' , 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))
    .pipe(gulp.dest('./css/'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "yourlocal.dev"
  });
});

// default gulp watch task
gulp.task('default', function() {
  var client = ['style'];
  gulp.watch ('./sass/*.scss' , client);
  gulp.watch ('./*.css');
});
