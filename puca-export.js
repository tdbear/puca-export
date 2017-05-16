(function($) {
  
  alert('Ready to export.\n'
      + 'This includes loading all your haves which may take some time.\n'
      + 'A download button will appear in the top left corenr of the screen when done.');
  
  var conditionMap = {
    'M/NM': 'Near Mint',
    'SP': 'Slightly Played',
    'MP': 'Moderately Played',
    'HP': 'Heavily Played'
  };
  
  var tradableMap = {
    true: 'HAVE',
    false: 'NOT FOR TRADE',
  };
  
  var doExport = function() {
    console.log('exporting');
    
    var $cards = $('.item.clear');
    
    var cards = [];
    for (var i = 0; i < $cards.length; i++) {
        var $card = $($cards[i]);
      
        var card = {
          cardName: $card.find('a[data-card_id]').text(),
          setName: $card.find('.set select option:selected').text(),
          isTradable: tradableMap[$card.find('.trade .btn-tab').hasClass('active-button-2')],
          isFoil: $card.find('.foil select option:selected').val(),
          language: $card.find('.language select option:selected').text(),
          condition: conditionMap[$card.find('.condition select option:selected').text()]
        };
      
        if(card.cardname && card.setName) {
          cards.push(card);
        }
        
    }
    
    var groups = _.groupBy(cards, function(c){ return JSON.stringify(c); });
    console.log(groups);
    
    var csv = ['Count', 'Name', 'Expansion', 'Condition', 'Language', 'Foil', 'PucaID', 'Status'].join('\t');
    for (var key in groups){
      var group = groups[key];
      var card = group[0];
      var quantity = group.length;
      var row = [quantity, card.cardName, card.setName, card.condition, card.language, card.isFoil, '', card.isTradable];
      csv = csv + '\n' + row.join('\t');
    }
    
    $('<a/>',{
      href:'data:text/csv;charset=utf-8,' + escape(csv),
      class: 'btn'
    }).css({
      position: 'fixed',
      left: '20px',
      top: '20px',
      'z-index': 100
    }).text('Download .CSV').appendTo($('body'));
    
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
