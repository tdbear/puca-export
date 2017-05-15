(function($) {
  
  console.log('Ready to export your haves');
  
  var doExport = function(){
    console.log('exporting');
  };
  
  var expandMore = function() {
    var $more = $(":contains('LOAD MORE')");
    if($more.length == 0) {
      doExport();
      return;
    }
    $more.click();
    setTimeout(this, 3000);
  };
  
  expandMore();
  
  
})($);
