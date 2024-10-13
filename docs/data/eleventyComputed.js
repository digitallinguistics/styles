import * as cases  from 'change-case'
import path        from 'node:path'
import { readdir } from 'node:fs/promises'

// 11ty doesn't allow sorting by keys other than `order`,
// and it doesn't make collections available at this point in the build process,
// so we have to manually gather all the pages and define their sort order here.

const componentsPath = path.resolve(import.meta.dirname, `../../components`)
const components     = await readdir(componentsPath)

export default {

  eleventyNavigation: {

    key(data) {
      return data.title ?? cases.capitalCase(data.page.fileSlug)
    },

    order(data) {
      return components.indexOf(data.page.fileSlug)
    },

  },

  layout: `main/main`,

}
