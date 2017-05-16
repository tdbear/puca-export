(function($) {
  
  alert('Ready to export.\nThis includes loading all your haves which may take some time.');
  
  var doExport = function() {
    console.log('exporting');
    
    var $cards = $('.item.clear').find('a[data-card_id]');
    
    for (var i=1; i<$cards.length; i++) {
        var $card = $($cards[i]);
      
        var card = {
          name: $card.find('.set select option:selected').text(),
          isTradable: $card.find('.trade .btn-tab').hasClass('active-button-2'),
          isFoil: $card.find('.foil select option:selected').val() == 1,
          language: $card.find('.language select option:selected').text(),
          condition: $card.find('.condition select option:selected').text()
        };
      
        console.log(card);
    }
    
  };
  
  var expandMore = function() {
    var $more = $("a:contains('LOAD MORE')");
    if($more.length == 1) {
      doExport();
      return;
    }
    
    console.log('expanding page');
    var evt = new Event("click", {"bubbles":true, "cancelable":true});
    $more[0].dispatchEvent(evt);
    
    setTimeout(expandMore, 3000);
  };
  
  expandMore();
  
  
})($);
