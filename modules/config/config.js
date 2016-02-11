
module.exports = hostname => {

  const config = {};

  (function () {

    // The port to use. Set to 3000 on localhost.
    this.port = process.env.PORT || 3000;

    // config.host is the hostname for this app
    if (!process.env.WEBSITE_HOSTNAME) {
      global.env = 'local';
      this.host = `localhost:${this.host}`;
    } else {
      if (process.env.WEBSITE_HOSTNAME === 'dlx-dev.azurewebsites.net') {
        global.env = 'development';
        this.host = process.env.WEBSITE_HOSTNAME;
      } else {
        global.env = 'production';
        this.host = hostname;
      }
    }

    // Whether the environment is `local`, `development` (the dev server), or `production`
    this.env = global.env;

    // The protocol-relative URL for this app.
    this.baseUrl = `//${exports.host}/`;

    // Determines which protocol to use based on the environment.
    this.protocol = global.env === 'local' ? 'http' : 'https';

    // The absolute URL for this app.
    this.url = `${this.protocol}:${this.baseUrl}/`;

    // Maps a path to a protocol-relative URL. NB: The base URL ends in a trailing slash, as does the returned URL.
    this.mapBaseUrl = path => (exports.baseUrl + path).replace(/\/$/, '') + '/';

    // Maps a path to an absolute URL. NB: The absolute URL ends in a trailing slash, as does the returned URL.
    this.mapUrl = path => (exports.url + path).replace(/\/$/, '') + '/';

    this.package = require('../package.json');

  }).call(config);

  return config;
};
