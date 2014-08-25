define([
  'backbone',
  'slider/models/slider-slide_model',
  'slider/views/slider-slide_view',
  'slider/views/slider-nav_view'
], function(Backbone, SliderSlideModel, SliderSlideView, SliderNavView){
	var SliderSlidesView = Backbone.View.extend({
		slides_ul:null,
		nav_view:null,
		current_slide:0,
		initialize:function(){
			var _t = this;

			_t.slides_ul = _t.$el.find("ul.bca-slider-slides").eq(0);

			//navigation
			var nav_ul = _t.$el.find("div.bca-slider-nav").eq(0);
			_t.nav_view = new SliderNavView({el:nav_ul});

			//initiate the collection
			_t.collection = new Backbone.Collection([], {
				model: SliderSlideModel
			});

			//initiate slide views
			_t.slides_ul.find("li").each(function(){
				var slide = new SliderSlideView({el:this});
				_t.collection.push(slide.model);
			});

			//event listeners
			_t.collection.on("change:active", function(_changed_m){
				if(_changed_m.get("active") == true){
					_.each(_t.collection.models, function(_m){
						//deact others
						if(_m != _changed_m) _m.set("active",false);
					});

					_t.gotoslide( _t.collection.indexOf(_changed_m) );
				}
			});

			_t.$el.on("swipeleft", function(e){
				_t.activatenextmodel();
			});

			_t.$el.on("swiperight", function(e){
				_t.activateprevmodel();
			});

			_t.nav_view.on("clicked", function(_dir){
				if(_dir == "right") _t.activatenextmodel();
				else _t.activateprevmodel();
			});

			_t.slides_ul.css("width", (_t.collection.length*100) + "%");

			_t.collection.at(0).set("active",true);
		},
		gotoslide:function(_index){
			this.trigger( "slideactivated", _index );

			this.slides_ul.css("margin-left", (-_index)*100 + "%");
		},
		activateprevmodel:function(){
			var prev_index = this.current_slide-1;

			if(prev_index < 0)
				prev_index = 0;

			this.activatemodelbyindex(prev_index);
		},
		activatenextmodel:function(){
			var _next_index = this.current_slide+1;

			if(_next_index > this.collection.length-1)
				_next_index = this.collection.length-1;

			this.activatemodelbyindex(_next_index);
		},
		activatemodelbyindex:function(_index){
			if(this.current_slide != _index){
				this.current_slide = _index;

				this.collection.at(_index).set("active",true);
			}
		},
		onresize:function(){
			var _container_width = this.$el.width();

			_.each(this.collection.models, function(_model){
				_model.set("width",_container_width);
			});
		}
	});
	return SliderSlidesView;
});