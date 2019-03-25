const { copyFile } = require(`fs-extra`);
const path         = require(`path`);

const kssInputDir  = path.join(__dirname, `../kss`);
const kssOutputDir = path.join(__dirname, `../docs`);

void async function copyFiles() {
  await copyFile(path.join(kssInputDir, `CNAME`), path.join(kssOutputDir, `CNAME`));
  await copyFile(path.join(kssInputDir, `dlx.css`), path.join(kssOutputDir, `dlx.css`));
  await copyFile(path.join(kssInputDir, `patterns.css`), path.join(kssOutputDir, `patterns.css`));
  await copyFile(path.join(kssInputDir, `patterns.js`), path.join(kssOutputDir, `patterns.js`));
  await copyFile(path.join(kssInputDir, `tunnel.ico`), path.join(kssOutputDir, `favicon.ico`));
}();
