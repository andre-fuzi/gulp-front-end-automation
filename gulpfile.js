const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  broswerSync = require('browser-sync').create(),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  svgmin = require('gulp-svgmin');

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
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(broswerSync.stream());
}

gulp.task('js-compiler', jsCompiler);

function svgMinifier() {
  return gulp.src('./src/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('./dist'));
}

gulp.task('svg-min', svgMinifier);

function broswerSyncInit () {
  broswerSync.init({
    server: {
      baseDir: "./"
    },
    open: false,
    port: 3000
  });
}

gulp.task('browser-sync', broswerSyncInit);

function watch() {
  gulp.watch('./src/**/*.scss', sassCompiler);
  gulp.watch('./src/**/*.js', jsCompiler);
  gulp.watch(['*.html', '*.php']).on('change', broswerSync.reload);
};

gulp.task('watch', watch);

gulp.task('default', gulp.parallel('sass-compiler', 'svg-min', 'js-compiler', 'watch', 'browser-sync'));