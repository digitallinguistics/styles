const path = require(`path`);

const {
  mkdirp: makeDir,
  remove,
} = require(`fs-extra`);

const kssOutputDir = path.join(__dirname, `../docs`);

void async function clean() {
  await remove(kssOutputDir);
  await makeDir(kssOutputDir);
}();
