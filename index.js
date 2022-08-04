if (typeof process !== 'undefined' && parseInt(process.versions.node.split('.')[0]) < 14) {
  console.error('Некорректная версия ноды: ', process.versions.node)
  console.error('Обновите версию до >= 14.x.x с сервиса https://nodejs.org/')
  process.exit(1)
}

module.exports = require('./lib/loader.js')
