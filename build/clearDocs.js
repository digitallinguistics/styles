const { emptyDir } = require(`fs-extra`);
const path         = require(`path`);

const kssOutputDir = path.join(__dirname, `../docs`);

emptyDir(kssOutputDir);
