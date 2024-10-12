import minifier from 'html-minifier'
import path     from 'node:path'

export default function minifyHTML(content) {

  if (!this.page.outputPath) return content

  const extname = path.extname(this.page.outputPath)

  if (extname !== `.html`) return content

  return minifier.minify(content, {
    collapseWhitespace:    true,
    decodeEntities:        true,
    quoteCharacter:        `'`,
    removeAttributeQuotes: true,
    removeComments:        true,
    sortAttributes:        true,
    sortClassName:         true,
  })

}
