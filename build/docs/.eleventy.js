import buildLibrary   from '../library/index.js'
import css            from './CSS.js'
import emptyDocsDir   from './emptyDocsDir.js'
import js             from './JS.js'
import minifyHTML     from './minifyHTML.js'
import navigation     from '@11ty/eleventy-navigation'
import svg            from './SVG.js'

export default function configure(config) {

  config.addGlobalData(`css`, css)
  config.addGlobalData(`js`, js)
  config.addGlobalData(`svg`, svg)
  config.addPassthroughCopy({ 'docs/fonts': `fonts` })
  config.addPlugin(navigation)
  config.addTransform(`minify-html`, minifyHTML)
  config.on(`eleventy.before`, buildLibrary)
  config.on(`eleventy.before`, emptyDocsDir)

  return {
    dir: {
      data:    `docs/data`,
      layouts: `docs/layouts`,
      output:  `site`,
    },
  }

}
