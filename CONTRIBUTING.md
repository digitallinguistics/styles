# Contributor's Guide

:star2: Thank you for contributing to DLx! :star2:

Below is some useful information and guidelines to get you started.

## General Guidelines for DLx Projects

DLx has a set of general contributor guidelines that apply to all of its projects. [Check out the general DLx guidelines here.][1] Other guidelines specific to the DLx app are provided below.

## Bugs :ant: & Feature Requests

:beetle: Found a bug? :bug: Want to request a feature? [Open an issue on GitHub][2].

## Build Process

The build process requires first uploading the LESS files to the CDN, then once they are live, compiling them to CSS (because the LESS files themselves reference the CDN for imports), and then uploading the CSS files to the CDN.

The build process also produces the DLx pattern library programmatically using [KSS][4]. The pattern library is saved to the `/docs` folder. You can build the pattern library at any time by running `npm run kss`.

These steps can all be accomplished automatically by running `npm run build` from the command line.

[1]: https://github.com/digitallinguistics/digitallinguistics.github.io/blob/master/CONTRIBUTING.md/
[2]: https://github.com/digitallinguistics/styles/issues
