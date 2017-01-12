(function(world){
  'use strict';


  /**
   * [animusjs description]
   * @return {[Object]}
   */
  world.animusjs = (function(){

    return {
      core : {
        events : {
          scroll : {
            direction: '',
            current: 0,
            previous: 0,
            getScroll: function getScroll(e) {
              var scroll = animusjs.core.events.scroll;
              var animIn = animusjs.core.events.animIn;
              scroll.current = window.pageYOffset;

              if(scroll.current > scroll.previous) {
                scroll.direction = 'down';
                console.log( animIn.event() );
              } else {
                scroll.direction = 'up';
              }

              scroll.previous = window.pageYOffset;
            },
            init: function() {
              window.addEventListener('scroll', this.getScroll, false);
              console.log(this);
            }
          },
          animIn : {
            event: function event() {
              var scroll = animusjs.core.events.scroll;
              var animElements = document.querySelectorAll('[anim-in]')
              function isElementInView (element, fullyInView) {
                  var pageTop = scroll.current;
                  var pageBottom = pageTop + window.innerHeight;
                  var elementTop = element.offsetTop;
                  var elementBottom = elementTop + element.style.height;

                  if (fullyInView === true) {
                      return ((pageTop < elementTop) && (pageBottom > elementBottom));
                  } else {
                      return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
                  }
              }

              Array.prototype.forEach.call(animElements, function(element, index) {

                if (isElementInView(element, false) && !element.classList.contains('anm-animated') ) {
                  console.log(element);
                  console.log('Add Class: ', element.classList.add('anm-animated'));
                }

              });

            }
          }
        },
      }
    };


  }());



}(this));

window.animusjs.core.events.scroll.init();


    // - In view element
    // isElementInView: function (element, fullyInView) {
    //     var pageTop = $(window).scrollTop();
    //     var pageBottom = pageTop + $(window).height();
    //     var elementTop = $(element).offset().top;
    //     var elementBottom = elementTop + $(element).height();

    //     if (fullyInView === true) {
    //         return ((pageTop < elementTop) && (pageBottom > elementBottom));
    //     } else {
    //         return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    //     }
    // }


    // var isElementInView = Utils.isElementInView($('#flyout-left-container'), false);

    // if (isElementInView) {
    //     console.log('in view');
    // } else {
    //     console.log('out of view');
    // }
