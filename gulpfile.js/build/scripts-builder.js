/* eslint-disable */

const { src, dest } = require('gulp')
const babel = require('gulp-babel')
const broswerSync = require('browser-sync').create()
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const debug = require('gulp-debug')

const scriptsBuilder = () => {
  return src('src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('dist/js'))
    .pipe(broswerSync.stream())
}

module.exports = scriptsBuilder
