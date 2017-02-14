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

        },
        animOut: function animOut() {

        },
        animInOut: function animInOut() {
          console.log('ANIM IN FUNCTION');
          var animInOutElements  = document.querySelectorAll('[anim-in-out]');
          var currentListOfElements = animInOutElements;


              console.log(currentListOfElements);

          function scrollChecker(e, currentListOfElements) {

            Array.prototype.forEach.call(animInOutElements, function(sliderImage, index) {
                // half way through the image
                var slideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight / 2;
                // bottom of the image
                var imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
                var isHalfShown = slideInAt > sliderImage.offsetTop;
                var isNotScrolledPast = window.scrollY < imageBottom;

                if (isHalfShown && isNotScrolledPast) {
                  sliderImage.classList.add('teste');
                } else {
                  sliderImage.classList.remove('teste');
                }
            });

          }

          window.addEventListener('scroll', scrollChecker);

        }
      },
      init: function() {

        this.core.animInOut();

        console.log('[ANIMUSJS INITIALIZED]');
      }
    };


  }());



}(this));

window.animusjs.init();
