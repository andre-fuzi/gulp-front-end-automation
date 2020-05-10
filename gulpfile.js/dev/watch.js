/* eslint-disable */
const { watch, series } = require('gulp')
const broswerSync = require('browser-sync')

const eslint = require('./../lint/eslint')
const jsCompiler = require('../build/scripts-builder')
const sassCompiler = require('./../build/sass')

const watchFiles = () => {
  watch('/src/**/*.scss', sassCompiler)
  watch('/src/**/*.js', series(eslint, jsCompiler))
  watch(['*.html', '*.php']).on('change', broswerSync.reload)
}

module.exports = watchFiles
