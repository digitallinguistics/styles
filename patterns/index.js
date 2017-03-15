/* eslint-env browser */

/* global examples */

const patterns = document.getElementById('patterns');
const template = document.getElementById('template');

// load examples
const renderTemplate = (pattern, description, html) => {
  const clone  = template.content.cloneNode(true);
  const regexp = new RegExp(`class='?${pattern}`);
  if (regexp.test(html)) pattern = `.${pattern}`;
  clone.querySelector('.pattern').classList.add(`${pattern}-example`);
  clone.querySelector('.pattern-title').innerHTML       = pattern;
  clone.querySelector('.pattern-description').innerHTML = description;
  clone.querySelector('.example').textContent           = html;
  clone.querySelector('.rendered').innerHTML            = html;
  patterns.appendChild(clone);
};

const loadExample = entry => {
  // cannot use destructuring here: not supported in Edge
  const pattern = entry[0];
  const description = entry[1];
  return fetch(`examples/${pattern}.html`)
  .then(res => res.text())
  .then(text => renderTemplate(pattern, description, text));
};

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
