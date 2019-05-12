/**
 * Uploads all the assets to the DLx Azure Storage account
 */

/* eslint-disable
  max-statements,
*/

const createSpinner = require(`ora`);
const path          = require(`path`);
const recurse       = require(`recursive-readdir`);

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

async function uploadFontOld(filepath) {

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

function uploadImageOld(filepath) {

  const filename = path.basename(filepath);

  return createBlob(`img`, filename, filepath, {
    contentSettings: {
      contentType: imageTypes[path.extname(filename)],
    },
  });

}

function uploadLESSFileOld(filepath) {

  const filename = path.basename(filepath);

  return createBlob(`less`, filename, filepath, {
    contentSettings: {
      contentType: `text/css`,
    },
  });

}

function uploadLESSFile(filepath) {

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

  // Upload LESS files
  const lessSpinner        = createSpinner(`Uploading LESS files`).start();
  const globalsDir         = path.join(__dirname, `../globals`);
  const componentsDir      = path.join(__dirname, `../components`);
  const globalsFiles       = await recurse(globalsDir);
  const componentsFileList = await recurse(componentsDir);
  const componentsFiles    = componentsFileList.filter(filepath => filepath.endsWith(`.less`));
  const fontFile           = path.join(__dirname, `../fonts/fonts.less`);
  await Promise.all([...globalsFiles, ...componentsFiles, fontFile].map(uploadLESSFile));
  lessSpinner.succeed(`LESS files uploaded`);

}();
