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
