# CSS Driven Animations
_without the callback hell_

CSS Driven is a small library for helping you drive CSS animations using
Javascript and requestAnimationFrame. Getting your head around the timing can be
tricky, especially if you want to set your timing in CSS rather than
JavaScript. CSS Driven helps with that.

## Install

```
npm install css-driven
```

CSS Driven uses standard DOM methods, and does not rely on jQuery et al.

## Usage Guide

Use the method `CSSDriven.doTransition` to set a CSS based animation or
transition in motion. Consider this:

```javascript
var modal = document.querySelector(".modal");

CSSDriven.doTransition(modal, {
  "setup": "+is-animating",   // add the class is-animating
  "trigger": "~is-hidden",    // toggle the class is-hidden
  "end": "-is-animating"      // remove the class is-animating
});
```

```css
.modal {
  position: fixed;
  top: 20%;
  right: 20%;
  bottom: 20%;
  left: 20%;
  border-radius: 20px;
  background: linear-gradient(90deg, #d53369 33%, #cbad6d 67%);
}

.modal.is-animating {
  transition: opacity 0.5s ease-out 0.2s, transform 1s ease-out;
  display: block !important;
}

.modal.is-hidden {
  display: none;
  opacity: 0;
  transform: scale(1.5) rotate(180deg);
}
```

In this example, we have a funky modal we want to animate in with some excessive
effects. We want to make sure the animation is timed based on the transition
that will take the longest, in this case it's the transformation.

On calling doTransition, CSSDriven will:

- Run the "setup" instruction - add the class `is-animating`
- Measure all transition and animation durations + delays to find the longest
  running transition, and use that time as our endpoint.
- Run the "trigger" instruction on the next frame - toggling the class
  `is-hidden`
- Wait until 1000ms has passed, and then run the "end" instruction - removing
  the class `is-animating`.

Under the hood, this sensitive timing is handled by a dispatcher using
requestAnimationFrame to get your timing down to the millisecond. In fact,
"setup", "end" and "trigger" are just aliases for timing. You'd get the same
result with:

```javascript
CSSDriven.doTransition(modal, {
  "0": "+is-animating",    // execute immediately (frame 0)
  "1": "~is-hidden",       // execute at frame 1
  "100%": "-is-animating"  // execute once 100% of the animation has passed
});
```

This interface gives you plenty of flexibility to base your Javascript execution
upon the timing of CSS transitions and animations. You could use different
percentages to tweak the CSS in flight, possibly a z-index if you're
transitioning into a page.

In a more complex example, lets imagine an accordion with a body:

```javascript
var accordion = document.getElementById("accordion");
var accordionToggle = document.getElementById("accordion-header");

accordionToggle.addEventListener("click", function() {
  if (accordion.classList.contains("is-animating")) return false;
  CSSDriven.doTransition(accordion, {
    "setup": [function($el, state) {

      // measuring desired accordion height and setting start point
      var startHeight = $el.querySelector(".accordion__body").offsetHeight;
      $el.classList.toggle("is-open");
      var targetHeight = $el.querySelector(".accordion__body").offsetHeight;
      $el.classList.toggle("is-open");
      $el.querySelector(".accordion__body").style.height = startHeight + "px";
      $el.querySelector(".accordion__body").offsetHeight;
      return targetHeight; // returning the target height as state

    }, "+is-animating"],
    "trigger": function($el, state) {
      $el.querySelector(".accordion__body").style.height = state + "px";
    },
    "end": [function($el, state) {
      $el.querySelector(".accordion__body").style.height = null;
      $el.classList.toggle("is-open");
    }, "-is-animating"]
  }, {
    "timingElement": accordion.querySelector(".accordion__body"),
  });

});
```

Here we're using the same timing, but instead of just flipping classes, we're
transitioning from auto to 0px. Those who've tried know that CSS alone can't do
it, but here we're breaking it down into clear frame steps that let CSS step in
when it needs to. The function also has the ability to pass state to future
steps, so you can make use of measurements you've made.

Because the transition doesn't actually occur on the accordion where we're
changing the classes, we've added an option at the end, `"timingElement"` lets
us set a different element to measure the transition/animation timing on.

## Browser Support

css-driven aims to technically support IE8+ - but perform best in modern
browsers. Obviously browsers that do not support CSS transitions cannot transition
so this is detected we fallback to run each of the steps in sequence which more
often than not is more than acceptable.

### IE8/9 required polyfills
We do use some more modern Javscript features so you will need to polyfill
the following for the css-driven to run in older browsers (IE8/9).

- (Object.keys)[https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Polyfill]
- (Array.forEach)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill]
- (Element.classList)[https://developer.mozilla.org/en/docs/Web/API/Element/classList#JavaScript_shim_for_other_implementations]
- (Array.isArray)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill]

## Method Reference

### doTransition(domElement, instructions, options)

Perform a transition on the DOM element provided, based on the instructions.
Frame 0 is triggered immediately and synchronously. All other steps are executed
using requestAnimationFrame to the appropriate frame or timestamp.

#### options
- **name**: name the animation, useful for debug mode
- **timingElement**: set an alternative DOM element to use for measuring the
  timing of the transition.
- **fallback**: set a custom fallback function that will be called if
  requestAnimationFrame is not found. By default CSSDriven will just run through
  the steps immediately, but if you want to maybe provide a Javascript Driven
  alternative this is a way to do it.


### debugMode(boolean)
_not available in minified version_

Set the debug mode to be true or false. When in debug mode, transitions will log
out to the console when handlers are triggered, along with their current state.

### fallbackMode(boolean)
_not available in minified version_

Set the fallback mode to be true or false. When in fallback mode, CSS Driven
will always act as if requestAnimationFrame is not available, and run either
your fallback function, or all the steps in sequence synchronously. Useful so you
can write your doTransition fallback functions in modern browsers.


## License
Copyright (c) 2014 Offsider, used under The MIT License (MIT)
