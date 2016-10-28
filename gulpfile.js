const
  gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['browser-sync', 'watch']);

gulp.task('watch', function() {
  gulp.watch('sass/*.sass', ['styles']);
  gulp.watch('app/**/*.*').on('change', browserSync.reload);
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    },
    notify: false
  });
});

gulp.task('styles', function () {
  return gulp.src('sass/*.sass')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }).on('error', sass.logError))
    //.pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
    //.pipe(minifycss())
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.stream());
});