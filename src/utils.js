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
