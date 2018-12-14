/**
 * Uploads all the assets to the DLx Azure Storage account
 */

/* eslint-disable
  max-statements,
*/

const azure            = require(`azure-storage`);
const connectionString = require(`../../credentials/azure-storage.js`);
const createSpinner    = require(`ora`);
const path             = require(`path`);
const { promisify }    = require(`util`);
const recurse          = require(`recursive-readdir`);

const storage           = azure.createBlobService(connectionString);
const createBlob        = promisify(storage.createBlockBlobFromLocalFile).bind(storage);
const getBlobProperties = promisify(storage.getBlobProperties).bind(storage);

const fontTypes = {
  '.ttf':   `font/ttf`,
  '.woff':  `font/woff`,
  '.woff2': `font/woff2`,
};

const imageTypes = {
  '.ico':  `image/x-icon`,
  '.jpeg': `image/jpeg`,
  '.jpg':  `image/jpeg`,
  '.png':  `image/png`,
  '.svg':  `image/svg+xml`,
};

async function uploadFont(filepath) {

  const filename = path.basename(filepath);

  try {

    await getBlobProperties(`fonts`, filename);

  } catch (e) {

    if (e.statusCode === 404) {

      await createBlob(`fonts`, filename, filepath, {
        contentSettings: {
          contentType: fontTypes[path.extname(filename)],
        },
      });

    } else {

      throw e;

    }

  }

}

function uploadImage(filepath) {

  const filename = path.basename(filepath);

  return createBlob(`img`, filename, filepath, {
    contentSettings: {
      contentType: imageTypes[path.extname(filename)],
    },
  });

}

void async function upload() {

  // Upload images
  const imageSpinner    = createSpinner(`Uploading images`).start();
  const imagesDir       = path.join(__dirname, `../img`);
  const imagesFileList  = await recurse(imagesDir);
  const imageFiles      = imagesFileList.filter(filepath => Object.keys(imageTypes).includes(path.extname(filepath)));
  await Promise.all(imageFiles.map(uploadImage));
  imageSpinner.succeed(`Images uploaded`);

  // Upload fonts
  const fontsSpinner   = createSpinner(`Uploading fonts`).start();
  const fontsDir       = path.join(__dirname, `../fonts`);
  const fontFileList   = await recurse(fontsDir);
  const fontFiles      = fontFileList.filter(filepath => Object.keys(fontTypes).includes(path.extname(filepath)));
  await Promise.all(fontFiles.map(uploadFont));
  fontsSpinner.succeed(`Fonts uploaded`);

}();
