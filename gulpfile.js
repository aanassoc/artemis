var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// gulp.task('imagemin', function () {
//     return gulp.src('./themes/custom/maximus/images/*')
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('./themes/custom/maximus/images'));
// });

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
    // livereload.listen();

    gulp.watch('./styles/**/*.scss', ['sass']);
    gulp.watch('./scripts/*.js', ['uglify']);
    // gulp.watch(['./themes/custom/maximus/css/style.css', './themes/custom/maximus/**/*.twig', './themes/custom/maximus/js/*.js'], function (files){
    //     livereload.changed(files)
    // });
});