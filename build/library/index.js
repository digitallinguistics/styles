import bundleCSS from './bundleCSS.js'

export default function buildLibrary() {
  console.info(`Building library`)
  return bundleCSS()
}
