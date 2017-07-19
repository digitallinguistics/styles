/* eslint-disable
  func-names,
  no-console,
  no-extra-parens,
*/

const fs   = require('fs');
const less = require('less');
const util = require('util');

const convert = async filename => {
  if (filename.includes(`README`)) return;
  const lessData = await util.promisify(fs.readFile)(`less/${filename}`, `utf8`);
  const output   = await less.render(lessData);
  const path     = `css/${filename.replace(`.less`, `.css`)}`;
  await util.promisify(fs.writeFile)(path, output.css, `utf8`);
};

(async function() {
  try {
    const filenames = await util.promisify(fs.readdir)(`less`, `utf8`);
    await Promise.all(filenames.map(convert));
    console.log(` - LESS files converted`);
  } catch (e) {
    console.error(e);
  }
}());
