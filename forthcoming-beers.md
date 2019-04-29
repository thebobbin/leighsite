---
layout: default
title: Forthcoming beers
permalink: /forthcoming-beers/
---

<div class="row center-xs">
  <div class="content col-xs-12 col-md-6">
    <h3>Forthcoming beers...</h3>
    <div id="beers"></div>
  </div>
  </div>

  <script>
  var Airtable = require('airtable');
  var base = new Airtable({ apiKey: 'keyRH3P8jfewj7AVu' }).base('appcEztmUPjaxmpbo');

  var loadBeers = function() {
    $('#beers').empty();

    base('Table 2').select({
sort: [
{field: 'Name', direction: 'asc'}
]
}).eachPage(function page(records, fetchNextPage) {
  records.forEach(function(record) {
      console.log('Retrieved ', record.get('Name'));

      var $beerInfo = $('<div>');
      $beerInfo.append($('<h3 class=name>').text(record.get('Name')));
      $beerInfo.append($('<span class=seperator>').text(' - '));
      $beerInfo.append($('<span class=brewery>').text(record.get('Brewery')));
      $beerInfo.append($('<span class=abv>').text(record.get('ABV')));
      $beerInfo.append($('<span class=tasting-notes>').text(record.get('TastingNotes')));
      $beerInfo.attr('data-record-id', record.getId());

      $('#beers').append($beerInfo);
      });
  });
};
loadBeers();
</script>
