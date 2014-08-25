define([
  'backbone'
], function(Backbone){
	var HamburgerView = Backbone.View.extend({
		el: "#hamburger",
		events: {
	        "click": "onclick"
        },
		initialize:function(){
			console.log("Hamburgers are delicious.");
			var _t = this;

			_t.collection.on("opensidebar",function(){
				_t.activate();
			});
			
			_t.collection.on("closesidebar",function(){
				_t.deactivate();
			});
		},
		onclick:function(e){
			console.log("Im a hamburger. Eat me.");

			this.collection.toggleSidebar();
		},
		deactivate:function(){
			console.log("deactivate hamburger");
			this.$el.removeClass("active");
		},
		activate:function(){
			if(!this.$el.hasClass("active"))
				this.$el.addClass("active");
		}
	});
	return HamburgerView;
});