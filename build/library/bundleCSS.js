import esbuild        from 'esbuild'
import { lessLoader } from 'esbuild-plugin-less'
import path           from 'node:path'

const cssPath = path.resolve(import.meta.dirname, `../../dlx.less`)
const outfile = path.resolve(import.meta.dirname, `../../dlx.bundle.css`)

export default function bundleCSS() {
  return esbuild.build({
    bundle:      true,
    entryPoints: [cssPath],
    minify:      true,
    outfile,
    plugins:     [lessLoader()],
  })
}
