import CSSCleaner        from 'clean-css'
import { fileURLToPath } from 'url'
import fs                from 'fs'
import less              from 'less'
import path              from 'path'
import recurse           from 'recursive-readdir'

const { readFile, writeFile } = fs.promises

const currentDir = path.dirname(fileURLToPath(import.meta.url))

const bundlePath    = path.join(currentDir, `../dlx.less`)
const componentsDir = path.join(currentDir, `../components`)
const typographyDir = path.join(currentDir, `../typography`)

const cleanCSSOptions = {}

const cssCleaner = new CSSCleaner(cleanCSSOptions)

const lessOptions = {
  math:  `strict`,
  paths: [`components`, `typography`],
}

function ignore(filePath, stats) {
  if (stats.isDirectory()) return false
  return path.extname(filePath) !== `.less`
}

async function convertFile(lessFilePath) {
  const lessData             = await readFile(lessFilePath, `utf8`)
  const { css }              = await less.render(lessData, lessOptions)
  const { styles: cleanCSS } = cssCleaner.minify(css)
  const dirname              = path.dirname(lessFilePath)
  const filename             = path.basename(lessFilePath, `.less`)
  const cssFilePath          = path.join(dirname, `${ filename }.css`)
  await writeFile(cssFilePath, cleanCSS, `utf8`)
}

async function convertFolder(dir) {
  const fileList = await recurse(dir, [ignore])
  return Promise.all(fileList.map(filePath => convertFile(filePath)))
}

void async function buildCSS() {

  await Promise.all([
    convertFile(bundlePath),
    convertFolder(typographyDir),
    convertFolder(componentsDir),
  ])

}()
