(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-prefixed-testprop-testallprops-prefixes-domprefixes-requestanimationframe
 */
;

var Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},


    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  ,


    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),


    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName,



    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) {
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };

    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();
        }
    }

     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr;
     };


    setCss('');
    modElem = inputElem = null;


    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;



    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
            return testPropsAll(prop, obj, elem);
      }
    };



    return Modernizr;
})(window, window.document);
// END Modernizr Code


var vendors = ['webkit', 'moz'];
var requestAnimationFrame = undefined;
var cancelAnimationFrame = undefined;

for(var x = 0; x < vendors.length && !requestAnimationFrame; ++x) {
    requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    cancelAnimationFrame = (window[vendors[x]+'CancelAnimationFrame'] ||
                            window[vendors[x]+'CancelRequestAnimationFrame']);
}

if (!requestAnimationFrame) {
  requestAnimationFrame = window.requestAnimationFrame;
  cancelAnimationFrame = window.cancelAnimationFrame;
}

module.exports.cssTransition = Modernizr.csstransitions;
module.exports.requestAnimationFrame = requestAnimationFrame;
module.exports.cancelAnimationFrame = cancelAnimationFrame;
module.exports.prefixed = function(prop, obj, elem) {
  return Modernizr.prefixed(prop, obj, elem);
}

},{}],2:[function(require,module,exports){
var utils = require("./utils.js");
var dispatcher = require("./dispatcher.js");
var compat = require("./compat.js");

if ("development" !== "production") {
  var debug = require("./debug.js");
}

var executeStep = function($el, point, stepInstructions, animData) {
  if (!Array.isArray(stepInstructions)) {
    stepInstructions = [stepInstructions];
  }

  if ("development" !== "production") {
    debug.logger(animData.name + " :: " + point + " - " +
                 JSON.stringify(animData.state), $el);
  }

  stepInstructions.forEach(function(step) {
    if (typeof step == "string") {
      // CLASS ADD, TOGGLE OR REMOVE
      var modifier = step[0];
      var className = step.slice(1);

      switch (modifier) {
      case "+": $el.classList.add(className); $el.offsetHeight; break;
      case "-": $el.classList.remove(className); $el.offsetHeight; break;
      case "~": $el.classList.toggle(className); $el.offsetHeight; break;
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

if ("development" !== "production") {
  var animNameIncrement = 0;
}

var doTransition = function($el, instructions, options) {
  options = options || {};
  var processed = {}
  Object.keys(instructions).forEach(function(key) {
    processed[key] = instructions[key];
  });

  var animData = {state: null};
  if ("development" !== "production") {
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

  if ("development" !== "production") {
    if (debug.inFallbackMode()) {
      return doFallback($el, processed, animData, options);
    }
  }

  if (!compat.requestAnimationFrame || !compat.cssTransition) {
    return doFallback($el, processed, animData, options);
  }

  var timeSpan = utils.getLongestTransitionOrAnimationTime(timingElem);
  if ("development" !== "production") {
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
  if ("development" !== "production") {
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

},{"./compat.js":1,"./debug.js":3,"./dispatcher.js":4,"./utils.js":6}],3:[function(require,module,exports){
var inDebugMode = false;
var inFallbackMode = false;

var set = function(active) {
  console.log("css-driven :: debug mode set to " + active);
  inDebugMode = active;
};
module.exports.set = set;

var fallbackMode = function(active) {
  inFallbackMode = active;
  console.log("css-driven :: fallback mode set to " + active);
}

module.exports.fallbackMode = fallbackMode;
module.exports.inFallbackMode = function() { return inFallbackMode };

var logger = function(string, element) {
  if (!inDebugMode) return;
  console.log("css-driven :: " + string, element);
};
module.exports.logger = logger;

},{}],4:[function(require,module,exports){
var utils = require("./utils.js");
var compat = require("./compat.js");

var currentFrame = 0;
var baseTimestamp = +new Date();
var currentTimestamp = 0;
var registry = {};
var frames = [];
var timestamps = [];
var running = false;

var requestAnimationFrame = compat.requestAnimationFrame;

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

},{"./compat.js":1,"./utils.js":6}],5:[function(require,module,exports){
var utils = require("./utils.js");
var core = require("./core.js");

if ("development" !== "production") {
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

if ("development" !== "production") {
  CSSDriven.debugMode = debug.set;
  CSSDriven.fallbackMode = debug.fallbackMode;
}



window.CSSDriven = CSSDriven;
module.exports = CSSDriven;

},{"./core.js":2,"./debug.js":3,"./utils.js":6}],6:[function(require,module,exports){
var compat = require("./compat.js");
var requestAnimationFrame = compat.requestAnimationFrame;

var jumpAnimationFrame = function(fn, frames) {
  frames = frames || 1;
  var iteration = 0;
  var jumper = function() {
    iteration += 1;
    if (iteration >= frames) {
      requestAnimationFrame(fn);
    } else {
      requestAnimationFrame(jumper);
    }
  }

  requestAnimationFrame(jumper);
}

module.exports.jumpAnimationFrame = jumpAnimationFrame;


var getLongestTransitionOrAnimationTime = function( el ){
  // Returns an element's longest transition delay+duration pairing in milliseconds;
  // Assumption: it's not possible for the two arrays to have different lengths.

  var totals = ["Animation", "Transition"].reduce(function(totals, cssType) {

    var delay, duration, subTotals;

    delay = getComputedStyle( el )[compat.prefixed(cssType + "Delay")]
    delay = delay.split(',').map(parseFloat);
    duration = getComputedStyle( el )[compat.prefixed(cssType + "Duration")]
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

},{"./compat.js":1}]},{},[5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pyYWtpY2gvUHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL2pyYWtpY2gvUHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9jb21wYXQuanMiLCIvaG9tZS9qcmFraWNoL1Byb2plY3RzL09wZW5Tb3VyY2UvY3NzLWRyaXZlbi9zcmMvY29yZS5qcyIsIi9ob21lL2pyYWtpY2gvUHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9kZWJ1Zy5qcyIsIi9ob21lL2pyYWtpY2gvUHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9kaXNwYXRjaGVyLmpzIiwiL2hvbWUvanJha2ljaC9Qcm9qZWN0cy9PcGVuU291cmNlL2Nzcy1kcml2ZW4vc3JjL2Zha2VfYjc0ZDBjOGQuanMiLCIvaG9tZS9qcmFraWNoL1Byb2plY3RzL09wZW5Tb3VyY2UvY3NzLWRyaXZlbi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLyogTW9kZXJuaXpyIDIuOC4zIChDdXN0b20gQnVpbGQpIHwgTUlUICYgQlNEXG4gKiBCdWlsZDogaHR0cDovL21vZGVybml6ci5jb20vZG93bmxvYWQvIy1wcmVmaXhlZC10ZXN0cHJvcC10ZXN0YWxscHJvcHMtcHJlZml4ZXMtZG9tcHJlZml4ZXMtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gKi9cbjtcblxudmFyIE1vZGVybml6ciA9IChmdW5jdGlvbiggd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkICkge1xuXG4gICAgdmFyIHZlcnNpb24gPSAnMi44LjMnLFxuXG4gICAgTW9kZXJuaXpyID0ge30sXG5cblxuICAgIGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cbiAgICBtb2QgPSAnbW9kZXJuaXpyJyxcbiAgICBtb2RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChtb2QpLFxuICAgIG1TdHlsZSA9IG1vZEVsZW0uc3R5bGUsXG5cbiAgICBpbnB1dEVsZW0gICxcblxuXG4gICAgdG9TdHJpbmcgPSB7fS50b1N0cmluZyxcblxuICAgIHByZWZpeGVzID0gJyAtd2Via2l0LSAtbW96LSAtby0gLW1zLSAnLnNwbGl0KCcgJyksXG5cblxuXG4gICAgb21QcmVmaXhlcyA9ICdXZWJraXQgTW96IE8gbXMnLFxuXG4gICAgY3Nzb21QcmVmaXhlcyA9IG9tUHJlZml4ZXMuc3BsaXQoJyAnKSxcblxuICAgIGRvbVByZWZpeGVzID0gb21QcmVmaXhlcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyksXG5cblxuICAgIHRlc3RzID0ge30sXG4gICAgaW5wdXRzID0ge30sXG4gICAgYXR0cnMgPSB7fSxcblxuICAgIGNsYXNzZXMgPSBbXSxcblxuICAgIHNsaWNlID0gY2xhc3Nlcy5zbGljZSxcblxuICAgIGZlYXR1cmVOYW1lLFxuXG5cblxuICAgIF9oYXNPd25Qcm9wZXJ0eSA9ICh7fSkuaGFzT3duUHJvcGVydHksIGhhc093blByb3A7XG5cbiAgICBpZiAoICFpcyhfaGFzT3duUHJvcGVydHksICd1bmRlZmluZWQnKSAmJiAhaXMoX2hhc093blByb3BlcnR5LmNhbGwsICd1bmRlZmluZWQnKSApIHtcbiAgICAgIGhhc093blByb3AgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gX2hhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhc093blByb3AgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gKChwcm9wZXJ0eSBpbiBvYmplY3QpICYmIGlzKG9iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbcHJvcGVydHldLCAndW5kZWZpbmVkJykpO1xuICAgICAgfTtcbiAgICB9XG5cblxuICAgIGlmICghRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcbiAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGJvdW5kID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG5cbiAgICAgICAgICAgICAgdmFyIEYgPSBmdW5jdGlvbigpe307XG4gICAgICAgICAgICAgIEYucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgdmFyIHNlbGYgPSBuZXcgRigpO1xuXG4gICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgICBzZWxmLFxuICAgICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gc2VsZjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJvdW5kO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDc3MoIHN0ciApIHtcbiAgICAgICAgbVN0eWxlLmNzc1RleHQgPSBzdHI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q3NzQWxsKCBzdHIxLCBzdHIyICkge1xuICAgICAgICByZXR1cm4gc2V0Q3NzKHByZWZpeGVzLmpvaW4oc3RyMSArICc7JykgKyAoIHN0cjIgfHwgJycgKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXMoIG9iaiwgdHlwZSApIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IHR5cGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udGFpbnMoIHN0ciwgc3Vic3RyICkge1xuICAgICAgICByZXR1cm4gISF+KCcnICsgc3RyKS5pbmRleE9mKHN1YnN0cik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGVzdFByb3BzKCBwcm9wcywgcHJlZml4ZWQgKSB7XG4gICAgICAgIGZvciAoIHZhciBpIGluIHByb3BzICkge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgIGlmICggIWNvbnRhaW5zKHByb3AsIFwiLVwiKSAmJiBtU3R5bGVbcHJvcF0gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlZml4ZWQgPT0gJ3BmeCcgPyBwcm9wIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGVzdERPTVByb3BzKCBwcm9wcywgb2JqLCBlbGVtICkge1xuICAgICAgICBmb3IgKCB2YXIgaSBpbiBwcm9wcyApIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gb2JqW3Byb3BzW2ldXTtcbiAgICAgICAgICAgIGlmICggaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSA9PT0gZmFsc2UpIHJldHVybiBwcm9wc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpcyhpdGVtLCAnZnVuY3Rpb24nKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmJpbmQoZWxlbSB8fCBvYmopO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXN0UHJvcHNBbGwoIHByb3AsIHByZWZpeGVkLCBlbGVtICkge1xuXG4gICAgICAgIHZhciB1Y1Byb3AgID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSksXG4gICAgICAgICAgICBwcm9wcyAgID0gKHByb3AgKyAnICcgKyBjc3NvbVByZWZpeGVzLmpvaW4odWNQcm9wICsgJyAnKSArIHVjUHJvcCkuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgaWYoaXMocHJlZml4ZWQsIFwic3RyaW5nXCIpIHx8IGlzKHByZWZpeGVkLCBcInVuZGVmaW5lZFwiKSkge1xuICAgICAgICAgIHJldHVybiB0ZXN0UHJvcHMocHJvcHMsIHByZWZpeGVkKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wcyA9IChwcm9wICsgJyAnICsgKGRvbVByZWZpeGVzKS5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG4gICAgICAgICAgcmV0dXJuIHRlc3RET01Qcm9wcyhwcm9wcywgcHJlZml4ZWQsIGVsZW0pO1xuICAgICAgICB9XG4gICAgfSAgICBmb3IgKCB2YXIgZmVhdHVyZSBpbiB0ZXN0cyApIHtcbiAgICAgICAgaWYgKCBoYXNPd25Qcm9wKHRlc3RzLCBmZWF0dXJlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVOYW1lICA9IGZlYXR1cmUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZV0gPSB0ZXN0c1tmZWF0dXJlXSgpO1xuXG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goKE1vZGVybml6cltmZWF0dXJlTmFtZV0gPyAnJyA6ICduby0nKSArIGZlYXR1cmVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlc3RzWydjc3N0cmFuc2l0aW9ucyddID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwoJ3RyYW5zaXRpb24nKTtcbiAgICB9O1xuXG4gICAgZm9yICggdmFyIGZlYXR1cmUgaW4gdGVzdHMgKSB7XG4gICAgICAgIGlmICggaGFzT3duUHJvcCh0ZXN0cywgZmVhdHVyZSkgKSB7XG4gICAgICAgICAgICAvLyBydW4gdGhlIHRlc3QsIHRocm93IHRoZSByZXR1cm4gdmFsdWUgaW50byB0aGUgTW9kZXJuaXpyLFxuICAgICAgICAgICAgLy8gICB0aGVuIGJhc2VkIG9uIHRoYXQgYm9vbGVhbiwgZGVmaW5lIGFuIGFwcHJvcHJpYXRlIGNsYXNzTmFtZVxuICAgICAgICAgICAgLy8gICBhbmQgcHVzaCBpdCBpbnRvIGFuIGFycmF5IG9mIGNsYXNzZXMgd2UnbGwgam9pbiBsYXRlci5cbiAgICAgICAgICAgIGZlYXR1cmVOYW1lICA9IGZlYXR1cmUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZV0gPSB0ZXN0c1tmZWF0dXJlXSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgIE1vZGVybml6ci5hZGRUZXN0ID0gZnVuY3Rpb24gKCBmZWF0dXJlLCB0ZXN0ICkge1xuICAgICAgIGlmICggdHlwZW9mIGZlYXR1cmUgPT0gJ29iamVjdCcgKSB7XG4gICAgICAgICBmb3IgKCB2YXIga2V5IGluIGZlYXR1cmUgKSB7XG4gICAgICAgICAgIGlmICggaGFzT3duUHJvcCggZmVhdHVyZSwga2V5ICkgKSB7XG4gICAgICAgICAgICAgTW9kZXJuaXpyLmFkZFRlc3QoIGtleSwgZmVhdHVyZVsga2V5IF0gKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgIGZlYXR1cmUgPSBmZWF0dXJlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgIGlmICggTW9kZXJuaXpyW2ZlYXR1cmVdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1vZGVybml6cjtcbiAgICAgICAgIH1cblxuICAgICAgICAgdGVzdCA9IHR5cGVvZiB0ZXN0ID09ICdmdW5jdGlvbicgPyB0ZXN0KCkgOiB0ZXN0O1xuXG4gICAgICAgICBpZiAodHlwZW9mIGVuYWJsZUNsYXNzZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgZW5hYmxlQ2xhc3Nlcykge1xuICAgICAgICAgICBkb2NFbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyAodGVzdCA/ICcnIDogJ25vLScpICsgZmVhdHVyZTtcbiAgICAgICAgIH1cbiAgICAgICAgIE1vZGVybml6cltmZWF0dXJlXSA9IHRlc3Q7XG5cbiAgICAgICB9XG5cbiAgICAgICByZXR1cm4gTW9kZXJuaXpyO1xuICAgICB9O1xuXG5cbiAgICBzZXRDc3MoJycpO1xuICAgIG1vZEVsZW0gPSBpbnB1dEVsZW0gPSBudWxsO1xuXG5cbiAgICBNb2Rlcm5penIuX3ZlcnNpb24gICAgICA9IHZlcnNpb247XG5cbiAgICBNb2Rlcm5penIuX3ByZWZpeGVzICAgICA9IHByZWZpeGVzO1xuICAgIE1vZGVybml6ci5fZG9tUHJlZml4ZXMgID0gZG9tUHJlZml4ZXM7XG4gICAgTW9kZXJuaXpyLl9jc3NvbVByZWZpeGVzICA9IGNzc29tUHJlZml4ZXM7XG5cblxuXG4gICAgTW9kZXJuaXpyLnRlc3RQcm9wICAgICAgPSBmdW5jdGlvbihwcm9wKXtcbiAgICAgICAgcmV0dXJuIHRlc3RQcm9wcyhbcHJvcF0pO1xuICAgIH07XG5cbiAgICBNb2Rlcm5penIudGVzdEFsbFByb3BzICA9IHRlc3RQcm9wc0FsbDtcblxuXG4gICAgTW9kZXJuaXpyLnByZWZpeGVkICAgICAgPSBmdW5jdGlvbihwcm9wLCBvYmosIGVsZW0pe1xuICAgICAgaWYoIW9iaikge1xuICAgICAgICByZXR1cm4gdGVzdFByb3BzQWxsKHByb3AsICdwZngnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdFByb3BzQWxsKHByb3AsIG9iaiwgZWxlbSk7XG4gICAgICB9XG4gICAgfTtcblxuXG5cbiAgICByZXR1cm4gTW9kZXJuaXpyO1xufSkod2luZG93LCB3aW5kb3cuZG9jdW1lbnQpO1xuLy8gRU5EIE1vZGVybml6ciBDb2RlXG5cblxudmFyIHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXTtcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB1bmRlZmluZWQ7XG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB1bmRlZmluZWQ7XG5cbmZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhcmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAod2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10pO1xufVxuXG5pZiAoIXJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMuY3NzVHJhbnNpdGlvbiA9IE1vZGVybml6ci5jc3N0cmFuc2l0aW9ucztcbm1vZHVsZS5leHBvcnRzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcbm1vZHVsZS5leHBvcnRzLmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5tb2R1bGUuZXhwb3J0cy5wcmVmaXhlZCA9IGZ1bmN0aW9uKHByb3AsIG9iaiwgZWxlbSkge1xuICByZXR1cm4gTW9kZXJuaXpyLnByZWZpeGVkKHByb3AsIG9iaiwgZWxlbSk7XG59XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy5qc1wiKTtcbnZhciBkaXNwYXRjaGVyID0gcmVxdWlyZShcIi4vZGlzcGF0Y2hlci5qc1wiKTtcbnZhciBjb21wYXQgPSByZXF1aXJlKFwiLi9jb21wYXQuanNcIik7XG5cbmlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciBkZWJ1ZyA9IHJlcXVpcmUoXCIuL2RlYnVnLmpzXCIpO1xufVxuXG52YXIgZXhlY3V0ZVN0ZXAgPSBmdW5jdGlvbigkZWwsIHBvaW50LCBzdGVwSW5zdHJ1Y3Rpb25zLCBhbmltRGF0YSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc3RlcEluc3RydWN0aW9ucykpIHtcbiAgICBzdGVwSW5zdHJ1Y3Rpb25zID0gW3N0ZXBJbnN0cnVjdGlvbnNdO1xuICB9XG5cbiAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBkZWJ1Zy5sb2dnZXIoYW5pbURhdGEubmFtZSArIFwiIDo6IFwiICsgcG9pbnQgKyBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoYW5pbURhdGEuc3RhdGUpLCAkZWwpO1xuICB9XG5cbiAgc3RlcEluc3RydWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHN0ZXApIHtcbiAgICBpZiAodHlwZW9mIHN0ZXAgPT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gQ0xBU1MgQURELCBUT0dHTEUgT1IgUkVNT1ZFXG4gICAgICB2YXIgbW9kaWZpZXIgPSBzdGVwWzBdO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHN0ZXAuc2xpY2UoMSk7XG5cbiAgICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcbiAgICAgIGNhc2UgXCIrXCI6ICRlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ICRlbC5vZmZzZXRIZWlnaHQ7IGJyZWFrO1xuICAgICAgY2FzZSBcIi1cIjogJGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgJGVsLm9mZnNldEhlaWdodDsgYnJlYWs7XG4gICAgICBjYXNlIFwiflwiOiAkZWwuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyAkZWwub2Zmc2V0SGVpZ2h0OyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihcIkNsYXNzIG11c3QgYmUgcHJlZml4ZWQgd2l0aCAnKycsICctJywgb3IgJ34nXCIpO1xuICAgICAgfTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ZXAgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBhbmltRGF0YS5zdGF0ZSA9IHN0ZXAoJGVsLCBhbmltRGF0YS5zdGF0ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3RlcCA9PSBcIm9iamVjdFwiKSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGVwKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAkZWwuc3R5bGVba2V5XSA9IHN0ZXBba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgdmVyYk1hcCA9IHtcbiAgXCJzZXR1cFwiOiBcIjBcIixcbiAgXCJ0cmlnZ2VyXCI6IFwiMVwiLFxuICBcImVuZFwiOiBcIjEwMCVcIixcbiAgXCJjbGVhbnVwXCI6IFwiMTAwJVwiLFxufTtcblxuaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIGFuaW1OYW1lSW5jcmVtZW50ID0gMDtcbn1cblxudmFyIGRvVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCRlbCwgaW5zdHJ1Y3Rpb25zLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcHJvY2Vzc2VkID0ge31cbiAgT2JqZWN0LmtleXMoaW5zdHJ1Y3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIHByb2Nlc3NlZFtrZXldID0gaW5zdHJ1Y3Rpb25zW2tleV07XG4gIH0pO1xuXG4gIHZhciBhbmltRGF0YSA9IHtzdGF0ZTogbnVsbH07XG4gIGlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgYW5pbURhdGEubmFtZSA9IG9wdGlvbnNbXCJuYW1lXCJdIHx8IFwiYW5pbVwiICsgYW5pbU5hbWVJbmNyZW1lbnQrKztcbiAgfVxuXG4gIHZhciB0aW1pbmdFbGVtID0gb3B0aW9uc1tcInRpbWluZ0VsZW1lbnRcIl0gfHwgJGVsO1xuXG4gIE9iamVjdC5rZXlzKHZlcmJNYXApLmZvckVhY2goZnVuY3Rpb24odmVyYikge1xuICAgIHZhciBwcm9jSW5zdCA9IHByb2Nlc3NlZFt2ZXJiXVxuICAgIGlmIChwcm9jSW5zdCkge1xuICAgICAgaWYgKCFwcm9jZXNzZWRbdmVyYk1hcFt2ZXJiXV0pIHsgcHJvY2Vzc2VkW3ZlcmJNYXBbdmVyYl1dID0gW107IH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9jSW5zdCkpIHsgcHJvY0luc3QgPSBbcHJvY0luc3RdOyB9XG4gICAgICBwcm9jZXNzZWRbdmVyYk1hcFt2ZXJiXV0gPSBwcm9jZXNzZWRbdmVyYk1hcFt2ZXJiXV0uY29uY2F0KHByb2NJbnN0KTtcbiAgICAgIGRlbGV0ZSBwcm9jZXNzZWRbdmVyYl07XG4gICAgfVxuICB9KTtcblxuICBpZiAocHJvY2Vzc2VkW1wiMFwiXSkge1xuICAgIGV4ZWN1dGVTdGVwKCRlbCwgXCIwXCIsIHByb2Nlc3NlZFtcIjBcIl0sIGFuaW1EYXRhKTtcbiAgICBkZWxldGUgcHJvY2Vzc2VkW1wiMFwiXTtcbiAgfVxuXG4gIGlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKGRlYnVnLmluRmFsbGJhY2tNb2RlKCkpIHtcbiAgICAgIHJldHVybiBkb0ZhbGxiYWNrKCRlbCwgcHJvY2Vzc2VkLCBhbmltRGF0YSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb21wYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICFjb21wYXQuY3NzVHJhbnNpdGlvbikge1xuICAgIHJldHVybiBkb0ZhbGxiYWNrKCRlbCwgcHJvY2Vzc2VkLCBhbmltRGF0YSwgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgdGltZVNwYW4gPSB1dGlscy5nZXRMb25nZXN0VHJhbnNpdGlvbk9yQW5pbWF0aW9uVGltZSh0aW1pbmdFbGVtKTtcbiAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBkZWJ1Zy5sb2dnZXIoYW5pbURhdGEubmFtZSArIFwiIDo6IEFuaW1hdGluZyBmb3IgXCIgKyB0aW1lU3BhbiArIFwibXNcIik7XG4gIH1cblxuICBPYmplY3Qua2V5cyhwcm9jZXNzZWQpLmZvckVhY2goZnVuY3Rpb24ocG9pbnQpIHtcbiAgICB2YXIgc3RlcEluc3RydWN0aW9ucyA9IHByb2Nlc3NlZFtwb2ludF07XG5cbiAgICBpZiAocG9pbnQuc2xpY2UoLTEpID09IFwiJVwiKSB7XG4gICAgICB2YXIgdGltZXN0YW1wID0gcGFyc2VJbnQocG9pbnQpIC8gMTAwICogdGltZVNwYW47XG4gICAgICBkaXNwYXRjaGVyLnNjaGVkdWxlVGltZXN0YW1wKFxuICAgICAgICB0aW1lc3RhbXAsIGV4ZWN1dGVTdGVwLmJpbmQoJGVsLCAkZWwsIHBvaW50LCBzdGVwSW5zdHJ1Y3Rpb25zLCBhbmltRGF0YSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChwb2ludC5zbGljZSgtMikgPT0gXCJtc1wiKSB7XG4gICAgICB2YXIgdGltZXN0YW1wID0gcGFyc2VJbnQocG9pbnQpO1xuICAgICAgZGlzcGF0Y2hlci5zY2hlZHVsZVRpbWVzdGFtcChcbiAgICAgICAgdGltZXN0YW1wLCBleGVjdXRlU3RlcC5iaW5kKCRlbCwgJGVsLCBwb2ludCwgc3RlcEluc3RydWN0aW9ucywgYW5pbURhdGEpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZnJhbWUgPSBwYXJzZUludChwb2ludCk7XG4gICAgICBkaXNwYXRjaGVyLnNjaGVkdWxlRnJhbWUoXG4gICAgICAgIGZyYW1lLCBleGVjdXRlU3RlcC5iaW5kKCRlbCwgJGVsLCBwb2ludCwgc3RlcEluc3RydWN0aW9ucywgYW5pbURhdGEpXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgZGlzcGF0Y2hlci5raWNrKCk7XG59O1xuXG52YXIgZ2V0VW5pdFByaW9yaXR5ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgaWYgKHBvaW50LnNsaWNlKC0xKSA9PSBcIiVcIikgcmV0dXJuIDI7XG4gIGlmIChwb2ludC5zbGljZSgtMikgPT0gXCJtc1wiKSByZXR1cm4gMTtcbiAgcmV0dXJuIDA7IC8vIGZyYW1lc1xuXG59O1xuXG52YXIgZG9GYWxsYmFjayA9IGZ1bmN0aW9uKCRlbCwgcHJvY2Vzc2VkLCBhbmltRGF0YSwgb3B0aW9ucykge1xuICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGRlYnVnLmxvZ2dlcihhbmltRGF0YS5uYW1lICsgXCIgOjogVXNpbmcgZmFsbGJhY2tcIik7XG4gIH1cblxuICBpZiAob3B0aW9ucy5mYWxsYmFjaykge1xuICAgIG9wdGlvbnMuZmFsbGJhY2soJGVsKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcHJvY2Vzc0tleXMgPSBPYmplY3Qua2V5cyhwcm9jZXNzZWQpLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgdmFyIHVuaXRQcmlvcml0eUEgPSBnZXRVbml0UHJpb3JpdHkoYSk7XG4gICAgICB2YXIgdW5pdFByaW9yaXR5QiA9IGdldFVuaXRQcmlvcml0eShiKTtcbiAgICAgIGlmICh1bml0UHJpb3JpdHlBICE9IHVuaXRQcmlvcml0eUIpIHtcbiAgICAgICAgcmV0dXJuIHVuaXRQcmlvcml0eUEgLSB1bml0UHJpb3JpdHlCO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGEpIC0gcGFyc2VJbnQoYik7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcHJvY2Vzc0tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGV4ZWN1dGVTdGVwLmNhbGwoJGVsLCAkZWwsIGtleSwgcHJvY2Vzc2VkW2tleV0sIGFuaW1EYXRhKTtcbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZG9UcmFuc2l0aW9uID0gZG9UcmFuc2l0aW9uO1xuIiwidmFyIGluRGVidWdNb2RlID0gZmFsc2U7XG52YXIgaW5GYWxsYmFja01vZGUgPSBmYWxzZTtcblxudmFyIHNldCA9IGZ1bmN0aW9uKGFjdGl2ZSkge1xuICBjb25zb2xlLmxvZyhcImNzcy1kcml2ZW4gOjogZGVidWcgbW9kZSBzZXQgdG8gXCIgKyBhY3RpdmUpO1xuICBpbkRlYnVnTW9kZSA9IGFjdGl2ZTtcbn07XG5tb2R1bGUuZXhwb3J0cy5zZXQgPSBzZXQ7XG5cbnZhciBmYWxsYmFja01vZGUgPSBmdW5jdGlvbihhY3RpdmUpIHtcbiAgaW5GYWxsYmFja01vZGUgPSBhY3RpdmU7XG4gIGNvbnNvbGUubG9nKFwiY3NzLWRyaXZlbiA6OiBmYWxsYmFjayBtb2RlIHNldCB0byBcIiArIGFjdGl2ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmZhbGxiYWNrTW9kZSA9IGZhbGxiYWNrTW9kZTtcbm1vZHVsZS5leHBvcnRzLmluRmFsbGJhY2tNb2RlID0gZnVuY3Rpb24oKSB7IHJldHVybiBpbkZhbGxiYWNrTW9kZSB9O1xuXG52YXIgbG9nZ2VyID0gZnVuY3Rpb24oc3RyaW5nLCBlbGVtZW50KSB7XG4gIGlmICghaW5EZWJ1Z01vZGUpIHJldHVybjtcbiAgY29uc29sZS5sb2coXCJjc3MtZHJpdmVuIDo6IFwiICsgc3RyaW5nLCBlbGVtZW50KTtcbn07XG5tb2R1bGUuZXhwb3J0cy5sb2dnZXIgPSBsb2dnZXI7XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy5qc1wiKTtcbnZhciBjb21wYXQgPSByZXF1aXJlKFwiLi9jb21wYXQuanNcIik7XG5cbnZhciBjdXJyZW50RnJhbWUgPSAwO1xudmFyIGJhc2VUaW1lc3RhbXAgPSArbmV3IERhdGUoKTtcbnZhciBjdXJyZW50VGltZXN0YW1wID0gMDtcbnZhciByZWdpc3RyeSA9IHt9O1xudmFyIGZyYW1lcyA9IFtdO1xudmFyIHRpbWVzdGFtcHMgPSBbXTtcbnZhciBydW5uaW5nID0gZmFsc2U7XG5cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBjb21wYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG52YXIgbG9vcERpc3BhdGNoZXIgPSBmdW5jdGlvbih0aW1lc3RhbXApIHtcbiAgY3VycmVudEZyYW1lKys7XG4gIGN1cnJlbnRUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cbiAgaWYgKGZyYW1lc1swXSA9PSBjdXJyZW50RnJhbWUpIHtcbiAgICByZWdpc3RyeVtmcmFtZXNbMF1dLmZvckVhY2goZnVuY3Rpb24oY2IpIHsgY2IoKSB9KTtcbiAgICBkZWxldGUgcmVnaXN0cnlbZnJhbWVzWzBdXTtcbiAgICBmcmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGlmICh0aW1lc3RhbXBzWzBdIDwgdGltZXN0YW1wKSB7XG4gICAgdmFyIHRvZG9zID0gdGltZXN0YW1wcy5maWx0ZXIoZnVuY3Rpb24odHMpIHsgcmV0dXJuIHRzIDwgdGltZXN0YW1wIH0pO1xuICAgIHRpbWVzdGFtcHMgPSB0aW1lc3RhbXBzLmZpbHRlcihmdW5jdGlvbih0cykgeyByZXR1cm4gdHMgPiB0aW1lc3RhbXAgfSk7XG4gICAgdG9kb3MuZm9yRWFjaChmdW5jdGlvbih0cykge1xuICAgICAgcmVnaXN0cnlbdHMgKyBcIm1zXCJdLmZvckVhY2goZnVuY3Rpb24oY2IpIHsgY2IoKSB9KTtcbiAgICAgIGRlbGV0ZSByZWdpc3RyeVt0cyArIFwibXNcIl07XG4gICAgfSk7XG4gIH1cblxuICBpZiAodGltZXN0YW1wcy5sZW5ndGggKyBmcmFtZXMubGVuZ3RoID4gMCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wRGlzcGF0Y2hlcik7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEZyYW1lID0gMDtcbiAgICBjdXJyZW50VGltZXN0YW1wID0gMDtcbiAgICBydW5uaW5nID0gZmFsc2U7XG4gIH1cbn07XG5cbnZhciByZXNvcnRGcmFtZXMgPSBmdW5jdGlvbigpIHtcbiAgZnJhbWVzID0gdXRpbHMuYXJyYXlUb1NldChmcmFtZXMpXG4gIGZyYW1lcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KVxufTtcblxudmFyIHJlc29ydFRpbWVzdGFtcHMgPSBmdW5jdGlvbigpIHtcbiAgdGltZXN0YW1wcyA9IHV0aWxzLmFycmF5VG9TZXQodGltZXN0YW1wcylcbiAgdGltZXN0YW1wcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgLSBiOyB9KSBcbn1cblxudmFyIGFkZFRvUmVnaXN0cnkgPSBmdW5jdGlvbihrZXksIGFjdGlvbikge1xuICBpZiAoIXJlZ2lzdHJ5W2tleV0pIHJlZ2lzdHJ5W2tleV0gPSBbXTtcbiAgcmVnaXN0cnlba2V5XS5wdXNoKGFjdGlvbik7XG59O1xuXG52YXIgc2NoZWR1bGVGcmFtZSA9IGZ1bmN0aW9uKGZyYW1lLCBhY3Rpb24pIHtcbiAgdmFyIHRhcmdldCA9IGN1cnJlbnRGcmFtZSArIGZyYW1lO1xuICBmcmFtZXMucHVzaCh0YXJnZXQpO1xuICBhZGRUb1JlZ2lzdHJ5KHRhcmdldCwgYWN0aW9uKTtcbiAgcmVzb3J0RnJhbWVzKCk7XG59O1xuXG52YXIgZG9TY2hlZHVsZSA9IGZ1bmN0aW9uKHRpbWVzdGFtcCwgYWN0aW9uKSB7XG4gIHZhciB0YXJnZXQgPSBNYXRoLnJvdW5kKGN1cnJlbnRUaW1lc3RhbXAgKyB0aW1lc3RhbXApO1xuICB0aW1lc3RhbXBzLnB1c2godGFyZ2V0KTtcbiAgYWRkVG9SZWdpc3RyeSh0YXJnZXQgKyBcIm1zXCIsIGFjdGlvbik7XG4gIHJlc29ydFRpbWVzdGFtcHMoKTtcbn1cblxudmFyIHNjaGVkdWxlVGltZXN0YW1wID0gZnVuY3Rpb24odGltZXN0YW1wLCBhY3Rpb24pIHtcbiAgaWYgKCFjdXJyZW50VGltZXN0YW1wKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKHVwZGF0ZWRUaW1lc3RhbXApIHtcbiAgICAgIGN1cnJlbnRUaW1lc3RhbXAgPSB1cGRhdGVkVGltZXN0YW1wO1xuICAgICAgZG9TY2hlZHVsZSh0aW1lc3RhbXAsIGFjdGlvbik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZG9TY2hlZHVsZSh0aW1lc3RhbXAsIGFjdGlvbik7XG4gIH1cbn07XG5cbnZhciBraWNrRGlzcGF0Y2hlciA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXJ1bm5pbmcpIHtcbiAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcERpc3BhdGNoZXIpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5raWNrID0ga2lja0Rpc3BhdGNoZXI7XG5tb2R1bGUuZXhwb3J0cy5zY2hlZHVsZUZyYW1lID0gc2NoZWR1bGVGcmFtZTtcbm1vZHVsZS5leHBvcnRzLnNjaGVkdWxlVGltZXN0YW1wID0gc2NoZWR1bGVUaW1lc3RhbXA7XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy5qc1wiKTtcbnZhciBjb3JlID0gcmVxdWlyZShcIi4vY29yZS5qc1wiKTtcblxuaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIGRlYnVnID0gcmVxdWlyZShcIi4vZGVidWcuanNcIik7XG59XG5cbnZhciBDU1NEcml2ZW4gPSB7XG4gIGRvVHJhbnNpdGlvbjogY29yZS5kb1RyYW5zaXRpb24sXG59O1xuXG4vLyBwYXNzb3ZlcnMgZm9yIGlmIGRldmVsb3BlcnMgbGVhdmUgZGVidWcgbW9kZSBvbiB3aGVuIGRlcGxveWluZ1xudmFyIG1pbmlmaWVkRW52V2FybmluZyA9IGZ1bmN0aW9uKGZ1bmNOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLndhcm4oXCJjc3MtZHJpdmVuIDo6IFwiICsgZnVuY05hbWUgKyBcIiBpcyBub3QgYXZhaWxhYmxlIGluIGEgXCIgK1xuICAgICAgICAgICAgICAgICBcIm1pbmlmaWVkIGVudmlyb25tZW50XCIpO1xuICB9XG59XG5cbkNTU0RyaXZlbi5kZWJ1Z01vZGUgPSBtaW5pZmllZEVudldhcm5pbmcoXCJkZWJ1Z01vZGVcIik7XG5DU1NEcml2ZW4uZmFsbGJhY2tNb2RlID0gbWluaWZpZWRFbnZXYXJuaW5nKFwiZmFsbGJhY2tNb2RlXCIpO1xuXG5pZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBDU1NEcml2ZW4uZGVidWdNb2RlID0gZGVidWcuc2V0O1xuICBDU1NEcml2ZW4uZmFsbGJhY2tNb2RlID0gZGVidWcuZmFsbGJhY2tNb2RlO1xufVxuXG5cblxud2luZG93LkNTU0RyaXZlbiA9IENTU0RyaXZlbjtcbm1vZHVsZS5leHBvcnRzID0gQ1NTRHJpdmVuO1xuIiwidmFyIGNvbXBhdCA9IHJlcXVpcmUoXCIuL2NvbXBhdC5qc1wiKTtcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBjb21wYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG52YXIganVtcEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oZm4sIGZyYW1lcykge1xuICBmcmFtZXMgPSBmcmFtZXMgfHwgMTtcbiAgdmFyIGl0ZXJhdGlvbiA9IDA7XG4gIHZhciBqdW1wZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpdGVyYXRpb24gKz0gMTtcbiAgICBpZiAoaXRlcmF0aW9uID49IGZyYW1lcykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGp1bXBlcik7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGp1bXBlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzLmp1bXBBbmltYXRpb25GcmFtZSA9IGp1bXBBbmltYXRpb25GcmFtZTtcblxuXG52YXIgZ2V0TG9uZ2VzdFRyYW5zaXRpb25PckFuaW1hdGlvblRpbWUgPSBmdW5jdGlvbiggZWwgKXtcbiAgLy8gUmV0dXJucyBhbiBlbGVtZW50J3MgbG9uZ2VzdCB0cmFuc2l0aW9uIGRlbGF5K2R1cmF0aW9uIHBhaXJpbmcgaW4gbWlsbGlzZWNvbmRzO1xuICAvLyBBc3N1bXB0aW9uOiBpdCdzIG5vdCBwb3NzaWJsZSBmb3IgdGhlIHR3byBhcnJheXMgdG8gaGF2ZSBkaWZmZXJlbnQgbGVuZ3Rocy5cblxuICB2YXIgdG90YWxzID0gW1wiQW5pbWF0aW9uXCIsIFwiVHJhbnNpdGlvblwiXS5yZWR1Y2UoZnVuY3Rpb24odG90YWxzLCBjc3NUeXBlKSB7XG5cbiAgICB2YXIgZGVsYXksIGR1cmF0aW9uLCBzdWJUb3RhbHM7XG5cbiAgICBkZWxheSA9IGdldENvbXB1dGVkU3R5bGUoIGVsIClbY29tcGF0LnByZWZpeGVkKGNzc1R5cGUgKyBcIkRlbGF5XCIpXVxuICAgIGRlbGF5ID0gZGVsYXkuc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgZHVyYXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKCBlbCApW2NvbXBhdC5wcmVmaXhlZChjc3NUeXBlICsgXCJEdXJhdGlvblwiKV1cbiAgICBkdXJhdGlvbiA9IGR1cmF0aW9uLnNwbGl0KCcsJykubWFwKHBhcnNlRmxvYXQpO1xuXG4gICAgc3ViVG90YWxzID0gZGVsYXkubWFwKGZ1bmN0aW9uKGQsIGl4KSB7IHJldHVybiBkICsgZHVyYXRpb25baXhdIH0pO1xuICAgIHJldHVybiB0b3RhbHMuY29uY2F0KHN1YlRvdGFscyk7XG5cbiAgfSwgW10pO1xuXG4gIC8vIG5vcm1hbGl6ZSB0byBtaWxsaXNlY29uZHNcbiAgdG90YWxzID0gdG90YWxzLm1hcChmdW5jdGlvbih0KSB7IHJldHVybiB0ICogMTAwMDsgfSk7XG5cbiAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KCBudWxsLCB0b3RhbHMgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZ2V0TG9uZ2VzdFRyYW5zaXRpb25PckFuaW1hdGlvblRpbWUgPSBnZXRMb25nZXN0VHJhbnNpdGlvbk9yQW5pbWF0aW9uVGltZTtcblxuXG52YXIgYXJyYXlUb1NldCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24oc2V0LCBpdGVtKSB7XG4gICAgaWYgKHNldC5pbmRleE9mKGl0ZW0pID09IC0xKSB7XG4gICAgICBzZXQucHVzaChpdGVtKTtcbiAgICB9O1xuICAgIHJldHVybiBzZXQ7XG4gIH0sIFtdKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmFycmF5VG9TZXQgPSBhcnJheVRvU2V0O1xuIl19
