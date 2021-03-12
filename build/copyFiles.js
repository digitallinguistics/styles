import { fileURLToPath } from 'url';
import fs                from 'fs';
import path              from 'path';

const { copyFile } = fs.promises;

const currentDir = path.dirname(fileURLToPath(import.meta.url));

copyFile(
  path.join(currentDir, `../images/tunnel.ico`),
  path.join(currentDir, `../docs/favicon.ico`),
);
