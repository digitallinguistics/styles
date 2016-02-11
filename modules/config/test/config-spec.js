describe('config', function () {

  beforeAll(function () {
    console.log('\nconfig test starting');
  });

  afterAll(function () {
    console.log('\nconfig test finished');
  });

  it('sets the port to 3000 on localhost', function () {
    delete process.env.WEBSITE_HOSTNAME;
    delete process.env.PORT;
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.port).toBe(3000);
  });

  it('sets the port to process.env.PORT on production', function () {
    process.env.PORT = 80;
    delete process.env.WEBSITE_HOSTNAME;
    const config = require('../config')('test.digitallinguistics.org');
    expect(+config.port).toBe(80);
  });

  it('sets the global env variable to `local` on localhost', function () {
    delete process.env.PORT;
    delete process.env.WEBSITE_HOSTNAME;
    require('../config')('test.digitallinguistics.org');
    expect(global.env).toBe('local');
  });

  it('sets the global env variable to `development` on the dev server', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-dev.azurewebsites.net';
    require('../config')('test.digitallinguistics.org');
    expect(global.env).toBe('development');
  });

  it('sets the global env variable to `procution` on the production server', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-org.azurewebsites.net';
    require('../config')('test.digitallinguistics.org');
  });

  it('sets the host to `localhost:3000` on localhost', function () {
    delete process.env.PORT;
    delete process.env.WEBSITE_HOSTNAME;
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.host).toBe('localhost:3000');
  });

  it('sets the host to `dlx-dev.azurewebsites.net` on the dev server', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-dev.azurewebsites.net';
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.host).toBe('dlx-dev.azurewebsites.net');
  });

  it('sets the host to `test.digitallinguistics.org` on the production server', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-test.azurewebsites.net';
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.host).toBe('test.digitallinguistics.org');
  });

  it('sets config.env equal to global.env', function () {
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.env).toEqual(global.env);
  });

  it('sets the correct baseUrl on localhost', function () {
    delete process.env.WEBSITE_HOSTNAME;
    delete process.env.PORT;
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.baseUrl).toBe('//localhost:3000/');
  });

  it('sets the correct baseUrl on development', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-dev.azurewebsites.net';
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.baseUrl).toBe('//dlx-dev.azurewebsites.net/');
  });

  it('sets the correct baseUrl on production', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-test.azurewebsites.net';
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.baseUrl).toBe('//test.digitallinguistics.org/');
  });

  it('sets the correct protocol on localhost', function () {
    delete process.env.WEBSITE_HOSTNAME;
    delete process.env.PORT;
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.protocol).toBe('http');
  });

  it('sets the correct protocol on development', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-dev.azurewebsites.net';
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.protocol).toBe('https');
  });

  it('sets the correct protocol on production', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-test.azurewebsites.net';
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.protocol).toBe('https');
  });

  it('sets the correct url on localhost', function () {
    delete process.env.WEBSITE_HOSTNAME;
    delete process.env.PORT;
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.url).toBe('http://localhost:3000/');
  });

  it('sets the correct url on development', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-dev.azurewebsites.net';
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.url).toBe('https://dlx-dev.azurewebsites.net/');
  });

  it('sets the correct url on production', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-test.azurewebsites.net';
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.url).toBe('https://test.digitallinguistics.org/');
  });

  it('correctly maps a base URL without a leading slash', function () {
    delete process.env.WEBSITE_HOSTNAME;
    delete process.env.PORT;
    const config = require('../config')('test.digitallinguistics.org');
    const url = config.mapBaseUrl('login');
    expect(url).toBe('//localhost:3000/login/');
  });

  it('correctly maps a base URL with a leading slash', function () {
    delete process.env.WEBSITE_HOSTNAME;
    delete process.env.PORT;
    const config = require('../config')('test.digitallinguistics.org');
    const url = config.mapBaseUrl('/login');
    expect(url).toBe('//localhost:3000/login/');
  });

  it('correctly maps an absolute URL', function () {
    process.env.WEBSITE_HOSTNAME = 'dlx-test.azurewebsites.net';
    const config = require('../config')('test.digitallinguistics.org');
    const url = config.mapUrl('login');
    expect(url).toBe('https://test.digitallinguistics.org/login/');
  });

  it('exposes the contents of `package.json`', function () {
    const config = require('../config')('test.digitallinguistics.org');
    expect(config.package).toBeDefined();
    expect(config.package.name).toBe('config');
  });
});
