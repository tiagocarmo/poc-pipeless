const fs = require('fs');
const nconf = require('nconf');

nconf.argv()
  .env()
  .file({ file: 'config/config.json' });

module.exports = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: nconf.get('NEXT_PUBLIC_API_URL')
  },
  serverRuntimeConfig: {
    PIPELESS_API_KEY: nconf.get('PIPELESS_API_KEY'),
    PIPELESS_APP_ID: nconf.get('PIPELESS_APP_ID')
  }
}
