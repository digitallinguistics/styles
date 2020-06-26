# DLx Pattern Library

Welcome to the DLx Pattern Library! This website demonstrates CSS styles used across DLx projects, along with example HTML markup and usage notes.

[View the GitHub repository for this pattern library.][GitHub]

## Using the DLx Styles

DLx styles are available either as [LESS files][LESS] or standalone CSS files. LESS files must be compiled to CSS before you can use them. See the [LESS website][LESS] for details.

DLx styles use the [flexbox-reset][flexbox-reset] to standardize styling across browsers. It is recommend that you include the reset before other styling. You can install the reset as an [npm package][flexbox-reset], or copy it from one of the following locations:

- `node_modules/flexbox-reset/flexbox-reset.css`
- `node_modules/flexbox-reset/flexbox-reset.less`

The DLx styles library also uses various global variables, font declarations, and colors. You may also need to include the following files before other styles, depending on which of the global variables you're using:

* `fonts/fonts.{css|less}`: font declarations
* `globals/colors.{css|less}`: color variables
* `globals/variables.{css|less}`: global variables

## Components

Each component is given a folder within the `/components` folder. Each component has a standalone CSS file, a LESS file, and a sample [Handlebars][Handlebars] file containing example HTML.

## Images

Images and icons used by DLx projects are available in the `/img` folder.

[flexbox-reset]: https://www.npmjs.com/package/flexbox-reset
[GitHub]:        https://github.com/digitallinguistics/styles
[Handlebars]:    https://handlebarsjs.com/
[LESS]:          http://lesscss.org/
