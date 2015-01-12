(function(){

  if(!Class){
    throw new Error('resig.inheritance.js is required.');
  }

  var PATTERN_NAME = 'Toggle';

  window[PATTERN_NAME] = Class.extend({

    init: function(element,options){
      if(typeof element === 'undefined'){
        throw new Error('No DOM element passed into Toggle');
      }
      this.element = element;
      var DEFAULT_OPTIONS = {
        lock: false
      };
      this.options = (typeof options === 'undefined') ? DEFAULT_OPTIONS : options;
      this._attachHandlers();
    },

    updateUI: function(){
      if(this.element.getAttribute('data-state') === 'disabled'){ return; }
      
      if(!this.options.hasOwnProperty('lock') || this.options.lock === false){
        this.element.hasAttribute('data-state') ? this.element.removeAttribute('data-state') : this.element.setAttribute('data-state','enabled');
      }
    },

    _attachHandlers: function(){
      var that = this;
      that.element.addEventListener('click',function(){
        that.updateUI();
      });
    }

  });

})();