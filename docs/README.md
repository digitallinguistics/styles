# DLx Pattern Library
Welcome to the DLx Pattern Library, demonstrating all the CSS styles used across DLx projects, along with example HTML markup and usage notes.

## LESS / CSS
LESS stylesheets and their accompanying CSS output are available in this repo's `less` and `css` folders respectively. These are each made available on the DLx CDN and may be linked to at `https://cdn.digitallinguistics.io/less/{filename}` or `https://cdn.digitallinguistics.io/css/{filename}`.

  - `reset.less` - A CSS reset that should be applied before any DLx styles. If you prefer not to use this reset, certain DLx classes will require extra styling (typically setting them to `display: flex;`). Uses the [`flexbox-reset` library][1].

  - `fonts.less` - Font declarations for the various fonts used by DLx.

  - `colors.less` - CSS variables, classes for font colors, and classes for background colors, for each of the colors used in the DLx color schemes.

  - `variables.less` - High-level CSS variable declarations that are reused across element and component styling, such as common settings for padding, box shadows, underlines, etc.

  - `elements.less` - General element styling (as classes). For example, add the `.button` class to a `<button>` element to apply default button styling. Includes the following stylesheets:

    - `forms.less` - Styling for form elements and similar interactive elements.

    - `headings.less` - Styling for headings.

    - `inline.less` - Styling for inline elements (e.g. `<strong>`) and classes (e.g. `.unicode`).

  - `components.less` - Discrete, self-contained pieces of UI.

  - `dlx.less` - Bundles together all of the above files and applies their styles. For example, the `.link` style will be applied to all inline links. If you just want to reference a particular stylesheet or rule, include that file individually using LESS's `(reference)` option.

[1]: https://yarnpkg.com/en/package/flexbox-reset
