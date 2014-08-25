define([
  'backbone'
], function(Backbone){
	var MainNavView = Backbone.View.extend({
		events: {
	        "click li": "onclick",
	        "mouseover li": "onmouseover",
	        "mouseout": "hidesubnav"
        },
        hamburger:null,
		initialize: function() {
			var _t = this,
			_el = this.el;

			/*---- on model change update the ui ------
      		------------------------------------------*/
			this.collection.on("change",function(_model){
				var li = $(_el).children("li[data-id=" + _model.id + "]").eq(0);
			 	var a = li.children("a").eq(0);

			 	//change the active state
			 	if( _model.get("active") == true ){
			 		if( !li.hasClass( "active" ) )
			 			li.addClass( "active" );
			 	} else {
			 		li.removeClass( "active" );
			 	}
			});

			_t.ready();
		},
		ready:function(){},
		onmouseover:function(e){
			var li = $( e.currentTarget ),
			ul = li.parent();
			
			this.showsubnav(li);
		},
		onclick:function(e){
			var li = $( e.currentTarget ),
			ul = li.parent();
			
			var id = li.attr("data-id" );

			/*---- on button click initiate 
			-------the model change ----*/
			this.collection.activateModelById( id );

			if(ul.hasClass("subnav"))
				this.hidesubnav();

			this.collection.closeSidebar();
		},
		showsubnav:function(_li){
			ul = _li.parent();

			//default subnav id val is the lis (data-id)
			var subnav_id = _li.attr("data-id");
			
			//if this is a subnav set the id to itself. the uls (data-subnav-id)
			if(ul.hasClass("subnav"))
				subnav_id = ul.attr("data-subnav-id");

			this.collection.showSubnavById( subnav_id );
		},
		hidesubnav:function(e){
			this.collection.hideSubnav();
		}
	});

	return MainNavView;
});