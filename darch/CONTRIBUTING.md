# Contributing

This is the place for those interested in get involved with Darch improvements. Bellow we dive into some areas you can help us with.

## Docs Translating

We would love to support as many language as possible in Darch documentation to help people from arround the world to get involved. 

All text within docs website came from translation files placed in `docs/src/assets/i18n` folder. A translation file get it's name from lowercase [*IETF language tag*](https://en.wikipedia.org/wiki/IETF_language_tag) representation of target language. So, a file containing translations for brazilian portuguese should be named `pt-br.yml`.

## New Module Development

Each module in Darch are placed in it's own folder inside `src` folder (like `src/button` module). Suppose you gonna build a new module called `Gorgon`, then you should follow:

    1. Put your `gorgon` folder inside `src`;
    2. Create your scripts and define an `src/gorgon/index.js` entry point for the module;
    3. Add a new line `export Gorgon from "./gorgon";` within `src/index.js` file to expose your new module as a submodule of Darch;
    4. Add a new line `"gorgon": "./src/gorgon/index.js"` within `webpack/lib.config.js` to enable bundlefication of module;
    5. Run `make dev` to generate development version of both darch and it's docs. You can now test your new module inside docs website.
    6. When everything done, then run `make` to generate production version of the lib and you are good to generate a pull request.
