if (document.location.href.includes(`colors`)) {

  document.body.addEventListener(`click`, ev => {
    if (ev.target.classList.contains(`kss-color`)) {

      const hex       = ev.target.querySelector(`.kss-color__code`);
      const selection = window.getSelection();
      const range     = new Range;

      range.selectNodeContents(hex);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand(`copy`);
      selection.removeAllRanges();

    }
  });

}
