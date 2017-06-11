/* eslint-disable no-console */

require('../../credentials/styles');

const fs      = require('fs');
const path    = require('path');
const storage = require('azure-storage').createBlobService();

const storeCss = () => new Promise((resolve, reject) => {

  fs.readdir('css', 'utf8', (err, filenames) => {

    if (err) reject(err);

    Promise.all(filenames.map(filename => new Promise((resolve, reject) => {

      const contentSettings = {
        contentEncoding: 'utf8',
        contentType:     'text/css',
      };

      const cb = err => {
        if (err) reject(err);
        else resolve();
      };

      storage.createBlockBlobFromLocalFile(
        'css',
        filename,
        `css/${filename}`,
        { contentSettings },
        cb
      );

    })))
    .then(resolve)
    .catch(reject);

  });

});

const storeEslint = () => new Promise((resolve, reject) => {

  const contentSettings = {
    contentEncoding: 'utf8',
    contentType:     'application/json',
  };

  const cb = err => {
    if (err) reject(err);
    else resolve();
  };

  storage.createBlockBlobFromLocalFile(
    'dev',
    '.eslintrc',
    './stylesheets/.eslintrc',
    { contentSettings },
    cb
  );

});

const storeFonts = () => new Promise((resolve, reject) => {

  fs.readdir('fonts', 'utf8', (err, filenames) => {

    if (err) reject(err);

    Promise.all(filenames.map(filename => new Promise((resolve, reject) => {

      const ext = path.parse(filename).ext;

      let contentType;

      switch (ext) {
        case '.ttf': contentType = 'font/ttf'; break;
        case '.woff': contentType = 'font/woff'; break;
        case '.woff2': contentType = 'font/woff2'; break;
        default: contentType = undefined;
      }

      const contentSettings = { contentType };

      const cb = err => {
        if (err) reject(err);
      };

      storage.createBlockBlobFromLocalFile(
        'fonts',
        filename,
        `fonts/${filename}`,
        { contentSettings },
        cb
      );

    })))
    .then(resolve)
    .catch(reject);

  });


});

const storeImages = () => new Promise((resolve, reject) => {

  fs.readdir('img', 'utf8', (err, filenames) => {

    if (err) reject(err);

    Promise.all(filenames.map(filename => new Promise((resolve, reject) => {

      const contentSettings = {};

      switch (path.parse(filename).ext) {
        case 'ico': contentSettings.contentType = 'image/x-icon'; break;
        case 'png': contentSettings.contentType = 'image/png'; break;
        case 'svg': contentSettings.contentType = 'image/svg+xml'; break;
        default: break;
      }

      const cb = err => {
        if (err) reject(err);
        else resolve();
      };

      storage.createBlockBlobFromLocalFile(
        'img',
        filename,
        `img/${filename}`,
        { contentSettings },
        cb
      );

    })))
    .then(resolve)
    .catch(reject);

  });

});

const storeLess = () => new Promise((resolve, reject) => {

  fs.readdir('less', 'utf8', (err, filenames) => {

    if (err) reject(err);

    Promise.all(filenames.map(filename => new Promise((resolve, reject) => {

      const contentSettings = {
        contentEncoding: 'utf8',
        contentType:     'text/css',
      };

      const cb = err => {
        if (err) reject(err);
        else resolve();
      };

      storage.createBlockBlobFromLocalFile(
        'less',
        filename,
        `less/${filename}`,
        { contentSettings },
        cb
      );

    })))
    .then(resolve)
    .catch(reject);

  });

});

Promise.all([
  storeEslint().then(() => console.log('.eslintrc uploaded')),
  storeFonts().then(() => console.log('Fonts uploaded')),
  storeImages().then(() => console.log('Images uploaded')),
  storeLess().then(() => console.log('LESS files uploaded')),
  storeCss().then(() => console.log('CSS files uploaded')),
]).then(() => console.log('All files uploaded'))
.catch(console.error);
