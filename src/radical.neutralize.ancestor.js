(function(){

  if(!Class){
    throw new Error('resig.inheritance.js is required.');
  }

  var PATTERN_NAME = 'NeutralizeAncestor';

  window[PATTERN_NAME] = Class.extend({

    init: function(element,options){
      this.element = element;
      this._attachHandlers();
    },

    updateUI: function(){
      function getClosestEnabled(el) {
        do {
          if(el === document){
            return null;
          }
          if (el.hasAttribute('data-state') && el.getAttribute('data-state') === 'enabled') {
            return el;
          }
        } while (el = el.parentNode);
        return null;
      }

      var closest = getClosestEnabled(this.element.parentNode);
      if(closest){
        closest.removeAttribute('data-state');
      }
    },

    _attachHandlers: function(){
      var that = this;
      that.element.addEventListener('click', function(){
        that.updateUI();
      });
    }

  });

})();