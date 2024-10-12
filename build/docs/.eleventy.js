import getCriticalCSS from './getCriticalCSS.js'

const css = await getCriticalCSS()

export default function configure(config) {

  config.addGlobalData(`css`, css)
  config.addPassthroughCopy({ 'docs/fonts': `fonts` })

  return {
    dir: {
      data:    `docs/data`,
      layouts: `docs/layouts`,
    },
  }

}
