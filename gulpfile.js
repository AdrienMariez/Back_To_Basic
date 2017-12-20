var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('assets/sass/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

gulp.task('uglify', function () {
    gulp.src('assets/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'))
    .pipe(browserSync.stream());
});


gulp.task('serve', ['sass', 'uglify'], function() {
    browserSync.init({
        server: './public/'
    });
    gulp.watch('assets/sass/**/*.scss',['sass']);
    gulp.watch('assets/js/**/*.js', ['uglify']);
    gulp.watch("public/*.html", browserSync.reload);
});

gulp.task('default', ['serve']);