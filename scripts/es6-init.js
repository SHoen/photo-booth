var path = require('path');
var appRoot = path.join(__dirname, '..');
console.log("Start");
require('electron-compile').init(appRoot, require.resolve('../main'));