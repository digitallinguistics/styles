# DLx Styles
This repository contains styles and assets for DLx projects.

## Pattern Library
A pattern library demonstrating all the styles in the DLx stylesheet, along with example HTML markup and usage notes. [View the pattern library here.][1]

## LESS / CSS
Three LESS stylesheets and their accompanying CSS output are available in this repo's `less` and `css` folders. These are each made available on the DLx CDN and may be linked to at `https://cdn.digitallinguistics.io/less/{filename}` or `https://cdn.digitallinguistics.io/css/{filename}`.

- `variables.less`: A collection of useful LESS variables
- `reset.less`:     A CSS reset that should be applied before any DLx styles. If you prefer not to use this reset, certain DLx classes will require extra styling (typically setting them to `display: flex;`). Uses the [`flexbox-reset` library][2].
- `fonts.less`:     Font declarations for the various fonts used by DLx.
- `colors.less`:    LESS variables for each of the colors used in the DLx color schemes.
- `classes.less`:   All the DLx styles, as classes

You can also use `dlx.less` or `global.less`, which bundle all of the above files together. The `dlx.less` file simply declares the classes and fonts, while the `global.less` file applies those classes globally. For example, `dlx.less` will make a `.link` class available for you to use in your code, but `global.less` will apply the `.link` style to all `<a>` elements as appropriate, so you do not need to explicitly add `class=link` to your `<a>` elements.

## Images
DLx images and icons are available in the `/img` folder, or may be downloaded or linked to at `https://cdn.digitallinguistics.io/img/{filename}`.

## Fonts
All fonts used by DLx projects may be found in the `/fonts` folder, and are available on the CDN at `https://cdn.digitallinguistics.io/fonts/{font}`.

## JavaScript Style Sheet
An ESLint style sheet for linting code written in JavaScript is available in `/stylesheets/.eslintrc`, or may be downloaded or linked to at `https://cdn.digitallinguistics.io/dev/.eslintrc`.

## Build Process
The build process requires first uploading the LESS files to the CDN, then once they are live, compiling them to CSS (because the LESS files themselves reference the CDN for imports), and then uploading the CSS files to the CDN.

[1]: https://styles.digitallinguistics.io/
[2]: https://yarnpkg.com/en/package/flexbox-reset
