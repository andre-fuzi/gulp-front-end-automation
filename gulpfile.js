const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const broswerSync = require('browser-sync').create();
const babel = require('gulp-babel');

function sassCompiler() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(broswerSync.stream());
};

gulp.task('sass-compiler', sassCompiler);

function jsCompiler() {
  return gulp.src('./src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
      "presets": ["@babel/preset-env"]
    }))
    .pipe(gulp.dest('./dist/js/'));
}

gulp.task('js-compiler', jsCompiler);

function broswerSyncInit () {
  broswerSync.init({
    server: {
      baseDir: "./"
    }
  });
}

gulp.task('browser-sync', broswerSyncInit);

function watch() {
  gulp.watch('./src/**/*.scss', sassCompiler);
  gulp.watch('./src/**/*.js', jsCompiler);
  gulp.watch(['*.html', '*.php']).on('change', broswerSync.reload);
};

gulp.task('watch', watch);

gulp.task('default', gulp.parallel('sass-compiler', 'js-compiler', 'watch', 'browser-sync'));