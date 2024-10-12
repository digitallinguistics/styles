import Eleventy from '@11ty/eleventy'
import path     from 'node:path'

const rootPath   = path.resolve(import.meta.dirname, `../..`)
const configPath = path.resolve(import.meta.dirname, `./.eleventy.js`)
const outPath    = path.resolve(import.meta.dirname, `../../site`)

const options = { configPath }

export default async function buildSite() {
  const eleventy = new Eleventy(rootPath, outPath, options)
  await eleventy.write()
}
