(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-prefixed-testprop-testallprops-prefixes-domprefixes-requestanimationframe
 */
;

if (typeof window !== 'undefined') {
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



if (typeof window !== 'undefined') {
  window.CSSDriven = CSSDriven;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pyYWtpY2gvUHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL2pyYWtpY2gvUHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9jb21wYXQuanMiLCIvaG9tZS9qcmFraWNoL1Byb2plY3RzL09wZW5Tb3VyY2UvY3NzLWRyaXZlbi9zcmMvY29yZS5qcyIsIi9ob21lL2pyYWtpY2gvUHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9kZWJ1Zy5qcyIsIi9ob21lL2pyYWtpY2gvUHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9kaXNwYXRjaGVyLmpzIiwiL2hvbWUvanJha2ljaC9Qcm9qZWN0cy9PcGVuU291cmNlL2Nzcy1kcml2ZW4vc3JjL2Zha2VfYmZlMDlmYWMuanMiLCIvaG9tZS9qcmFraWNoL1Byb2plY3RzL09wZW5Tb3VyY2UvY3NzLWRyaXZlbi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vKiBNb2Rlcm5penIgMi44LjMgKEN1c3RvbSBCdWlsZCkgfCBNSVQgJiBCU0RcbiAqIEJ1aWxkOiBodHRwOi8vbW9kZXJuaXpyLmNvbS9kb3dubG9hZC8jLXByZWZpeGVkLXRlc3Rwcm9wLXRlc3RhbGxwcm9wcy1wcmVmaXhlcy1kb21wcmVmaXhlcy1yZXF1ZXN0YW5pbWF0aW9uZnJhbWVcbiAqL1xuO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIE1vZGVybml6ciA9IChmdW5jdGlvbiggd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkICkge1xuXG4gICAgICB2YXIgdmVyc2lvbiA9ICcyLjguMycsXG5cbiAgICAgIE1vZGVybml6ciA9IHt9LFxuXG5cbiAgICAgIGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cbiAgICAgIG1vZCA9ICdtb2Rlcm5penInLFxuICAgICAgbW9kRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobW9kKSxcbiAgICAgIG1TdHlsZSA9IG1vZEVsZW0uc3R5bGUsXG5cbiAgICAgIGlucHV0RWxlbSAgLFxuXG5cbiAgICAgIHRvU3RyaW5nID0ge30udG9TdHJpbmcsXG5cbiAgICAgIHByZWZpeGVzID0gJyAtd2Via2l0LSAtbW96LSAtby0gLW1zLSAnLnNwbGl0KCcgJyksXG5cblxuXG4gICAgICBvbVByZWZpeGVzID0gJ1dlYmtpdCBNb3ogTyBtcycsXG5cbiAgICAgIGNzc29tUHJlZml4ZXMgPSBvbVByZWZpeGVzLnNwbGl0KCcgJyksXG5cbiAgICAgIGRvbVByZWZpeGVzID0gb21QcmVmaXhlcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyksXG5cblxuICAgICAgdGVzdHMgPSB7fSxcbiAgICAgIGlucHV0cyA9IHt9LFxuICAgICAgYXR0cnMgPSB7fSxcblxuICAgICAgY2xhc3NlcyA9IFtdLFxuXG4gICAgICBzbGljZSA9IGNsYXNzZXMuc2xpY2UsXG5cbiAgICAgIGZlYXR1cmVOYW1lLFxuXG5cblxuICAgICAgX2hhc093blByb3BlcnR5ID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSwgaGFzT3duUHJvcDtcblxuICAgICAgaWYgKCAhaXMoX2hhc093blByb3BlcnR5LCAndW5kZWZpbmVkJykgJiYgIWlzKF9oYXNPd25Qcm9wZXJ0eS5jYWxsLCAndW5kZWZpbmVkJykgKSB7XG4gICAgICAgIGhhc093blByb3AgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICAgIHJldHVybiBfaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBoYXNPd25Qcm9wID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgICByZXR1cm4gKChwcm9wZXJ0eSBpbiBvYmplY3QpICYmIGlzKG9iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbcHJvcGVydHldLCAndW5kZWZpbmVkJykpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG5cbiAgICAgIGlmICghRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcbiAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcblxuICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgICAgYm91bmQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIEYgPSBmdW5jdGlvbigpe307XG4gICAgICAgICAgICAgICAgRi5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gbmV3IEYoKTtcblxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgIHNlbGYsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmO1xuXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGJvdW5kO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXRDc3MoIHN0ciApIHtcbiAgICAgICAgICBtU3R5bGUuY3NzVGV4dCA9IHN0cjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2V0Q3NzQWxsKCBzdHIxLCBzdHIyICkge1xuICAgICAgICAgIHJldHVybiBzZXRDc3MocHJlZml4ZXMuam9pbihzdHIxICsgJzsnKSArICggc3RyMiB8fCAnJyApKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaXMoIG9iaiwgdHlwZSApIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gdHlwZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY29udGFpbnMoIHN0ciwgc3Vic3RyICkge1xuICAgICAgICAgIHJldHVybiAhIX4oJycgKyBzdHIpLmluZGV4T2Yoc3Vic3RyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdGVzdFByb3BzKCBwcm9wcywgcHJlZml4ZWQgKSB7XG4gICAgICAgICAgZm9yICggdmFyIGkgaW4gcHJvcHMgKSB7XG4gICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgICAgICAgICAgIGlmICggIWNvbnRhaW5zKHByb3AsIFwiLVwiKSAmJiBtU3R5bGVbcHJvcF0gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBwcmVmaXhlZCA9PSAncGZ4JyA/IHByb3AgOiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdGVzdERPTVByb3BzKCBwcm9wcywgb2JqLCBlbGVtICkge1xuICAgICAgICAgIGZvciAoIHZhciBpIGluIHByb3BzICkge1xuICAgICAgICAgICAgICB2YXIgaXRlbSA9IG9ialtwcm9wc1tpXV07XG4gICAgICAgICAgICAgIGlmICggaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtID09PSBmYWxzZSkgcmV0dXJuIHByb3BzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXMoaXRlbSwgJ2Z1bmN0aW9uJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmJpbmQoZWxlbSB8fCBvYmopO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHRlc3RQcm9wc0FsbCggcHJvcCwgcHJlZml4ZWQsIGVsZW0gKSB7XG5cbiAgICAgICAgICB2YXIgdWNQcm9wICA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpLFxuICAgICAgICAgICAgICBwcm9wcyAgID0gKHByb3AgKyAnICcgKyBjc3NvbVByZWZpeGVzLmpvaW4odWNQcm9wICsgJyAnKSArIHVjUHJvcCkuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgICBpZihpcyhwcmVmaXhlZCwgXCJzdHJpbmdcIikgfHwgaXMocHJlZml4ZWQsIFwidW5kZWZpbmVkXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdFByb3BzKHByb3BzLCBwcmVmaXhlZCk7XG5cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzID0gKHByb3AgKyAnICcgKyAoZG9tUHJlZml4ZXMpLmpvaW4odWNQcm9wICsgJyAnKSArIHVjUHJvcCkuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0RE9NUHJvcHMocHJvcHMsIHByZWZpeGVkLCBlbGVtKTtcbiAgICAgICAgICB9XG4gICAgICB9ICAgIGZvciAoIHZhciBmZWF0dXJlIGluIHRlc3RzICkge1xuICAgICAgICAgIGlmICggaGFzT3duUHJvcCh0ZXN0cywgZmVhdHVyZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVOYW1lICA9IGZlYXR1cmUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lXSA9IHRlc3RzW2ZlYXR1cmVdKCk7XG5cbiAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKChNb2Rlcm5penJbZmVhdHVyZU5hbWVdID8gJycgOiAnbm8tJykgKyBmZWF0dXJlTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0ZXN0c1snY3NzdHJhbnNpdGlvbnMnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwoJ3RyYW5zaXRpb24nKTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAoIHZhciBmZWF0dXJlIGluIHRlc3RzICkge1xuICAgICAgICAgIGlmICggaGFzT3duUHJvcCh0ZXN0cywgZmVhdHVyZSkgKSB7XG4gICAgICAgICAgICAgIC8vIHJ1biB0aGUgdGVzdCwgdGhyb3cgdGhlIHJldHVybiB2YWx1ZSBpbnRvIHRoZSBNb2Rlcm5penIsXG4gICAgICAgICAgICAgIC8vICAgdGhlbiBiYXNlZCBvbiB0aGF0IGJvb2xlYW4sIGRlZmluZSBhbiBhcHByb3ByaWF0ZSBjbGFzc05hbWVcbiAgICAgICAgICAgICAgLy8gICBhbmQgcHVzaCBpdCBpbnRvIGFuIGFycmF5IG9mIGNsYXNzZXMgd2UnbGwgam9pbiBsYXRlci5cbiAgICAgICAgICAgICAgZmVhdHVyZU5hbWUgID0gZmVhdHVyZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICBNb2Rlcm5penJbZmVhdHVyZU5hbWVdID0gdGVzdHNbZmVhdHVyZV0oKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICBNb2Rlcm5penIuYWRkVGVzdCA9IGZ1bmN0aW9uICggZmVhdHVyZSwgdGVzdCApIHtcbiAgICAgICAgIGlmICggdHlwZW9mIGZlYXR1cmUgPT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgIGZvciAoIHZhciBrZXkgaW4gZmVhdHVyZSApIHtcbiAgICAgICAgICAgICBpZiAoIGhhc093blByb3AoIGZlYXR1cmUsIGtleSApICkge1xuICAgICAgICAgICAgICAgTW9kZXJuaXpyLmFkZFRlc3QoIGtleSwgZmVhdHVyZVsga2V5IF0gKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgZmVhdHVyZSA9IGZlYXR1cmUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICBpZiAoIE1vZGVybml6cltmZWF0dXJlXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1vZGVybml6cjtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgIHRlc3QgPSB0eXBlb2YgdGVzdCA9PSAnZnVuY3Rpb24nID8gdGVzdCgpIDogdGVzdDtcblxuICAgICAgICAgICBpZiAodHlwZW9mIGVuYWJsZUNsYXNzZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgZW5hYmxlQ2xhc3Nlcykge1xuICAgICAgICAgICAgIGRvY0VsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArICh0ZXN0ID8gJycgOiAnbm8tJykgKyBmZWF0dXJlO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlXSA9IHRlc3Q7XG5cbiAgICAgICAgIH1cblxuICAgICAgICAgcmV0dXJuIE1vZGVybml6cjtcbiAgICAgICB9O1xuXG5cbiAgICAgIHNldENzcygnJyk7XG4gICAgICBtb2RFbGVtID0gaW5wdXRFbGVtID0gbnVsbDtcblxuXG4gICAgICBNb2Rlcm5penIuX3ZlcnNpb24gICAgICA9IHZlcnNpb247XG5cbiAgICAgIE1vZGVybml6ci5fcHJlZml4ZXMgICAgID0gcHJlZml4ZXM7XG4gICAgICBNb2Rlcm5penIuX2RvbVByZWZpeGVzICA9IGRvbVByZWZpeGVzO1xuICAgICAgTW9kZXJuaXpyLl9jc3NvbVByZWZpeGVzICA9IGNzc29tUHJlZml4ZXM7XG5cblxuXG4gICAgICBNb2Rlcm5penIudGVzdFByb3AgICAgICA9IGZ1bmN0aW9uKHByb3Ape1xuICAgICAgICAgIHJldHVybiB0ZXN0UHJvcHMoW3Byb3BdKTtcbiAgICAgIH07XG5cbiAgICAgIE1vZGVybml6ci50ZXN0QWxsUHJvcHMgID0gdGVzdFByb3BzQWxsO1xuXG5cbiAgICAgIE1vZGVybml6ci5wcmVmaXhlZCAgICAgID0gZnVuY3Rpb24ocHJvcCwgb2JqLCBlbGVtKXtcbiAgICAgICAgaWYoIW9iaikge1xuICAgICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwocHJvcCwgJ3BmeCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdGVzdFByb3BzQWxsKHByb3AsIG9iaiwgZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cblxuXG4gICAgICByZXR1cm4gTW9kZXJuaXpyO1xuICB9KSh3aW5kb3csIHdpbmRvdy5kb2N1bWVudCk7XG4gIC8vIEVORCBNb2Rlcm5penIgQ29kZVxuXG5cbiAgdmFyIHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXTtcbiAgdmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHVuZGVmaW5lZDtcbiAgdmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gdW5kZWZpbmVkO1xuXG4gIGZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhcmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10pO1xuICB9XG5cbiAgaWYgKCFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMuY3NzVHJhbnNpdGlvbiA9IE1vZGVybml6ci5jc3N0cmFuc2l0aW9ucztcbiAgbW9kdWxlLmV4cG9ydHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICBtb2R1bGUuZXhwb3J0cy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lO1xuICBtb2R1bGUuZXhwb3J0cy5wcmVmaXhlZCA9IGZ1bmN0aW9uKHByb3AsIG9iaiwgZWxlbSkge1xuICAgIHJldHVybiBNb2Rlcm5penIucHJlZml4ZWQocHJvcCwgb2JqLCBlbGVtKTtcbiAgfVxufVxuIiwidmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG52YXIgZGlzcGF0Y2hlciA9IHJlcXVpcmUoXCIuL2Rpc3BhdGNoZXIuanNcIik7XG52YXIgY29tcGF0ID0gcmVxdWlyZShcIi4vY29tcGF0LmpzXCIpO1xuXG5pZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgZGVidWcgPSByZXF1aXJlKFwiLi9kZWJ1Zy5qc1wiKTtcbn1cblxudmFyIGV4ZWN1dGVTdGVwID0gZnVuY3Rpb24oJGVsLCBwb2ludCwgc3RlcEluc3RydWN0aW9ucywgYW5pbURhdGEpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHN0ZXBJbnN0cnVjdGlvbnMpKSB7XG4gICAgc3RlcEluc3RydWN0aW9ucyA9IFtzdGVwSW5zdHJ1Y3Rpb25zXTtcbiAgfVxuXG4gIGlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZGVidWcubG9nZ2VyKGFuaW1EYXRhLm5hbWUgKyBcIiA6OiBcIiArIHBvaW50ICsgXCIgLSBcIiArXG4gICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGFuaW1EYXRhLnN0YXRlKSwgJGVsKTtcbiAgfVxuXG4gIHN0ZXBJbnN0cnVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzdGVwKSB7XG4gICAgaWYgKHR5cGVvZiBzdGVwID09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIENMQVNTIEFERCwgVE9HR0xFIE9SIFJFTU9WRVxuICAgICAgdmFyIG1vZGlmaWVyID0gc3RlcFswXTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBzdGVwLnNsaWNlKDEpO1xuXG4gICAgICBzd2l0Y2ggKG1vZGlmaWVyKSB7XG4gICAgICBjYXNlIFwiK1wiOiAkZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyAkZWwub2Zmc2V0SGVpZ2h0OyBicmVhaztcbiAgICAgIGNhc2UgXCItXCI6ICRlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7ICRlbC5vZmZzZXRIZWlnaHQ7IGJyZWFrO1xuICAgICAgY2FzZSBcIn5cIjogJGVsLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgJGVsLm9mZnNldEhlaWdodDsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzcyBtdXN0IGJlIHByZWZpeGVkIHdpdGggJysnLCAnLScsIG9yICd+J1wiKTtcbiAgICAgIH07XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdGVwID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYW5pbURhdGEuc3RhdGUgPSBzdGVwKCRlbCwgYW5pbURhdGEuc3RhdGUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ZXAgPT0gXCJvYmplY3RcIikge1xuICAgICAgT2JqZWN0LmtleXMoc3RlcCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgJGVsLnN0eWxlW2tleV0gPSBzdGVwW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHZlcmJNYXAgPSB7XG4gIFwic2V0dXBcIjogXCIwXCIsXG4gIFwidHJpZ2dlclwiOiBcIjFcIixcbiAgXCJlbmRcIjogXCIxMDAlXCIsXG4gIFwiY2xlYW51cFwiOiBcIjEwMCVcIixcbn07XG5cbmlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciBhbmltTmFtZUluY3JlbWVudCA9IDA7XG59XG5cbnZhciBkb1RyYW5zaXRpb24gPSBmdW5jdGlvbigkZWwsIGluc3RydWN0aW9ucywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHByb2Nlc3NlZCA9IHt9XG4gIE9iamVjdC5rZXlzKGluc3RydWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBwcm9jZXNzZWRba2V5XSA9IGluc3RydWN0aW9uc1trZXldO1xuICB9KTtcblxuICB2YXIgYW5pbURhdGEgPSB7c3RhdGU6IG51bGx9O1xuICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGFuaW1EYXRhLm5hbWUgPSBvcHRpb25zW1wibmFtZVwiXSB8fCBcImFuaW1cIiArIGFuaW1OYW1lSW5jcmVtZW50Kys7XG4gIH1cblxuICB2YXIgdGltaW5nRWxlbSA9IG9wdGlvbnNbXCJ0aW1pbmdFbGVtZW50XCJdIHx8ICRlbDtcblxuICBPYmplY3Qua2V5cyh2ZXJiTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKHZlcmIpIHtcbiAgICB2YXIgcHJvY0luc3QgPSBwcm9jZXNzZWRbdmVyYl1cbiAgICBpZiAocHJvY0luc3QpIHtcbiAgICAgIGlmICghcHJvY2Vzc2VkW3ZlcmJNYXBbdmVyYl1dKSB7IHByb2Nlc3NlZFt2ZXJiTWFwW3ZlcmJdXSA9IFtdOyB9XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvY0luc3QpKSB7IHByb2NJbnN0ID0gW3Byb2NJbnN0XTsgfVxuICAgICAgcHJvY2Vzc2VkW3ZlcmJNYXBbdmVyYl1dID0gcHJvY2Vzc2VkW3ZlcmJNYXBbdmVyYl1dLmNvbmNhdChwcm9jSW5zdCk7XG4gICAgICBkZWxldGUgcHJvY2Vzc2VkW3ZlcmJdO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3NlZFtcIjBcIl0pIHtcbiAgICBleGVjdXRlU3RlcCgkZWwsIFwiMFwiLCBwcm9jZXNzZWRbXCIwXCJdLCBhbmltRGF0YSk7XG4gICAgZGVsZXRlIHByb2Nlc3NlZFtcIjBcIl07XG4gIH1cblxuICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmIChkZWJ1Zy5pbkZhbGxiYWNrTW9kZSgpKSB7XG4gICAgICByZXR1cm4gZG9GYWxsYmFjaygkZWwsIHByb2Nlc3NlZCwgYW5pbURhdGEsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29tcGF0LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAhY29tcGF0LmNzc1RyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gZG9GYWxsYmFjaygkZWwsIHByb2Nlc3NlZCwgYW5pbURhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIHRpbWVTcGFuID0gdXRpbHMuZ2V0TG9uZ2VzdFRyYW5zaXRpb25PckFuaW1hdGlvblRpbWUodGltaW5nRWxlbSk7XG4gIGlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZGVidWcubG9nZ2VyKGFuaW1EYXRhLm5hbWUgKyBcIiA6OiBBbmltYXRpbmcgZm9yIFwiICsgdGltZVNwYW4gKyBcIm1zXCIpO1xuICB9XG5cbiAgT2JqZWN0LmtleXMocHJvY2Vzc2VkKS5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgdmFyIHN0ZXBJbnN0cnVjdGlvbnMgPSBwcm9jZXNzZWRbcG9pbnRdO1xuXG4gICAgaWYgKHBvaW50LnNsaWNlKC0xKSA9PSBcIiVcIikge1xuICAgICAgdmFyIHRpbWVzdGFtcCA9IHBhcnNlSW50KHBvaW50KSAvIDEwMCAqIHRpbWVTcGFuO1xuICAgICAgZGlzcGF0Y2hlci5zY2hlZHVsZVRpbWVzdGFtcChcbiAgICAgICAgdGltZXN0YW1wLCBleGVjdXRlU3RlcC5iaW5kKCRlbCwgJGVsLCBwb2ludCwgc3RlcEluc3RydWN0aW9ucywgYW5pbURhdGEpXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAocG9pbnQuc2xpY2UoLTIpID09IFwibXNcIikge1xuICAgICAgdmFyIHRpbWVzdGFtcCA9IHBhcnNlSW50KHBvaW50KTtcbiAgICAgIGRpc3BhdGNoZXIuc2NoZWR1bGVUaW1lc3RhbXAoXG4gICAgICAgIHRpbWVzdGFtcCwgZXhlY3V0ZVN0ZXAuYmluZCgkZWwsICRlbCwgcG9pbnQsIHN0ZXBJbnN0cnVjdGlvbnMsIGFuaW1EYXRhKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGZyYW1lID0gcGFyc2VJbnQocG9pbnQpO1xuICAgICAgZGlzcGF0Y2hlci5zY2hlZHVsZUZyYW1lKFxuICAgICAgICBmcmFtZSwgZXhlY3V0ZVN0ZXAuYmluZCgkZWwsICRlbCwgcG9pbnQsIHN0ZXBJbnN0cnVjdGlvbnMsIGFuaW1EYXRhKVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRpc3BhdGNoZXIua2ljaygpO1xufTtcblxudmFyIGdldFVuaXRQcmlvcml0eSA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gIGlmIChwb2ludC5zbGljZSgtMSkgPT0gXCIlXCIpIHJldHVybiAyO1xuICBpZiAocG9pbnQuc2xpY2UoLTIpID09IFwibXNcIikgcmV0dXJuIDE7XG4gIHJldHVybiAwOyAvLyBmcmFtZXNcblxufTtcblxudmFyIGRvRmFsbGJhY2sgPSBmdW5jdGlvbigkZWwsIHByb2Nlc3NlZCwgYW5pbURhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBkZWJ1Zy5sb2dnZXIoYW5pbURhdGEubmFtZSArIFwiIDo6IFVzaW5nIGZhbGxiYWNrXCIpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZmFsbGJhY2spIHtcbiAgICBvcHRpb25zLmZhbGxiYWNrKCRlbCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHByb2Nlc3NLZXlzID0gT2JqZWN0LmtleXMocHJvY2Vzc2VkKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHZhciB1bml0UHJpb3JpdHlBID0gZ2V0VW5pdFByaW9yaXR5KGEpO1xuICAgICAgdmFyIHVuaXRQcmlvcml0eUIgPSBnZXRVbml0UHJpb3JpdHkoYik7XG4gICAgICBpZiAodW5pdFByaW9yaXR5QSAhPSB1bml0UHJpb3JpdHlCKSB7XG4gICAgICAgIHJldHVybiB1bml0UHJpb3JpdHlBIC0gdW5pdFByaW9yaXR5QjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChhKSAtIHBhcnNlSW50KGIpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHByb2Nlc3NLZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBleGVjdXRlU3RlcC5jYWxsKCRlbCwgJGVsLCBrZXksIHByb2Nlc3NlZFtrZXldLCBhbmltRGF0YSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmRvVHJhbnNpdGlvbiA9IGRvVHJhbnNpdGlvbjtcbiIsInZhciBpbkRlYnVnTW9kZSA9IGZhbHNlO1xudmFyIGluRmFsbGJhY2tNb2RlID0gZmFsc2U7XG5cbnZhciBzZXQgPSBmdW5jdGlvbihhY3RpdmUpIHtcbiAgY29uc29sZS5sb2coXCJjc3MtZHJpdmVuIDo6IGRlYnVnIG1vZGUgc2V0IHRvIFwiICsgYWN0aXZlKTtcbiAgaW5EZWJ1Z01vZGUgPSBhY3RpdmU7XG59O1xubW9kdWxlLmV4cG9ydHMuc2V0ID0gc2V0O1xuXG52YXIgZmFsbGJhY2tNb2RlID0gZnVuY3Rpb24oYWN0aXZlKSB7XG4gIGluRmFsbGJhY2tNb2RlID0gYWN0aXZlO1xuICBjb25zb2xlLmxvZyhcImNzcy1kcml2ZW4gOjogZmFsbGJhY2sgbW9kZSBzZXQgdG8gXCIgKyBhY3RpdmUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mYWxsYmFja01vZGUgPSBmYWxsYmFja01vZGU7XG5tb2R1bGUuZXhwb3J0cy5pbkZhbGxiYWNrTW9kZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaW5GYWxsYmFja01vZGUgfTtcblxudmFyIGxvZ2dlciA9IGZ1bmN0aW9uKHN0cmluZywgZWxlbWVudCkge1xuICBpZiAoIWluRGVidWdNb2RlKSByZXR1cm47XG4gIGNvbnNvbGUubG9nKFwiY3NzLWRyaXZlbiA6OiBcIiArIHN0cmluZywgZWxlbWVudCk7XG59O1xubW9kdWxlLmV4cG9ydHMubG9nZ2VyID0gbG9nZ2VyO1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG52YXIgY29tcGF0ID0gcmVxdWlyZShcIi4vY29tcGF0LmpzXCIpO1xuXG52YXIgY3VycmVudEZyYW1lID0gMDtcbnZhciBiYXNlVGltZXN0YW1wID0gK25ldyBEYXRlKCk7XG52YXIgY3VycmVudFRpbWVzdGFtcCA9IDA7XG52YXIgcmVnaXN0cnkgPSB7fTtcbnZhciBmcmFtZXMgPSBbXTtcbnZhciB0aW1lc3RhbXBzID0gW107XG52YXIgcnVubmluZyA9IGZhbHNlO1xuXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gY29tcGF0LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxudmFyIGxvb3BEaXNwYXRjaGVyID0gZnVuY3Rpb24odGltZXN0YW1wKSB7XG4gIGN1cnJlbnRGcmFtZSsrO1xuICBjdXJyZW50VGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG4gIGlmIChmcmFtZXNbMF0gPT0gY3VycmVudEZyYW1lKSB7XG4gICAgcmVnaXN0cnlbZnJhbWVzWzBdXS5mb3JFYWNoKGZ1bmN0aW9uKGNiKSB7IGNiKCkgfSk7XG4gICAgZGVsZXRlIHJlZ2lzdHJ5W2ZyYW1lc1swXV07XG4gICAgZnJhbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBpZiAodGltZXN0YW1wc1swXSA8IHRpbWVzdGFtcCkge1xuICAgIHZhciB0b2RvcyA9IHRpbWVzdGFtcHMuZmlsdGVyKGZ1bmN0aW9uKHRzKSB7IHJldHVybiB0cyA8IHRpbWVzdGFtcCB9KTtcbiAgICB0aW1lc3RhbXBzID0gdGltZXN0YW1wcy5maWx0ZXIoZnVuY3Rpb24odHMpIHsgcmV0dXJuIHRzID4gdGltZXN0YW1wIH0pO1xuICAgIHRvZG9zLmZvckVhY2goZnVuY3Rpb24odHMpIHtcbiAgICAgIHJlZ2lzdHJ5W3RzICsgXCJtc1wiXS5mb3JFYWNoKGZ1bmN0aW9uKGNiKSB7IGNiKCkgfSk7XG4gICAgICBkZWxldGUgcmVnaXN0cnlbdHMgKyBcIm1zXCJdO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHRpbWVzdGFtcHMubGVuZ3RoICsgZnJhbWVzLmxlbmd0aCA+IDApIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcERpc3BhdGNoZXIpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRGcmFtZSA9IDA7XG4gICAgY3VycmVudFRpbWVzdGFtcCA9IDA7XG4gICAgcnVubmluZyA9IGZhbHNlO1xuICB9XG59O1xuXG52YXIgcmVzb3J0RnJhbWVzID0gZnVuY3Rpb24oKSB7XG4gIGZyYW1lcyA9IHV0aWxzLmFycmF5VG9TZXQoZnJhbWVzKVxuICBmcmFtZXMuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIC0gYjsgfSlcbn07XG5cbnZhciByZXNvcnRUaW1lc3RhbXBzID0gZnVuY3Rpb24oKSB7XG4gIHRpbWVzdGFtcHMgPSB1dGlscy5hcnJheVRvU2V0KHRpbWVzdGFtcHMpXG4gIHRpbWVzdGFtcHMuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIC0gYjsgfSkgXG59XG5cbnZhciBhZGRUb1JlZ2lzdHJ5ID0gZnVuY3Rpb24oa2V5LCBhY3Rpb24pIHtcbiAgaWYgKCFyZWdpc3RyeVtrZXldKSByZWdpc3RyeVtrZXldID0gW107XG4gIHJlZ2lzdHJ5W2tleV0ucHVzaChhY3Rpb24pO1xufTtcblxudmFyIHNjaGVkdWxlRnJhbWUgPSBmdW5jdGlvbihmcmFtZSwgYWN0aW9uKSB7XG4gIHZhciB0YXJnZXQgPSBjdXJyZW50RnJhbWUgKyBmcmFtZTtcbiAgZnJhbWVzLnB1c2godGFyZ2V0KTtcbiAgYWRkVG9SZWdpc3RyeSh0YXJnZXQsIGFjdGlvbik7XG4gIHJlc29ydEZyYW1lcygpO1xufTtcblxudmFyIGRvU2NoZWR1bGUgPSBmdW5jdGlvbih0aW1lc3RhbXAsIGFjdGlvbikge1xuICB2YXIgdGFyZ2V0ID0gTWF0aC5yb3VuZChjdXJyZW50VGltZXN0YW1wICsgdGltZXN0YW1wKTtcbiAgdGltZXN0YW1wcy5wdXNoKHRhcmdldCk7XG4gIGFkZFRvUmVnaXN0cnkodGFyZ2V0ICsgXCJtc1wiLCBhY3Rpb24pO1xuICByZXNvcnRUaW1lc3RhbXBzKCk7XG59XG5cbnZhciBzY2hlZHVsZVRpbWVzdGFtcCA9IGZ1bmN0aW9uKHRpbWVzdGFtcCwgYWN0aW9uKSB7XG4gIGlmICghY3VycmVudFRpbWVzdGFtcCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbih1cGRhdGVkVGltZXN0YW1wKSB7XG4gICAgICBjdXJyZW50VGltZXN0YW1wID0gdXBkYXRlZFRpbWVzdGFtcDtcbiAgICAgIGRvU2NoZWR1bGUodGltZXN0YW1wLCBhY3Rpb24pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGRvU2NoZWR1bGUodGltZXN0YW1wLCBhY3Rpb24pO1xuICB9XG59O1xuXG52YXIga2lja0Rpc3BhdGNoZXIgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCFydW5uaW5nKSB7XG4gICAgcnVubmluZyA9IHRydWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3BEaXNwYXRjaGVyKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMua2ljayA9IGtpY2tEaXNwYXRjaGVyO1xubW9kdWxlLmV4cG9ydHMuc2NoZWR1bGVGcmFtZSA9IHNjaGVkdWxlRnJhbWU7XG5tb2R1bGUuZXhwb3J0cy5zY2hlZHVsZVRpbWVzdGFtcCA9IHNjaGVkdWxlVGltZXN0YW1wO1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG52YXIgY29yZSA9IHJlcXVpcmUoXCIuL2NvcmUuanNcIik7XG5cbmlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciBkZWJ1ZyA9IHJlcXVpcmUoXCIuL2RlYnVnLmpzXCIpO1xufVxuXG52YXIgQ1NTRHJpdmVuID0ge1xuICBkb1RyYW5zaXRpb246IGNvcmUuZG9UcmFuc2l0aW9uLFxufTtcblxuLy8gcGFzc292ZXJzIGZvciBpZiBkZXZlbG9wZXJzIGxlYXZlIGRlYnVnIG1vZGUgb24gd2hlbiBkZXBsb3lpbmdcbnZhciBtaW5pZmllZEVudldhcm5pbmcgPSBmdW5jdGlvbihmdW5jTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS53YXJuKFwiY3NzLWRyaXZlbiA6OiBcIiArIGZ1bmNOYW1lICsgXCIgaXMgbm90IGF2YWlsYWJsZSBpbiBhIFwiICtcbiAgICAgICAgICAgICAgICAgXCJtaW5pZmllZCBlbnZpcm9ubWVudFwiKTtcbiAgfVxufVxuXG5DU1NEcml2ZW4uZGVidWdNb2RlID0gbWluaWZpZWRFbnZXYXJuaW5nKFwiZGVidWdNb2RlXCIpO1xuQ1NTRHJpdmVuLmZhbGxiYWNrTW9kZSA9IG1pbmlmaWVkRW52V2FybmluZyhcImZhbGxiYWNrTW9kZVwiKTtcblxuaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQ1NTRHJpdmVuLmRlYnVnTW9kZSA9IGRlYnVnLnNldDtcbiAgQ1NTRHJpdmVuLmZhbGxiYWNrTW9kZSA9IGRlYnVnLmZhbGxiYWNrTW9kZTtcbn1cblxuXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuQ1NTRHJpdmVuID0gQ1NTRHJpdmVuO1xufVxubW9kdWxlLmV4cG9ydHMgPSBDU1NEcml2ZW47XG4iLCJ2YXIgY29tcGF0ID0gcmVxdWlyZShcIi4vY29tcGF0LmpzXCIpO1xudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGNvbXBhdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbnZhciBqdW1wQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihmbiwgZnJhbWVzKSB7XG4gIGZyYW1lcyA9IGZyYW1lcyB8fCAxO1xuICB2YXIgaXRlcmF0aW9uID0gMDtcbiAgdmFyIGp1bXBlciA9IGZ1bmN0aW9uKCkge1xuICAgIGl0ZXJhdGlvbiArPSAxO1xuICAgIGlmIChpdGVyYXRpb24gPj0gZnJhbWVzKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoanVtcGVyKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoanVtcGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuanVtcEFuaW1hdGlvbkZyYW1lID0ganVtcEFuaW1hdGlvbkZyYW1lO1xuXG5cbnZhciBnZXRMb25nZXN0VHJhbnNpdGlvbk9yQW5pbWF0aW9uVGltZSA9IGZ1bmN0aW9uKCBlbCApe1xuICAvLyBSZXR1cm5zIGFuIGVsZW1lbnQncyBsb25nZXN0IHRyYW5zaXRpb24gZGVsYXkrZHVyYXRpb24gcGFpcmluZyBpbiBtaWxsaXNlY29uZHM7XG4gIC8vIEFzc3VtcHRpb246IGl0J3Mgbm90IHBvc3NpYmxlIGZvciB0aGUgdHdvIGFycmF5cyB0byBoYXZlIGRpZmZlcmVudCBsZW5ndGhzLlxuXG4gIHZhciB0b3RhbHMgPSBbXCJBbmltYXRpb25cIiwgXCJUcmFuc2l0aW9uXCJdLnJlZHVjZShmdW5jdGlvbih0b3RhbHMsIGNzc1R5cGUpIHtcblxuICAgIHZhciBkZWxheSwgZHVyYXRpb24sIHN1YlRvdGFscztcblxuICAgIGRlbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWwgKVtjb21wYXQucHJlZml4ZWQoY3NzVHlwZSArIFwiRGVsYXlcIildXG4gICAgZGVsYXkgPSBkZWxheS5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBkdXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoIGVsIClbY29tcGF0LnByZWZpeGVkKGNzc1R5cGUgKyBcIkR1cmF0aW9uXCIpXVxuICAgIGR1cmF0aW9uID0gZHVyYXRpb24uc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG5cbiAgICBzdWJUb3RhbHMgPSBkZWxheS5tYXAoZnVuY3Rpb24oZCwgaXgpIHsgcmV0dXJuIGQgKyBkdXJhdGlvbltpeF0gfSk7XG4gICAgcmV0dXJuIHRvdGFscy5jb25jYXQoc3ViVG90YWxzKTtcblxuICB9LCBbXSk7XG5cbiAgLy8gbm9ybWFsaXplIHRvIG1pbGxpc2Vjb25kc1xuICB0b3RhbHMgPSB0b3RhbHMubWFwKGZ1bmN0aW9uKHQpIHsgcmV0dXJuIHQgKiAxMDAwOyB9KTtcblxuICByZXR1cm4gTWF0aC5tYXguYXBwbHkoIG51bGwsIHRvdGFscyApO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5nZXRMb25nZXN0VHJhbnNpdGlvbk9yQW5pbWF0aW9uVGltZSA9IGdldExvbmdlc3RUcmFuc2l0aW9uT3JBbmltYXRpb25UaW1lO1xuXG5cbnZhciBhcnJheVRvU2V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihzZXQsIGl0ZW0pIHtcbiAgICBpZiAoc2V0LmluZGV4T2YoaXRlbSkgPT0gLTEpIHtcbiAgICAgIHNldC5wdXNoKGl0ZW0pO1xuICAgIH07XG4gICAgcmV0dXJuIHNldDtcbiAgfSwgW10pO1xufTtcblxubW9kdWxlLmV4cG9ydHMuYXJyYXlUb1NldCA9IGFycmF5VG9TZXQ7XG4iXX0=
