(function($) {
  
  alert('Ready to export your haves');
  
  var export = function(){
    alert('exporting');
  };
  
  var expandMore = function() {
    $more = $(":contains('LOAD MORE')");
    if($more.length == 0) {
      export();
      return;
    }
    $more.click();
    setTimeout(this, 3000);
  };
  
  expandMore();
  
  
})($);
