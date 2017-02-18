require('../../credentials/styles');

const fs      = require('fs');
const path    = require('path');
const storage = require('azure-storage').createBlobService();

const storeEslint = () => new Promise((resolve, reject) => {

  const contentSettings = {
    contentEncoding: 'utf8',
    contentType:     'application/json',
  };

  const cb = err => {
    if (err) return reject(err);
    console.log('.eslintrc uploaded');
    resolve();
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

storeEslint()
.then(storeImages)
.then(() => console.log('Files finished uploading.'))
.catch(console.error);
