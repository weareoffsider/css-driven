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
  var process = {}
  Object.keys(instructions).forEach(function(key) {
    process[key] = instructions[key];
  });
    
  var animData = {state: null};
  if ("development" === "development") {
    animData.name = options["name"] || "anim" + animNameIncrement++;
  }

  var timingElem = options["timingElement"] || $el;
  
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
    executeStep($el, "0", process["0"], animData);
    delete process["0"];
  }

  if ("development" === "development") {
    if (debug.inFallbackMode()) {
      return doFallback($el, process, animData, options);
    }
  }

  if (!compat.requestAnimationFrame) {
    return doFallback($el, process, animData, options);
  }

  var timeSpan = utils.getLongestTransitionOrAnimationTime(timingElem);
  if ("development" === "development") {
    debug.logger(animData.name + " :: Animating for " + timeSpan + "ms");
  }

  Object.keys(process).forEach(function(point) {
    var stepInstructions = process[point];

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

var doFallback = function($el, process, animData, options) {
  if ("development" === "development") {
    debug.logger(animData.name + " :: Using fallback");
  }

  if (options.fallback) {
    options.fallback($el);
  } else {
    var processKeys = Object.keys(process).sort(function(a, b) {
      var unitPriorityA = getUnitPriority(a);
      var unitPriorityB = getUnitPriority(b);
      if (unitPriorityA != unitPriorityB) {
        return unitPriorityA - unitPriorityB;
      } else {
        return parseInt(a) - parseInt(b);
      };
    });

    processKeys.forEach(function(key) {
      executeStep.call($el, $el, key, process[key], animData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9jb21wYXQuanMiLCIvaG9tZS9qcmFraWNoL3Byb2plY3RzL09wZW5Tb3VyY2UvY3NzLWRyaXZlbi9zcmMvY29yZS5qcyIsIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9kZWJ1Zy5qcyIsIi9ob21lL2pyYWtpY2gvcHJvamVjdHMvT3BlblNvdXJjZS9jc3MtZHJpdmVuL3NyYy9kaXNwYXRjaGVyLmpzIiwiL2hvbWUvanJha2ljaC9wcm9qZWN0cy9PcGVuU291cmNlL2Nzcy1kcml2ZW4vc3JjL2Zha2VfYzNmOTk1ZDUuanMiLCIvaG9tZS9qcmFraWNoL3Byb2plY3RzL09wZW5Tb3VyY2UvY3NzLWRyaXZlbi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbi8qIE1vZGVybml6ciAyLjguMyAoQ3VzdG9tIEJ1aWxkKSB8IE1JVCAmIEJTRFxuICogQnVpbGQ6IGh0dHA6Ly9tb2Rlcm5penIuY29tL2Rvd25sb2FkLyMtcHJlZml4ZWQtdGVzdHByb3AtdGVzdGFsbHByb3BzLXByZWZpeGVzLWRvbXByZWZpeGVzLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICovXG47XG5cbnZhciBNb2Rlcm5penIgPSAoZnVuY3Rpb24oIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCApIHtcblxuICAgIHZhciB2ZXJzaW9uID0gJzIuOC4zJyxcblxuICAgIE1vZGVybml6ciA9IHt9LFxuXG5cbiAgICBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuXG4gICAgbW9kID0gJ21vZGVybml6cicsXG4gICAgbW9kRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobW9kKSxcbiAgICBtU3R5bGUgPSBtb2RFbGVtLnN0eWxlLFxuXG4gICAgaW5wdXRFbGVtICAsXG5cblxuICAgIHRvU3RyaW5nID0ge30udG9TdHJpbmcsXG5cbiAgICBwcmVmaXhlcyA9ICcgLXdlYmtpdC0gLW1vei0gLW8tIC1tcy0gJy5zcGxpdCgnICcpLFxuXG5cblxuICAgIG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJyxcblxuICAgIGNzc29tUHJlZml4ZXMgPSBvbVByZWZpeGVzLnNwbGl0KCcgJyksXG5cbiAgICBkb21QcmVmaXhlcyA9IG9tUHJlZml4ZXMudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLFxuXG5cbiAgICB0ZXN0cyA9IHt9LFxuICAgIGlucHV0cyA9IHt9LFxuICAgIGF0dHJzID0ge30sXG5cbiAgICBjbGFzc2VzID0gW10sXG5cbiAgICBzbGljZSA9IGNsYXNzZXMuc2xpY2UsXG5cbiAgICBmZWF0dXJlTmFtZSxcblxuXG5cbiAgICBfaGFzT3duUHJvcGVydHkgPSAoe30pLmhhc093blByb3BlcnR5LCBoYXNPd25Qcm9wO1xuXG4gICAgaWYgKCAhaXMoX2hhc093blByb3BlcnR5LCAndW5kZWZpbmVkJykgJiYgIWlzKF9oYXNPd25Qcm9wZXJ0eS5jYWxsLCAndW5kZWZpbmVkJykgKSB7XG4gICAgICBoYXNPd25Qcm9wID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBoYXNPd25Qcm9wID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHkpIHsgXG4gICAgICAgIHJldHVybiAoKHByb3BlcnR5IGluIG9iamVjdCkgJiYgaXMob2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZVtwcm9wZXJ0eV0sICd1bmRlZmluZWQnKSk7XG4gICAgICB9O1xuICAgIH1cblxuXG4gICAgaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCAhPSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgYm91bmQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcblxuICAgICAgICAgICAgICB2YXIgRiA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICAgICAgICAgRi5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IG5ldyBGKCk7XG5cbiAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICAgIHNlbGYsXG4gICAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBzZWxmO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYm91bmQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENzcyggc3RyICkge1xuICAgICAgICBtU3R5bGUuY3NzVGV4dCA9IHN0cjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDc3NBbGwoIHN0cjEsIHN0cjIgKSB7XG4gICAgICAgIHJldHVybiBzZXRDc3MocHJlZml4ZXMuam9pbihzdHIxICsgJzsnKSArICggc3RyMiB8fCAnJyApKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpcyggb2JqLCB0eXBlICkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gdHlwZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250YWlucyggc3RyLCBzdWJzdHIgKSB7XG4gICAgICAgIHJldHVybiAhIX4oJycgKyBzdHIpLmluZGV4T2Yoc3Vic3RyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXN0UHJvcHMoIHByb3BzLCBwcmVmaXhlZCApIHtcbiAgICAgICAgZm9yICggdmFyIGkgaW4gcHJvcHMgKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgICAgICAgaWYgKCAhY29udGFpbnMocHJvcCwgXCItXCIpICYmIG1TdHlsZVtwcm9wXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmVmaXhlZCA9PSAncGZ4JyA/IHByb3AgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXN0RE9NUHJvcHMoIHByb3BzLCBvYmosIGVsZW0gKSB7XG4gICAgICAgIGZvciAoIHZhciBpIGluIHByb3BzICkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBvYmpbcHJvcHNbaV1dO1xuICAgICAgICAgICAgaWYgKCBpdGVtICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtID09PSBmYWxzZSkgcmV0dXJuIHByb3BzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzKGl0ZW0sICdmdW5jdGlvbicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYmluZChlbGVtIHx8IG9iaik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRlc3RQcm9wc0FsbCggcHJvcCwgcHJlZml4ZWQsIGVsZW0gKSB7XG5cbiAgICAgICAgdmFyIHVjUHJvcCAgPSBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKSxcbiAgICAgICAgICAgIHByb3BzICAgPSAocHJvcCArICcgJyArIGNzc29tUHJlZml4ZXMuam9pbih1Y1Byb3AgKyAnICcpICsgdWNQcm9wKS5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICBpZihpcyhwcmVmaXhlZCwgXCJzdHJpbmdcIikgfHwgaXMocHJlZml4ZWQsIFwidW5kZWZpbmVkXCIpKSB7XG4gICAgICAgICAgcmV0dXJuIHRlc3RQcm9wcyhwcm9wcywgcHJlZml4ZWQpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzID0gKHByb3AgKyAnICcgKyAoZG9tUHJlZml4ZXMpLmpvaW4odWNQcm9wICsgJyAnKSArIHVjUHJvcCkuc3BsaXQoJyAnKTtcbiAgICAgICAgICByZXR1cm4gdGVzdERPTVByb3BzKHByb3BzLCBwcmVmaXhlZCwgZWxlbSk7XG4gICAgICAgIH1cbiAgICB9ICAgIGZvciAoIHZhciBmZWF0dXJlIGluIHRlc3RzICkge1xuICAgICAgICBpZiAoIGhhc093blByb3AodGVzdHMsIGZlYXR1cmUpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZU5hbWUgID0gZmVhdHVyZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lXSA9IHRlc3RzW2ZlYXR1cmVdKCk7XG5cbiAgICAgICAgICAgIGNsYXNzZXMucHVzaCgoTW9kZXJuaXpyW2ZlYXR1cmVOYW1lXSA/ICcnIDogJ25vLScpICsgZmVhdHVyZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgICBNb2Rlcm5penIuYWRkVGVzdCA9IGZ1bmN0aW9uICggZmVhdHVyZSwgdGVzdCApIHtcbiAgICAgICBpZiAoIHR5cGVvZiBmZWF0dXJlID09ICdvYmplY3QnICkge1xuICAgICAgICAgZm9yICggdmFyIGtleSBpbiBmZWF0dXJlICkge1xuICAgICAgICAgICBpZiAoIGhhc093blByb3AoIGZlYXR1cmUsIGtleSApICkge1xuICAgICAgICAgICAgIE1vZGVybml6ci5hZGRUZXN0KCBrZXksIGZlYXR1cmVbIGtleSBdICk7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICBmZWF0dXJlID0gZmVhdHVyZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICBpZiAoIE1vZGVybml6cltmZWF0dXJlXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNb2Rlcm5penI7XG4gICAgICAgICB9XG5cbiAgICAgICAgIHRlc3QgPSB0eXBlb2YgdGVzdCA9PSAnZnVuY3Rpb24nID8gdGVzdCgpIDogdGVzdDtcblxuICAgICAgICAgaWYgKHR5cGVvZiBlbmFibGVDbGFzc2VzICE9PSBcInVuZGVmaW5lZFwiICYmIGVuYWJsZUNsYXNzZXMpIHtcbiAgICAgICAgICAgZG9jRWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgKHRlc3QgPyAnJyA6ICduby0nKSArIGZlYXR1cmU7XG4gICAgICAgICB9XG4gICAgICAgICBNb2Rlcm5penJbZmVhdHVyZV0gPSB0ZXN0O1xuXG4gICAgICAgfVxuXG4gICAgICAgcmV0dXJuIE1vZGVybml6cjsgXG4gICAgIH07XG5cblxuICAgIHNldENzcygnJyk7XG4gICAgbW9kRWxlbSA9IGlucHV0RWxlbSA9IG51bGw7XG5cblxuICAgIE1vZGVybml6ci5fdmVyc2lvbiAgICAgID0gdmVyc2lvbjtcblxuICAgIE1vZGVybml6ci5fcHJlZml4ZXMgICAgID0gcHJlZml4ZXM7XG4gICAgTW9kZXJuaXpyLl9kb21QcmVmaXhlcyAgPSBkb21QcmVmaXhlcztcbiAgICBNb2Rlcm5penIuX2Nzc29tUHJlZml4ZXMgID0gY3Nzb21QcmVmaXhlcztcblxuXG5cbiAgICBNb2Rlcm5penIudGVzdFByb3AgICAgICA9IGZ1bmN0aW9uKHByb3Ape1xuICAgICAgICByZXR1cm4gdGVzdFByb3BzKFtwcm9wXSk7XG4gICAgfTtcblxuICAgIE1vZGVybml6ci50ZXN0QWxsUHJvcHMgID0gdGVzdFByb3BzQWxsO1xuXG5cbiAgICBNb2Rlcm5penIucHJlZml4ZWQgICAgICA9IGZ1bmN0aW9uKHByb3AsIG9iaiwgZWxlbSl7XG4gICAgICBpZighb2JqKSB7XG4gICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwocHJvcCwgJ3BmeCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwocHJvcCwgb2JqLCBlbGVtKTtcbiAgICAgIH1cbiAgICB9O1xuXG5cblxuICAgIHJldHVybiBNb2Rlcm5penI7XG59KSh3aW5kb3csIHdpbmRvdy5kb2N1bWVudCk7XG4vLyBFTkQgTW9kZXJuaXpyIENvZGVcblxuXG52YXIgdmVuZG9ycyA9IFsnd2Via2l0JywgJ21veiddO1xudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHVuZGVmaW5lZDtcbnZhciBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHVuZGVmaW5lZDtcblxuZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICFyZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9ICh3aW5kb3dbdmVuZG9yc1t4XSsnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdKydDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSk7XG59XG5cbmlmICghcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5tb2R1bGUuZXhwb3J0cy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lO1xubW9kdWxlLmV4cG9ydHMucHJlZml4ZWQgPSBmdW5jdGlvbihwcm9wLCBvYmosIGVsZW0pIHtcbiAgcmV0dXJuIE1vZGVybml6ci5wcmVmaXhlZChwcm9wLCBvYmosIGVsZW0pO1xufVxuIiwidmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG52YXIgZGlzcGF0Y2hlciA9IHJlcXVpcmUoXCIuL2Rpc3BhdGNoZXIuanNcIik7XG52YXIgY29tcGF0ID0gcmVxdWlyZShcIi4vY29tcGF0LmpzXCIpO1xuXG5pZiAoXCJkZXZlbG9wbWVudFwiID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgdmFyIGRlYnVnID0gcmVxdWlyZShcIi4vZGVidWcuanNcIik7XG59XG5cbnZhciBleGVjdXRlU3RlcCA9IGZ1bmN0aW9uKCRlbCwgcG9pbnQsIHN0ZXBJbnN0cnVjdGlvbnMsIGFuaW1EYXRhKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzdGVwSW5zdHJ1Y3Rpb25zKSkge1xuICAgIHN0ZXBJbnN0cnVjdGlvbnMgPSBbc3RlcEluc3RydWN0aW9uc107XG4gIH1cblxuICBpZiAoXCJkZXZlbG9wbWVudFwiID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBkZWJ1Zy5sb2dnZXIoYW5pbURhdGEubmFtZSArIFwiIDo6IFwiICsgcG9pbnQgKyBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoYW5pbURhdGEuc3RhdGUpKTtcbiAgfVxuXG4gIHN0ZXBJbnN0cnVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzdGVwKSB7XG4gICAgaWYgKHR5cGVvZiBzdGVwID09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIENMQVNTIEFERCwgVE9HR0xFIE9SIFJFTU9WRVxuICAgICAgdmFyIG1vZGlmaWVyID0gc3RlcFswXTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBzdGVwLnNsaWNlKDEpO1xuXG4gICAgICBzd2l0Y2ggKG1vZGlmaWVyKSB7XG4gICAgICBjYXNlIFwiK1wiOiAkZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyBicmVhaztcbiAgICAgIGNhc2UgXCItXCI6ICRlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IGJyZWFrO1xuICAgICAgY2FzZSBcIn5cIjogJGVsLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoXCJDbGFzcyBtdXN0IGJlIHByZWZpeGVkIHdpdGggJysnLCAnLScsIG9yICd+J1wiKTtcbiAgICAgIH07XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdGVwID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgYW5pbURhdGEuc3RhdGUgPSBzdGVwKCRlbCwgYW5pbURhdGEuc3RhdGUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ZXAgPT0gXCJvYmplY3RcIikge1xuICAgICAgT2JqZWN0LmtleXMoc3RlcCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgJGVsLnN0eWxlW2tleV0gPSBzdGVwW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHZlcmJNYXAgPSB7XG4gIFwic2V0dXBcIjogXCIwXCIsXG4gIFwidHJpZ2dlclwiOiBcIjFcIixcbiAgXCJlbmRcIjogXCIxMDAlXCIsXG4gIFwiY2xlYW51cFwiOiBcIjEwMCVcIixcbn07XG5cbmlmIChcImRldmVsb3BtZW50XCIgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICB2YXIgYW5pbU5hbWVJbmNyZW1lbnQgPSAwO1xufVxuXG52YXIgZG9UcmFuc2l0aW9uID0gZnVuY3Rpb24oJGVsLCBpbnN0cnVjdGlvbnMsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBwcm9jZXNzID0ge31cbiAgT2JqZWN0LmtleXMoaW5zdHJ1Y3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIHByb2Nlc3Nba2V5XSA9IGluc3RydWN0aW9uc1trZXldO1xuICB9KTtcbiAgICBcbiAgdmFyIGFuaW1EYXRhID0ge3N0YXRlOiBudWxsfTtcbiAgaWYgKFwiZGV2ZWxvcG1lbnRcIiA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgYW5pbURhdGEubmFtZSA9IG9wdGlvbnNbXCJuYW1lXCJdIHx8IFwiYW5pbVwiICsgYW5pbU5hbWVJbmNyZW1lbnQrKztcbiAgfVxuXG4gIHZhciB0aW1pbmdFbGVtID0gb3B0aW9uc1tcInRpbWluZ0VsZW1lbnRcIl0gfHwgJGVsO1xuICBcbiAgT2JqZWN0LmtleXModmVyYk1hcCkuZm9yRWFjaChmdW5jdGlvbih2ZXJiKSB7XG4gICAgdmFyIHByb2NJbnN0ID0gcHJvY2Vzc1t2ZXJiXVxuICAgIGlmIChwcm9jSW5zdCkge1xuICAgICAgaWYgKCFwcm9jZXNzW3ZlcmJNYXBbdmVyYl1dKSB7IHByb2Nlc3NbdmVyYk1hcFt2ZXJiXV0gPSBbXTsgfVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb2NJbnN0KSkgeyBwcm9jSW5zdCA9IFtwcm9jSW5zdF07IH1cbiAgICAgIHByb2Nlc3NbdmVyYk1hcFt2ZXJiXV0gPSBwcm9jZXNzW3ZlcmJNYXBbdmVyYl1dLmNvbmNhdChwcm9jSW5zdCk7XG4gICAgICBkZWxldGUgcHJvY2Vzc1t2ZXJiXTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzW1wiMFwiXSkge1xuICAgIGV4ZWN1dGVTdGVwKCRlbCwgXCIwXCIsIHByb2Nlc3NbXCIwXCJdLCBhbmltRGF0YSk7XG4gICAgZGVsZXRlIHByb2Nlc3NbXCIwXCJdO1xuICB9XG5cbiAgaWYgKFwiZGV2ZWxvcG1lbnRcIiA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgaWYgKGRlYnVnLmluRmFsbGJhY2tNb2RlKCkpIHtcbiAgICAgIHJldHVybiBkb0ZhbGxiYWNrKCRlbCwgcHJvY2VzcywgYW5pbURhdGEsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29tcGF0LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIHJldHVybiBkb0ZhbGxiYWNrKCRlbCwgcHJvY2VzcywgYW5pbURhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIHRpbWVTcGFuID0gdXRpbHMuZ2V0TG9uZ2VzdFRyYW5zaXRpb25PckFuaW1hdGlvblRpbWUodGltaW5nRWxlbSk7XG4gIGlmIChcImRldmVsb3BtZW50XCIgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGRlYnVnLmxvZ2dlcihhbmltRGF0YS5uYW1lICsgXCIgOjogQW5pbWF0aW5nIGZvciBcIiArIHRpbWVTcGFuICsgXCJtc1wiKTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHByb2Nlc3MpLmZvckVhY2goZnVuY3Rpb24ocG9pbnQpIHtcbiAgICB2YXIgc3RlcEluc3RydWN0aW9ucyA9IHByb2Nlc3NbcG9pbnRdO1xuXG4gICAgaWYgKHBvaW50LnNsaWNlKC0xKSA9PSBcIiVcIikge1xuICAgICAgdmFyIHRpbWVzdGFtcCA9IHBhcnNlSW50KHBvaW50KSAvIDEwMCAqIHRpbWVTcGFuO1xuICAgICAgZGlzcGF0Y2hlci5zY2hlZHVsZVRpbWVzdGFtcChcbiAgICAgICAgdGltZXN0YW1wLCBleGVjdXRlU3RlcC5iaW5kKCRlbCwgJGVsLCBwb2ludCwgc3RlcEluc3RydWN0aW9ucywgYW5pbURhdGEpXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAocG9pbnQuc2xpY2UoLTIpID09IFwibXNcIikge1xuICAgICAgdmFyIHRpbWVzdGFtcCA9IHBhcnNlSW50KHBvaW50KTtcbiAgICAgIGRpc3BhdGNoZXIuc2NoZWR1bGVUaW1lc3RhbXAoXG4gICAgICAgIHRpbWVzdGFtcCwgZXhlY3V0ZVN0ZXAuYmluZCgkZWwsICRlbCwgcG9pbnQsIHN0ZXBJbnN0cnVjdGlvbnMsIGFuaW1EYXRhKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGZyYW1lID0gcGFyc2VJbnQocG9pbnQpO1xuICAgICAgZGlzcGF0Y2hlci5zY2hlZHVsZUZyYW1lKFxuICAgICAgICBmcmFtZSwgZXhlY3V0ZVN0ZXAuYmluZCgkZWwsICRlbCwgcG9pbnQsIHN0ZXBJbnN0cnVjdGlvbnMsIGFuaW1EYXRhKVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRpc3BhdGNoZXIua2ljaygpO1xufTtcblxudmFyIGdldFVuaXRQcmlvcml0eSA9IGZ1bmN0aW9uKHBvaW50KSB7XG4gIGlmIChwb2ludC5zbGljZSgtMSkgPT0gXCIlXCIpIHJldHVybiAyO1xuICBpZiAocG9pbnQuc2xpY2UoLTIpID09IFwibXNcIikgcmV0dXJuIDE7XG4gIHJldHVybiAwOyAvLyBmcmFtZXNcblxufTtcblxudmFyIGRvRmFsbGJhY2sgPSBmdW5jdGlvbigkZWwsIHByb2Nlc3MsIGFuaW1EYXRhLCBvcHRpb25zKSB7XG4gIGlmIChcImRldmVsb3BtZW50XCIgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGRlYnVnLmxvZ2dlcihhbmltRGF0YS5uYW1lICsgXCIgOjogVXNpbmcgZmFsbGJhY2tcIik7XG4gIH1cblxuICBpZiAob3B0aW9ucy5mYWxsYmFjaykge1xuICAgIG9wdGlvbnMuZmFsbGJhY2soJGVsKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcHJvY2Vzc0tleXMgPSBPYmplY3Qua2V5cyhwcm9jZXNzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHZhciB1bml0UHJpb3JpdHlBID0gZ2V0VW5pdFByaW9yaXR5KGEpO1xuICAgICAgdmFyIHVuaXRQcmlvcml0eUIgPSBnZXRVbml0UHJpb3JpdHkoYik7XG4gICAgICBpZiAodW5pdFByaW9yaXR5QSAhPSB1bml0UHJpb3JpdHlCKSB7XG4gICAgICAgIHJldHVybiB1bml0UHJpb3JpdHlBIC0gdW5pdFByaW9yaXR5QjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChhKSAtIHBhcnNlSW50KGIpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHByb2Nlc3NLZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICBleGVjdXRlU3RlcC5jYWxsKCRlbCwgJGVsLCBrZXksIHByb2Nlc3Nba2V5XSwgYW5pbURhdGEpO1xuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5kb1RyYW5zaXRpb24gPSBkb1RyYW5zaXRpb247XG4iLCJ2YXIgaW5EZWJ1Z01vZGUgPSBmYWxzZTtcbnZhciBpbkZhbGxiYWNrTW9kZSA9IGZhbHNlO1xuXG52YXIgc2V0ID0gZnVuY3Rpb24oYWN0aXZlKSB7XG4gIGNvbnNvbGUubG9nKFwiY3NzLWRyaXZlbiA6OiBkZWJ1ZyBtb2RlIHNldCB0byBcIiArIGFjdGl2ZSk7XG4gIGluRGVidWdNb2RlID0gYWN0aXZlO1xufTtcbm1vZHVsZS5leHBvcnRzLnNldCA9IHNldDtcblxudmFyIGZhbGxiYWNrTW9kZSA9IGZ1bmN0aW9uKGFjdGl2ZSkge1xuICBpbkZhbGxiYWNrTW9kZSA9IGFjdGl2ZTtcbiAgY29uc29sZS5sb2coXCJjc3MtZHJpdmVuIDo6IGZhbGxiYWNrIG1vZGUgc2V0IHRvIFwiICsgYWN0aXZlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZmFsbGJhY2tNb2RlID0gZmFsbGJhY2tNb2RlO1xubW9kdWxlLmV4cG9ydHMuaW5GYWxsYmFja01vZGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGluRmFsbGJhY2tNb2RlIH07XG5cbnZhciBsb2dnZXIgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgaWYgKCFpbkRlYnVnTW9kZSkgcmV0dXJuO1xuICBjb25zb2xlLmxvZyhcImNzcy1kcml2ZW4gOjogXCIgKyBzdHJpbmcpO1xufTtcbm1vZHVsZS5leHBvcnRzLmxvZ2dlciA9IGxvZ2dlcjtcbiIsInZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xudmFyIGNvbXBhdCA9IHJlcXVpcmUoXCIuL2NvbXBhdC5qc1wiKTtcblxudmFyIGN1cnJlbnRGcmFtZSA9IDA7XG52YXIgYmFzZVRpbWVzdGFtcCA9ICtuZXcgRGF0ZSgpO1xudmFyIGN1cnJlbnRUaW1lc3RhbXAgPSAwO1xudmFyIHJlZ2lzdHJ5ID0ge307XG52YXIgZnJhbWVzID0gW107XG52YXIgdGltZXN0YW1wcyA9IFtdO1xudmFyIHJ1bm5pbmcgPSBmYWxzZTtcblxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGNvbXBhdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbnZhciBsb29wRGlzcGF0Y2hlciA9IGZ1bmN0aW9uKHRpbWVzdGFtcCkge1xuICBjdXJyZW50RnJhbWUrKztcbiAgY3VycmVudFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcblxuICBpZiAoZnJhbWVzWzBdID09IGN1cnJlbnRGcmFtZSkge1xuICAgIHJlZ2lzdHJ5W2ZyYW1lc1swXV0uZm9yRWFjaChmdW5jdGlvbihjYikgeyBjYigpIH0pO1xuICAgIGRlbGV0ZSByZWdpc3RyeVtmcmFtZXNbMF1dO1xuICAgIGZyYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgaWYgKHRpbWVzdGFtcHNbMF0gPCB0aW1lc3RhbXApIHtcbiAgICB2YXIgdG9kb3MgPSB0aW1lc3RhbXBzLmZpbHRlcihmdW5jdGlvbih0cykgeyByZXR1cm4gdHMgPCB0aW1lc3RhbXAgfSk7XG4gICAgdGltZXN0YW1wcyA9IHRpbWVzdGFtcHMuZmlsdGVyKGZ1bmN0aW9uKHRzKSB7IHJldHVybiB0cyA+IHRpbWVzdGFtcCB9KTtcbiAgICB0b2Rvcy5mb3JFYWNoKGZ1bmN0aW9uKHRzKSB7XG4gICAgICByZWdpc3RyeVt0cyArIFwibXNcIl0uZm9yRWFjaChmdW5jdGlvbihjYikgeyBjYigpIH0pO1xuICAgICAgZGVsZXRlIHJlZ2lzdHJ5W3RzICsgXCJtc1wiXTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0aW1lc3RhbXBzLmxlbmd0aCArIGZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3BEaXNwYXRjaGVyKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50RnJhbWUgPSAwO1xuICAgIGN1cnJlbnRUaW1lc3RhbXAgPSAwO1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxufTtcblxudmFyIHJlc29ydEZyYW1lcyA9IGZ1bmN0aW9uKCkge1xuICBmcmFtZXMgPSB1dGlscy5hcnJheVRvU2V0KGZyYW1lcylcbiAgZnJhbWVzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pXG59O1xuXG52YXIgcmVzb3J0VGltZXN0YW1wcyA9IGZ1bmN0aW9uKCkge1xuICB0aW1lc3RhbXBzID0gdXRpbHMuYXJyYXlUb1NldCh0aW1lc3RhbXBzKVxuICB0aW1lc3RhbXBzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGI7IH0pIFxufVxuXG52YXIgYWRkVG9SZWdpc3RyeSA9IGZ1bmN0aW9uKGtleSwgYWN0aW9uKSB7XG4gIGlmICghcmVnaXN0cnlba2V5XSkgcmVnaXN0cnlba2V5XSA9IFtdO1xuICByZWdpc3RyeVtrZXldLnB1c2goYWN0aW9uKTtcbn07XG5cbnZhciBzY2hlZHVsZUZyYW1lID0gZnVuY3Rpb24oZnJhbWUsIGFjdGlvbikge1xuICB2YXIgdGFyZ2V0ID0gY3VycmVudEZyYW1lICsgZnJhbWU7XG4gIGZyYW1lcy5wdXNoKHRhcmdldCk7XG4gIGFkZFRvUmVnaXN0cnkodGFyZ2V0LCBhY3Rpb24pO1xuICByZXNvcnRGcmFtZXMoKTtcbn07XG5cbnZhciBkb1NjaGVkdWxlID0gZnVuY3Rpb24odGltZXN0YW1wLCBhY3Rpb24pIHtcbiAgdmFyIHRhcmdldCA9IE1hdGgucm91bmQoY3VycmVudFRpbWVzdGFtcCArIHRpbWVzdGFtcCk7XG4gIHRpbWVzdGFtcHMucHVzaCh0YXJnZXQpO1xuICBhZGRUb1JlZ2lzdHJ5KHRhcmdldCArIFwibXNcIiwgYWN0aW9uKTtcbiAgcmVzb3J0VGltZXN0YW1wcygpO1xufVxuXG52YXIgc2NoZWR1bGVUaW1lc3RhbXAgPSBmdW5jdGlvbih0aW1lc3RhbXAsIGFjdGlvbikge1xuICBpZiAoIWN1cnJlbnRUaW1lc3RhbXApIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24odXBkYXRlZFRpbWVzdGFtcCkge1xuICAgICAgY3VycmVudFRpbWVzdGFtcCA9IHVwZGF0ZWRUaW1lc3RhbXA7XG4gICAgICBkb1NjaGVkdWxlKHRpbWVzdGFtcCwgYWN0aW9uKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb1NjaGVkdWxlKHRpbWVzdGFtcCwgYWN0aW9uKTtcbiAgfVxufTtcblxudmFyIGtpY2tEaXNwYXRjaGVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICghcnVubmluZykge1xuICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wRGlzcGF0Y2hlcik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmtpY2sgPSBraWNrRGlzcGF0Y2hlcjtcbm1vZHVsZS5leHBvcnRzLnNjaGVkdWxlRnJhbWUgPSBzY2hlZHVsZUZyYW1lO1xubW9kdWxlLmV4cG9ydHMuc2NoZWR1bGVUaW1lc3RhbXAgPSBzY2hlZHVsZVRpbWVzdGFtcDtcbiIsInZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xudmFyIGNvcmUgPSByZXF1aXJlKFwiLi9jb3JlLmpzXCIpO1xuXG5pZiAoXCJkZXZlbG9wbWVudFwiID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgdmFyIGRlYnVnID0gcmVxdWlyZShcIi4vZGVidWcuanNcIik7XG59XG5cbnZhciBDU1NEcml2ZW4gPSB7XG4gIGRvVHJhbnNpdGlvbjogY29yZS5kb1RyYW5zaXRpb24sXG59O1xuXG5pZiAoXCJkZXZlbG9wbWVudFwiID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgQ1NTRHJpdmVuLmRlYnVnTW9kZSA9IGRlYnVnLnNldDtcbiAgQ1NTRHJpdmVuLmZhbGxiYWNrTW9kZSA9IGRlYnVnLmZhbGxiYWNrTW9kZTtcbn1cblxuXG5cbndpbmRvdy5DU1NEcml2ZW4gPSBDU1NEcml2ZW47XG4iLCJ2YXIgY29tcGF0ID0gcmVxdWlyZShcIi4vY29tcGF0LmpzXCIpO1xudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGNvbXBhdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbnZhciBqdW1wQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihmbiwgZnJhbWVzKSB7XG4gIGZyYW1lcyA9IGZyYW1lcyB8fCAxO1xuICB2YXIgaXRlcmF0aW9uID0gMDtcbiAgdmFyIGp1bXBlciA9IGZ1bmN0aW9uKCkge1xuICAgIGl0ZXJhdGlvbiArPSAxO1xuICAgIGlmIChpdGVyYXRpb24gPj0gZnJhbWVzKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoanVtcGVyKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoanVtcGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuanVtcEFuaW1hdGlvbkZyYW1lID0ganVtcEFuaW1hdGlvbkZyYW1lO1xuXG5cbnZhciBnZXRMb25nZXN0VHJhbnNpdGlvbk9yQW5pbWF0aW9uVGltZSA9IGZ1bmN0aW9uKCBlbCApe1xuICAvLyBSZXR1cm5zIGFuIGVsZW1lbnQncyBsb25nZXN0IHRyYW5zaXRpb24gZGVsYXkrZHVyYXRpb24gcGFpcmluZyBpbiBtaWxsaXNlY29uZHM7XG4gIC8vIEFzc3VtcHRpb246IGl0J3Mgbm90IHBvc3NpYmxlIGZvciB0aGUgdHdvIGFycmF5cyB0byBoYXZlIGRpZmZlcmVudCBsZW5ndGhzLlxuXG4gIHZhciB0b3RhbHMgPSBbXCJBbmltYXRpb25cIiwgXCJUcmFuc2l0aW9uXCJdLnJlZHVjZShmdW5jdGlvbih0b3RhbHMsIGNzc1R5cGUpIHtcblxuICAgIHZhciBkZWxheSwgZHVyYXRpb24sIHN1YlRvdGFscztcblxuICAgIGRlbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSggZWwgKVtjb21wYXQucHJlZml4ZWQoY3NzVHlwZSArIFwiRGVsYXlcIildXG4gICAgZGVsYXkgPSBkZWxheS5zcGxpdCgnLCcpLm1hcChwYXJzZUZsb2F0KTtcbiAgICBkdXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUoIGVsIClbY29tcGF0LnByZWZpeGVkKGNzc1R5cGUgKyBcIkR1cmF0aW9uXCIpXVxuICAgIGR1cmF0aW9uID0gZHVyYXRpb24uc3BsaXQoJywnKS5tYXAocGFyc2VGbG9hdCk7XG4gIFxuICAgIHN1YlRvdGFscyA9IGRlbGF5Lm1hcChmdW5jdGlvbihkLCBpeCkgeyByZXR1cm4gZCArIGR1cmF0aW9uW2l4XSB9KTtcbiAgICByZXR1cm4gdG90YWxzLmNvbmNhdChzdWJUb3RhbHMpO1xuXG4gIH0sIFtdKTtcblxuICAvLyBub3JtYWxpemUgdG8gbWlsbGlzZWNvbmRzXG4gIHRvdGFscyA9IHRvdGFscy5tYXAoZnVuY3Rpb24odCkgeyByZXR1cm4gdCAqIDEwMDA7IH0pO1xuXG4gIHJldHVybiBNYXRoLm1heC5hcHBseSggbnVsbCwgdG90YWxzICk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmdldExvbmdlc3RUcmFuc2l0aW9uT3JBbmltYXRpb25UaW1lID0gZ2V0TG9uZ2VzdFRyYW5zaXRpb25PckFuaW1hdGlvblRpbWU7XG5cblxudmFyIGFycmF5VG9TZXQgPSBmdW5jdGlvbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHNldCwgaXRlbSkge1xuICAgIGlmIChzZXQuaW5kZXhPZihpdGVtKSA9PSAtMSkge1xuICAgICAgc2V0LnB1c2goaXRlbSk7XG4gICAgfTtcbiAgICByZXR1cm4gc2V0O1xuICB9LCBbXSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5hcnJheVRvU2V0ID0gYXJyYXlUb1NldDtcbiJdfQ==
