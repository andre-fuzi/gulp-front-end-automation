/* eslint-disable */

const gulp = require('gulp')
const svgmin = require('gulp-svgmin')

const svgMinify = () => {
  return gulp.src('src/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('dist'))
}

module.exports = svgMinify
