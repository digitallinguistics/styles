import esbuild from 'esbuild'
import path    from 'node:path'

const cssPath = path.resolve(import.meta.dirname, `../../docs/layouts/main/main.css`)

const result = await esbuild.build({
  bundle:      true,
  entryPoints: [cssPath],
  external:    [`/fonts/*`],
  minify:      true,
  write:       false,
})

export default result.outputFiles[0].text
