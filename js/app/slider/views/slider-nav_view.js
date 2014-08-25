define([
  'backbone'
], function(Backbone){
	var SliderNavView = Backbone.View.extend({
		left_arrow:null,
		right_arrow:null,
		events:{
			"click a":"onclick"
		},
		initialize:function(){
			this.left_arrow = this.$el.children("a.arrow-nav-left").eq(0);
			this.right_arrow = this.$el.children("a.arrow-nav-right").eq(0);
		},
		onclick:function(e){
			var a = $(e.currentTarget);
			this.trigger("clicked",a.hasClass("arrow-nav-left") ? "left" : "right");
		},
		showleftarrow:function(){
			this.left_arrow.css("display","block");
		},
		showrightarrow:function(){
			this.right_arrow.css("display","block");
		},
		hideleftarrow:function(){
			this.left_arrow.css("display","none");
		},
		hiderightarrow:function(){
			this.right_arrow.css("display","none");
		}	
	});
	return SliderNavView;
});