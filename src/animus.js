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
              scroll = animusjs.core.events.scroll;
              scroll.current = window.pageYOffset;

              if(scroll.current > scroll.previous) {
                scroll.direction = 'down';
              } else {
                scroll.direction = 'up';
              }

              scroll.previous = window.pageYOffset;
            },
            init: function() {
              window.addEventListener('scroll', this.getScroll, false);
              console.log(this);
            }
          }
        },
      }
    };


  }());



}(this));




window.animusjs.core.events.scroll.init();
