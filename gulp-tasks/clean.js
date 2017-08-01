import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean', () => {
  return gulp.src([
    './dist',
  ], { read: false }).pipe(clean());
});
