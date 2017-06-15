# Darch [![npm][npm-badge]][npm]

This repo implements common components and utilitaries for React. The name sounds like "dark" and comes from recursive acronym DARCH Advanced React Components for Humans. Checkout the full documentation at http://darch.nosebit.com.

## Usage

Install Darch via npm running:

```bash
npm install --save darch
```

Then you can require each individual modules by:

```js
import Form from "darch/lib/form";

// For old school guys, you can do:
// let Form = require("darch/lib/form");
```

This individual module import is better to keep your code at bare minimum, but if you want to use all Darch then you can just:

```js
import {Form,Field,Container} from "darch";

// For old school guys, you have to do:
// let {Form,Field,Container} = require("darch");

// And for ES5 prehistoric guys:
// var Darch = require("darch");
// var Form = Darch.Form;
```

**NOTE**: If you use individual module imports, then somewher in your code you must import the `styles` module via `import "darch/lib/styles"`. Without this module, the general Darch styles will not be applied to html.

## Contributing

Help us to made Darch a great framework! See the the [contributing guidelines][contributing] for more information.

[contributing]: CONTRIBUTING.md
[documentation]: http://darch.nosebit.com
[npm-badge]: https://badge.fury.io/js/darch.svg
[npm]: http://badge.fury.io/js/darch