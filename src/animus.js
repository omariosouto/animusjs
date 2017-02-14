(function(world){
  'use strict';


  /**
   * [animusjs description]
   * @return {[Object]}
   */
  world.animusjs = (function(){

    return {
      core : {
        scrollChecker: function scrollChecker() {

        },
        animIn: function animIn() {

          //console.log('[ANIM IN FUNCTION]');
          var animState = 'anim-in';
          var animInElements  = document.querySelectorAll('[anim-in]');
          var options = {};
          options.status = 'animate';

          function animInScrollChecker() {

            Array.prototype.forEach.call(animInElements, function(currElement, index) {
                var attribute = currElement.getAttribute(animState);
                var animType  = currElement.getAttribute('anim-type');

                // half way through the element
                var slideInAt = (window.scrollY + window.innerHeight) - currElement.offsetHeight / 2;
                // bottom of the element
                var elementBottom = currElement.offsetTop + currElement.offsetHeight;
                var isHalfShown = slideInAt > currElement.offsetTop;
                var isNotScrolledPast = window.scrollY < elementBottom;

                if (isHalfShown && isNotScrolledPast) {
                  if(animType === 'function') {
                    window[attribute](currElement, options);
                  } else {
                    currElement.classList.add(attribute);
                  }
                }
            });

          }

          window.addEventListener('scroll', animInScrollChecker);

        },
        animOut: function animOut() {

          //console.log('[ANIM IN FUNCTION]');
          var animState = 'anim-out';
          var animOutElements  = document.querySelectorAll('[anim-out]');
          var options = {};

          options.status = 'reverse';

          function animOutScrollChecker() {

            Array.prototype.forEach.call(animOutElements, function(currElement, index) {
                var attribute = currElement.getAttribute(animState);
                var animType  = currElement.getAttribute('anim-type');

                // half way through the element
                var slideInAt = (window.scrollY + window.innerHeight) - currElement.offsetHeight / 2;
                // bottom of the element
                var elementBottom = currElement.offsetTop + currElement.offsetHeight;
                var isHalfShown = slideInAt > currElement.offsetTop;
                var isNotScrolledPast = window.scrollY < elementBottom;

                if (isHalfShown && isNotScrolledPast) {
                  // teste
                  } else {
                  if(animType === 'function') {
                    window[attribute](currElement, options);
                  } else {
                    currElement.classList.remove(attribute);
                  }
                }
            });

          }

          window.addEventListener('scroll', animOutScrollChecker);

        },
        animInOut: function animInOut() {
          //console.log('[ANIM IN FUNCTION]');
          var animState = 'anim-in-out';
          var animInOutElements  = document.querySelectorAll('[anim-in-out]');
          var options = {};

          function animInOutScrollChecker() {

            Array.prototype.forEach.call(animInOutElements, function(currElement, index) {
                var attribute = currElement.getAttribute(animState);
                var animType  = currElement.getAttribute('anim-type');

                // half way through the element
                var slideInAt = (window.scrollY + window.innerHeight) - currElement.offsetHeight / 2;
                // bottom of the element
                var elementBottom = currElement.offsetTop + currElement.offsetHeight;
                var isHalfShown = slideInAt > currElement.offsetTop;
                var isNotScrolledPast = window.scrollY < elementBottom;

                if (isHalfShown && isNotScrolledPast) {
                  if(animType === 'function') {
                    window[attribute](currElement, options);
                  } else {
                    currElement.classList.add(attribute);
                  }
                } else {
                  if(animType === 'function') {
                    window[attribute](currElement, options);
                  } else {
                    currElement.classList.remove(attribute);
                  }
                }
            });

          }

          window.addEventListener('scroll', animInOutScrollChecker);

        }
      },
      init: function() {

        this.core.animIn();
        this.core.animOut();
        this.core.animInOut();

        console.log('[AnimusJS INITIALIZED]');
      }
    };


  }());



}(this));

window.animusjs.init();


function active(element, options) {
  if(options.status === 'animate') {
    element.classList.add('active');
  }
  if(options.status === 'reverse') {
    element.classList.remove('active');
  }
}
