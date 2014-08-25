define([
  'backbone',
  'slider/views/slider-slides_view',
  'slider/views/slider-thumbs_view'
], function(Backbone, SliderSlidesView, SliderThumbsView){
	var SliderView = Backbone.View.extend({
		slides_view:false,
		thumbs_view:false,
		initialize:function(){
			var _t = this;

			//initiate slides view
			if( _t.$el.find("div.bca-slider-slide-container").length > 0 ){
				_t.slides_view = new SliderSlidesView( {el:_t.$el.find("div.bca-slider-slide-container")[0]}  );
			}

			//initiate the thumbs view
			if( _t.$el.find("div.bca-slider-thumb-container").length > 0 ){
				_t.thumbs_view = new SliderThumbsView( {el:_t.$el.find("div.bca-slider-thumb-container")[0]} );
			}

			$(window).resize(function(){
				_t.onresize();
			});

			console.log(this.thumbs_view, this.slides_view);

			if(_t.thumbs_view){
				_t.thumbs_view.on("thumbnailactivated", function(_index){
					_t.slides_view.activatemodelbyindex(_index);
				});
			}

			if(_t.slides_view){
				_t.slides_view.on("slideactivated", function(_index){
					_t.thumbs_view.activatemodelbyindex(_index);
				});
			}

			_t.onresize();
		},
		onresize:function(){
			var _t = this;

			if(_t.slides_view){
				_t.slides_view.onresize();
			}

			if(_t.thumbs_view){
				_t.thumbs_view.onresize();
			}
		}
	});
	return SliderView;
});