const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  broswerSync = require('browser-sync').create(),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  svgmin = require('gulp-svgmin');

function sassCompiler() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(broswerSync.stream());
};

function jsCompiler() {
  return gulp.src('./src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
      "presets": ["@babel/preset-env"]
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(broswerSync.stream());
}

function svgMinifier() {
  return gulp.src('./src/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('./dist'));
}

function broswerSyncInit() {
  broswerSync.init({
    server: {
      baseDir: "./"
    },
    open: false,
    port: 3000
  });
}

function watch() {
  gulp.watch('./src/**/*.scss', sassCompiler);
  gulp.watch('./src/**/*.js', jsCompiler);
  gulp.watch(['*.html', '*.php']).on('change', broswerSync.reload);
};

// gulp.task('default', gulp.parallel('sass-compiler', 'svg-min', 'js-compiler', 'watch', 'browser-sync'));
exports.default = gulp.series(gulp.parallel(sassCompiler, svgMinifier, jsCompiler), gulp.parallel(broswerSyncInit, watch));