const
  gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  minifycss    = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  cssbeautify = require('gulp-cssbeautify');

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
    .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: true}))
    //.pipe(minifycss())
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.stream());
});

gulp.task('beautify', function() {
    return gulp.src('./app/styles/style.css')
      .pipe(cssbeautify())
      .pipe(gulp.dest('./'));
});