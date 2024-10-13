const mediaQuery = window.matchMedia(`(max-width: 75em)`)

export default class Nav {

  constructor({ el }) {
    this.el     = el
    this.button = this.el.querySelector(`[data-hook=menu-button]`)
    this.list   = this.el.querySelector(`ul`)
  }

  handleResize() {
    if (mediaQuery.matches) this.hideNav()
    else this.showNav()
  }

  hideNav() {
    this.list.classList.add(`visually-hidden`)
  }

  initialize() {
    this.button.addEventListener(`click`, this.toggleNav.bind(this))
    window.addEventListener(`resize`, this.handleResize.bind(this))
    if (mediaQuery.matches) this.hideNav()
  }

  showNav() {
    this.list.classList.remove(`visually-hidden`)
  }

  toggleNav() {
    if (this.list.classList.contains(`visually-hidden`)) this.showNav()
    else this.hideNav()
  }

}
