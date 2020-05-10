/* eslint-disable */

const { src, dest } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const broswerSync = require('browser-sync').create()
const rename = require('gulp-rename')
const sass = require('gulp-sass')

const sassBuilder = () => {
  return src('src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('dist/css'))
    .pipe(broswerSync.stream())
}

module.exports = sassBuilder
