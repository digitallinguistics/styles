# DLx Pattern Library

Welcome to the DLx Pattern Library! This website demonstrates CSS styles used across DLx projects, along with example HTML markup and usage notes.

[View the GitHub repository for this pattern library.][2]

All DLx assets and stylesheets are available to download from the DLx blob storage:

* storage: `https://digitallinguistics.blob.core.windows.net`
* fonts: `https://digitallinguistics.blob.core.windows.net/fonts/{filename}`
* images: `https://digitallinguistics.blob.core.windows.net/img/{filename}`
* LESS: `https://digitallinguistics.blob.core.windows.net/less/{filename}`

To use DLx styles in a project, you should import the following LESS files at the root of your project, in order. The DLx pattern library uses the [flexbox-reset](4). DLx components assume that these stylesheets have already been applied.

- `fonts/fonts.less` (DLx)
- `globals/variables.less` (DLx)
- `globals/colors.less` (DLx)
- `node_modules/flexbox-reset/flexbox-reset.less`

## LESS

* **Fonts:** Font declarations for fonts used by DLx projects are available in `fonts.less`.

* **Variables:** Global variables are available in the `/globals/variables.less` file. These are high-level CSS variable declarations that are reused across element and component styling. All styles in the project assume that this stylesheet has already been applied, so that the global CSS variables are available.

* **Colors:** Global color scheme.

* **Reset:** DLx projects use the [flexbox-reset][4].

* **Components:** Each component (located in the `/components` folder) has an associated LESS file. You can also import `components.less` into your project, which contains styling for all components.

## Fonts

Fonts used by DLx projects are available in the `/fonts` folder.

## Images

Images and icons used by DLx projects are available in the `/img` folder.

[1]: https://www.npmjs.com/package/flexbox-reset
[2]: https://github.com/digitallinguistics/styles

[4]: https://www.npmjs.com/package/flexbox-reset
