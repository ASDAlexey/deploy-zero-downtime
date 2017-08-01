import gulp from 'gulp';

gulp.task('copy', () => {
  gulp.src(['./client/**/*.html'])
    .pipe(gulp.dest('./dist'));
});
