import createSpriteCollection from 'svgstore'
import path                   from 'node:path'

import { readdir, readFile } from 'node:fs/promises'

const spriteOptions = {
  copyAttrs: [
    `fill`,
    `stroke`,
    `stroke-width`,
    `stroke-linecap`,
    `stroke-linejoin`,
  ],
  svgAttrs: {
    'aria-hidden': true,
    style:         `display: none;`,
  },
}

const svgPath = path.resolve(import.meta.dirname, `../../docs/assets/svg`)
const sprites = createSpriteCollection(spriteOptions)
const files   = await readdir(svgPath, { withFileTypes: true })

for (const file of files) {

  const filePath = path.join(file.parentPath, file.name)
  const svg      = await readFile(filePath, `utf8`)
  const name     = file.name.replace(/\.svg$/v, ``)

  sprites.add(name, svg)

}

export default sprites.toString({ inline: true })
