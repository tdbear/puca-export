(function($) {
  
  alert('Ready to export your haves');
  
  var doExport = function(){
    alert('exporting');
  };
  
  var expandMore = function() {
    $more = $(":contains('LOAD MORE')");
    if($more.length == 0) {
      doExport();
      return;
    }
    $more.click();
    setTimeout(this, 3000);
  };
  
  expandMore();
  
  
})($);
