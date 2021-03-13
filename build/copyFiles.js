import { fileURLToPath } from 'url';
import fs                from 'fs-extra';
import path              from 'path';

const { copy, ensureDir } = fs;

const currentDir = path.dirname(fileURLToPath(import.meta.url));

void async function copyFiles() {

  await copy(
    path.join(currentDir, `../images/tunnel.ico`),
    path.join(currentDir, `../docs/favicon.ico`),
  );

  await ensureDir(currentDir, `../docs/fonts/LinuxLibertine`);

  await copy(
    path.join(currentDir, `../typography/LinuxLibertine`),
    path.join(currentDir, `../docs/fonts/LinuxLibertine`),
  );

}();
