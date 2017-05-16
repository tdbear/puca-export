(function($) {
  
  alert('Ready to export.\nThis includes loading all your haves which may take some time.');
  
  var doExport = function() {
    console.log('exporting');
    
    var $cards = $('.item.clear');
    
    var cards = [];
    for (var i=1; i<$cards.length; i++) {
        var $card = $($cards[i]);
      
        var card = {
          cardName: $card.find('a[data-card_id]').text(),
          setName: $card.find('.set select option:selected').text(),
          isTradable: $card.find('.trade .btn-tab').hasClass('active-button-2'),
          isFoil: $card.find('.foil select option:selected').val() == 1,
          language: $card.find('.language select option:selected').text(),
          condition: $card.find('.condition select option:selected').text()
        };
      
        cards.push(card);
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
    
    $('a',{
      href:'data:text/csv;charset=utf-8,' + escape(csv)
    }).css({
      class:'btn',
      position: 'fixed',
      left: 0,
      top: 0
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
