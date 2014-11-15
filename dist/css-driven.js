(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./dispatcher.js":2,"./utils.js":4}],2:[function(require,module,exports){
var utils = require("./utils.js");

var currentFrame = 0;
var baseTimestamp = +new Date();
var currentTimestamp = 0;
var registry = {};
var frames = [];
var timestamps = [];
var running = false;

var loopDispatcher = function(timestamp) {
  currentFrame++;
  currentTimestamp = timestamp;

  if (frames[0] == currentFrame) {
    registry[frames[0]].forEach(function(cb) { cb() });
    delete registry[frames[0]];
    frames.shift();
  }

  if (timestamps[0] < timestamp) {
    var todos = timestamps.filter(function(ts) { return ts < timestamp });
    timestamps = timestamps.filter(function(ts) { return ts > timestamp });
    todos.forEach(function(ts) {
      registry[ts + "ms"].forEach(function(cb) { cb() });
      delete registry[ts + "ms"];
    });
  }

  if (timestamps.length + frames.length > 0) {
    requestAnimationFrame(loopDispatcher);
  } else {
    currentFrame = 0;
    currentTimestamp = 0;
    running = false;
  }
};

var resortFrames = function() {
  frames = utils.arrayToSet(frames)
  frames.sort(function(a, b) { return a - b; })
};

var resortTimestamps = function() {
  timestamps = utils.arrayToSet(timestamps)
  timestamps.sort(function(a, b) { return a - b; }) 
}

var addToRegistry = function(key, action) {
  if (!registry[key]) registry[key] = [];
  registry[key].push(action);
};

var scheduleFrame = function(frame, action) {
  var target = currentFrame + frame;
  frames.push(target);
  addToRegistry(target, action);
  resortFrames();
};

var doSchedule = function(timestamp, action) {
  var target = Math.round(currentTimestamp + timestamp);
  timestamps.push(target);
  addToRegistry(target + "ms", action);
  resortTimestamps();
}

var scheduleTimestamp = function(timestamp, action) {
  if (!currentTimestamp) {
    requestAnimationFrame(function(updatedTimestamp) {
      currentTimestamp = updatedTimestamp;
      doSchedule(timestamp, action);
    });
  } else {
    doSchedule(timestamp, action);
  }
};

var kickDispatcher = function() {
  if (!running) {
    running = true;
    requestAnimationFrame(loopDispatcher);
  }
};

module.exports.kick = kickDispatcher;
module.exports.scheduleFrame = scheduleFrame;
module.exports.scheduleTimestamp = scheduleTimestamp;

},{"./utils.js":4}],3:[function(require,module,exports){
var utils = require("./utils.js");
var core = require("./core.js");

var CSSDriven = {
  doTransition: core.doTransition
};



window.CSSDriven = CSSDriven;

},{"./core.js":1,"./utils.js":4}],4:[function(require,module,exports){
var jumpAnimationFrame = function(fn, frames) {
  frames = frames || 1;
  var iteration = 0;
  var jumper = function() {
    iteration += 1;
    if (iteration >= frames) {
      window.requestAnimationFrame(fn);
    } else {
      window.requestAnimationFrame(jumper);
    }
  }

  window.requestAnimationFrame(jumper);
}

module.exports.jumpAnimationFrame = jumpAnimationFrame;


var getLongestTransitionOrAnimationTime = function( el ){
  // Returns an element's longest transition delay+duration pairing in milliseconds;
  // Assumption: it's not possible for the two arrays to have different lengths.

  var totals = ["Animation", "Transition"].reduce(function(totals, cssType) {

    var delay, duration, subTotals;

    delay = getComputedStyle( el )[Modernizr.prefixed(cssType + "Delay")]
    delay = delay.split(',').map(parseFloat);
    duration = getComputedStyle( el )[Modernizr.prefixed(cssType + "Duration")]
    duration = duration.split(',').map(parseFloat);
  
    subTotals = delay.map(function(d, ix) { return d + duration[ix] });
    return totals.concat(subTotals);

  }, []);

  // normalize to milliseconds
  totals = totals.map(function(t) { return t * 1000; });

  return Math.max.apply( null, totals );
}

module.exports.getLongestTransitionOrAnimationTime = getLongestTransitionOrAnimationTime;


var arrayToSet = function(array) {
  return array.reduce(function(set, item) {
    if (set.indexOf(item) == -1) {
      set.push(item);
    };
    return set;
  }, []);
};

module.exports.arrayToSet = arrayToSet;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9jb3JlLmpzIiwiL2hvbWUvanJha2ljaC9wcm9qZWN0cy9PcGVuU291cmNlL2Nzcy1kcml2ZW4vc3JjL2Rpc3BhdGNoZXIuanMiLCIvaG9tZS9qcmFraWNoL3Byb2plY3RzL09wZW5Tb3VyY2UvY3NzLWRyaXZlbi9zcmMvZmFrZV81ZGVkYzhjYi5qcyIsIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG52YXIgZGlzcGF0Y2hlciA9IHJlcXVpcmUoXCIuL2Rpc3BhdGNoZXIuanNcIik7XG5cbnZhciBleGVjdXRlU3RlcCA9IGZ1bmN0aW9uKCRlbCwgc3RlcEluc3RydWN0aW9ucywgYW5pbURhdGEpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHN0ZXBJbnN0cnVjdGlvbnMpKSB7XG4gICAgc3RlcEluc3RydWN0aW9ucyA9IFtzdGVwSW5zdHJ1Y3Rpb25zXTtcbiAgfVxuXG4gIHN0ZXBJbnN0cnVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzdGVwKSB7XG4gICAgaWYgKHR5cGVvZiBzdGVwID09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIENMQVNTIEFERCwgVE9HR0xFIE9SIFJFTU9WRVxuICAgICAgdmFyIG1vZGlmaWVyID0gc3RlcFswXTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBzdGVwLnNsaWNlKDEpO1xuXG4gICAgICBzd2l0Y2ggKG1vZGlmaWVyKSB7XG4gICAgICBjYXNlIFwiK1wiOiAkZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyBicmVhaztcbiAgICAgIGNhc2UgXCItXCI6ICRlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IGJyZWFrO1xuICAgICAgY2FzZSBcIn5cIjogJGVsLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzcyBtdXN0IGJlIHByZWZpeGVkIHdpdGggJysnLCAnLScsIG9yICd+J1wiKTtcbiAgICAgIH07XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdGVwID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYW5pbURhdGEuc3RhdGUgPSBzdGVwKCRlbCwgYW5pbURhdGEuc3RhdGUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgdmVyYk1hcCA9IHtcbiAgXCJzZXR1cFwiOiBcIjBcIixcbiAgXCJ0cmlnZ2VyXCI6IFwiMVwiLFxuICBcImVuZFwiOiBcIjEwMCVcIixcbiAgXCJjbGVhbnVwXCI6IFwiMTAwJVwiLFxufTtcblxudmFyIGRvVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCRlbCwgaW5zdHJ1Y3Rpb25zKSB7XG4gIHZhciBwcm9jZXNzID0ge31cbiAgT2JqZWN0LmtleXMoaW5zdHJ1Y3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIHByb2Nlc3Nba2V5XSA9IGluc3RydWN0aW9uc1trZXldO1xuICB9KTtcbiAgICBcbiAgdmFyIGFuaW1EYXRhID0ge3N0YXRlOiBudWxsfTtcblxuICB2YXIgdGltaW5nRWxlbSA9IHByb2Nlc3NbXCJ0aW1pbmdcIl0gfHwgJGVsO1xuICBpZiAocHJvY2Vzc1tcInRpbWluZ1wiXSkgZGVsZXRlIHByb2Nlc3NbXCJ0aW1pbmdcIl07XG4gIFxuICBPYmplY3Qua2V5cyh2ZXJiTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKHZlcmIpIHtcbiAgICB2YXIgcHJvY0luc3QgPSBwcm9jZXNzW3ZlcmJdXG4gICAgaWYgKHByb2NJbnN0KSB7XG4gICAgICBpZiAoIXByb2Nlc3NbdmVyYk1hcFt2ZXJiXV0pIHsgcHJvY2Vzc1t2ZXJiTWFwW3ZlcmJdXSA9IFtdOyB9XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvY0luc3QpKSB7IHByb2NJbnN0ID0gW3Byb2NJbnN0XTsgfVxuICAgICAgcHJvY2Vzc1t2ZXJiTWFwW3ZlcmJdXSA9IHByb2Nlc3NbdmVyYk1hcFt2ZXJiXV0uY29uY2F0KHByb2NJbnN0KTtcbiAgICAgIGRlbGV0ZSBwcm9jZXNzW3ZlcmJdO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3NbXCIwXCJdKSB7XG4gICAgZXhlY3V0ZVN0ZXAoJGVsLCBwcm9jZXNzW1wiMFwiXSwgYW5pbURhdGEpO1xuICAgIGRlbGV0ZSBwcm9jZXNzW1wiMFwiXTtcbiAgfVxuXG4gIHZhciB0aW1lU3BhbiA9IHV0aWxzLmdldExvbmdlc3RUcmFuc2l0aW9uT3JBbmltYXRpb25UaW1lKHRpbWluZ0VsZW0pO1xuXG4gIE9iamVjdC5rZXlzKHByb2Nlc3MpLmZvckVhY2goZnVuY3Rpb24ocG9pbnQpIHtcbiAgICB2YXIgc3RlcEluc3RydWN0aW9ucyA9IHByb2Nlc3NbcG9pbnRdO1xuXG4gICAgaWYgKHBvaW50LnNsaWNlKC0xKSA9PSBcIiVcIikge1xuICAgICAgdmFyIHRpbWVzdGFtcCA9IHBhcnNlSW50KHBvaW50KSAvIDEwMCAqIHRpbWVTcGFuO1xuICAgICAgZGlzcGF0Y2hlci5zY2hlZHVsZVRpbWVzdGFtcChcbiAgICAgICAgdGltZXN0YW1wLCBleGVjdXRlU3RlcC5iaW5kKCRlbCwgJGVsLCBzdGVwSW5zdHJ1Y3Rpb25zLCBhbmltRGF0YSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChwb2ludC5zbGljZSgtMikgPT0gXCJtc1wiKSB7XG4gICAgICB2YXIgdGltZXN0YW1wID0gcGFyc2VJbnQocG9pbnQpO1xuICAgICAgZGlzcGF0Y2hlci5zY2hlZHVsZVRpbWVzdGFtcChcbiAgICAgICAgdGltZXN0YW1wLCBleGVjdXRlU3RlcC5iaW5kKCRlbCwgJGVsLCBzdGVwSW5zdHJ1Y3Rpb25zLCBhbmltRGF0YSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBmcmFtZSA9IHBhcnNlSW50KHBvaW50KTtcbiAgICAgIGRpc3BhdGNoZXIuc2NoZWR1bGVGcmFtZShcbiAgICAgICAgZnJhbWUsIGV4ZWN1dGVTdGVwLmJpbmQoJGVsLCAkZWwsIHN0ZXBJbnN0cnVjdGlvbnMsIGFuaW1EYXRhKVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRpc3BhdGNoZXIua2ljaygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMuZG9UcmFuc2l0aW9uID0gZG9UcmFuc2l0aW9uO1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbnZhciBjdXJyZW50RnJhbWUgPSAwO1xudmFyIGJhc2VUaW1lc3RhbXAgPSArbmV3IERhdGUoKTtcbnZhciBjdXJyZW50VGltZXN0YW1wID0gMDtcbnZhciByZWdpc3RyeSA9IHt9O1xudmFyIGZyYW1lcyA9IFtdO1xudmFyIHRpbWVzdGFtcHMgPSBbXTtcbnZhciBydW5uaW5nID0gZmFsc2U7XG5cbnZhciBsb29wRGlzcGF0Y2hlciA9IGZ1bmN0aW9uKHRpbWVzdGFtcCkge1xuICBjdXJyZW50RnJhbWUrKztcbiAgY3VycmVudFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcblxuICBpZiAoZnJhbWVzWzBdID09IGN1cnJlbnRGcmFtZSkge1xuICAgIHJlZ2lzdHJ5W2ZyYW1lc1swXV0uZm9yRWFjaChmdW5jdGlvbihjYikgeyBjYigpIH0pO1xuICAgIGRlbGV0ZSByZWdpc3RyeVtmcmFtZXNbMF1dO1xuICAgIGZyYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgaWYgKHRpbWVzdGFtcHNbMF0gPCB0aW1lc3RhbXApIHtcbiAgICB2YXIgdG9kb3MgPSB0aW1lc3RhbXBzLmZpbHRlcihmdW5jdGlvbih0cykgeyByZXR1cm4gdHMgPCB0aW1lc3RhbXAgfSk7XG4gICAgdGltZXN0YW1wcyA9IHRpbWVzdGFtcHMuZmlsdGVyKGZ1bmN0aW9uKHRzKSB7IHJldHVybiB0cyA+IHRpbWVzdGFtcCB9KTtcbiAgICB0b2Rvcy5mb3JFYWNoKGZ1bmN0aW9uKHRzKSB7XG4gICAgICByZWdpc3RyeVt0cyArIFwibXNcIl0uZm9yRWFjaChmdW5jdGlvbihjYikgeyBjYigpIH0pO1xuICAgICAgZGVsZXRlIHJlZ2lzdHJ5W3RzICsgXCJtc1wiXTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0aW1lc3RhbXBzLmxlbmd0aCArIGZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3BEaXNwYXRjaGVyKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50RnJhbWUgPSAwO1xuICAgIGN1cnJlbnRUaW1lc3RhbXAgPSAwO1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxufTtcblxudmFyIHJlc29ydEZyYW1lcyA9IGZ1bmN0aW9uKCkge1xuICBmcmFtZXMgPSB1dGlscy5hcnJheVRvU2V0KGZyYW1lcylcbiAgZnJhbWVzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pXG59O1xuXG52YXIgcmVzb3J0VGltZXN0YW1wcyA9IGZ1bmN0aW9uKCkge1xuICB0aW1lc3RhbXBzID0gdXRpbHMuYXJyYXlUb1NldCh0aW1lc3RhbXBzKVxuICB0aW1lc3RhbXBzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pIFxufVxuXG52YXIgYWRkVG9SZWdpc3RyeSA9IGZ1bmN0aW9uKGtleSwgYWN0aW9uKSB7XG4gIGlmICghcmVnaXN0cnlba2V5XSkgcmVnaXN0cnlba2V5XSA9IFtdO1xuICByZWdpc3RyeVtrZXldLnB1c2goYWN0aW9uKTtcbn07XG5cbnZhciBzY2hlZHVsZUZyYW1lID0gZnVuY3Rpb24oZnJhbWUsIGFjdGlvbikge1xuICB2YXIgdGFyZ2V0ID0gY3VycmVudEZyYW1lICsgZnJhbWU7XG4gIGZyYW1lcy5wdXNoKHRhcmdldCk7XG4gIGFkZFRvUmVnaXN0cnkodGFyZ2V0LCBhY3Rpb24pO1xuICByZXNvcnRGcmFtZXMoKTtcbn07XG5cbnZhciBkb1NjaGVkdWxlID0gZnVuY3Rpb24odGltZXN0YW1wLCBhY3Rpb24pIHtcbiAgdmFyIHRhcmdldCA9IE1hdGgucm91bmQoY3VycmVudFRpbWVzdGFtcCArIHRpbWVzdGFtcCk7XG4gIHRpbWVzdGFtcHMucHVzaCh0YXJnZXQpO1xuICBhZGRUb1JlZ2lzdHJ5KHRhcmdldCArIFwibXNcIiwgYWN0aW9uKTtcbiAgcmVzb3J0VGltZXN0YW1wcygpO1xufVxuXG52YXIgc2NoZWR1bGVUaW1lc3RhbXAgPSBmdW5jdGlvbih0aW1lc3RhbXAsIGFjdGlvbikge1xuICBpZiAoIWN1cnJlbnRUaW1lc3RhbXApIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24odXBkYXRlZFRpbWVzdGFtcCkge1xuICAgICAgY3VycmVudFRpbWVzdGFtcCA9IHVwZGF0ZWRUaW1lc3RhbXA7XG4gICAgICBkb1NjaGVkdWxlKHRpbWVzdGFtcCwgYWN0aW9uKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb1NjaGVkdWxlKHRpbWVzdGFtcCwgYWN0aW9uKTtcbiAgfVxufTtcblxudmFyIGtpY2tEaXNwYXRjaGVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICghcnVubmluZykge1xuICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wRGlzcGF0Y2hlcik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmtpY2sgPSBraWNrRGlzcGF0Y2hlcjtcbm1vZHVsZS5leHBvcnRzLnNjaGVkdWxlRnJhbWUgPSBzY2hlZHVsZUZyYW1lO1xubW9kdWxlLmV4cG9ydHMuc2NoZWR1bGVUaW1lc3RhbXAgPSBzY2hlZHVsZVRpbWVzdGFtcDtcbiIsInZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xudmFyIGNvcmUgPSByZXF1aXJlKFwiLi9jb3JlLmpzXCIpO1xuXG52YXIgQ1NTRHJpdmVuID0ge1xuICBkb1RyYW5zaXRpb246IGNvcmUuZG9UcmFuc2l0aW9uXG59O1xuXG5cblxud2luZG93LkNTU0RyaXZlbiA9IENTU0RyaXZlbjtcbiIsInZhciBqdW1wQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihmbiwgZnJhbWVzKSB7XG4gIGZyYW1lcyA9IGZyYW1lcyB8fCAxO1xuICB2YXIgaXRlcmF0aW9uID0gMDtcbiAgdmFyIGp1bXBlciA9IGZ1bmN0aW9uKCkge1xuICAgIGl0ZXJhdGlvbiArPSAxO1xuICAgIGlmIChpdGVyYXRpb24gPj0gZnJhbWVzKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShqdW1wZXIpO1xuICAgIH1cbiAgfVxuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoanVtcGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuanVtcEFuaW1hdGlvbkZyYW1lID0ganVtcEFuaW1hdGlvbkZyYW1lO1xuXG5cbnZhciBnZXRMb25nZXN0VHJhbnNpdGlvbk9yQW5pbWF0aW9uVGltZSA9IGZ1bmN0aW9uKCBlbCApe1xuICAvLyBSZXR1cm5zIGFuIGVsZW1lbnQncyBsb25nZXN0IHRyYW5zaXRpb24gZGVsYXkrZHVyYXRpb24gcGFpcmluZyBpbiBtaWxsaXNlY29uZHM7XG4gIC8vIEFzc3VtcHRpb246IGl0J3Mgbm90IHBvc3NpYmxlIGZvciB0aGUgdHdvIGFycmF5cyB0byBoYXZlIGRpZmZlcmVudCBsZW5ndGhzLlxuXG4gIHZhciB0b3RhbHMgPSBbXCJBbmltYXRpb25cIiwgXCJUcmFuc2l0aW9uXCJdLnJlZHVjZShmdW5jdGlvbih0b3RhbHMsIGNzc1R5cGUpIHtcblxuICAgIHZhciBkZWxheSwgZHVyYXRpb24sIHN1YlRvdGFscztcblxuICAgIGRlbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWwgKVtNb2Rlcm5penIucHJlZml4ZWQoY3NzVHlwZSArIFwiRGVsYXlcIildXG4gICAgZGVsYXkgPSBkZWxheS5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBkdXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoIGVsIClbTW9kZXJuaXpyLnByZWZpeGVkKGNzc1R5cGUgKyBcIkR1cmF0aW9uXCIpXVxuICAgIGR1cmF0aW9uID0gZHVyYXRpb24uc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG4gIFxuICAgIHN1YlRvdGFscyA9IGRlbGF5Lm1hcChmdW5jdGlvbihkLCBpeCkgeyByZXR1cm4gZCArIGR1cmF0aW9uW2l4XSB9KTtcbiAgICByZXR1cm4gdG90YWxzLmNvbmNhdChzdWJUb3RhbHMpO1xuXG4gIH0sIFtdKTtcblxuICAvLyBub3JtYWxpemUgdG8gbWlsbGlzZWNvbmRzXG4gIHRvdGFscyA9IHRvdGFscy5tYXAoZnVuY3Rpb24odCkgeyByZXR1cm4gdCAqIDEwMDA7IH0pO1xuXG4gIHJldHVybiBNYXRoLm1heC5hcHBseSggbnVsbCwgdG90YWxzICk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmdldExvbmdlc3RUcmFuc2l0aW9uT3JBbmltYXRpb25UaW1lID0gZ2V0TG9uZ2VzdFRyYW5zaXRpb25PckFuaW1hdGlvblRpbWU7XG5cblxudmFyIGFycmF5VG9TZXQgPSBmdW5jdGlvbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHNldCwgaXRlbSkge1xuICAgIGlmIChzZXQuaW5kZXhPZihpdGVtKSA9PSAtMSkge1xuICAgICAgc2V0LnB1c2goaXRlbSk7XG4gICAgfTtcbiAgICByZXR1cm4gc2V0O1xuICB9LCBbXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5hcnJheVRvU2V0ID0gYXJyYXlUb1NldDtcbiJdfQ==
