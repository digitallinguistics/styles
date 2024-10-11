# Digital Linguistics (DLx) Pattern Library

Welcome to the Digital Linguistics (DLx) pattern library! This website demonstrates how to style linguistic data for presentation on the web using HTML and CSS. This project contains CSS styles and example HTML for various kinds of linguistic components—interlinear glossed examples, transcriptions, grammatical glosses, etc.

[View the GitHub repository for this library.][GitHub]

## Using the DLx Styles

To use the DLx styles in your project, start by including the CSS file(s) for the component(s) that you want to use in a `<link rel=stylesheet>` tag. For example, if you wanted to use the styling for an interlinear gloss, you would include the `interlinear.css` file in your HTML `<head>` tag like so:

```html
<link rel=stylesheet href=interlinear.css>
```

Next, make sure your HTML is formatted correctly so that the DLx styles will work. Each component in the pattern library has example markup showing how the HTML should be structured. For example, here is some valid HTML that uses the `.igl` ('interlinear gloss') class.

```html
<div class=igl>

  <p class=ex-header>Chitimacha (isolate)</p>

  <p class=txn lang=ctm>siksi<b>nk</b> his heːčtiʔi</p>

  <ol class=words>

    <li class=word>
      <span class=m lang=ctm>siksi‑<b>nk</b></span>
      <span class=glosses>eagle‑<abbr class=gl title=unknown>??</abbr></span>
    </li>

    <li class=word>
      <span class=m lang=ctm>his</span>
      <span class=glosses><abbr class=gl title=responsive>resp</abbr></span>
    </li>

    <li class=word>
      <span class=m lang=ctm>heːčt‑iʔi</span>
      <span class=glosses>call‑<abbr class=gl title=non-first>nf</abbr>;<abbr class=gl title=singular>sg</abbr></span>
    </li>

  </ol>

  <p class=tln>an eagle met him</p>

  <p class=ex-source>Swadesh 1939b: A1b.1</p>

</div>
```

That's all there is to it! Each component has its own standalone CSS file with no dependencies, so you do not need to use the entire set of DLx styles unless you want to. You can use all the DLx styles at once by including the `dlx.css` file in your project instead of files for individual components. This will automatically apply styling for many components, and make the rest of the DLx CSS classes available for use in your HTML.

## Fonts

Below is a list of suggested fonts which work well for displaying Unicode characters. The `typography/typography.css` file declares two CSS variables (`--font-unicode-sans` and `--font-unicode-serif`) with suggested `font-family` values. A sample font declaration file is also included in `font.css`, using the Libertinus Serif font as an example.

Other excellent sources for fonts are:

- [LanguageGeek]
- [SIL]

| Font                           | Serif | Notes                                      |
| ------------------------------ | ----- | ------------------------------------------ |
| [Aboriginal Sans][Aboriginal]  | ❌     | North American Syllabics + Cherokee        |
| [Aboriginal Serif][Aboriginal] | ✅     |                                            |
| [Andika]                       | ❌     | Designed for beginning readers.            |
| [Charis SIL]                   | ✅     |                                            |
| [Common Serif]                 | ✅     | Fork of the Libertinus Serif project.      |
| [Doulos SIL]                   | ✅     | Designed to be similar to Times New Roman. |
| [Gentium]                      | ✅     |                                            |
| [Libertinus]                   | ✅     | Fork of the Linux Libertine project.       |
| [Linux Libertine]              | ✅     |                                            |
| Lucida Sans Unicode            | ❌     | Installed on Windows computers by default  |
| [Noto Sans][Noto]              | ❌     |                                            |
| [Noto Serif][Noto]             | ✅     |
| Times New Roman                | ✅     | Installed on most computers by default.    |

<!-- LINKS -->
[Aboriginal]:      https://www.languagegeek.com/font/fontdownload.html#Full_Unicode
[Andika]:          https://software.sil.org/andika/
[Charis SIL]:      https://software.sil.org/charis/
[Common Serif]:    https://github.com/StefanPeev/Common-Serif
[Doulos SIL]:      https://software.sil.org/doulos/
[Gentium]:         https://software.sil.org/gentium/
[GitHub]:          https://github.com/digitallinguistics/styles/
[LanguageGeek]:    https://www.languagegeek.com/font/fontdownload.html
[Libertinus]:      https://github.com/alerque/libertinus
[Linux Libertine]: https://www.fontsquirrel.com/fonts/linux-libertine
[Noto]:            https://fonts.google.com/noto
[SIL]:             https://software.sil.org/fonts/
