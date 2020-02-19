const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

function sassCompiler() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css/'));
};

gulp.task('sass', sassCompiler);

function watch() {
  gulp.watch('./css/scss/*.scss', sassCompiler)
};

gulp.task('default', watch);