import { emptyDir }      from 'fs-extra';
import { fileURLToPath } from 'url';
import path              from 'path';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const outDir     = path.join(currentDir, `../docs`);

emptyDir(outDir);
