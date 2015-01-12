
(function(){

  if(!Class){
    throw new Error('resign.inheritance.js is required.');
  }

  var PATTERN_NAME = 'NeutralizeSiblings';

  window[PATTERN_NAME] = Class.extend({

    init: function(element,options){
      if(typeof element === 'undefined'){
        throw new Error('No DOM element passed into Toggle');
      }
      this.element = element;
      this.options = (typeof options === 'undefined') ? {} : options;
      this._attachHandlers();
    },

    updateUI: function(){
      function getFirstChild(el){
        var firstChild = el.firstChild;
        while(firstChild !== null && firstChild.nodeType !== 1){ // skip TextNodes
          firstChild = firstChild.nextSibling;
        }
        return firstChild;
      }

      var n = getFirstChild(this.element.parentNode);

      for ( ; n; n = n.nextSibling ){
        if ( n.nodeType === 1 && n !== this.element && n.hasAttribute('data-state') && n.getAttribute('data-state') === 'enabled'){
          n.removeAttribute('data-state');
        }
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