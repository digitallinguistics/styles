import esbuild from 'esbuild'
import path    from 'node:path'

const cssPath = path.resolve(import.meta.dirname, `../../docs/layouts/main/main.css`)

export default async function getCriticalCSS() {

  const result = await esbuild.build({
    bundle:      true,
    entryPoints: [cssPath],
    external:    [`/fonts/*`],
    minify:      true,
    write:       false,
  })

  return result.outputFiles[0].text

}
