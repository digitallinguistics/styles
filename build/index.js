import buildDocs    from './buildDocs.js'
import bundleCSS    from './bundleCSS.js'
import emptyDocsDir from './emptyDocsDir.js'

await bundleCSS()
await emptyDocsDir()
await buildDocs()
