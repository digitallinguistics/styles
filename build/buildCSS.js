import createSpinner     from 'ora';
import { fileURLToPath } from 'url';
import fs                from 'fs';
import less              from 'less';
import path              from 'path';
import recurse           from 'recursive-readdir';

const { readFile, writeFile } = fs.promises;

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const bundlePath    = path.join(currentDir, `../dlx.less`);
const componentsDir = path.join(currentDir, `../components`);
const fontsDir      = path.join(currentDir, `../fonts`);

const lessOptions = {
  math:  `strict`,
  paths: [`components`, `fonts`],
};

function ignore(filePath, stats) {
  if (stats.isDirectory()) return false;
  return path.extname(filePath) !== `.less`;
}

async function convertFile(lessFilePath) {
  const lessData    = await readFile(lessFilePath, `utf8`);
  const { css }     = await less.render(lessData, lessOptions);
  const dirname     = path.dirname(lessFilePath);
  const filename    = path.basename(lessFilePath, `.less`);
  const cssFilePath = path.join(dirname, `${filename}.css`);
  await writeFile(cssFilePath, css, `utf8`);
}

async function convertFolder(dir) {
  const fileList = await recurse(dir, [ignore]);
  return Promise.all(fileList.map(filePath => convertFile(filePath)));
}

void async function buildCSS() {

  const spinner = createSpinner(`Building CSS files.`).start();

  try {
    await Promise.all([
      convertFile(bundlePath),
      convertFolder(fontsDir),
      convertFolder(componentsDir),
    ]);
  } catch (e) {
    return spinner.fail(e.message);
  }

  spinner.succeed(`CSS files built.`);

}();
