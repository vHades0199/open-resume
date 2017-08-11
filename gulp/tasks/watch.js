import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config';

const bs = browserSync.create(config.name);

gulp.task('watch', [], () => {
  bs.init({
    port: 8888,
    server: {
      // baseDir: config.build,
      proxy: 'localhost:9999',
      logLevel: 'debug',
      logConnections: true,
      logFileChanges: true,
      files: ['*.css'],
    },
  });
  gulp.watch('scss/**/*.scss', ['styles']);
});
