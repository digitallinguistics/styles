---
title: Document
---

# {{ title }}

A linguistics document could be a journal article, a web page, a book chapter, a term paper, etc.

The main function of the `.ling-doc` class is to apply numbering to examples and figures, and use a Unicode font by default. It does not provide styles for things like headings. In the example below, some inline styles are added to emulate a more complete example where you would also be applying your own custom styles.

If you import the bundled version of this library (`dlx.bundle.css`), adding the `.ling-doc` class to an element will apply _all_ DLx styles to that document instead.

## Example

<div class=output>
{% include './document.html' %}
</div>

## HTML

It is often a good idea to use an `<article>` element for linguistic documents, and apply the `.ling-doc` class to that.

The document sectioning hierarchy is as follows:

1. `.ling-doc`
2. `.section`
3. `.subsection`
4. `.subsubsection`
5. `.paragraph`
6. `.subparagraph`

Note that the `.paragraph` class is not intended to directly correlate to the `<p>` element. The `<p>` element uses a `.p` class instead. The `.paragraph` class is for sectioning, while the `.p` class is for styling `<p>` elements.

<details open>

  <summary>(Show/Hide HTML)</summary>

```html
{% include './document.html' %}
```

</details>

## CSS

`.ling-doc`

<details open>

  <summary>(Show/Hide CSS)</summary>

```css
{% include './document.css' %}
```

</details>
