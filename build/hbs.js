/* eslint-disable
  func-names,
  no-extra-parens,
*/

const colorGroups = require('../data/colors.json');
const fs          = require('fs');
const hbs         = require('handlebars');
const icons       = require('../data/icons.json');
const patterns    = require('../data/patterns.json');
const util        = require('util');

const readFile = file => util.promisify(fs.readFile)(file, `utf8`);

const getHtml = async className => {
  patterns[className].html = await readFile(`./examples/${className}.hbs`);
};

const registerPartial = async filename => {
  const partial = await readFile(`./hbs/partials/${filename}`);
  hbs.registerPartial(filename.replace(`.hbs`, ``), partial);
};

(async function() {

  const partials = await util.promisify(fs.readdir)(`./hbs/partials`);
  await Promise.all(partials.map(registerPartial));
  const template = await readFile(`./hbs/index.hbs`);
  const compile  = hbs.compile(template);
  await Promise.all(Object.keys(patterns).map(getHtml));

  const data = {
    colorGroups,
    icons,
    patterns,
  };

  const html = compile(data);
  await util.promisify(fs.writeFile)(`index.html`, html);

}());
