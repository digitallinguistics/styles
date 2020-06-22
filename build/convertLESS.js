const CleanCSSPlugin = require(`less-plugin-clean-css`);
const path           = require(`path`);
const less           = require(`less`);

const {
  readFile,
  writeFile,
} = require(`fs-extra`);

const cleanCSSPlugin = new CleanCSSPlugin();

const lessOptions = {
  math:     `strict`,
  paths:   [`components`],
  plugins: [cleanCSSPlugin],
};

async function convertLESS(lessFilePath) {
  try {
    const cssFilePath    = path.join(lessFilePath.replace(`.less`, `.css`));
    const lessData       = await readFile(lessFilePath, `utf8`);
    const { css }        = await less.render(lessData, lessOptions);
    await writeFile(cssFilePath, css, `utf8`);
  } catch (e) {
    console.error(e);
  }
}

module.exports = convertLESS;
