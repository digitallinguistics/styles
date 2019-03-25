const CleanCSSPlugin = require(`less-plugin-clean-css`);
const path           = require(`path`);
const less           = require(`less`);

const {
  readFile,
  writeFile,
} = require(`fs-extra`);

const cleanCSSPlugin = new CleanCSSPlugin();
const cssFilePath    = path.join(__dirname, `../kss/dlx.css`);
const lessFilePath   = path.join(__dirname, `../kss/dlx.less`);

const lessOptions = {
  paths:   [`components`],
  plugins: [cleanCSSPlugin],
};

async function buildCSS() {
  const lessData = await readFile(lessFilePath, `utf8`);
  const { css }  = await less.render(lessData, lessOptions);
  await writeFile(cssFilePath, css, `utf8`);
}

buildCSS()
.catch(console.error);
