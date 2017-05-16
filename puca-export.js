(function($) {
  
  alert('Ready to export your haves');
  
  var doExport = function(){
    console.log('exporting');
  };
  
  var expandMore = function() {
    var $more = $("a:contains('LOAD MORE')");
    if($more.length == 1) {
      doExport();
      return;
    }
    
    var evt = new Event("click", {"bubbles":true, "cancelable":true});
    $more[0].dispatchEvent(evt);
    
    setTimeout(expandMore, 3000);
  };
  
  expandMore();
  
  
})($);
