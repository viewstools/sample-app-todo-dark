let { override } = require('customize-cra');
let { addReactRefresh } = require('customize-cra-react-refresh');

/* config-overrides.js */
module.exports = override(addReactRefresh());
