const colors = document.getElementById(`colors`);

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
