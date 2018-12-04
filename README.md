# DLx Pattern Library

Welcome to the DLx Pattern Library! This website demonstrates all the CSS styles used across DLx projects, along with example HTML markup and usage notes.

[View the GitHub repository for this pattern library.][2]

All assets and stylesheets are available to download from the DLx CDN:

* CDN: https://cdn.digitallinguistics.io
* fonts: https://cdn.digitallinguistics.io/fonts/{filename}
* images: https://cdn.digitallinguistics.io/img/{filename}
* LESS: https://cdn.digitallinguistics.io/less/{filename}

## LESS

* **CSS Reset:** DLx projects use the [flexbox-reset][1] as a CSS reset. All styles in this project assume that the reset has already been applied.

* **Fonts:** Font declarations for fonts used by DLx projects are available in `fonts.less`.

* **Global Styles:** Global styles (colors, variables) are available in the `/global` folder. You can also import `globals.less` into your project, which contains all global styles. The available global stylesheets are:

    - `colors.less`: CSS variables, classes for font colors, and classes for background colors, for each of the colors used in the DLx color schemes.

    - `variables.less`: High-level CSS variable declarations that are reused across element and component styling, such as common settings for padding, box shadows, underlines, etc.

* **Components:** Each component (located in the `/components` folder) has an associated LESS file. You can also import `components.less` into your project, which contains styling for all components.

## Fonts

Fonts used by DLx projects are available in the `/fonts` folder.

## Images

Images and icons used by DLx projects are available in the `/img` folder.

[1]: https://www.npmjs.com/package/flexbox-reset
[2]: https://github.com/digitallinguistics/styles
