(function(win, doc){
  'use strict';


  /**
   * [animusjs description]
   * @return {[Object]}
   */
  win.animusjs = (function(){

    return {
      core : {
        animIn: function animIn() {
          var self = this;
          var animInElements  = doc.querySelectorAll('[anim-in]');
          var animOptions = {
            animState: 'anim-in'
          };

          function animInScrollChecker() {
            Array.prototype.forEach.call(animInElements, function(currElement, index) {
              self.animScrollChecker(currElement, animOptions);
            });
          }

          win.addEventListener('scroll', animInScrollChecker);
        },
        animOut: function animOut() {
          var self = this;
          var animOutElements  = doc.querySelectorAll('[anim-out]');
          var animOptions = {
            animState: 'anim-out'
          };

          function animOutScrollChecker() {
            Array.prototype.forEach.call(animOutElements, function(currElement, index) {
              self.animScrollChecker(currElement, animOptions);
            });
          }

          win.addEventListener('scroll', animOutScrollChecker);
        },
        animInOut: function animInOut() {
          var self = this;
          var animInOutElements  = doc.querySelectorAll('[anim-in-out]');
          var animOptions = {
            animState: 'anim-in-out'
          };

          function animInOutScrollChecker() {
            Array.prototype.forEach.call(animInOutElements, function(currElement, index) {
              self.animScrollChecker(currElement, animOptions);
            });
          }

          win.addEventListener('scroll', animInOutScrollChecker);
        },
        animScrollChecker: function animScrollChecker(currElement, animOptions) {
          var self = this;

          // Current Element values
          animOptions.attribute = currElement.getAttribute(animOptions.animState);
          animOptions.animType  = currElement.getAttribute('anim-type');

          // Scroll State Values
          var pageScrollY = win.scrollY || win.pageYOffset || doc.documentElement.scrollTop;
          var slideInAt = (pageScrollY + win.innerHeight) - currElement.offsetHeight / 2;
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
            win[animOptions.attribute](currElement, animOptions);
          } else {
            currElement.classList.add(animOptions.attribute);
          }
        },
        animTriggerOut: function animTriggerIn(currElement, animOptions) {
          animOptions.status = 'reverse';
          if(animOptions.animType === 'function') {
            win[animOptions.attribute](currElement, animOptions);
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

}(window, document));
