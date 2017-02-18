(function(world){
  'use strict';


  /**
   * [animusjs description]
   * @return {[Object]}
   */
  world.animusjs = (function(){

    return {
      core : {
        animIn: function animIn() {
          var self = this;
          var animInElements  = document.querySelectorAll('[anim-in]');
          var animOptions = {
            animState: 'anim-in'
          };

          function animInScrollChecker() {
            Array.prototype.forEach.call(animInElements, function(currElement, index) {
              self.animScrollChecker(currElement, animOptions);
            });
          }

          window.addEventListener('scroll', animInScrollChecker);
        },
        animOut: function animOut() {
          var self = this;
          var animOutElements  = document.querySelectorAll('[anim-out]');
          var animOptions = {
            animState: 'anim-out'
          };

          function animOutScrollChecker() {
            Array.prototype.forEach.call(animOutElements, function(currElement, index) {
              self.animScrollChecker(currElement, animOptions);
            });
          }

          window.addEventListener('scroll', animOutScrollChecker);
        },
        animInOut: function animInOut() {
          var self = this;
          var animInOutElements  = document.querySelectorAll('[anim-in-out]');
          var animOptions = {
            animState: 'anim-in-out'
          };

          var animInOutScrollChecker = self.debounce(function animInOutScrollChecker() {
            Array.prototype.forEach.call(animInOutElements, function(currElement, index) {
              self.animScrollChecker(currElement, animOptions);
            });
          }, 50);


          window.addEventListener('scroll', animInOutScrollChecker);
        },
        animScrollChecker: function animScrollChecker(currElement, animOptions) {
          var self = this;

          // Current Element values
          animOptions.attribute = currElement.getAttribute(animOptions.animState);
          animOptions.animType  = currElement.getAttribute('anim-type');

          // Scroll State Values
          var pageScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
          var slideInAt = (pageScrollY + window.innerHeight) - currElement.offsetHeight / 2;
          var elementBottom = currElement.offsetTop + currElement.offsetHeight;
          var isHalfShown = slideInAt > currElement.offsetTop;
          var isNotScrolledPast = pageScrollY < elementBottom;

          if (isHalfShown && isNotScrolledPast && !(animOptions.animState === 'anim-out')) {
            self.animTriggerIn(currElement, animOptions);
          }
          if(!(isHalfShown && isNotScrolledPast) && !(animOptions.animState === 'anim-in')) {
            self.animTriggerOut(currElement, animOptions);
          }
        },
        animTriggerIn: function animTriggerIn(currElement, animOptions) {
          animOptions.status = 'animate';

          if(animOptions.animType === 'function') {
            window[animOptions.attribute](currElement, animOptions);
          } else {
            currElement.classList.add(animOptions.attribute);
          }
        },
        animTriggerOut: function animTriggerIn(currElement, animOptions) {
          animOptions.status = 'reverse';
          if(animOptions.animType === 'function') {
            window[animOptions.attribute](currElement, animOptions);
          } else {
            currElement.classList.remove(animOptions.attribute);
          }
        },
        debounce: function debounce(func, wait, immediate) {
          var timeout;
          return function() {
            var context = this, args = arguments;
            var later = function() {
              timeout = null;
              if (!immediate) {
                func.apply(context, args);
              }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
              func.apply(context, args);
            }
          };
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





