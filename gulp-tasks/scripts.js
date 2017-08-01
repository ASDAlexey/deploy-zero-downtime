import gulp from 'gulp';
import jsmin from 'gulp-jsmin';

gulp.task('scripts', () => {
  gulp.src(['./client/**/*.js'])
    .pipe(jsmin())
    .pipe(gulp.dest('./dist'));
});
