# puca-export
Cleint-side JavaScript tool to export cards from Pucatrade.com to CSV file.
The exported file is suitable for import into Cardsphere.com

# Instructions

1. Use Chrome browser to create a bookmark with the following URL:

```
javascript:(function () { $('<script>').attr('src', 'https://rawgit.com/tdbear/puca-export/master/puca-export.js'+'?'+(new Date())).appendTo('head'); })()
```

2. Log in to your Pucatrade account. 
3. Navigate to "My Cards" -> "Haves" tab.
4. Click on the bookmark.
5. Follow instructions.
