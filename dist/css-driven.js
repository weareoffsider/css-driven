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

  if (!compat.requestAnimationFrame) {
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

var logger = function(string) {
  if (!inDebugMode) return;
  console.log("css-driven :: " + string);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT2Zmc2lkZXIvY3NzLWRyaXZlbi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qcmFraWNoL3Byb2plY3RzL09mZnNpZGVyL2Nzcy1kcml2ZW4vc3JjL2NvbXBhdC5qcyIsIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT2Zmc2lkZXIvY3NzLWRyaXZlbi9zcmMvY29yZS5qcyIsIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT2Zmc2lkZXIvY3NzLWRyaXZlbi9zcmMvZGVidWcuanMiLCIvaG9tZS9qcmFraWNoL3Byb2plY3RzL09mZnNpZGVyL2Nzcy1kcml2ZW4vc3JjL2Rpc3BhdGNoZXIuanMiLCIvaG9tZS9qcmFraWNoL3Byb2plY3RzL09mZnNpZGVyL2Nzcy1kcml2ZW4vc3JjL2Zha2VfNjY2OWE2MzEuanMiLCIvaG9tZS9qcmFraWNoL3Byb2plY3RzL09mZnNpZGVyL2Nzcy1kcml2ZW4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vKiBNb2Rlcm5penIgMi44LjMgKEN1c3RvbSBCdWlsZCkgfCBNSVQgJiBCU0RcbiAqIEJ1aWxkOiBodHRwOi8vbW9kZXJuaXpyLmNvbS9kb3dubG9hZC8jLXByZWZpeGVkLXRlc3Rwcm9wLXRlc3RhbGxwcm9wcy1wcmVmaXhlcy1kb21wcmVmaXhlcy1yZXF1ZXN0YW5pbWF0aW9uZnJhbWVcbiAqL1xuO1xuXG52YXIgTW9kZXJuaXpyID0gKGZ1bmN0aW9uKCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQgKSB7XG5cbiAgICB2YXIgdmVyc2lvbiA9ICcyLjguMycsXG5cbiAgICBNb2Rlcm5penIgPSB7fSxcblxuXG4gICAgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcblxuICAgIG1vZCA9ICdtb2Rlcm5penInLFxuICAgIG1vZEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG1vZCksXG4gICAgbVN0eWxlID0gbW9kRWxlbS5zdHlsZSxcblxuICAgIGlucHV0RWxlbSAgLFxuXG5cbiAgICB0b1N0cmluZyA9IHt9LnRvU3RyaW5nLFxuXG4gICAgcHJlZml4ZXMgPSAnIC13ZWJraXQtIC1tb3otIC1vLSAtbXMtICcuc3BsaXQoJyAnKSxcblxuXG5cbiAgICBvbVByZWZpeGVzID0gJ1dlYmtpdCBNb3ogTyBtcycsXG5cbiAgICBjc3NvbVByZWZpeGVzID0gb21QcmVmaXhlcy5zcGxpdCgnICcpLFxuXG4gICAgZG9tUHJlZml4ZXMgPSBvbVByZWZpeGVzLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKSxcblxuXG4gICAgdGVzdHMgPSB7fSxcbiAgICBpbnB1dHMgPSB7fSxcbiAgICBhdHRycyA9IHt9LFxuXG4gICAgY2xhc3NlcyA9IFtdLFxuXG4gICAgc2xpY2UgPSBjbGFzc2VzLnNsaWNlLFxuXG4gICAgZmVhdHVyZU5hbWUsXG5cblxuXG4gICAgX2hhc093blByb3BlcnR5ID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSwgaGFzT3duUHJvcDtcblxuICAgIGlmICggIWlzKF9oYXNPd25Qcm9wZXJ0eSwgJ3VuZGVmaW5lZCcpICYmICFpcyhfaGFzT3duUHJvcGVydHkuY2FsbCwgJ3VuZGVmaW5lZCcpICkge1xuICAgICAgaGFzT3duUHJvcCA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiBfaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGFzT3duUHJvcCA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5KSB7IFxuICAgICAgICByZXR1cm4gKChwcm9wZXJ0eSBpbiBvYmplY3QpICYmIGlzKG9iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbcHJvcGVydHldLCAndW5kZWZpbmVkJykpO1xuICAgICAgfTtcbiAgICB9XG5cblxuICAgIGlmICghRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcbiAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgIT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGJvdW5kID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG5cbiAgICAgICAgICAgICAgdmFyIEYgPSBmdW5jdGlvbigpe307XG4gICAgICAgICAgICAgIEYucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgdmFyIHNlbGYgPSBuZXcgRigpO1xuXG4gICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgICBzZWxmLFxuICAgICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gc2VsZjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJvdW5kO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDc3MoIHN0ciApIHtcbiAgICAgICAgbVN0eWxlLmNzc1RleHQgPSBzdHI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q3NzQWxsKCBzdHIxLCBzdHIyICkge1xuICAgICAgICByZXR1cm4gc2V0Q3NzKHByZWZpeGVzLmpvaW4oc3RyMSArICc7JykgKyAoIHN0cjIgfHwgJycgKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXMoIG9iaiwgdHlwZSApIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IHR5cGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udGFpbnMoIHN0ciwgc3Vic3RyICkge1xuICAgICAgICByZXR1cm4gISF+KCcnICsgc3RyKS5pbmRleE9mKHN1YnN0cik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGVzdFByb3BzKCBwcm9wcywgcHJlZml4ZWQgKSB7XG4gICAgICAgIGZvciAoIHZhciBpIGluIHByb3BzICkge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgICAgICAgIGlmICggIWNvbnRhaW5zKHByb3AsIFwiLVwiKSAmJiBtU3R5bGVbcHJvcF0gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlZml4ZWQgPT0gJ3BmeCcgPyBwcm9wIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGVzdERPTVByb3BzKCBwcm9wcywgb2JqLCBlbGVtICkge1xuICAgICAgICBmb3IgKCB2YXIgaSBpbiBwcm9wcyApIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gb2JqW3Byb3BzW2ldXTtcbiAgICAgICAgICAgIGlmICggaXRlbSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSA9PT0gZmFsc2UpIHJldHVybiBwcm9wc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpcyhpdGVtLCAnZnVuY3Rpb24nKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmJpbmQoZWxlbSB8fCBvYmopO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXN0UHJvcHNBbGwoIHByb3AsIHByZWZpeGVkLCBlbGVtICkge1xuXG4gICAgICAgIHZhciB1Y1Byb3AgID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSksXG4gICAgICAgICAgICBwcm9wcyAgID0gKHByb3AgKyAnICcgKyBjc3NvbVByZWZpeGVzLmpvaW4odWNQcm9wICsgJyAnKSArIHVjUHJvcCkuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgaWYoaXMocHJlZml4ZWQsIFwic3RyaW5nXCIpIHx8IGlzKHByZWZpeGVkLCBcInVuZGVmaW5lZFwiKSkge1xuICAgICAgICAgIHJldHVybiB0ZXN0UHJvcHMocHJvcHMsIHByZWZpeGVkKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wcyA9IChwcm9wICsgJyAnICsgKGRvbVByZWZpeGVzKS5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG4gICAgICAgICAgcmV0dXJuIHRlc3RET01Qcm9wcyhwcm9wcywgcHJlZml4ZWQsIGVsZW0pO1xuICAgICAgICB9XG4gICAgfSAgICBmb3IgKCB2YXIgZmVhdHVyZSBpbiB0ZXN0cyApIHtcbiAgICAgICAgaWYgKCBoYXNPd25Qcm9wKHRlc3RzLCBmZWF0dXJlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVOYW1lICA9IGZlYXR1cmUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZV0gPSB0ZXN0c1tmZWF0dXJlXSgpO1xuXG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goKE1vZGVybml6cltmZWF0dXJlTmFtZV0gPyAnJyA6ICduby0nKSArIGZlYXR1cmVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAgTW9kZXJuaXpyLmFkZFRlc3QgPSBmdW5jdGlvbiAoIGZlYXR1cmUsIHRlc3QgKSB7XG4gICAgICAgaWYgKCB0eXBlb2YgZmVhdHVyZSA9PSAnb2JqZWN0JyApIHtcbiAgICAgICAgIGZvciAoIHZhciBrZXkgaW4gZmVhdHVyZSApIHtcbiAgICAgICAgICAgaWYgKCBoYXNPd25Qcm9wKCBmZWF0dXJlLCBrZXkgKSApIHtcbiAgICAgICAgICAgICBNb2Rlcm5penIuYWRkVGVzdCgga2V5LCBmZWF0dXJlWyBrZXkgXSApO1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgZmVhdHVyZSA9IGZlYXR1cmUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgaWYgKCBNb2Rlcm5penJbZmVhdHVyZV0gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTW9kZXJuaXpyO1xuICAgICAgICAgfVxuXG4gICAgICAgICB0ZXN0ID0gdHlwZW9mIHRlc3QgPT0gJ2Z1bmN0aW9uJyA/IHRlc3QoKSA6IHRlc3Q7XG5cbiAgICAgICAgIGlmICh0eXBlb2YgZW5hYmxlQ2xhc3NlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbmFibGVDbGFzc2VzKSB7XG4gICAgICAgICAgIGRvY0VsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArICh0ZXN0ID8gJycgOiAnbm8tJykgKyBmZWF0dXJlO1xuICAgICAgICAgfVxuICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVdID0gdGVzdDtcblxuICAgICAgIH1cblxuICAgICAgIHJldHVybiBNb2Rlcm5penI7IFxuICAgICB9O1xuXG5cbiAgICBzZXRDc3MoJycpO1xuICAgIG1vZEVsZW0gPSBpbnB1dEVsZW0gPSBudWxsO1xuXG5cbiAgICBNb2Rlcm5penIuX3ZlcnNpb24gICAgICA9IHZlcnNpb247XG5cbiAgICBNb2Rlcm5penIuX3ByZWZpeGVzICAgICA9IHByZWZpeGVzO1xuICAgIE1vZGVybml6ci5fZG9tUHJlZml4ZXMgID0gZG9tUHJlZml4ZXM7XG4gICAgTW9kZXJuaXpyLl9jc3NvbVByZWZpeGVzICA9IGNzc29tUHJlZml4ZXM7XG5cblxuXG4gICAgTW9kZXJuaXpyLnRlc3RQcm9wICAgICAgPSBmdW5jdGlvbihwcm9wKXtcbiAgICAgICAgcmV0dXJuIHRlc3RQcm9wcyhbcHJvcF0pO1xuICAgIH07XG5cbiAgICBNb2Rlcm5penIudGVzdEFsbFByb3BzICA9IHRlc3RQcm9wc0FsbDtcblxuXG4gICAgTW9kZXJuaXpyLnByZWZpeGVkICAgICAgPSBmdW5jdGlvbihwcm9wLCBvYmosIGVsZW0pe1xuICAgICAgaWYoIW9iaikge1xuICAgICAgICByZXR1cm4gdGVzdFByb3BzQWxsKHByb3AsICdwZngnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGVzdFByb3BzQWxsKHByb3AsIG9iaiwgZWxlbSk7XG4gICAgICB9XG4gICAgfTtcblxuXG5cbiAgICByZXR1cm4gTW9kZXJuaXpyO1xufSkod2luZG93LCB3aW5kb3cuZG9jdW1lbnQpO1xuLy8gRU5EIE1vZGVybml6ciBDb2RlXG5cblxudmFyIHZlbmRvcnMgPSBbJ3dlYmtpdCcsICdtb3onXTtcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB1bmRlZmluZWQ7XG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB1bmRlZmluZWQ7XG5cbmZvcih2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhcmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAod2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10pO1xufVxuXG5pZiAoIXJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xubW9kdWxlLmV4cG9ydHMuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYW5jZWxBbmltYXRpb25GcmFtZTtcbm1vZHVsZS5leHBvcnRzLnByZWZpeGVkID0gZnVuY3Rpb24ocHJvcCwgb2JqLCBlbGVtKSB7XG4gIHJldHVybiBNb2Rlcm5penIucHJlZml4ZWQocHJvcCwgb2JqLCBlbGVtKTtcbn1cbiIsInZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xudmFyIGRpc3BhdGNoZXIgPSByZXF1aXJlKFwiLi9kaXNwYXRjaGVyLmpzXCIpO1xudmFyIGNvbXBhdCA9IHJlcXVpcmUoXCIuL2NvbXBhdC5qc1wiKTtcblxuaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIGRlYnVnID0gcmVxdWlyZShcIi4vZGVidWcuanNcIik7XG59XG5cbnZhciBleGVjdXRlU3RlcCA9IGZ1bmN0aW9uKCRlbCwgcG9pbnQsIHN0ZXBJbnN0cnVjdGlvbnMsIGFuaW1EYXRhKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzdGVwSW5zdHJ1Y3Rpb25zKSkge1xuICAgIHN0ZXBJbnN0cnVjdGlvbnMgPSBbc3RlcEluc3RydWN0aW9uc107XG4gIH1cblxuICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGRlYnVnLmxvZ2dlcihhbmltRGF0YS5uYW1lICsgXCIgOjogXCIgKyBwb2ludCArIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShhbmltRGF0YS5zdGF0ZSkpO1xuICB9XG5cbiAgc3RlcEluc3RydWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHN0ZXApIHtcbiAgICBpZiAodHlwZW9mIHN0ZXAgPT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gQ0xBU1MgQURELCBUT0dHTEUgT1IgUkVNT1ZFXG4gICAgICB2YXIgbW9kaWZpZXIgPSBzdGVwWzBdO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHN0ZXAuc2xpY2UoMSk7XG5cbiAgICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcbiAgICAgIGNhc2UgXCIrXCI6ICRlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IGJyZWFrO1xuICAgICAgY2FzZSBcIi1cIjogJGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgYnJlYWs7XG4gICAgICBjYXNlIFwiflwiOiAkZWwuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihcIkNsYXNzIG11c3QgYmUgcHJlZml4ZWQgd2l0aCAnKycsICctJywgb3IgJ34nXCIpO1xuICAgICAgfTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ZXAgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBhbmltRGF0YS5zdGF0ZSA9IHN0ZXAoJGVsLCBhbmltRGF0YS5zdGF0ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3RlcCA9PSBcIm9iamVjdFwiKSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGVwKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAkZWwuc3R5bGVba2V5XSA9IHN0ZXBba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgdmVyYk1hcCA9IHtcbiAgXCJzZXR1cFwiOiBcIjBcIixcbiAgXCJ0cmlnZ2VyXCI6IFwiMVwiLFxuICBcImVuZFwiOiBcIjEwMCVcIixcbiAgXCJjbGVhbnVwXCI6IFwiMTAwJVwiLFxufTtcblxuaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgdmFyIGFuaW1OYW1lSW5jcmVtZW50ID0gMDtcbn1cblxudmFyIGRvVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCRlbCwgaW5zdHJ1Y3Rpb25zLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcHJvY2Vzc2VkID0ge31cbiAgT2JqZWN0LmtleXMoaW5zdHJ1Y3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIHByb2Nlc3NlZFtrZXldID0gaW5zdHJ1Y3Rpb25zW2tleV07XG4gIH0pO1xuICAgIFxuICB2YXIgYW5pbURhdGEgPSB7c3RhdGU6IG51bGx9O1xuICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGFuaW1EYXRhLm5hbWUgPSBvcHRpb25zW1wibmFtZVwiXSB8fCBcImFuaW1cIiArIGFuaW1OYW1lSW5jcmVtZW50Kys7XG4gIH1cblxuICB2YXIgdGltaW5nRWxlbSA9IG9wdGlvbnNbXCJ0aW1pbmdFbGVtZW50XCJdIHx8ICRlbDtcbiAgXG4gIE9iamVjdC5rZXlzKHZlcmJNYXApLmZvckVhY2goZnVuY3Rpb24odmVyYikge1xuICAgIHZhciBwcm9jSW5zdCA9IHByb2Nlc3NlZFt2ZXJiXVxuICAgIGlmIChwcm9jSW5zdCkge1xuICAgICAgaWYgKCFwcm9jZXNzZWRbdmVyYk1hcFt2ZXJiXV0pIHsgcHJvY2Vzc2VkW3ZlcmJNYXBbdmVyYl1dID0gW107IH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9jSW5zdCkpIHsgcHJvY0luc3QgPSBbcHJvY0luc3RdOyB9XG4gICAgICBwcm9jZXNzZWRbdmVyYk1hcFt2ZXJiXV0gPSBwcm9jZXNzZWRbdmVyYk1hcFt2ZXJiXV0uY29uY2F0KHByb2NJbnN0KTtcbiAgICAgIGRlbGV0ZSBwcm9jZXNzZWRbdmVyYl07XG4gICAgfVxuICB9KTtcblxuICBpZiAocHJvY2Vzc2VkW1wiMFwiXSkge1xuICAgIGV4ZWN1dGVTdGVwKCRlbCwgXCIwXCIsIHByb2Nlc3NlZFtcIjBcIl0sIGFuaW1EYXRhKTtcbiAgICBkZWxldGUgcHJvY2Vzc2VkW1wiMFwiXTtcbiAgfVxuXG4gIGlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKGRlYnVnLmluRmFsbGJhY2tNb2RlKCkpIHtcbiAgICAgIHJldHVybiBkb0ZhbGxiYWNrKCRlbCwgcHJvY2Vzc2VkLCBhbmltRGF0YSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb21wYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgcmV0dXJuIGRvRmFsbGJhY2soJGVsLCBwcm9jZXNzZWQsIGFuaW1EYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHZhciB0aW1lU3BhbiA9IHV0aWxzLmdldExvbmdlc3RUcmFuc2l0aW9uT3JBbmltYXRpb25UaW1lKHRpbWluZ0VsZW0pO1xuICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGRlYnVnLmxvZ2dlcihhbmltRGF0YS5uYW1lICsgXCIgOjogQW5pbWF0aW5nIGZvciBcIiArIHRpbWVTcGFuICsgXCJtc1wiKTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHByb2Nlc3NlZCkuZm9yRWFjaChmdW5jdGlvbihwb2ludCkge1xuICAgIHZhciBzdGVwSW5zdHJ1Y3Rpb25zID0gcHJvY2Vzc2VkW3BvaW50XTtcblxuICAgIGlmIChwb2ludC5zbGljZSgtMSkgPT0gXCIlXCIpIHtcbiAgICAgIHZhciB0aW1lc3RhbXAgPSBwYXJzZUludChwb2ludCkgLyAxMDAgKiB0aW1lU3BhbjtcbiAgICAgIGRpc3BhdGNoZXIuc2NoZWR1bGVUaW1lc3RhbXAoXG4gICAgICAgIHRpbWVzdGFtcCwgZXhlY3V0ZVN0ZXAuYmluZCgkZWwsICRlbCwgcG9pbnQsIHN0ZXBJbnN0cnVjdGlvbnMsIGFuaW1EYXRhKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHBvaW50LnNsaWNlKC0yKSA9PSBcIm1zXCIpIHtcbiAgICAgIHZhciB0aW1lc3RhbXAgPSBwYXJzZUludChwb2ludCk7XG4gICAgICBkaXNwYXRjaGVyLnNjaGVkdWxlVGltZXN0YW1wKFxuICAgICAgICB0aW1lc3RhbXAsIGV4ZWN1dGVTdGVwLmJpbmQoJGVsLCAkZWwsIHBvaW50LCBzdGVwSW5zdHJ1Y3Rpb25zLCBhbmltRGF0YSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBmcmFtZSA9IHBhcnNlSW50KHBvaW50KTtcbiAgICAgIGRpc3BhdGNoZXIuc2NoZWR1bGVGcmFtZShcbiAgICAgICAgZnJhbWUsIGV4ZWN1dGVTdGVwLmJpbmQoJGVsLCAkZWwsIHBvaW50LCBzdGVwSW5zdHJ1Y3Rpb25zLCBhbmltRGF0YSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBkaXNwYXRjaGVyLmtpY2soKTtcbn07XG5cbnZhciBnZXRVbml0UHJpb3JpdHkgPSBmdW5jdGlvbihwb2ludCkge1xuICBpZiAocG9pbnQuc2xpY2UoLTEpID09IFwiJVwiKSByZXR1cm4gMjtcbiAgaWYgKHBvaW50LnNsaWNlKC0yKSA9PSBcIm1zXCIpIHJldHVybiAxO1xuICByZXR1cm4gMDsgLy8gZnJhbWVzXG5cbn07XG5cbnZhciBkb0ZhbGxiYWNrID0gZnVuY3Rpb24oJGVsLCBwcm9jZXNzZWQsIGFuaW1EYXRhLCBvcHRpb25zKSB7XG4gIGlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZGVidWcubG9nZ2VyKGFuaW1EYXRhLm5hbWUgKyBcIiA6OiBVc2luZyBmYWxsYmFja1wiKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmZhbGxiYWNrKSB7XG4gICAgb3B0aW9ucy5mYWxsYmFjaygkZWwpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwcm9jZXNzS2V5cyA9IE9iamVjdC5rZXlzKHByb2Nlc3NlZCkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICB2YXIgdW5pdFByaW9yaXR5QSA9IGdldFVuaXRQcmlvcml0eShhKTtcbiAgICAgIHZhciB1bml0UHJpb3JpdHlCID0gZ2V0VW5pdFByaW9yaXR5KGIpO1xuICAgICAgaWYgKHVuaXRQcmlvcml0eUEgIT0gdW5pdFByaW9yaXR5Qikge1xuICAgICAgICByZXR1cm4gdW5pdFByaW9yaXR5QSAtIHVuaXRQcmlvcml0eUI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoYSkgLSBwYXJzZUludChiKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBwcm9jZXNzS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgZXhlY3V0ZVN0ZXAuY2FsbCgkZWwsICRlbCwga2V5LCBwcm9jZXNzZWRba2V5XSwgYW5pbURhdGEpO1xuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5kb1RyYW5zaXRpb24gPSBkb1RyYW5zaXRpb247XG4iLCJ2YXIgaW5EZWJ1Z01vZGUgPSBmYWxzZTtcbnZhciBpbkZhbGxiYWNrTW9kZSA9IGZhbHNlO1xuXG52YXIgc2V0ID0gZnVuY3Rpb24oYWN0aXZlKSB7XG4gIGNvbnNvbGUubG9nKFwiY3NzLWRyaXZlbiA6OiBkZWJ1ZyBtb2RlIHNldCB0byBcIiArIGFjdGl2ZSk7XG4gIGluRGVidWdNb2RlID0gYWN0aXZlO1xufTtcbm1vZHVsZS5leHBvcnRzLnNldCA9IHNldDtcblxudmFyIGZhbGxiYWNrTW9kZSA9IGZ1bmN0aW9uKGFjdGl2ZSkge1xuICBpbkZhbGxiYWNrTW9kZSA9IGFjdGl2ZTtcbiAgY29uc29sZS5sb2coXCJjc3MtZHJpdmVuIDo6IGZhbGxiYWNrIG1vZGUgc2V0IHRvIFwiICsgYWN0aXZlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZmFsbGJhY2tNb2RlID0gZmFsbGJhY2tNb2RlO1xubW9kdWxlLmV4cG9ydHMuaW5GYWxsYmFja01vZGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGluRmFsbGJhY2tNb2RlIH07XG5cbnZhciBsb2dnZXIgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgaWYgKCFpbkRlYnVnTW9kZSkgcmV0dXJuO1xuICBjb25zb2xlLmxvZyhcImNzcy1kcml2ZW4gOjogXCIgKyBzdHJpbmcpO1xufTtcbm1vZHVsZS5leHBvcnRzLmxvZ2dlciA9IGxvZ2dlcjtcbiIsInZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xudmFyIGNvbXBhdCA9IHJlcXVpcmUoXCIuL2NvbXBhdC5qc1wiKTtcblxudmFyIGN1cnJlbnRGcmFtZSA9IDA7XG52YXIgYmFzZVRpbWVzdGFtcCA9ICtuZXcgRGF0ZSgpO1xudmFyIGN1cnJlbnRUaW1lc3RhbXAgPSAwO1xudmFyIHJlZ2lzdHJ5ID0ge307XG52YXIgZnJhbWVzID0gW107XG52YXIgdGltZXN0YW1wcyA9IFtdO1xudmFyIHJ1bm5pbmcgPSBmYWxzZTtcblxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGNvbXBhdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbnZhciBsb29wRGlzcGF0Y2hlciA9IGZ1bmN0aW9uKHRpbWVzdGFtcCkge1xuICBjdXJyZW50RnJhbWUrKztcbiAgY3VycmVudFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcblxuICBpZiAoZnJhbWVzWzBdID09IGN1cnJlbnRGcmFtZSkge1xuICAgIHJlZ2lzdHJ5W2ZyYW1lc1swXV0uZm9yRWFjaChmdW5jdGlvbihjYikgeyBjYigpIH0pO1xuICAgIGRlbGV0ZSByZWdpc3RyeVtmcmFtZXNbMF1dO1xuICAgIGZyYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgaWYgKHRpbWVzdGFtcHNbMF0gPCB0aW1lc3RhbXApIHtcbiAgICB2YXIgdG9kb3MgPSB0aW1lc3RhbXBzLmZpbHRlcihmdW5jdGlvbih0cykgeyByZXR1cm4gdHMgPCB0aW1lc3RhbXAgfSk7XG4gICAgdGltZXN0YW1wcyA9IHRpbWVzdGFtcHMuZmlsdGVyKGZ1bmN0aW9uKHRzKSB7IHJldHVybiB0cyA+IHRpbWVzdGFtcCB9KTtcbiAgICB0b2Rvcy5mb3JFYWNoKGZ1bmN0aW9uKHRzKSB7XG4gICAgICByZWdpc3RyeVt0cyArIFwibXNcIl0uZm9yRWFjaChmdW5jdGlvbihjYikgeyBjYigpIH0pO1xuICAgICAgZGVsZXRlIHJlZ2lzdHJ5W3RzICsgXCJtc1wiXTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0aW1lc3RhbXBzLmxlbmd0aCArIGZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3BEaXNwYXRjaGVyKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50RnJhbWUgPSAwO1xuICAgIGN1cnJlbnRUaW1lc3RhbXAgPSAwO1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxufTtcblxudmFyIHJlc29ydEZyYW1lcyA9IGZ1bmN0aW9uKCkge1xuICBmcmFtZXMgPSB1dGlscy5hcnJheVRvU2V0KGZyYW1lcylcbiAgZnJhbWVzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pXG59O1xuXG52YXIgcmVzb3J0VGltZXN0YW1wcyA9IGZ1bmN0aW9uKCkge1xuICB0aW1lc3RhbXBzID0gdXRpbHMuYXJyYXlUb1NldCh0aW1lc3RhbXBzKVxuICB0aW1lc3RhbXBzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pIFxufVxuXG52YXIgYWRkVG9SZWdpc3RyeSA9IGZ1bmN0aW9uKGtleSwgYWN0aW9uKSB7XG4gIGlmICghcmVnaXN0cnlba2V5XSkgcmVnaXN0cnlba2V5XSA9IFtdO1xuICByZWdpc3RyeVtrZXldLnB1c2goYWN0aW9uKTtcbn07XG5cbnZhciBzY2hlZHVsZUZyYW1lID0gZnVuY3Rpb24oZnJhbWUsIGFjdGlvbikge1xuICB2YXIgdGFyZ2V0ID0gY3VycmVudEZyYW1lICsgZnJhbWU7XG4gIGZyYW1lcy5wdXNoKHRhcmdldCk7XG4gIGFkZFRvUmVnaXN0cnkodGFyZ2V0LCBhY3Rpb24pO1xuICByZXNvcnRGcmFtZXMoKTtcbn07XG5cbnZhciBkb1NjaGVkdWxlID0gZnVuY3Rpb24odGltZXN0YW1wLCBhY3Rpb24pIHtcbiAgdmFyIHRhcmdldCA9IE1hdGgucm91bmQoY3VycmVudFRpbWVzdGFtcCArIHRpbWVzdGFtcCk7XG4gIHRpbWVzdGFtcHMucHVzaCh0YXJnZXQpO1xuICBhZGRUb1JlZ2lzdHJ5KHRhcmdldCArIFwibXNcIiwgYWN0aW9uKTtcbiAgcmVzb3J0VGltZXN0YW1wcygpO1xufVxuXG52YXIgc2NoZWR1bGVUaW1lc3RhbXAgPSBmdW5jdGlvbih0aW1lc3RhbXAsIGFjdGlvbikge1xuICBpZiAoIWN1cnJlbnRUaW1lc3RhbXApIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24odXBkYXRlZFRpbWVzdGFtcCkge1xuICAgICAgY3VycmVudFRpbWVzdGFtcCA9IHVwZGF0ZWRUaW1lc3RhbXA7XG4gICAgICBkb1NjaGVkdWxlKHRpbWVzdGFtcCwgYWN0aW9uKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb1NjaGVkdWxlKHRpbWVzdGFtcCwgYWN0aW9uKTtcbiAgfVxufTtcblxudmFyIGtpY2tEaXNwYXRjaGVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICghcnVubmluZykge1xuICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wRGlzcGF0Y2hlcik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmtpY2sgPSBraWNrRGlzcGF0Y2hlcjtcbm1vZHVsZS5leHBvcnRzLnNjaGVkdWxlRnJhbWUgPSBzY2hlZHVsZUZyYW1lO1xubW9kdWxlLmV4cG9ydHMuc2NoZWR1bGVUaW1lc3RhbXAgPSBzY2hlZHVsZVRpbWVzdGFtcDtcbiIsInZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xudmFyIGNvcmUgPSByZXF1aXJlKFwiLi9jb3JlLmpzXCIpO1xuXG5pZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICB2YXIgZGVidWcgPSByZXF1aXJlKFwiLi9kZWJ1Zy5qc1wiKTtcbn1cblxudmFyIENTU0RyaXZlbiA9IHtcbiAgZG9UcmFuc2l0aW9uOiBjb3JlLmRvVHJhbnNpdGlvbixcbn07XG5cbi8vIHBhc3NvdmVycyBmb3IgaWYgZGV2ZWxvcGVycyBsZWF2ZSBkZWJ1ZyBtb2RlIG9uIHdoZW4gZGVwbG95aW5nXG52YXIgbWluaWZpZWRFbnZXYXJuaW5nID0gZnVuY3Rpb24oZnVuY05hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUud2FybihcImNzcy1kcml2ZW4gOjogXCIgKyBmdW5jTmFtZSArIFwiIGlzIG5vdCBhdmFpbGFibGUgaW4gYSBcIiArXG4gICAgICAgICAgICAgICAgIFwibWluaWZpZWQgZW52aXJvbm1lbnRcIik7XG4gIH1cbn1cblxuQ1NTRHJpdmVuLmRlYnVnTW9kZSA9IG1pbmlmaWVkRW52V2FybmluZyhcImRlYnVnTW9kZVwiKTtcbkNTU0RyaXZlbi5mYWxsYmFja01vZGUgPSBtaW5pZmllZEVudldhcm5pbmcoXCJmYWxsYmFja01vZGVcIik7XG5cbmlmIChcImRldmVsb3BtZW50XCIgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIENTU0RyaXZlbi5kZWJ1Z01vZGUgPSBkZWJ1Zy5zZXQ7XG4gIENTU0RyaXZlbi5mYWxsYmFja01vZGUgPSBkZWJ1Zy5mYWxsYmFja01vZGU7XG59XG5cblxuXG53aW5kb3cuQ1NTRHJpdmVuID0gQ1NTRHJpdmVuO1xubW9kdWxlLmV4cG9ydHMgPSBDU1NEcml2ZW47XG4iLCJ2YXIgY29tcGF0ID0gcmVxdWlyZShcIi4vY29tcGF0LmpzXCIpO1xudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGNvbXBhdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbnZhciBqdW1wQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihmbiwgZnJhbWVzKSB7XG4gIGZyYW1lcyA9IGZyYW1lcyB8fCAxO1xuICB2YXIgaXRlcmF0aW9uID0gMDtcbiAgdmFyIGp1bXBlciA9IGZ1bmN0aW9uKCkge1xuICAgIGl0ZXJhdGlvbiArPSAxO1xuICAgIGlmIChpdGVyYXRpb24gPj0gZnJhbWVzKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoanVtcGVyKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoanVtcGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuanVtcEFuaW1hdGlvbkZyYW1lID0ganVtcEFuaW1hdGlvbkZyYW1lO1xuXG5cbnZhciBnZXRMb25nZXN0VHJhbnNpdGlvbk9yQW5pbWF0aW9uVGltZSA9IGZ1bmN0aW9uKCBlbCApe1xuICAvLyBSZXR1cm5zIGFuIGVsZW1lbnQncyBsb25nZXN0IHRyYW5zaXRpb24gZGVsYXkrZHVyYXRpb24gcGFpcmluZyBpbiBtaWxsaXNlY29uZHM7XG4gIC8vIEFzc3VtcHRpb246IGl0J3Mgbm90IHBvc3NpYmxlIGZvciB0aGUgdHdvIGFycmF5cyB0byBoYXZlIGRpZmZlcmVudCBsZW5ndGhzLlxuXG4gIHZhciB0b3RhbHMgPSBbXCJBbmltYXRpb25cIiwgXCJUcmFuc2l0aW9uXCJdLnJlZHVjZShmdW5jdGlvbih0b3RhbHMsIGNzc1R5cGUpIHtcblxuICAgIHZhciBkZWxheSwgZHVyYXRpb24sIHN1YlRvdGFscztcblxuICAgIGRlbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWwgKVtjb21wYXQucHJlZml4ZWQoY3NzVHlwZSArIFwiRGVsYXlcIildXG4gICAgZGVsYXkgPSBkZWxheS5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBkdXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoIGVsIClbY29tcGF0LnByZWZpeGVkKGNzc1R5cGUgKyBcIkR1cmF0aW9uXCIpXVxuICAgIGR1cmF0aW9uID0gZHVyYXRpb24uc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG4gIFxuICAgIHN1YlRvdGFscyA9IGRlbGF5Lm1hcChmdW5jdGlvbihkLCBpeCkgeyByZXR1cm4gZCArIGR1cmF0aW9uW2l4XSB9KTtcbiAgICByZXR1cm4gdG90YWxzLmNvbmNhdChzdWJUb3RhbHMpO1xuXG4gIH0sIFtdKTtcblxuICAvLyBub3JtYWxpemUgdG8gbWlsbGlzZWNvbmRzXG4gIHRvdGFscyA9IHRvdGFscy5tYXAoZnVuY3Rpb24odCkgeyByZXR1cm4gdCAqIDEwMDA7IH0pO1xuXG4gIHJldHVybiBNYXRoLm1heC5hcHBseSggbnVsbCwgdG90YWxzICk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmdldExvbmdlc3RUcmFuc2l0aW9uT3JBbmltYXRpb25UaW1lID0gZ2V0TG9uZ2VzdFRyYW5zaXRpb25PckFuaW1hdGlvblRpbWU7XG5cblxudmFyIGFycmF5VG9TZXQgPSBmdW5jdGlvbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHNldCwgaXRlbSkge1xuICAgIGlmIChzZXQuaW5kZXhPZihpdGVtKSA9PSAtMSkge1xuICAgICAgc2V0LnB1c2goaXRlbSk7XG4gICAgfTtcbiAgICByZXR1cm4gc2V0O1xuICB9LCBbXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5hcnJheVRvU2V0ID0gYXJyYXlUb1NldDtcbiJdfQ==
