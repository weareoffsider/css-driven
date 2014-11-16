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

if ("development" === "development") {
  var debug = require("./debug.js");
}

var executeStep = function($el, point, stepInstructions, animData) {
  if (!Array.isArray(stepInstructions)) {
    stepInstructions = [stepInstructions];
  }

  if ("development" === "development") {
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

if ("development" === "development") {
  var animNameIncrement = 0;
}

var doTransition = function($el, instructions, options) {
  options = options || {};
  var processed = {}
  Object.keys(instructions).forEach(function(key) {
    processed[key] = instructions[key];
  });
    
  var animData = {state: null};
  if ("development" === "development") {
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

  if ("development" === "development") {
    if (debug.inFallbackMode()) {
      return doFallback($el, processed, animData, options);
    }
  }

  if (!compat.requestAnimationFrame) {
    return doFallback($el, processed, animData, options);
  }

  var timeSpan = utils.getLongestTransitionOrAnimationTime(timingElem);
  if ("development" === "development") {
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
  if ("development" === "development") {
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

if ("development" === "development") {
  var debug = require("./debug.js");
}

var CSSDriven = {
  doTransition: core.doTransition,
};

if ("development" === "development") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9jb21wYXQuanMiLCIvaG9tZS9qcmFraWNoL3Byb2plY3RzL09wZW5Tb3VyY2UvY3NzLWRyaXZlbi9zcmMvY29yZS5qcyIsIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9kZWJ1Zy5qcyIsIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9kaXNwYXRjaGVyLmpzIiwiL2hvbWUvanJha2ljaC9wcm9qZWN0cy9PcGVuU291cmNlL2Nzcy1kcml2ZW4vc3JjL2Zha2VfZTVkMzg1MTcuanMiLCIvaG9tZS9qcmFraWNoL3Byb2plY3RzL09wZW5Tb3VyY2UvY3NzLWRyaXZlbi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLyogTW9kZXJuaXpyIDIuOC4zIChDdXN0b20gQnVpbGQpIHwgTUlUICYgQlNEXG4gKiBCdWlsZDogaHR0cDovL21vZGVybml6ci5jb20vZG93bmxvYWQvIy1wcmVmaXhlZC10ZXN0cHJvcC10ZXN0YWxscHJvcHMtcHJlZml4ZXMtZG9tcHJlZml4ZXMtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gKi9cbjtcblxudmFyIE1vZGVybml6ciA9IChmdW5jdGlvbiggd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkICkge1xuXG4gICAgdmFyIHZlcnNpb24gPSAnMi44LjMnLFxuXG4gICAgTW9kZXJuaXpyID0ge30sXG5cblxuICAgIGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cbiAgICBtb2QgPSAnbW9kZXJuaXpyJyxcbiAgICBtb2RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChtb2QpLFxuICAgIG1TdHlsZSA9IG1vZEVsZW0uc3R5bGUsXG5cbiAgICBpbnB1dEVsZW0gICxcblxuXG4gICAgdG9TdHJpbmcgPSB7fS50b1N0cmluZyxcblxuICAgIHByZWZpeGVzID0gJyAtd2Via2l0LSAtbW96LSAtby0gLW1zLSAnLnNwbGl0KCcgJyksXG5cblxuXG4gICAgb21QcmVmaXhlcyA9ICdXZWJraXQgTW96IE8gbXMnLFxuXG4gICAgY3Nzb21QcmVmaXhlcyA9IG9tUHJlZml4ZXMuc3BsaXQoJyAnKSxcblxuICAgIGRvbVByZWZpeGVzID0gb21QcmVmaXhlcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJyksXG5cblxuICAgIHRlc3RzID0ge30sXG4gICAgaW5wdXRzID0ge30sXG4gICAgYXR0cnMgPSB7fSxcblxuICAgIGNsYXNzZXMgPSBbXSxcblxuICAgIHNsaWNlID0gY2xhc3Nlcy5zbGljZSxcblxuICAgIGZlYXR1cmVOYW1lLFxuXG5cblxuICAgIF9oYXNPd25Qcm9wZXJ0eSA9ICh7fSkuaGFzT3duUHJvcGVydHksIGhhc093blByb3A7XG5cbiAgICBpZiAoICFpcyhfaGFzT3duUHJvcGVydHksICd1bmRlZmluZWQnKSAmJiAhaXMoX2hhc093blByb3BlcnR5LmNhbGwsICd1bmRlZmluZWQnKSApIHtcbiAgICAgIGhhc093blByb3AgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gX2hhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhc093blByb3AgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSkgeyBcbiAgICAgICAgcmV0dXJuICgocHJvcGVydHkgaW4gb2JqZWN0KSAmJiBpcyhvYmplY3QuY29uc3RydWN0b3IucHJvdG90eXBlW3Byb3BlcnR5XSwgJ3VuZGVmaW5lZCcpKTtcbiAgICAgIH07XG4gICAgfVxuXG5cbiAgICBpZiAoIUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKSB7XG4gICAgICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQodGhhdCkge1xuXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBib3VuZCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuXG4gICAgICAgICAgICAgIHZhciBGID0gZnVuY3Rpb24oKXt9O1xuICAgICAgICAgICAgICBGLnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gbmV3IEYoKTtcblxuICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgICAgc2VsZixcbiAgICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGY7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBib3VuZDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q3NzKCBzdHIgKSB7XG4gICAgICAgIG1TdHlsZS5jc3NUZXh0ID0gc3RyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENzc0FsbCggc3RyMSwgc3RyMiApIHtcbiAgICAgICAgcmV0dXJuIHNldENzcyhwcmVmaXhlcy5qb2luKHN0cjEgKyAnOycpICsgKCBzdHIyIHx8ICcnICkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzKCBvYmosIHR5cGUgKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSB0eXBlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRhaW5zKCBzdHIsIHN1YnN0ciApIHtcbiAgICAgICAgcmV0dXJuICEhfignJyArIHN0cikuaW5kZXhPZihzdWJzdHIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRlc3RQcm9wcyggcHJvcHMsIHByZWZpeGVkICkge1xuICAgICAgICBmb3IgKCB2YXIgaSBpbiBwcm9wcyApIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNbaV07XG4gICAgICAgICAgICBpZiAoICFjb250YWlucyhwcm9wLCBcIi1cIikgJiYgbVN0eWxlW3Byb3BdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZWZpeGVkID09ICdwZngnID8gcHJvcCA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRlc3RET01Qcm9wcyggcHJvcHMsIG9iaiwgZWxlbSApIHtcbiAgICAgICAgZm9yICggdmFyIGkgaW4gcHJvcHMgKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IG9ialtwcm9wc1tpXV07XG4gICAgICAgICAgICBpZiAoIGl0ZW0gIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0gPT09IGZhbHNlKSByZXR1cm4gcHJvcHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXMoaXRlbSwgJ2Z1bmN0aW9uJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5iaW5kKGVsZW0gfHwgb2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGVzdFByb3BzQWxsKCBwcm9wLCBwcmVmaXhlZCwgZWxlbSApIHtcblxuICAgICAgICB2YXIgdWNQcm9wICA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKDEpLFxuICAgICAgICAgICAgcHJvcHMgICA9IChwcm9wICsgJyAnICsgY3Nzb21QcmVmaXhlcy5qb2luKHVjUHJvcCArICcgJykgKyB1Y1Byb3ApLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGlmKGlzKHByZWZpeGVkLCBcInN0cmluZ1wiKSB8fCBpcyhwcmVmaXhlZCwgXCJ1bmRlZmluZWRcIikpIHtcbiAgICAgICAgICByZXR1cm4gdGVzdFByb3BzKHByb3BzLCBwcmVmaXhlZCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHMgPSAocHJvcCArICcgJyArIChkb21QcmVmaXhlcykuam9pbih1Y1Byb3AgKyAnICcpICsgdWNQcm9wKS5zcGxpdCgnICcpO1xuICAgICAgICAgIHJldHVybiB0ZXN0RE9NUHJvcHMocHJvcHMsIHByZWZpeGVkLCBlbGVtKTtcbiAgICAgICAgfVxuICAgIH0gICAgZm9yICggdmFyIGZlYXR1cmUgaW4gdGVzdHMgKSB7XG4gICAgICAgIGlmICggaGFzT3duUHJvcCh0ZXN0cywgZmVhdHVyZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTmFtZSAgPSBmZWF0dXJlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBNb2Rlcm5penJbZmVhdHVyZU5hbWVdID0gdGVzdHNbZmVhdHVyZV0oKTtcblxuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKChNb2Rlcm5penJbZmVhdHVyZU5hbWVdID8gJycgOiAnbm8tJykgKyBmZWF0dXJlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgIE1vZGVybml6ci5hZGRUZXN0ID0gZnVuY3Rpb24gKCBmZWF0dXJlLCB0ZXN0ICkge1xuICAgICAgIGlmICggdHlwZW9mIGZlYXR1cmUgPT0gJ29iamVjdCcgKSB7XG4gICAgICAgICBmb3IgKCB2YXIga2V5IGluIGZlYXR1cmUgKSB7XG4gICAgICAgICAgIGlmICggaGFzT3duUHJvcCggZmVhdHVyZSwga2V5ICkgKSB7XG4gICAgICAgICAgICAgTW9kZXJuaXpyLmFkZFRlc3QoIGtleSwgZmVhdHVyZVsga2V5IF0gKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgIGZlYXR1cmUgPSBmZWF0dXJlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgIGlmICggTW9kZXJuaXpyW2ZlYXR1cmVdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1vZGVybml6cjtcbiAgICAgICAgIH1cblxuICAgICAgICAgdGVzdCA9IHR5cGVvZiB0ZXN0ID09ICdmdW5jdGlvbicgPyB0ZXN0KCkgOiB0ZXN0O1xuXG4gICAgICAgICBpZiAodHlwZW9mIGVuYWJsZUNsYXNzZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgZW5hYmxlQ2xhc3Nlcykge1xuICAgICAgICAgICBkb2NFbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyAodGVzdCA/ICcnIDogJ25vLScpICsgZmVhdHVyZTtcbiAgICAgICAgIH1cbiAgICAgICAgIE1vZGVybml6cltmZWF0dXJlXSA9IHRlc3Q7XG5cbiAgICAgICB9XG5cbiAgICAgICByZXR1cm4gTW9kZXJuaXpyOyBcbiAgICAgfTtcblxuXG4gICAgc2V0Q3NzKCcnKTtcbiAgICBtb2RFbGVtID0gaW5wdXRFbGVtID0gbnVsbDtcblxuXG4gICAgTW9kZXJuaXpyLl92ZXJzaW9uICAgICAgPSB2ZXJzaW9uO1xuXG4gICAgTW9kZXJuaXpyLl9wcmVmaXhlcyAgICAgPSBwcmVmaXhlcztcbiAgICBNb2Rlcm5penIuX2RvbVByZWZpeGVzICA9IGRvbVByZWZpeGVzO1xuICAgIE1vZGVybml6ci5fY3Nzb21QcmVmaXhlcyAgPSBjc3NvbVByZWZpeGVzO1xuXG5cblxuICAgIE1vZGVybml6ci50ZXN0UHJvcCAgICAgID0gZnVuY3Rpb24ocHJvcCl7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHMoW3Byb3BdKTtcbiAgICB9O1xuXG4gICAgTW9kZXJuaXpyLnRlc3RBbGxQcm9wcyAgPSB0ZXN0UHJvcHNBbGw7XG5cblxuICAgIE1vZGVybml6ci5wcmVmaXhlZCAgICAgID0gZnVuY3Rpb24ocHJvcCwgb2JqLCBlbGVtKXtcbiAgICAgIGlmKCFvYmopIHtcbiAgICAgICAgcmV0dXJuIHRlc3RQcm9wc0FsbChwcm9wLCAncGZ4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRlc3RQcm9wc0FsbChwcm9wLCBvYmosIGVsZW0pO1xuICAgICAgfVxuICAgIH07XG5cblxuXG4gICAgcmV0dXJuIE1vZGVybml6cjtcbn0pKHdpbmRvdywgd2luZG93LmRvY3VtZW50KTtcbi8vIEVORCBNb2Rlcm5penIgQ29kZVxuXG5cbnZhciB2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J107XG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gdW5kZWZpbmVkO1xudmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gdW5kZWZpbmVkO1xuXG5mb3IodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddKTtcbn1cblxuaWYgKCFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcbm1vZHVsZS5leHBvcnRzLmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5tb2R1bGUuZXhwb3J0cy5wcmVmaXhlZCA9IGZ1bmN0aW9uKHByb3AsIG9iaiwgZWxlbSkge1xuICByZXR1cm4gTW9kZXJuaXpyLnByZWZpeGVkKHByb3AsIG9iaiwgZWxlbSk7XG59XG4iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy5qc1wiKTtcbnZhciBkaXNwYXRjaGVyID0gcmVxdWlyZShcIi4vZGlzcGF0Y2hlci5qc1wiKTtcbnZhciBjb21wYXQgPSByZXF1aXJlKFwiLi9jb21wYXQuanNcIik7XG5cbmlmIChcImRldmVsb3BtZW50XCIgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICB2YXIgZGVidWcgPSByZXF1aXJlKFwiLi9kZWJ1Zy5qc1wiKTtcbn1cblxudmFyIGV4ZWN1dGVTdGVwID0gZnVuY3Rpb24oJGVsLCBwb2ludCwgc3RlcEluc3RydWN0aW9ucywgYW5pbURhdGEpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHN0ZXBJbnN0cnVjdGlvbnMpKSB7XG4gICAgc3RlcEluc3RydWN0aW9ucyA9IFtzdGVwSW5zdHJ1Y3Rpb25zXTtcbiAgfVxuXG4gIGlmIChcImRldmVsb3BtZW50XCIgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGRlYnVnLmxvZ2dlcihhbmltRGF0YS5uYW1lICsgXCIgOjogXCIgKyBwb2ludCArIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShhbmltRGF0YS5zdGF0ZSkpO1xuICB9XG5cbiAgc3RlcEluc3RydWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHN0ZXApIHtcbiAgICBpZiAodHlwZW9mIHN0ZXAgPT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gQ0xBU1MgQURELCBUT0dHTEUgT1IgUkVNT1ZFXG4gICAgICB2YXIgbW9kaWZpZXIgPSBzdGVwWzBdO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHN0ZXAuc2xpY2UoMSk7XG5cbiAgICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcbiAgICAgIGNhc2UgXCIrXCI6ICRlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IGJyZWFrO1xuICAgICAgY2FzZSBcIi1cIjogJGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgYnJlYWs7XG4gICAgICBjYXNlIFwiflwiOiAkZWwuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihcIkNsYXNzIG11c3QgYmUgcHJlZml4ZWQgd2l0aCAnKycsICctJywgb3IgJ34nXCIpO1xuICAgICAgfTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ZXAgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBhbmltRGF0YS5zdGF0ZSA9IHN0ZXAoJGVsLCBhbmltRGF0YS5zdGF0ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3RlcCA9PSBcIm9iamVjdFwiKSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGVwKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAkZWwuc3R5bGVba2V5XSA9IHN0ZXBba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgdmVyYk1hcCA9IHtcbiAgXCJzZXR1cFwiOiBcIjBcIixcbiAgXCJ0cmlnZ2VyXCI6IFwiMVwiLFxuICBcImVuZFwiOiBcIjEwMCVcIixcbiAgXCJjbGVhbnVwXCI6IFwiMTAwJVwiLFxufTtcblxuaWYgKFwiZGV2ZWxvcG1lbnRcIiA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIHZhciBhbmltTmFtZUluY3JlbWVudCA9IDA7XG59XG5cbnZhciBkb1RyYW5zaXRpb24gPSBmdW5jdGlvbigkZWwsIGluc3RydWN0aW9ucywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHByb2Nlc3NlZCA9IHt9XG4gIE9iamVjdC5rZXlzKGluc3RydWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBwcm9jZXNzZWRba2V5XSA9IGluc3RydWN0aW9uc1trZXldO1xuICB9KTtcbiAgICBcbiAgdmFyIGFuaW1EYXRhID0ge3N0YXRlOiBudWxsfTtcbiAgaWYgKFwiZGV2ZWxvcG1lbnRcIiA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgYW5pbURhdGEubmFtZSA9IG9wdGlvbnNbXCJuYW1lXCJdIHx8IFwiYW5pbVwiICsgYW5pbU5hbWVJbmNyZW1lbnQrKztcbiAgfVxuXG4gIHZhciB0aW1pbmdFbGVtID0gb3B0aW9uc1tcInRpbWluZ0VsZW1lbnRcIl0gfHwgJGVsO1xuICBcbiAgT2JqZWN0LmtleXModmVyYk1hcCkuZm9yRWFjaChmdW5jdGlvbih2ZXJiKSB7XG4gICAgdmFyIHByb2NJbnN0ID0gcHJvY2Vzc2VkW3ZlcmJdXG4gICAgaWYgKHByb2NJbnN0KSB7XG4gICAgICBpZiAoIXByb2Nlc3NlZFt2ZXJiTWFwW3ZlcmJdXSkgeyBwcm9jZXNzZWRbdmVyYk1hcFt2ZXJiXV0gPSBbXTsgfVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb2NJbnN0KSkgeyBwcm9jSW5zdCA9IFtwcm9jSW5zdF07IH1cbiAgICAgIHByb2Nlc3NlZFt2ZXJiTWFwW3ZlcmJdXSA9IHByb2Nlc3NlZFt2ZXJiTWFwW3ZlcmJdXS5jb25jYXQocHJvY0luc3QpO1xuICAgICAgZGVsZXRlIHByb2Nlc3NlZFt2ZXJiXTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzZWRbXCIwXCJdKSB7XG4gICAgZXhlY3V0ZVN0ZXAoJGVsLCBcIjBcIiwgcHJvY2Vzc2VkW1wiMFwiXSwgYW5pbURhdGEpO1xuICAgIGRlbGV0ZSBwcm9jZXNzZWRbXCIwXCJdO1xuICB9XG5cbiAgaWYgKFwiZGV2ZWxvcG1lbnRcIiA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgaWYgKGRlYnVnLmluRmFsbGJhY2tNb2RlKCkpIHtcbiAgICAgIHJldHVybiBkb0ZhbGxiYWNrKCRlbCwgcHJvY2Vzc2VkLCBhbmltRGF0YSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb21wYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgcmV0dXJuIGRvRmFsbGJhY2soJGVsLCBwcm9jZXNzZWQsIGFuaW1EYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIHZhciB0aW1lU3BhbiA9IHV0aWxzLmdldExvbmdlc3RUcmFuc2l0aW9uT3JBbmltYXRpb25UaW1lKHRpbWluZ0VsZW0pO1xuICBpZiAoXCJkZXZlbG9wbWVudFwiID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBkZWJ1Zy5sb2dnZXIoYW5pbURhdGEubmFtZSArIFwiIDo6IEFuaW1hdGluZyBmb3IgXCIgKyB0aW1lU3BhbiArIFwibXNcIik7XG4gIH1cblxuICBPYmplY3Qua2V5cyhwcm9jZXNzZWQpLmZvckVhY2goZnVuY3Rpb24ocG9pbnQpIHtcbiAgICB2YXIgc3RlcEluc3RydWN0aW9ucyA9IHByb2Nlc3NlZFtwb2ludF07XG5cbiAgICBpZiAocG9pbnQuc2xpY2UoLTEpID09IFwiJVwiKSB7XG4gICAgICB2YXIgdGltZXN0YW1wID0gcGFyc2VJbnQocG9pbnQpIC8gMTAwICogdGltZVNwYW47XG4gICAgICBkaXNwYXRjaGVyLnNjaGVkdWxlVGltZXN0YW1wKFxuICAgICAgICB0aW1lc3RhbXAsIGV4ZWN1dGVTdGVwLmJpbmQoJGVsLCAkZWwsIHBvaW50LCBzdGVwSW5zdHJ1Y3Rpb25zLCBhbmltRGF0YSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChwb2ludC5zbGljZSgtMikgPT0gXCJtc1wiKSB7XG4gICAgICB2YXIgdGltZXN0YW1wID0gcGFyc2VJbnQocG9pbnQpO1xuICAgICAgZGlzcGF0Y2hlci5zY2hlZHVsZVRpbWVzdGFtcChcbiAgICAgICAgdGltZXN0YW1wLCBleGVjdXRlU3RlcC5iaW5kKCRlbCwgJGVsLCBwb2ludCwgc3RlcEluc3RydWN0aW9ucywgYW5pbURhdGEpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZnJhbWUgPSBwYXJzZUludChwb2ludCk7XG4gICAgICBkaXNwYXRjaGVyLnNjaGVkdWxlRnJhbWUoXG4gICAgICAgIGZyYW1lLCBleGVjdXRlU3RlcC5iaW5kKCRlbCwgJGVsLCBwb2ludCwgc3RlcEluc3RydWN0aW9ucywgYW5pbURhdGEpXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgZGlzcGF0Y2hlci5raWNrKCk7XG59O1xuXG52YXIgZ2V0VW5pdFByaW9yaXR5ID0gZnVuY3Rpb24ocG9pbnQpIHtcbiAgaWYgKHBvaW50LnNsaWNlKC0xKSA9PSBcIiVcIikgcmV0dXJuIDI7XG4gIGlmIChwb2ludC5zbGljZSgtMikgPT0gXCJtc1wiKSByZXR1cm4gMTtcbiAgcmV0dXJuIDA7IC8vIGZyYW1lc1xuXG59O1xuXG52YXIgZG9GYWxsYmFjayA9IGZ1bmN0aW9uKCRlbCwgcHJvY2Vzc2VkLCBhbmltRGF0YSwgb3B0aW9ucykge1xuICBpZiAoXCJkZXZlbG9wbWVudFwiID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBkZWJ1Zy5sb2dnZXIoYW5pbURhdGEubmFtZSArIFwiIDo6IFVzaW5nIGZhbGxiYWNrXCIpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZmFsbGJhY2spIHtcbiAgICBvcHRpb25zLmZhbGxiYWNrKCRlbCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHByb2Nlc3NLZXlzID0gT2JqZWN0LmtleXMocHJvY2Vzc2VkKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHZhciB1bml0UHJpb3JpdHlBID0gZ2V0VW5pdFByaW9yaXR5KGEpO1xuICAgICAgdmFyIHVuaXRQcmlvcml0eUIgPSBnZXRVbml0UHJpb3JpdHkoYik7XG4gICAgICBpZiAodW5pdFByaW9yaXR5QSAhPSB1bml0UHJpb3JpdHlCKSB7XG4gICAgICAgIHJldHVybiB1bml0UHJpb3JpdHlBIC0gdW5pdFByaW9yaXR5QjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChhKSAtIHBhcnNlSW50KGIpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHByb2Nlc3NLZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBleGVjdXRlU3RlcC5jYWxsKCRlbCwgJGVsLCBrZXksIHByb2Nlc3NlZFtrZXldLCBhbmltRGF0YSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmRvVHJhbnNpdGlvbiA9IGRvVHJhbnNpdGlvbjtcbiIsInZhciBpbkRlYnVnTW9kZSA9IGZhbHNlO1xudmFyIGluRmFsbGJhY2tNb2RlID0gZmFsc2U7XG5cbnZhciBzZXQgPSBmdW5jdGlvbihhY3RpdmUpIHtcbiAgY29uc29sZS5sb2coXCJjc3MtZHJpdmVuIDo6IGRlYnVnIG1vZGUgc2V0IHRvIFwiICsgYWN0aXZlKTtcbiAgaW5EZWJ1Z01vZGUgPSBhY3RpdmU7XG59O1xubW9kdWxlLmV4cG9ydHMuc2V0ID0gc2V0O1xuXG52YXIgZmFsbGJhY2tNb2RlID0gZnVuY3Rpb24oYWN0aXZlKSB7XG4gIGluRmFsbGJhY2tNb2RlID0gYWN0aXZlO1xuICBjb25zb2xlLmxvZyhcImNzcy1kcml2ZW4gOjogZmFsbGJhY2sgbW9kZSBzZXQgdG8gXCIgKyBhY3RpdmUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mYWxsYmFja01vZGUgPSBmYWxsYmFja01vZGU7XG5tb2R1bGUuZXhwb3J0cy5pbkZhbGxiYWNrTW9kZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaW5GYWxsYmFja01vZGUgfTtcblxudmFyIGxvZ2dlciA9IGZ1bmN0aW9uKHN0cmluZykge1xuICBpZiAoIWluRGVidWdNb2RlKSByZXR1cm47XG4gIGNvbnNvbGUubG9nKFwiY3NzLWRyaXZlbiA6OiBcIiArIHN0cmluZyk7XG59O1xubW9kdWxlLmV4cG9ydHMubG9nZ2VyID0gbG9nZ2VyO1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG52YXIgY29tcGF0ID0gcmVxdWlyZShcIi4vY29tcGF0LmpzXCIpO1xuXG52YXIgY3VycmVudEZyYW1lID0gMDtcbnZhciBiYXNlVGltZXN0YW1wID0gK25ldyBEYXRlKCk7XG52YXIgY3VycmVudFRpbWVzdGFtcCA9IDA7XG52YXIgcmVnaXN0cnkgPSB7fTtcbnZhciBmcmFtZXMgPSBbXTtcbnZhciB0aW1lc3RhbXBzID0gW107XG52YXIgcnVubmluZyA9IGZhbHNlO1xuXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gY29tcGF0LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxudmFyIGxvb3BEaXNwYXRjaGVyID0gZnVuY3Rpb24odGltZXN0YW1wKSB7XG4gIGN1cnJlbnRGcmFtZSsrO1xuICBjdXJyZW50VGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG4gIGlmIChmcmFtZXNbMF0gPT0gY3VycmVudEZyYW1lKSB7XG4gICAgcmVnaXN0cnlbZnJhbWVzWzBdXS5mb3JFYWNoKGZ1bmN0aW9uKGNiKSB7IGNiKCkgfSk7XG4gICAgZGVsZXRlIHJlZ2lzdHJ5W2ZyYW1lc1swXV07XG4gICAgZnJhbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBpZiAodGltZXN0YW1wc1swXSA8IHRpbWVzdGFtcCkge1xuICAgIHZhciB0b2RvcyA9IHRpbWVzdGFtcHMuZmlsdGVyKGZ1bmN0aW9uKHRzKSB7IHJldHVybiB0cyA8IHRpbWVzdGFtcCB9KTtcbiAgICB0aW1lc3RhbXBzID0gdGltZXN0YW1wcy5maWx0ZXIoZnVuY3Rpb24odHMpIHsgcmV0dXJuIHRzID4gdGltZXN0YW1wIH0pO1xuICAgIHRvZG9zLmZvckVhY2goZnVuY3Rpb24odHMpIHtcbiAgICAgIHJlZ2lzdHJ5W3RzICsgXCJtc1wiXS5mb3JFYWNoKGZ1bmN0aW9uKGNiKSB7IGNiKCkgfSk7XG4gICAgICBkZWxldGUgcmVnaXN0cnlbdHMgKyBcIm1zXCJdO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHRpbWVzdGFtcHMubGVuZ3RoICsgZnJhbWVzLmxlbmd0aCA+IDApIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcERpc3BhdGNoZXIpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRGcmFtZSA9IDA7XG4gICAgY3VycmVudFRpbWVzdGFtcCA9IDA7XG4gICAgcnVubmluZyA9IGZhbHNlO1xuICB9XG59O1xuXG52YXIgcmVzb3J0RnJhbWVzID0gZnVuY3Rpb24oKSB7XG4gIGZyYW1lcyA9IHV0aWxzLmFycmF5VG9TZXQoZnJhbWVzKVxuICBmcmFtZXMuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIC0gYjsgfSlcbn07XG5cbnZhciByZXNvcnRUaW1lc3RhbXBzID0gZnVuY3Rpb24oKSB7XG4gIHRpbWVzdGFtcHMgPSB1dGlscy5hcnJheVRvU2V0KHRpbWVzdGFtcHMpXG4gIHRpbWVzdGFtcHMuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIC0gYjsgfSkgXG59XG5cbnZhciBhZGRUb1JlZ2lzdHJ5ID0gZnVuY3Rpb24oa2V5LCBhY3Rpb24pIHtcbiAgaWYgKCFyZWdpc3RyeVtrZXldKSByZWdpc3RyeVtrZXldID0gW107XG4gIHJlZ2lzdHJ5W2tleV0ucHVzaChhY3Rpb24pO1xufTtcblxudmFyIHNjaGVkdWxlRnJhbWUgPSBmdW5jdGlvbihmcmFtZSwgYWN0aW9uKSB7XG4gIHZhciB0YXJnZXQgPSBjdXJyZW50RnJhbWUgKyBmcmFtZTtcbiAgZnJhbWVzLnB1c2godGFyZ2V0KTtcbiAgYWRkVG9SZWdpc3RyeSh0YXJnZXQsIGFjdGlvbik7XG4gIHJlc29ydEZyYW1lcygpO1xufTtcblxudmFyIGRvU2NoZWR1bGUgPSBmdW5jdGlvbih0aW1lc3RhbXAsIGFjdGlvbikge1xuICB2YXIgdGFyZ2V0ID0gTWF0aC5yb3VuZChjdXJyZW50VGltZXN0YW1wICsgdGltZXN0YW1wKTtcbiAgdGltZXN0YW1wcy5wdXNoKHRhcmdldCk7XG4gIGFkZFRvUmVnaXN0cnkodGFyZ2V0ICsgXCJtc1wiLCBhY3Rpb24pO1xuICByZXNvcnRUaW1lc3RhbXBzKCk7XG59XG5cbnZhciBzY2hlZHVsZVRpbWVzdGFtcCA9IGZ1bmN0aW9uKHRpbWVzdGFtcCwgYWN0aW9uKSB7XG4gIGlmICghY3VycmVudFRpbWVzdGFtcCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbih1cGRhdGVkVGltZXN0YW1wKSB7XG4gICAgICBjdXJyZW50VGltZXN0YW1wID0gdXBkYXRlZFRpbWVzdGFtcDtcbiAgICAgIGRvU2NoZWR1bGUodGltZXN0YW1wLCBhY3Rpb24pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGRvU2NoZWR1bGUodGltZXN0YW1wLCBhY3Rpb24pO1xuICB9XG59O1xuXG52YXIga2lja0Rpc3BhdGNoZXIgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCFydW5uaW5nKSB7XG4gICAgcnVubmluZyA9IHRydWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3BEaXNwYXRjaGVyKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMua2ljayA9IGtpY2tEaXNwYXRjaGVyO1xubW9kdWxlLmV4cG9ydHMuc2NoZWR1bGVGcmFtZSA9IHNjaGVkdWxlRnJhbWU7XG5tb2R1bGUuZXhwb3J0cy5zY2hlZHVsZVRpbWVzdGFtcCA9IHNjaGVkdWxlVGltZXN0YW1wO1xuIiwidmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG52YXIgY29yZSA9IHJlcXVpcmUoXCIuL2NvcmUuanNcIik7XG5cbmlmIChcImRldmVsb3BtZW50XCIgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICB2YXIgZGVidWcgPSByZXF1aXJlKFwiLi9kZWJ1Zy5qc1wiKTtcbn1cblxudmFyIENTU0RyaXZlbiA9IHtcbiAgZG9UcmFuc2l0aW9uOiBjb3JlLmRvVHJhbnNpdGlvbixcbn07XG5cbmlmIChcImRldmVsb3BtZW50XCIgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICBDU1NEcml2ZW4uZGVidWdNb2RlID0gZGVidWcuc2V0O1xuICBDU1NEcml2ZW4uZmFsbGJhY2tNb2RlID0gZGVidWcuZmFsbGJhY2tNb2RlO1xufVxuXG5cblxud2luZG93LkNTU0RyaXZlbiA9IENTU0RyaXZlbjtcbm1vZHVsZS5leHBvcnRzID0gQ1NTRHJpdmVuO1xuIiwidmFyIGNvbXBhdCA9IHJlcXVpcmUoXCIuL2NvbXBhdC5qc1wiKTtcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBjb21wYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG52YXIganVtcEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oZm4sIGZyYW1lcykge1xuICBmcmFtZXMgPSBmcmFtZXMgfHwgMTtcbiAgdmFyIGl0ZXJhdGlvbiA9IDA7XG4gIHZhciBqdW1wZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpdGVyYXRpb24gKz0gMTtcbiAgICBpZiAoaXRlcmF0aW9uID49IGZyYW1lcykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGp1bXBlcik7XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGp1bXBlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzLmp1bXBBbmltYXRpb25GcmFtZSA9IGp1bXBBbmltYXRpb25GcmFtZTtcblxuXG52YXIgZ2V0TG9uZ2VzdFRyYW5zaXRpb25PckFuaW1hdGlvblRpbWUgPSBmdW5jdGlvbiggZWwgKXtcbiAgLy8gUmV0dXJucyBhbiBlbGVtZW50J3MgbG9uZ2VzdCB0cmFuc2l0aW9uIGRlbGF5K2R1cmF0aW9uIHBhaXJpbmcgaW4gbWlsbGlzZWNvbmRzO1xuICAvLyBBc3N1bXB0aW9uOiBpdCdzIG5vdCBwb3NzaWJsZSBmb3IgdGhlIHR3byBhcnJheXMgdG8gaGF2ZSBkaWZmZXJlbnQgbGVuZ3Rocy5cblxuICB2YXIgdG90YWxzID0gW1wiQW5pbWF0aW9uXCIsIFwiVHJhbnNpdGlvblwiXS5yZWR1Y2UoZnVuY3Rpb24odG90YWxzLCBjc3NUeXBlKSB7XG5cbiAgICB2YXIgZGVsYXksIGR1cmF0aW9uLCBzdWJUb3RhbHM7XG5cbiAgICBkZWxheSA9IGdldENvbXB1dGVkU3R5bGUoIGVsIClbY29tcGF0LnByZWZpeGVkKGNzc1R5cGUgKyBcIkRlbGF5XCIpXVxuICAgIGRlbGF5ID0gZGVsYXkuc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgZHVyYXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKCBlbCApW2NvbXBhdC5wcmVmaXhlZChjc3NUeXBlICsgXCJEdXJhdGlvblwiKV1cbiAgICBkdXJhdGlvbiA9IGR1cmF0aW9uLnNwbGl0KCcsJykubWFwKHBhcnNlRmxvYXQpO1xuICBcbiAgICBzdWJUb3RhbHMgPSBkZWxheS5tYXAoZnVuY3Rpb24oZCwgaXgpIHsgcmV0dXJuIGQgKyBkdXJhdGlvbltpeF0gfSk7XG4gICAgcmV0dXJuIHRvdGFscy5jb25jYXQoc3ViVG90YWxzKTtcblxuICB9LCBbXSk7XG5cbiAgLy8gbm9ybWFsaXplIHRvIG1pbGxpc2Vjb25kc1xuICB0b3RhbHMgPSB0b3RhbHMubWFwKGZ1bmN0aW9uKHQpIHsgcmV0dXJuIHQgKiAxMDAwOyB9KTtcblxuICByZXR1cm4gTWF0aC5tYXguYXBwbHkoIG51bGwsIHRvdGFscyApO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5nZXRMb25nZXN0VHJhbnNpdGlvbk9yQW5pbWF0aW9uVGltZSA9IGdldExvbmdlc3RUcmFuc2l0aW9uT3JBbmltYXRpb25UaW1lO1xuXG5cbnZhciBhcnJheVRvU2V0ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihzZXQsIGl0ZW0pIHtcbiAgICBpZiAoc2V0LmluZGV4T2YoaXRlbSkgPT0gLTEpIHtcbiAgICAgIHNldC5wdXNoKGl0ZW0pO1xuICAgIH07XG4gICAgcmV0dXJuIHNldDtcbiAgfSwgW10pO1xufTtcblxubW9kdWxlLmV4cG9ydHMuYXJyYXlUb1NldCA9IGFycmF5VG9TZXQ7XG4iXX0=
