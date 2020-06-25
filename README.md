# esmodule-lab

Experimenting with module resolution in Node.js 13 and 14.

## Structure

This is a self-contained project that doesn't need any `npm install` or
similar. All the little example dependencies have been created directly
in the [`node_modules/`](node_modules/) folder.

## How to use

Try running the top-level project:

```bash
node src/index.mjs
```

Current result:

```
import {greeting as hybridMultiGreeting, CONSTANT as HYBRID_MULTI_CONSTANT} from 'hybrid-multi'
        ^^^^^^^^
SyntaxError: The requested module 'hybrid-multi' is expected to be of type CommonJS, which does not support named exports. CommonJS modules can be imported by importing the default export.
For example:
import pkg from 'hybrid-multi';
const {greeting as hybridMultiGreeting, CONSTANT as HYBRID_MULTI_CONSTANT} = pkg;
    at ModuleJob._instantiate (internal/modules/esm/module_job.js:97:21)
    at async ModuleJob.run (internal/modules/esm/module_job.js:135:5)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
```

You may wish to change the import statements, and/or change declarations
in the dependencies themselves under [node_modules/*](node_modules/).

## Conclusion

It seems Node.js, when running [`src/index.mjs`](src/index.mjs) in this
project as a module, doesn't look at the `"module"` field of a
dependency's `package.json`. Only the `"main"` field.

Because of this, there seems to be no easy way to create a hybrid
package written as a module, and transpiled with for example rollup to
cjs, and have both variants imported by only specifying the package's
name. Either the `import` or the `require` statement then has to specify
a specific file.
