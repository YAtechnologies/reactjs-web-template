/* config-overrides.js */
/* eslint-disable react-hooks/rules-of-hooks */
const { useBabelRc, override } = require('customize-cra');

/*
  Development bundles can contain the full library which can lead to slower startup times.
  This is especially noticeable if you import from @mui/icons-material.
  Startup times can be approximately 6x slower than without named imports from the top-level API.
  Since we're using Create React App, we need to use `react-app-rewired` and `customize-cra` to let us use .babelrc configuration, without ejecting.
  This option provides the best User Experience and Developer Experience according to https://mui.com/material-ui/guides/minimizing-bundle-size/
  PS: don't forget to use named imports instead of top level imports.
* */

module.exports = override(useBabelRc());
