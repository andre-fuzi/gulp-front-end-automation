/* eslint-disable */
const execSync = require('child_process').execSync
const folders = [ './dist' ]

const clean = (done) => {
  execSync(`rm -rf ${folders.join(' ')}`)
  done()
};

module.exports = clean
