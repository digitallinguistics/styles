---
title: Inline Examples
---

# {{ title }}

Inline examples are linguistic data that are mentioned in running text. (See the [use-mention distinction][use-mention].) In linguistics, words or phrases mentioned in running text are typically displayed in <i>italics</i>. (However, words or phrases in numbered examples are typically _not_ displayed in italics.)

## Example

<div class=output>
{% include './inline-example.html' %}
</div>

## HTML

Mark up inline examples with the [Idiomatic Text][i] element `<i>`.

If you want to avoid line breaks occurring at hyphens in examples, use a non-breaking hyphen (HTML entity `&#8209;`) instead of a regular hyphen.

<details open>

  <summary>(Show/Hide HTML)</summary>

<!-- NB: First line gets indented if you indent code blocks. -->
```html
{% include './inline-example.html' %}
```

</details>

## CSS

`.inex` | `.in-ex` | `.inline-example`

The `user-select: all` and `cursor: copy` declarations make it easy for readers to click on an example to copy it. When they do, the entire example will be automatically selected, ready for copying.

<details open>

  <summary>(Show/Hide CSS)</summary>

<!-- NB: First line gets indented if you indent code blocks. -->
```css
{% include './inline-example.css' %}
```

</details>

<!-- LINKS -->
[i]:           https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
[use-mention]: https://en.wikipedia.org/wiki/Use%E2%80%93mention_distinction
