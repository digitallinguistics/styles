const colors = document.getElementById(`colors`);
const nav    = document.getElementById(`nav`);

// make color swatches copyable
colors.addEventListener(`click`, ev => {
  if (ev.target.classList.contains(`swatch`)) {

    const selection = window.getSelection();
    const range     = new Range;

    range.selectNodeContents(ev.target);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand(`copy`);
    selection.removeAllRanges();

  }
});

// nav menu
nav.onchange = ev => { window.location = `#${ev.target.value}`; };
