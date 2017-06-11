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

// nav menu
nav.addEventListener('change', ev => {
  window.location = `#${ev.target.value}`;
});
