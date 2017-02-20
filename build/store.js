require('../../credentials/styles');

const fs      = require('fs');
const path    = require('path');
const storage = require('azure-storage').createBlobService();

const copyReset = () => new Promise((resolve, reject) => {

  const rs = fs.createReadStream('node_modules/flexbox-reset/flexbox-reset.less');
  const ws = fs.createWriteStream('less/flexbox-reset.less');

  rs.on('error', reject);
  ws.on('error', reject);
  ws.on('finish', resolve);
  rs.pipe(ws);

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

copyReset()
.then(() => console.log('reset.less copied'))
.then(storeEslint)
.then(() => console.log('.eslintrc uploaded'))
.then(storeImages)
.then(() => console.log('Images uploaded'))
.then(storeLess)
.then(() => console.log('LESS files uploaded'))
.then(storeCss)
.then(() => console.log('CSS files uploaded'))
.then(() => console.log('All files uploaded'))
.catch(console.error);
