/* eslint-disable
  func-names,
  no-console,
  no-extra-parens,
*/

require('../../credentials/azure-storage');

const fs      = require('fs');
const storage = require('azure-storage').createBlobService();
const util    = require('util');

const storeFile = util.promisify(storage.createBlockBlobFromLocalFile).bind(storage);

const contentSettings = {
  contentEncoding: 'utf8',
  contentType:     'text/css',
};

const storeCss = filename => storeFile(`css`, filename, `css/${filename}`, { contentSettings });

(async function() {
  const filenames = await util.promisify(fs.readdir)(`css`, `utf8`);
  await Promise.all(filenames.map(storeCss));
  console.log(` - CSS files uploaded`);
}());
