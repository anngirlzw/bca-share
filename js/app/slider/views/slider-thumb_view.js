define([
  'backbone',
  'slider/models/slider-thumb_model'
], function(Backbone, SliderThumbModel){
	var SliderThumbView = Backbone.View.extend({
		events:{
			"click":"onclick"
		},
		initialize:function(){
			var _t = this;

			_t.model = new SliderThumbModel();

			if( _t.$el.attr("data-href") !== undefined ){
				_t.model.set( "href", _t.$el.attr("data-href") );
			}

			this.model.on("change:imageready", function(){
				_t.imagecomplete();
			});

			this.model.on("change:width", function(_w){
				_t.$el.css("width", _w.get("width") + "px");
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
			this.$el.css("background-image","url('" + this.model.get("source") + "')");
		},
		onclick:function(){
			if( this.model.get("href") == undefined )
				this.model.set("active",true);
			else
				router.navigate( this.model.get("href"), {trigger:true});
		}
	});
	return SliderThumbView;
});