var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  gulp.src('./styles/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('uglify', function() {
  gulp.src('./scripts/*.js')
    .pipe(uglify('main.js'))
    .pipe(gulp.dest('./assets/js'))
});

gulp.task('watch', function(){
    gulp.watch('./styles/**/*.scss', ['sass']);
    gulp.watch('./scripts/*.js', ['uglify']);
});