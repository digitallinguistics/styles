/**
 * Uploads all the assets to the DLx Azure Storage account
 */

const azure   = require(`azure-storage`);
const path    = require(`path`);
const recurse = require(`recursive-readdir`);

const componentsDir = path.join(__dirname, `../components`);
const storage       = azure.createBlobService();

void async function upload() {

  const filelist  = await recurse(componentsDir);
  const lessFiles = filelist.filter(filepath => path.extname(filepath) === `.less`);
  await Promise.all(lessFiles.map(uploadFile));

}();

// TODO
// - components
// - fonts
// - globals
// - img
