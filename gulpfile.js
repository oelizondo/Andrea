var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('andrea/andrea.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
});

gulp.task('default', ['sass']);