const log4js = require('log4js')

log4js.configure({
  appenders: {
    json: {
      type: 'console',
      layout: {
        type: 'messagePassThrough'
      }
    }
  },
  categories: {
    json: {
      appenders: ['json'],
      level: 'info'
    },
    default: {
      appenders: ['json'],
      level: 'info'
    }
  },
  replaceConsole: true
})

log4js.json = (options) => {
  options.requestid = options.requestid || ''
  if (process.env.MERCURY_APP_NAME) {
    options.mercury_app_name = process.env.MERCURY_APP_NAME
  } else {
    options.mercury_app_name = ''
  }
  log4js.getLogger('json').info(JSON.stringify(options))
}

module.exports = log4js
