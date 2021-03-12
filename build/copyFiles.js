import { fileURLToPath } from 'url';
import fs                from 'fs';
import path              from 'path';

const { copyFile } = fs.promises;

const currentDir    = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(currentDir, `../components`);
const outDir        = path.join(currentDir, `../docs`);

copyFile(
  path.join(componentsDir, `components.css`),
  path.join(outDir, `components.css`),
);
