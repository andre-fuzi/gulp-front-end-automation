const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function sassCompiler() {
  return gulp.src('./css/scss/*.scss')
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css'))
};

gulp.task('sass', sassCompiler);

function watch() {
  gulp.watch('./css/scss/*.scss', sassCompiler)
};

gulp.task('default', watch);