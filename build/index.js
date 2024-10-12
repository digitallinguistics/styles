import buildDocs    from './docs/index.js'
import buildLibrary from './library/index.js'

await buildLibrary()
await buildDocs()
