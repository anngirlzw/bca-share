var router;

require.config({
	baseUrl: base_url,
	paths: {
    jquery: 'js/libs/jquery/jquery-1.10.2.min',
    jquerymobile: 'js/libs/jquery/jquery.mobile.custom.min',
    bootstrap: 'js/libs/bootstrap/bootstrap.min',
    underscore: 'js/libs/underscore/underscore.min',
    backbone: 'js/libs/backbone/backbone.min',
		views: 'js/app/views',
    collections: 'js/app/collections',
    models: 'js/app/models',
		text: 'js/libs/require/text.min',
		router: 'js/app/router',
    pages: 'js/app/views/pages',
    slider: 'js/app/slider',
    feedmagnet: "http://estee.feedmagnet.com/embed",
    facebookselector: "js/libs/facebook/facebookphotoselector.jquery"
	},
  shim : {
      "bootstrap" : { "deps" :['jquerymobile', 'jquery'] },
      "backbone" : { "deps" :['jquery','underscore', 'feedmagnet'] }
  }
});

require([
  'jquery',
  'jquerymobile',
  'underscore',
  'backbone',
  'router',
  'bootstrap',
  'feedmagnet',
  'facebookselector'
], function($, jQMobile, _, Backbone, Router, Bootstrap, FeedMagnet, Facebookselector ){
  $(document).ready(function(){
    /*----- user agent ------*/
    var uagent = navigator.userAgent.toLowerCase();
    var mobile = false;
    var search_strings = [ "iphone","ipod","ipad","series60","symbian","android","windows ce","windows7phone","w7p","blackberry","palm"];
    for (i in search_strings) {
       if (uagent.search(search_strings[i]) > -1) mobile = true;
    }
    if(mobile) $("body").addClass("mobile");
    /*----- end user agent ------*/
      
    router            = new Router();
  });
});