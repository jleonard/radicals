(function(){

  var REQUIRED_RADICALS = ['Toggle','NeutralizeSiblings'];
  var PATTERN_NAME = 'SelectionGroup';

  if(!Class){
    throw new Error('resig.inheritance.js is required.');
  }

  var len = REQUIRED_RADICALS.length;
  for(var ii = 0; ii < len; ii++){
    var cur = REQUIRED_RADICALS[ii];
    if(!window[cur]){
      throw new Error(PATTERN_NAME+' requires '+cur+'.');
    }
  }

  window[PATTERN_NAME] = Class.extend({

    init: function(element,options){
      if(typeof element === 'undefined'){
        throw new Error('No DOM element passed into Toggle');
      }
      this.element = element;

      var DEFAULT_OPTIONS = {
        required: false,
        multipleSelections: true
      };

      this.options = (typeof options === 'undefined') ? DEFAULT_OPTIONS : options;

      this.options.multipleSelections = this.options.hasOwnProperty('multipleSelections') ? this.options.multipleSelections : true;
      this.options.radicals = [window.Toggle];
      if(!this.options.multipleSelections){
        this.options.radicals.push(window.NeutralizeSiblings);
      }
      
      var that = this;

      var len = this.element.children.length;
      for(var ii = 0; ii < len; ii++){
        var cur = this.element.children[ii];
        var l = this.options.radicals.length;
        for(var iii = 0; iii < l; iii++){
          var r = new this.options.radicals[iii](cur,this.options);
        }
        if(cur.nodeType === 1){ // this may need to move lower.
          if(this.options.required === true && ii === 0 && this.element.querySelectorAll('[data-state="enabled"]').length === 0){
            cur.click();
          }
        }
      }
    },

    value: function(){
      var v = [];
      var elements = this.element.querySelectorAll('[data-state="enabled"]');
      var len = elements.length;
      for(var ii = 0; ii < len; ii++){
        var cur = elements[ii];
        if(cur.hasAttribute('value')){
          v.push(cur.getAttribute('value'));
        }else{
          v.push(cur.text);
        }
      }
      return v; // TODO - why an array if there is a non-multi select option
    }
  });

})();