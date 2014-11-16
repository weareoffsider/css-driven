var utils = require("./utils.js");
var core = require("./core.js");

if (process.env.NODE_ENV === "development") {
  var debug = require("./debug.js");
}

var CSSDriven = {
  doTransition: core.doTransition,
};

if (process.env.NODE_ENV === "development") {
  CSSDriven.debugMode = debug.set;
  CSSDriven.fallbackMode = debug.fallbackMode;
}



window.CSSDriven = CSSDriven;
module.exports = CSSDriven;
