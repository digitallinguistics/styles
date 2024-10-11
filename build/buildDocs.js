import Eleventy from '@11ty/eleventy'
import path     from 'node:path'

const componentsPath = path.resolve(import.meta.dirname, `..`)
const configPath     = path.resolve(import.meta.dirname, `../.eleventy.js`)
const outPath        = path.resolve(import.meta.dirname, `../site`)

const options = {
  configPath,
}

export default async function buildDocs() {
  const eleventy = new Eleventy(componentsPath, outPath, options)
  await eleventy.write()
}
