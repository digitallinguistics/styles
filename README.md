# DLx Pattern Library

Welcome to the DLx Pattern Library! This website demonstrates CSS styles used across DLx projects, along with example HTML markup and usage notes.

[View the GitHub repository for this pattern library.][2]

DLx projects use [Semantic UI][3] to style most of its components, using Semantic UI's default theme and colors. Semantic UI must be installed in your project in order to use these components.

All DLx assets and stylesheets are available to download from the DLx blob storage:

* storage: `https://digitallinguistics.blob.core.windows.net`
* fonts: `https://digitallinguistics.blob.core.windows.net/fonts/{filename}`
* images: `https://digitallinguistics.blob.core.windows.net/img/{filename}`
* LESS: `https://digitallinguistics.blob.core.windows.net/less/{filename}`

To use DLx styles in a project, you should import the following LESS files at the root of your project, in order. DLx components assume that these stylesheets have already been applied.

- `fonts/fonts.less` (DLx)
- `globals/variables.less` (DLx)
- `globals/colors.less` (DLx)
- `semantic/src/definitions/globals/reset.less` (Semantic UI)

## LESS

* **Fonts:** Font declarations for fonts used by DLx projects are available in `fonts.less`.

* **Variables:** Global variables are available in the `/globals/variables.less` file. These are high-level CSS variable declarations that are reused across element and component styling. All styles in the project assume that this stylesheet has already been applied, so that the global CSS variables are available.

* **Colors:** Assigns the Semantic UI default color scheme and other DLx colors to global CSS variables (instead of LESS variables).

* **Reset:** DLx projects use the Semantic UI reset that comes bundled with the Semantic UI installation.

* **Components:** Each component (located in the `/components` folder) has an associated LESS file. You can also import `components.less` into your project, which contains styling for all components.

## Fonts

Fonts used by DLx projects are available in the `/fonts` folder.

## Images

Images and icons used by DLx projects are available in the `/img` folder.

[1]: https://www.npmjs.com/package/flexbox-reset
[2]: https://github.com/digitallinguistics/styles
[3]: https://semantic-ui.com/
