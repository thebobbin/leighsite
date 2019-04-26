// Use the CDN or host the script yourself
// https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js
// https://matthewelsom.com/assets/js/libs/instafeed.min.js

var userFeed = new Instafeed({
  get: 'user',
  userId: '5779085146',
  clientId: '26b5760d63c24c78a8905b07244053b3',
  accessToken: '5779085146.26b5760.19798f677e1d4d72a97e33b24c55d032',
  resolution: 'standard_resolution',
  template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
  sortBy: 'most-recent',
  limit: 4,
  links: false
});
userFeed.run();
