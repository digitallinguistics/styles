import * as cases  from 'change-case'

const order = [
  `abbreviation`,   // Abbreviations
  `definition`,     // Definitions
  `document`,       // Document
  `inline-example`, // Inline Examples
  `interlinear`,    // Interlinear Examples
  `cite`,           // Title Citations
]

export default {

  eleventyNavigation: {

    key(data) {
      return data.title ?? cases.capitalCase(data.page.fileSlug)
    },

    order(data) {
      return order.indexOf(data.page.fileSlug) + 1
    },

  },

  layout: `main/main`,

}
