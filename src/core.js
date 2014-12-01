var utils = require("./utils.js");
var dispatcher = require("./dispatcher.js");
var compat = require("./compat.js");

if (process.env.NODE_ENV !== "production") {
  var debug = require("./debug.js");
}

var executeStep = function($el, point, stepInstructions, animData) {
  if (!Array.isArray(stepInstructions)) {
    stepInstructions = [stepInstructions];
  }

  if (process.env.NODE_ENV !== "production") {
    debug.logger(animData.name + " :: " + point + " - " +
                 JSON.stringify(animData.state));
  }

  stepInstructions.forEach(function(step) {
    if (typeof step == "string") {
      // CLASS ADD, TOGGLE OR REMOVE
      var modifier = step[0];
      var className = step.slice(1);

      switch (modifier) {
      case "+": $el.classList.add(className); break;
      case "-": $el.classList.remove(className); break;
      case "~": $el.classList.toggle(className); break;
      default: throw new Error("Class must be prefixed with '+', '-', or '~'");
      };

    } else if (typeof step == "function") {
      animData.state = step($el, animData.state);
    } else if (typeof step == "object") {
      Object.keys(step).forEach(function(key) {
        $el.style[key] = step[key];
      });
    }
  });
};

var verbMap = {
  "setup": "0",
  "trigger": "1",
  "end": "100%",
  "cleanup": "100%",
};

if (process.env.NODE_ENV !== "production") {
  var animNameIncrement = 0;
}

var doTransition = function($el, instructions, options) {
  options = options || {};
  var processed = {}
  Object.keys(instructions).forEach(function(key) {
    processed[key] = instructions[key];
  });
    
  var animData = {state: null};
  if (process.env.NODE_ENV !== "production") {
    animData.name = options["name"] || "anim" + animNameIncrement++;
  }

  var timingElem = options["timingElement"] || $el;
  
  Object.keys(verbMap).forEach(function(verb) {
    var procInst = processed[verb]
    if (procInst) {
      if (!processed[verbMap[verb]]) { processed[verbMap[verb]] = []; }
      if (!Array.isArray(procInst)) { procInst = [procInst]; }
      processed[verbMap[verb]] = processed[verbMap[verb]].concat(procInst);
      delete processed[verb];
    }
  });

  if (processed["0"]) {
    executeStep($el, "0", processed["0"], animData);
    delete processed["0"];
  }

  if (process.env.NODE_ENV !== "production") {
    if (debug.inFallbackMode()) {
      return doFallback($el, processed, animData, options);
    }
  }

  if (!compat.requestAnimationFrame) {
    return doFallback($el, processed, animData, options);
  }

  var timeSpan = utils.getLongestTransitionOrAnimationTime(timingElem);
  if (process.env.NODE_ENV !== "production") {
    debug.logger(animData.name + " :: Animating for " + timeSpan + "ms");
  }

  Object.keys(processed).forEach(function(point) {
    var stepInstructions = processed[point];

    if (point.slice(-1) == "%") {
      var timestamp = parseInt(point) / 100 * timeSpan;
      dispatcher.scheduleTimestamp(
        timestamp, executeStep.bind($el, $el, point, stepInstructions, animData)
      );
    } else if (point.slice(-2) == "ms") {
      var timestamp = parseInt(point);
      dispatcher.scheduleTimestamp(
        timestamp, executeStep.bind($el, $el, point, stepInstructions, animData)
      );
    } else {
      var frame = parseInt(point);
      dispatcher.scheduleFrame(
        frame, executeStep.bind($el, $el, point, stepInstructions, animData)
      );
    }
  });

  dispatcher.kick();
};

var getUnitPriority = function(point) {
  if (point.slice(-1) == "%") return 2;
  if (point.slice(-2) == "ms") return 1;
  return 0; // frames

};

var doFallback = function($el, processed, animData, options) {
  if (process.env.NODE_ENV !== "production") {
    debug.logger(animData.name + " :: Using fallback");
  }

  if (options.fallback) {
    options.fallback($el);
  } else {
    var processKeys = Object.keys(processed).sort(function(a, b) {
      var unitPriorityA = getUnitPriority(a);
      var unitPriorityB = getUnitPriority(b);
      if (unitPriorityA != unitPriorityB) {
        return unitPriorityA - unitPriorityB;
      } else {
        return parseInt(a) - parseInt(b);
      };
    });

    processKeys.forEach(function(key) {
      executeStep.call($el, $el, key, processed[key], animData);
    });
  }
};

module.exports.doTransition = doTransition;
