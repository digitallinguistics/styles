import { emptyDir } from 'fs-extra/esm'
import path         from 'node:path'

const docsPath = path.resolve(import.meta.dirname, `../../site`)

export default function emptyDocsDir() {
  return emptyDir(docsPath)
}
