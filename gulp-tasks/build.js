import gulp from 'gulp';
import runSequence from 'run-sequence';

const init = function (that, callback) {
  runSequence(
    'clean',
    [
      'scripts',
      'styles',
      'copy',
    ], callback);
};

gulp.task('build', function (callback) {
  init(this, callback);
});
