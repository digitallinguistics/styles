import esbuild from 'esbuild'
import path    from 'node:path'

const jsPath = path.resolve(import.meta.dirname, `../../docs/layouts/main/main.js`)

const result = await esbuild.build({
  bundle:      true,
  entryPoints: [jsPath],
  minify:      true,
  write:       false,
})

export default result.outputFiles[0].text
