import getCriticalCSS from './getCriticalCSS.js'
import minifyHTML     from './minifyHTML.js'

const css = await getCriticalCSS()

export default function configure(config) {

  config.addGlobalData(`css`, css)
  config.addPassthroughCopy({ 'docs/fonts': `fonts` })
  config.addTransform(`minify-html`, minifyHTML)

  return {
    dir: {
      data:    `docs/data`,
      layouts: `docs/layouts`,
    },
  }

}
