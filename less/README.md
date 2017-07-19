# DLx Pattern Library
Welcome to the DLx Pattern Library, demonstrating all the CSS styles used across DLx projects, along with example HTML markup and usage notes.

## LESS / CSS
LESS stylesheets and their accompanying CSS output are available in this repo's `less` and `css` folders respectively. These are each made available on the DLx CDN and may be linked to at `https://cdn.digitallinguistics.io/less/{filename}` or `https://cdn.digitallinguistics.io/css/{filename}`.

  - `reset.less` - A CSS reset that should be applied before any DLx styles. If you prefer not to use this reset, certain DLx classes will require extra styling (typically setting them to `display: flex;`). Uses the [`flexbox-reset` library][1].

  - `fonts.less` - Font declarations for the various fonts used by DLx.

  - `colors.less` - CSS variables, classes for font colors, and classes for background colors, for each of the colors used in the DLx color schemes.

  - `elements.less` - General element styling (as classes). For example, add the `.button` class to a `<button>` element to apply default button styling.

  - `classes.less` - All the DLx styles, as classes

You can also use `dlx.less` or `global.less`, which bundle all of the above files together. The `dlx.less` file simply declares the classes and fonts, while the `global.less` file applies those classes globally. For example, `dlx.less` will make a `.link` class available for you to use in your code, but `global.less` will apply the `.link` style to all `<a>` elements as appropriate, so you do not need to explicitly add `class=link` to your `<a>` elements.

[1]: https://yarnpkg.com/en/package/flexbox-reset
