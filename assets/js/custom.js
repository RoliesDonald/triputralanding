$(document).ready(function() {

    var feed = new Instafeed({
    get: "user",
    userId: '30341990860',
    limit: 8,
    target: 'instafeed',
    accessToken: 'IGQVJYRzJIMWw5QldnN092MFItbldYdWliYXg2RkRDV0NMemdBMkI5SWlMX2MydS1oMzJxVjJhd3lWR0lGYW5tTFlIa0pNMnlUcFdkU01XdHFBX3pKcXhia19DVUpPN3hUYjBqUEpwb1pBLU5CVko2VQZDZD',
    sortBy: 'most-recent',
    // template: '<div class="col-xs-12 col-sm-6 col-lg-4 instaimg"><a href="{{image}}"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
    template: '<div class="col-lg-3 instaimg image-effect"><a href="{{image}}"><img src="{{image}}" alt="{{caption}}" class="img-responsive-custom" /></a></div>',
    }
    );
    feed.run();

    $('.gallery').magnificPopup({
  type: 'image',
  delegate: 'a',
  gallery:{enabled:true}
});
});