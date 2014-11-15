document.addEventListener("DOMContentLoaded", function() {

CSSDriven.debugMode(true);

var modal = document.getElementById("modal-test");
var toggleModal = function() {
  CSSDriven.doTransition(modal, {
    "setup": "+is-animating",
    "trigger": "~is-hidden",
    "end": "-is-animating"
  }, {
    "name": "funky-modal"
  })
};

document.getElementById("modal-test-button").addEventListener("click", toggleModal);
modal.addEventListener("click", toggleModal);


var modal2 = document.getElementById("modal2-test");
var toggleModal2 = function() {
  CSSDriven.doTransition(modal2, {
    "0": "+is-animating",
    "1": "~is-hidden",
    "100%": "-is-animating"
  });
};

document.getElementById("modal2-test-button").addEventListener("click", toggleModal2);
modal2.addEventListener("click", toggleModal2);



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
      return targetHeight;

    }, "+is-animating"],
    "trigger": function($el, state) {
      $el.querySelector(".accordion__body").style.height = state + "px";
    },
    "end": [function($el, state) {
      $el.querySelector(".accordion__body").style.height = null;
      $el.classList.toggle("is-open");
    }, "-is-animating"]
  }, {
    "name": "accordion",
    "timingElement": accordion.querySelector(".accordion__body"),
  });

});

});
