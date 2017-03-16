/* eslint-env browser */

/* global examples, hljs */

const nav      = document.getElementById('nav');
const patterns = document.getElementById('patterns');
const template = document.getElementById('template');

// load examples
function loadExample(entry) {
  // cannot use destructuring here: not supported in Edge
  const pattern = entry[0];
  const description = entry[1];
  return fetch(`examples/${pattern}.html`)
  .then(res => res.text())
  .then(text => renderTemplate(pattern, description, text));
}

function renderTemplate(pattern, description, html) {
  const clone   = template.content.cloneNode(true);
  const markup  = clone.querySelector('.markup');
  const regexp  = new RegExp(`class='?${pattern}`);
  const section = clone.querySelector('.pattern');
  markup.textContent = html;
  section.id         = pattern;
  section.classList.add(`${pattern}-example`);
  const opt = document.createElement('option');
  opt.value = pattern;
  if (regexp.test(html)) pattern = `.${pattern}`
  else pattern = `&lt;${pattern}&gt;`;
  opt.innerHTML = pattern;
  clone.querySelector('.pattern-title > code').innerHTML = pattern;
  clone.querySelector('.pattern-description').innerHTML  = description;
  clone.querySelector('.rendered').innerHTML             = html;
  nav.appendChild(opt);
  patterns.appendChild(clone);
  hljs.highlightBlock(markup);
}

Object.entries(examples)
.map(loadExample)
.reduce((prev, current) => prev.then(current), Promise.resolve())
.catch(console.error);

// make color swatches copyable
const colors = document.getElementById('colors');

const copyHex = target => {

  const selection = window.getSelection();
  const range     = new Range;

  range.selectNodeContents(target);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();

};

colors.addEventListener('click', ev => {
  if (ev.target.classList.contains('swatch')) copyHex(ev.target);
});

nav.addEventListener('change', ev => {
  window.location = `#${ev.target.value}`;
});
