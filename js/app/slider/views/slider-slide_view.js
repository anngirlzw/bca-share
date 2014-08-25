define([
  'backbone',
  'slider/models/slider-slide_model'
], function(Backbone, SliderSlideModel){
	var SliderSlideView = Backbone.View.extend({
		initialize:function(){
			var _t = this;

			_t.model = new SliderSlideModel();

			this.model.on("change:imageready", function(){
				_t.imagecomplete();
			});

			this.model.on("change:width", function(_m){
				_t.$el.css("width", _m.get("width") + "px");
			});

			this.model.on("change:active", function(_m){
				if( _m.get("active") ){
					if( !_t.$el.hasClass("active") ){
						_t.$el.addClass("active");
					}
				} else { 
					_t.$el.removeClass("active");
				}
			});

			if( _t.$el.attr("data-source") !== undefined )
				_t.model.load( _t.$el.attr("data-source") );
		},
		imagecomplete:function(){
			this.$el.find("div.bca-slider-slide-image").eq(0).css("background-image","url('" + this.model.get("source") + "')");
		}
	});
	return SliderSlideView;
});