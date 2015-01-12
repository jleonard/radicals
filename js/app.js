(function(){

  var $table = $('.kanji-radicals');
  document.addEventListener('DOMContentLoaded', function(){
    $.ajax({
      url:"https://www.kimonolabs.com/api/72i4ds6c?apikey=Wpjq3TZdHazfQgr2yF3GT7UtUe7M03Z5&kimlimit=8&kimoffset=36",
      beforeSend: function(xhr) { xhr.setRequestHeader('authorization', 'Bearer L8T0kzuyLYRaGA9QZfakGZBHLYQA41Rd'); },
      success: function (response) {
        //Do something with the response
        console.log('response ',response);
        var len = response.results.collection1.length;
        var $dom = '';
        for(var ii = 0; ii < len; ii++){
          var cur = response.results.collection1[ii];
          console.log(cur.examples.text,cur.radical.text);
          $dom += '<tr>';
          $dom += '<td>'+cur.radical.text+'</td>';
          $dom += '<td>'+cur.examples.text+'</td>';
          $dom += '</tr>';
        }
        $table.append($dom);
      },
      error: function (xhr, status) {
        // TODO
      }
    });

    var toggles = document.querySelectorAll('.toggle');
    Array.prototype.forEach.call(toggles, function(el, i){
      var t = new Toggle(el);
    });

    var neutralizeSiblings = document.querySelectorAll('.ns.dot');
    Array.prototype.forEach.call(neutralizeSiblings, function(el, i){
      var t = new NeutralizeSiblings(el);
    });

    var selectionGroup = document.querySelectorAll('.sg');
    Array.prototype.forEach.call(selectionGroup, function(el, i){
      var t = new SelectionGroup(el);
    });

    var selectionGroupMs = document.querySelectorAll('.sg-ms');
    Array.prototype.forEach.call(selectionGroupMs, function(el, i){
      var t = new SelectionGroup(el,{multipleSelections:false});
    });

    var neutralizeAncestor = document.querySelectorAll('.na');
    Array.prototype.forEach.call(neutralizeAncestor, function(el, i){
      var t = new NeutralizeAncestor(el);
    });

  });

})();