const convertLESS = require(`./convertLESS`);
const path        = require(`path`);
const recursive   = require(`recursive-readdir`);

async function buildCSS() {
  try {
    const globalsDir         = path.join(__dirname, `../globals`);
    const componentsDir      = path.join(__dirname, `../components`);
    const globalsFilesList   = await recursive(globalsDir);
    const globalsFiles       = globalsFilesList.filter(filepath => filepath.endsWith(`.less`));
    const componentsFileList = await recursive(componentsDir);
    const componentsFiles    = componentsFileList.filter(filepath => filepath.endsWith(`.less`));
    const fontFile           = path.join(__dirname, `../fonts/fonts.less`);
    const dlxFile            = path.join(__dirname, `../kss/dlx.less`);
    convertLESS(fontFile);
    convertLESS(dlxFile);
    globalsFiles.forEach(convertLESS);
    componentsFiles.forEach(convertLESS);

  } catch (e) {
    console.error(e);
  }
}

module.exports = buildCSS;
