var utils = require("./utils.js");
var dispatcher = require("./dispatcher.js");

var executeStep = function($el, stepInstructions, animData) {
  if (!Array.isArray(stepInstructions)) {
    stepInstructions = [stepInstructions];
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
    }
  });
};

var verbMap = {
  "setup": "0",
  "trigger": "1",
  "end": "100%",
  "cleanup": "100%",
};

var doTransition = function($el, instructions) {
  var process = {}
  Object.keys(instructions).forEach(function(key) {
    process[key] = instructions[key];
  });
    
  var animData = {state: null};

  var timingElem = process["timing"] || $el;
  if (process["timing"]) delete process["timing"];
  
  Object.keys(verbMap).forEach(function(verb) {
    var procInst = process[verb]
    if (procInst) {
      if (!process[verbMap[verb]]) { process[verbMap[verb]] = []; }
      if (!Array.isArray(procInst)) { procInst = [procInst]; }
      process[verbMap[verb]] = process[verbMap[verb]].concat(procInst);
      delete process[verb];
    }
  });

  if (process["0"]) {
    executeStep($el, process["0"], animData);
    delete process["0"];
  }

  var timeSpan = utils.getLongestTransitionOrAnimationTime(timingElem);

  Object.keys(process).forEach(function(point) {
    var stepInstructions = process[point];

    if (point.slice(-1) == "%") {
      var timestamp = parseInt(point) / 100 * timeSpan;
      dispatcher.scheduleTimestamp(
        timestamp, executeStep.bind($el, $el, stepInstructions, animData)
      );
    } else if (point.slice(-2) == "ms") {
      var timestamp = parseInt(point);
      dispatcher.scheduleTimestamp(
        timestamp, executeStep.bind($el, $el, stepInstructions, animData)
      );
    } else {
      var frame = parseInt(point);
      dispatcher.scheduleFrame(
        frame, executeStep.bind($el, $el, stepInstructions, animData)
      );
    }
  });

  dispatcher.kick();
};

module.exports.doTransition = doTransition;
