import buildLibrary       from '../library/index.js'
import css                from './CSS.js'
import emptyDocsDir       from './emptyDocsDir.js'
import js                 from './JS.js'
import minifyHTML         from './minifyHTML.js'
import navigation         from '@11ty/eleventy-navigation'
import svg                from './SVG.js'
import syntaxHighlighting from '@11ty/eleventy-plugin-syntaxhighlight'

export default function configure(config) {

  config.addGlobalData(`css`, css)
  config.addGlobalData(`js`, js)
  config.addGlobalData(`svg`, svg)
  config.addPassthroughCopy({ 'docs/fonts': `fonts` })
  config.addPlugin(navigation)
  config.addPlugin(syntaxHighlighting)
  config.addTransform(`minify-html`, minifyHTML)
  config.addWatchTarget(`**/*.less`)
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
