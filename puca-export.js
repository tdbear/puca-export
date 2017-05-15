(function($) {
  
  alert('Ready to export your haves');
  
  var doExport = function(){
    console.log('exporting');
  };
  
  var expandMore = function() {
    var $more = $("a:contains('LOAD MORE')");
    if($more.length == 0) {
      doExport();
      return;
    }
    $more.click();
    setTimeout(expandMore, 3000);
  };
  
  expandMore();
  
  
})($);
