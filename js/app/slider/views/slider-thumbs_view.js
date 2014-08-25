define([
  'backbone',
  'slider/models/slider-thumb_model',
  'slider/views/slider-thumb_view',
  'slider/views/slider-nav_view'
], function(Backbone, SliderThumbModel, SliderThumbView, SliderNavView){
	var SliderTumbsView = Backbone.View.extend({
		thumbs_ul:null,
		nav_view:null,
		current_thumb:0,
		current_scroll_index:0,
		initialize:function(){
			var _t = this;

			_t.thumbs_ul = _t.$el.find("ul.bca-slider-thumbs").eq(0);

			//navigation
			var nav_ul = _t.$el.find("div.bca-slider-nav").eq(0);
			_t.nav_view = new SliderNavView({el:nav_ul});

			_t.ar = _t.thumbs_ul.attr("data-thumb-ar");

			//initiate the collection
			_t.collection = new Backbone.Collection([], {
				model: SliderThumbModel
			});


			//event listeners
			_t.collection.on("change:active", function(_changed_m){
				if(_changed_m.get("active") == true){
					_.each(_t.collection.models, function(_m){
						//deact others
						if(_m != _changed_m) _m.set("active",false);
					});

					_t.trigger( "thumbnailactivated", _t.collection.indexOf(_changed_m) );
				}
			});

			_t.$el.on("swipeleft", function(e){
				_t.shownextthumb();
			});

			_t.$el.on("swiperight", function(e){
				_t.showprevthumb();
			});

			_t.nav_view.on("clicked", function(_dir){
				if(_dir == "left")
					_t.showprevthumb();
				else
					_t.shownextthumb();
			});

			//initiate thumb views
			_t.thumbs_ul.find("li").each(function(){
				var thumb = new SliderThumbView({el:this});
				_t.collection.push(thumb.model);
			});

			_t.thumbs_ul.css("width", (_t.collection.length*100) + "%");

			if( _t.collection.at(0).get("href") == undefined ){
				_t.collection.at(0).set("active",true);
			}

			this.thumbs_ul.css("margin-left", "-400px");
		},
		showprevthumb:function(){
			this.scrolltoindex(this.current_scroll_index-(this.num_thumbs_shown-1));
		},
		shownextthumb:function(){
			this.scrolltoindex(this.current_scroll_index+(this.num_thumbs_shown-1));
		},
		scrolltoindex:function(_index){
			//limits
			if(_index < 0) //min
				_index = 0;
			else if(_index+this.num_thumbs_shown > this.collection.length) //max
				_index = this.collection.length-this.num_thumbs_shown;

			this.current_scroll_index = _index;
			this.updatearrows();

			this.thumbs_ul.css("margin-left", -(_index*this.current_thumb_width) + "px" );
		},
		updatearrows:function(){
			if(this.current_scroll_index == 0)
				this.nav_view.hideleftarrow();
			else
				this.nav_view.showleftarrow();
				
			if(this.current_scroll_index+this.num_thumbs_shown == this.collection.length)
				this.nav_view.hiderightarrow();
			else
				this.nav_view.showrightarrow();
		},
		activatemodelbyindex:function(_index){
			if(this.current_thumb != _index){
				this.current_thumb = _index;

				this.collection.at(_index).set("active",true);

				if(	_index < this.current_scroll_index || 
					_index > this.current_scroll_index + this.num_thumbs_shown - 1 )
				this.scrolltoindex(_index);
			}
		},
		onresize:function(){
			var _t = this;

			var _container_width = this.$el.width();

			_t.num_thumbs_shown = Math.round( _container_width/( this.thumbs_ul.height()*this.ar ) );
			if( _t.num_thumbs_shown > this.collection.length )
				_t.num_thumbs_shown = this.collection.length;

			_t.current_thumb_width = _container_width/_t.num_thumbs_shown;

			_.each(this.collection.models, function(_model){
				_model.set("width",_t.current_thumb_width);
			});

			_t.scrolltoindex( _t.current_scroll_index );
		}
	});
	return SliderTumbsView;
});