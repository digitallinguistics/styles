import { emptyDir } from 'fs-extra/esm'
import path         from 'node:path'

const docsPath = path.resolve(import.meta.dirname, `../../site`)

export default function emptyDocsDir() {
  console.info(`Emptying docs directory.`)
  return emptyDir(docsPath)
}
