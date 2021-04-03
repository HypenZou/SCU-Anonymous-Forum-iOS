cordova.define("cordova-plugin-exit.exit", function(require, exports, module) {
var exec = require('cordova/exec');

module.exports = function() {
    exec(null, null, 'Exit', 'exit', []);
};

});
