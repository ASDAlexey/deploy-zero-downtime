import gulp from 'gulp';
import cssmin from 'gulp-cssmin';

gulp.task('styles', () => {
  gulp.src(['./client/**/*.css'])
    .pipe(cssmin())
    .pipe(gulp.dest('./dist'));
});
