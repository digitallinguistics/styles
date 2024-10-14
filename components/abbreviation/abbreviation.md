---
title: Abbreviations
---

# {{ title }}

A style for normal abbreviations within text. For grammatical glossing abbreviations, see the [gloss](/components/gloss/) class. Since grammatical glosses are a kind of abbreviation, you will typically want to apply both the abbreviation and gloss styles to them. For abbreviations that aren't grammatical glosses, just use the abbreviation class by itself.

## Example

Notice how you can hover over the abbreviation in this example to see its description from the `title` attribute.

<div class=ling-doc>
{% include './abbreviation.html' %}
</div>

## HTML

It is a good idea to include a `title` element on the `<abbr>` tag with a description or expansion of the abbreviation.

<details open>

  <summary>(Show/Hide HTML)</summary>

<!-- NB: First line gets indented if you indent code blocks. -->
```html
{% include './abbreviation.html' %}
```

</details>

## CSS

`.abbr` | `.abbreviation`

<details open>

  <summary>(Show/Hide CSS)</summary>

<!-- NB: First line gets indented if you indent code blocks. -->
```css
{% include './abbreviation.css' %}
```

</details>
