/**
 * Uploads all the assets to the DLx Azure Storage account
 */

/* eslint-disable
  max-statements,
*/

const createSpinner = require(`ora`);
const path          = require(`path`);
const recurse       = require(`recursive-readdir`);

const {
  Aborter,
  BlockBlobURL,
  ContainerURL,
  ServiceURL,
  SharedKeyCredential,
  StorageURL,
  uploadFileToBlockBlob,
} = require(`@azure/storage-blob`);

if (process.env.NODE_ENV === `development`) {
  require(`./credentials`); // eslint-disable-line global-require
}

// Constants

const {
  AZURE_STORAGE_ACCOUNT: account,
  AZURE_STORAGE_KEY:     key,
} = process.env;

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

// Initialize Azure Storage

const credential        = new SharedKeyCredential(account, key);
const pipeline          = StorageURL.newPipeline(credential);
const url               = `https://${account}.blob.core.windows.net`;
const serviceURL        = new ServiceURL(url, pipeline);
const aborter           = Aborter.none;
const fontContainerURL  = ContainerURL.fromServiceURL(serviceURL, `fonts`);
const imageContainerURL = ContainerURL.fromServiceURL(serviceURL, `img`);
const lessContainerURL  = ContainerURL.fromServiceURL(serviceURL, `less`);

function uploadFont(filepath) {

  const filename    = path.basename(filepath);
  const contentType = fontTypes[path.extname(filename)];
  const blockBlobURL = BlockBlobURL.fromContainerURL(fontContainerURL, filename);

  const options = {
    blobHTTPHeaders: {
      blobContentType: contentType,
    },
  };

  try {

    return blockBlobURL.getProperties(aborter);

  } catch (e) {

    if (e.statusCode !== 404) throw e;

    return uploadFileToBlockBlob(aborter, filepath, blockBlobURL, options);

  }

}

function uploadImage(filepath) {

  const filename    = path.basename(filepath);
  const contentType = imageTypes[path.extname(filename)];

  const options = {
    blobHTTPHeaders: {
      blobContentType: contentType,
    },
  };

  const blockBlobURL = BlockBlobURL.fromContainerURL(imageContainerURL, filename);
  return uploadFileToBlockBlob(aborter, filepath, blockBlobURL, options);

}

function uploadLESSFile(filepath) {

  const options = {
    blobHTTPHeaders: {
      blobContentType: `text/css`,
    },
  };

  const filename = path.basename(filepath);

  const blockBlobURL = BlockBlobURL.fromContainerURL(lessContainerURL, filename);
  return uploadFileToBlockBlob(aborter, filepath, blockBlobURL, options);

}

void async function upload() {

  // Upload images

  const imageSpinner = createSpinner(`Uploading images`).start();

  try {
    const imagesDir       = path.join(__dirname, `../img`);
    const imagesFileList  = await recurse(imagesDir);
    const imageFiles      = imagesFileList.filter(filepath => Object.keys(imageTypes).includes(path.extname(filepath)));
    await Promise.all(imageFiles.map(uploadImage));
    imageSpinner.succeed(`Images uploaded`);
  } catch (e) {
    return imageSpinner.fail(e.message);
  }

  // Upload fonts

  const fontsSpinner = createSpinner(`Uploading fonts`).start();

  try {
    const fontsDir       = path.join(__dirname, `../fonts`);
    const fontFileList   = await recurse(fontsDir);
    const fontFiles      = fontFileList.filter(filepath => Object.keys(fontTypes).includes(path.extname(filepath)));
    await Promise.all(fontFiles.map(uploadFont));
    fontsSpinner.succeed(`Fonts uploaded`);
  } catch (e) {
    return fontsSpinner.fail(e.message);
  }

  // Upload LESS files

  const lessSpinner        = createSpinner(`Uploading LESS files`).start();

  try {
    const globalsDir         = path.join(__dirname, `../globals`);
    const componentsDir      = path.join(__dirname, `../components`);
    const globalsFiles       = await recurse(globalsDir);
    const componentsFileList = await recurse(componentsDir);
    const componentsFiles    = componentsFileList.filter(filepath => filepath.endsWith(`.less`));
    const fontFile           = path.join(__dirname, `../fonts/fonts.less`);
    await Promise.all([...globalsFiles, ...componentsFiles, fontFile].map(uploadLESSFile));
    lessSpinner.succeed(`LESS files uploaded`);
  } catch (e) {
    return lessSpinner.fail(e.message);
  }

}();
