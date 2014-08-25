define([
  'backbone',
], function (Backbone) {
  var NavigationModel = Backbone.Model.extend({
  	defaults: {
	    "active": false,
	    "label": "generic",
      "silent": false,
      "parent": undefined,
      "has_page_view": true
	},
    initialize:function(){
      console.log("NavigationButton: initialize");
    }
  });

  return NavigationModel;
});