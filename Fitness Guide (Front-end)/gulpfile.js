var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var debug = require("debug");
var del = require("del");
var browsecSync = require('browser-sync').create();


gulp.task('scss', function () {
    return gulp.src('src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'))
        .pipe(browsecSync.stream());
});

gulp.task('clean', function () {
    return del("public");
});

gulp.task('static', function () {
    return gulp.src(['src/**', '!src/scss/**', '!src/js/**'])
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'))
        .pipe(browsecSync.stream());
});

gulp.task('serve', function () {
    browsecSync.init({
        server: {
            baseDir: './public'
        }
    });

    gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('src/static/**', gulp.series('static'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('public/static').on('change', browsecSync.reload);
});

gulp.task('default', gulp.series('scss', 'static', 'js', 'serve'));

