# Digital Linguistics (DLx) Pattern Library

This repository contains CSS styles and HTML samples demonstrating how to style linguistic data and documents for presentation on the web.

If you would prefer to write your linguistic documents in Markdown rather than HTML, check out the [`ling-md`][ling-md] library.

- [View the GitHub repository for this library.][GitHub]
- [Report a problem | Request a feature][issues]

## Contents

- [Components](#components)
- [Using the DLx Styles](#using-the-dlx-styles)
  - [Scoping \& Applying Styles](#scoping--applying-styles)
- [Fonts](#fonts)
- [Sources](#sources)

## Components

Styles are available for the following types of components commonly found in linguistic documents:

<!-- Hide the 'Home' option in the components list. -->
<style>
.body-nav li:first-child {
  display: none;
}
</style>

<nav class=body-nav>
  {{ collections.all | eleventyNavigation | eleventyNavigationToHtml }}
</nav>

## Using the DLx Styles

You can use the DLx styles in your project by either installing this library (instructions below), or simply copying the code for the components you want to use from the [GitHub repo][GitHub].

To install the DLx styles in your project, use a Node package manager like `npm`:

```cmd
npm install --save-dev @digitallinguistics/styles
```

Then include the CSS file(s) for the component(s) that you want to use in a `<link rel=stylesheet>` tag. For example, if you wanted to use the styling for an interlinear gloss, you would include the `interlinear.css` file in your HTML `<head>` tag like so:

```html
<!-- If you copied the file into your project. -->
<link rel=stylesheet href=interlinear.css>

<!-- If you installed the library. -->
<link rel=stylesheet href=node_modules/@digitallinguistics/styles/components/interlinear/interlinear.css>
```

Next, make sure your HTML is formatted correctly so that the DLx styles will work. Each component in this library has example markup showing how the HTML should be structured. For example, here is some HTML that uses the `.igl` ('interlinear gloss') class.

```html
{% include './components/interlinear/interlinear.html' %}
```

Each component has its own standalone CSS file with no dependencies, so you do not need to use the entire set of DLx styles unless you want to.

### Scoping & Applying Styles

If you are importing styles for individual component, their CSS is _not_ applied automatically. Each CSS file in this library only declares a class; you have to apply that class to your HTML yourself, either by using the `class` attribute in your HTML, or by using a CSS preprocessor such as [SASS] to mix in the DLx classes. The reason for this is because you typically want to scope the DLx styles. For example, you may not want every `<i>` element to display in a Unicode font—just the ones inside the `.ling-doc` class.

However, if you import the bundled version of this library (`dlx.bundle.css`), all you have to do is add the `.ling-doc` class to an element, and all the DLx styles will be applied and scoped to that element automatically. (Note that this bundle does not include the font declarations in `font.css`.)

The examples in this documentation use the bundled version of the library, so class names are added to elements only when necessary (such as with the interlinear example above).

## Fonts

Below is a list of suggested fonts which work well for displaying Unicode characters. The `typography/typography.css` file declares two CSS variables (`--font-unicode-sans` and `--font-unicode-serif`) with suggested `font-family` values. A sample font declaration file is also included in `font.css`, using the Libertinus Serif font as an example.

Other excellent sources for fonts are:

- [LanguageGeek]
- [SIL]

If you are using different fonts on the same page, you may want to include a [`size-adjust`][size-adjust] declaration in your font declarations or a [`font-size-adjust`][font-size-adjust] declaration in your main styles as well, in order to adjust the size of one font to match the other.

Alternatively, you can just use a `font-size-adjust` declaration

| Font                           | Serif | Notes                                      |
| ------------------------------ | :---: | ------------------------------------------ |
| [Aboriginal Sans][Aboriginal]  |   ❌   | North American Syllabics + Cherokee        |
| [Aboriginal Serif][Aboriginal] |   ✔️   |                                            |
| [Alegreya]                     |   ✔️   | Often used for classical languages.        |
| [Alegreya Sans][Alegreya]      |   ❌   | Often used for classical languages.        |
| [Andika]                       |   ❌   | Designed for beginning readers.            |
| [Charis SIL]                   |   ✔️   |                                            |
| [Common Serif]                 |   ✔️   | Fork of the Libertinus Serif project.      |
| [Doulos SIL]                   |   ✔️   | Designed to be similar to Times New Roman. |
| [Gentium]                      |   ✔️   |                                            |
| [Libertinus]                   |   ✔️   | Fork of the Linux Libertine project.       |
| [Linux Libertine]              |   ✔️   |                                            |
| Lucida Sans Unicode            |   ❌   | Installed on Windows computers by default. |
| [Noto Sans][Noto]              |   ❌   |                                            |
| [Noto Serif][Noto]             |   ✔️   |                                            |
| Times New Roman                |   ✔️   | Installed on most computers by default.    |

## Sources

Examples used to demonstrate styling of each component come from the following sources:

- Hieber, Daniel W. 2019. "Semantic alignment in Chitimacha". <cite>International Journal of American Linguistics</cite> 85(3): 313–363. DOI: [10.1086/703239](https://doi.org/10.1086/703239).
- Hieber, Daniel W. 2024. "Chitimacha". In Carmen Dagostino, Marianne Mithun, & Keren Rice (eds.), <cite>The languages and linguistics of indigenous North America: A comprehensive guide</cite>, Vol. 2 (The World of Linguistics 13.2), pp. 1519–1543. De Gruyter Mouton.

<!-- LINKS -->
[Aboriginal]:       https://www.languagegeek.com/font/fontdownload.html#Full_Unicode
[Alegreya]:         https://huertatipografica.com/en/fonts/alegreya-ht-pro
[Andika]:           https://software.sil.org/andika/
[Charis SIL]:       https://software.sil.org/charis/
[Common Serif]:     https://github.com/StefanPeev/Common-Serif
[Doulos SIL]:       https://software.sil.org/doulos/
[font-size-adjust]: https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust
[Gentium]:          https://software.sil.org/gentium/
[GitHub]:           https://github.com/digitallinguistics/styles/
[issues]:           https://github.com/digitallinguistics/styles/issues
[LanguageGeek]:     https://www.languagegeek.com/font/fontdownload.html
[Libertinus]:       https://github.com/alerque/libertinus
[ling-md]:          https://github.com/digitallinguistics/ling-md/
[Linux Libertine]:  https://www.fontsquirrel.com/fonts/linux-libertine
[Noto]:             https://fonts.google.com/noto
[SASS]:             https://sass-lang.com/
[SIL]:              https://software.sil.org/fonts/
[size-adjust]:      https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust
