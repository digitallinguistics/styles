/* eslint-disable
  no-console
*/

require('../../credentials/azure-storage');

const fs      = require('fs');
const path    = require('path');
const storage = require('azure-storage').createBlobService();
const util    = require('util');

const readdir   = util.promisify(fs.readdir);
const storeFile = util.promisify(storage.createBlockBlobFromLocalFile).bind(storage);

const storeFont = async filename => {

  const ext = path.parse(filename).ext;
  let contentType;

  switch (ext) {
    case '.ttf': contentType = 'font/ttf'; break;
    case '.woff': contentType = 'font/woff'; break;
    case '.woff2': contentType = 'font/woff2'; break;
    default: contentType = undefined;
  }

  const contentSettings = { contentType };
  await storeFile(`fonts`, filename, `fonts/${filename}`, { contentSettings });

};

const storeFonts = async () => {
  const filenames = await readdir(`fonts`, `utf8`);
  await Promise.all(filenames.map(storeFont));
  console.log(` - fonts uploaded`);
};

const storeImage = async filename => {

  let contentType;

  switch (path.parse(filename).ext) {
    case 'ico': contentType = 'image/x-icon'; break;
    case 'png': contentType = 'image/png'; break;
    case 'svg': contentType = 'image/svg+xml'; break;
    default: break;
  }

  const contentSettings = { contentType };
  await storeFile(`img`, filename, `img/${filename}`, { contentSettings });

};

const storeImages = async () => {
  const filenames = await readdir(`img`, `utf8`);
  await Promise.all(filenames.map(storeImage));
  console.log(` - images uploaded`);
};

const storeLessFile = async filename => {

  const contentSettings = {
    contentEncoding: 'utf8',
    contentType:     'text/css',
  };

  await storeFile(`less`, filename, `less/${filename}`, { contentSettings });

};

const storeLessFiles = async () => {
  const filenames = await readdir(`less`, `utf8`);
  await Promise.all(filenames.map(storeLessFile));
  console.log(` - LESS files uploaded`);
};

const storeLint = async () => {

  const contentSettings = {
    contentEncoding: `utf8`,
    contentType:     `application/json`,
  };

  await storeFile(`dev`, `.eslintrc`, `./stylesheets/.eslintrc`, { contentSettings });
  console.log(` - .eslintrc uploaded`);

  await storeFile(`dev`, `.stylelintrc`, `./stylesheets/.stylelintrc`, { contentSettings });
  console.log(` - .stylelintrc uploaded`);

};

const storeJS = async () => {

  const contentSettings = {
    contentEncoding: `utf8`,
    contentType:     `application/javascript`,
  };

  await storeFile(`scripts`, `patterns.js`, `./js/patterns.js`, { contentSettings });
  console.log(` - patterns.js uploaded`);

};

Promise.all([
  // storeFonts(),
  storeImages(),
  storeLessFiles(),
  storeLint(),
  storeJS(),
])
.then(() => console.log(` - all files uploaded`));
