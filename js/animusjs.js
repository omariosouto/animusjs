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

          function animInOutScrollChecker() {
            Array.prototype.forEach.call(animInOutElements, function(currElement, index) {
              self.animScrollChecker(currElement, animOptions);
            });
          }

          window.addEventListener('scroll', animInOutScrollChecker);
        },
        animScrollChecker: function animScrollChecker(currElement, animOptions) {
          var self = this;

          // Current Element values
          animOptions.attribute = currElement.getAttribute(animOptions.animState);
          animOptions.animType  = currElement.getAttribute('anim-type');

          // Scroll State Values
          var pageScrollY =
                          window.scrollY // Modern Way (Chrome, Firefox)
                       || window.pageYOffset // (Modern IE, including IE11
                       || document.documentElement.scrollTop // (Old IE, 6,7,8)
          var slideInAt = (pageScrollY + window.innerHeight) - currElement.offsetHeight / 2;
          var elementBottom = currElement.offsetTop + currElement.offsetHeight;
          var isHalfShown = slideInAt > currElement.offsetTop;
          var isNotScrolledPast = pageScrollY < elementBottom;


console.log('slideInAt', window );
//console.log('elementBottom', elementBottom );
//console.log('isHalfShown', isHalfShown );
//console.log('isNotScrolledPast', isNotScrolledPast );

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
