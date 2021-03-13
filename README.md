# Digital Linguistics (DLx) Pattern Library

Welcome to the Digital Linguistics (DLx) pattern library! This website demonstrates how to style linguistic data for presentation on the web using HTML and CSS. This project contains CSS styles and example HTML for various kinds of linguistic components—interlinear glossed examples, transcriptions, grammatical glosses, etc.

[View the GitHub repository for this library.][GitHub]

## Using the DLx Styles

To use the DLx styles in your project, start by including the CSS file(s) for the component(s) that you want to use in a `<link rel=stylesheet>` tag. For example, if you wanted to use the styling for an interlinear gloss, you would include the `interlinear.css` file in your HTML `<head>` tag like so:

```html
<link rel=stylesheet href=interlinear.css>
```

Next, make sure your HTML is formatted correctly so that the DLx styles will work. Each component in the pattern library has example markup showing how the HTML should be structured. For example, here is some valid HTML that uses the `.interlinear` class.

```html
<div class=igl>

  <p class=ex-header>Chitimacha (isolate)</p>

  <p class=txn lang=ctm>siksi<em>nk</em> his heːčtiʔi</p>

  <ol class=words>

    <li class=word>
      <span class=w-m lang=ctm>siksi‑<em>nk</em></span>
      <span class=w-gl>eagle‑<abbr title=unknown>??</abbr></span>
    </li>

    <li class=word>
      <span class=w-m lang=ctm>his</span>
      <span class=w-gl><abbr title=responsive>resp</abbr></span>
    </li>

    <li class=word>
      <span class=w-m lang=ctm>heːčt‑iʔi</span>
      <span class=w-gl>call‑<abbr title=non-first>nf</abbr>;<abbr title=singular>sg</abbr></span>
    </li>

  </ol>

  <p class=tln>an eagle met him</p>

  <p class=ex-source>Swadesh 1939b: A1b.1</p>

</div>
```

That's all there is to it! Each component has its own standalone CSS file with no dependencies, so you do not need to use the entire set of DLx styles unless you want to. You can use all the DLx styles at once by including the `dlx.css` file in your project instead of files for individual components. This will automatically apply styling for many components, and make the rest of the DLx CSS classes available for use in your HTML.

## Notes

* DLx styles are available either as standalone CSS files or [LESS files][LESS] files. LESS files must be compiled to CSS before you can use them, whereas CSS files can be used in your HTML project as is. See the [LESS website][LESS] for details on compiling LESS to CSS.

[GitHub]: https://github.com/digitallinguistics/styles/
[LESS]:   http://lesscss.org/
