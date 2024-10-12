import buildSite    from './buildSite.js'
import emptyDocsDir from './emptyDocsDir.js'

export default async function buildDocs() {
  await emptyDocsDir()
  await buildSite()
}
