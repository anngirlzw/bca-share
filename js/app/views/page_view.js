define([
  'backbone',
  'slider/views/slider-view'
], function(Backbone, SliderView){
	var PageView = Backbone.View.extend({
		el: "#page-container",
		sliders: [],
		initialize:function(){
			var _t = this;

			_t.model = _t.collection.get(_t.id);

			if(_t.model){
				_t.model.on("change", function(e){
					console.log("model changed for page", _t.id);

					_prev = _t.model.previousAttributes();
					_curr = _t.model.attributes;

					if(!_prev.active && _curr.active && !_curr.silent && _curr.has_page_view){
						_t.$el.stop().fadeTo(300,0, function(){
							$(window).scrollTop(0);
							_t.render();
						});
					} else if(_prev.active && !_curr.active && _curr.has_page_view){
						_t.close();
					}
				});
			}

			this.build();
		},
		build:function(){
			console.log("build page", this.id);
		},
		render:function(){
			var _t = this,
			_id = _t.id;

			this.$el.html(this.template());

			$("#language-dropdown a").each(function(){
		    	_lang = $(this).attr("data-lang-id");

		    	$(this).attr("href", base_url + "lang/" + _id + "/" + _lang);
		  	});

			this.$el.fadeTo(400,1);

			this.$el.find(".bca-slider").each(function(){
				_t.sliders.push( new SliderView({el:this}) );
			});

			this.ready();

			document.title = page_title;

			ga('send', 'pageview', "/" + this.id, page_title);
		},
		close:function(){
			//override in page view
			console.log("close page", this.id);
		},
		ready:function(){
			//override in page view
			console.log("page ready: ", this.id);
		}
	});
	return PageView;
});