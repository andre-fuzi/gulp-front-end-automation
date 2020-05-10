const { src } = require('gulp')
const lint = require('gulp-eslint')

const eslint = () => {
  return src('./src/**/*.js')
    .pipe(lint())
    .pipe(lint.format())
}

module.exports = eslint
