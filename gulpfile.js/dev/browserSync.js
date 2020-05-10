/* eslint-disable */

const broswerSync = require('browser-sync').create()

const broswerSyncInit = () => {
  broswerSync.init({
    server: {
      baseDir: './'
    },
    open: false,
    port: 3000
  })
}

module.exports = broswerSyncInit
