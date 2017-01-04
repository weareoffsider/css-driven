var utils = require("./utils.js");
var core = require("./core.js");

if (process.env.NODE_ENV !== "production") {
  var debug = require("./debug.js");
}

var CSSDriven = {
  doTransition: core.doTransition,
};

// passovers for if developers leave debug mode on when deploying
var minifiedEnvWarning = function(funcName) {
  return function() {
    console.warn("css-driven :: " + funcName + " is not available in a " +
                 "minified environment");
  }
}

CSSDriven.debugMode = minifiedEnvWarning("debugMode");
CSSDriven.fallbackMode = minifiedEnvWarning("fallbackMode");

if (process.env.NODE_ENV !== "production") {
  CSSDriven.debugMode = debug.set;
  CSSDriven.fallbackMode = debug.fallbackMode;
}



if (typeof window !== 'undefined') {
  window.CSSDriven = CSSDriven;
}
module.exports = CSSDriven;
