const buildCSS = require(`./buildCSS`);
const clean    = require(`./clean`);

async function build() {
  await clean();
  await buildCSS();
}

build()
.catch(console.error);
