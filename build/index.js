const buildCSS = require(`./buildCSS`);
const clean    = require(`./clean`);

void async function build() {
  await clean();
  await buildCSS();
};
