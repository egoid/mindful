var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var conf = require('./gulp/conf');
var bs = require('browser-sync').create();
var build = require('./gulp/build')

gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass({
      sourceComments: 'map'

    })).on('error', conf.errorHandler('Sass'))
    .pipe(autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(gulp.dest('src/assets/css'))
    .pipe(bs.reload({
      stream: true
    }));
});

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./src"
    }
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(["./src/scss/*.scss", "./src/components/**/*.scss", "./src/common/views/**/*.scss"], ['sass']);
  gulp.watch(["./src/**/**/*.html", './src/**/**/*.js']).on('change', bs.reload);
});

gulp.task('build', function() {
  gulp.start('build');
});
