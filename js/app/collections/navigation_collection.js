define([
  'backbone',
  'models/navigation_model'
], function (Backbone, NavigationModel) {
  var NavigationCollection = Backbone.Collection.extend({
    sidebar_is_open:false,
    subnav_is_open:false,
    initialize:function(){
      var _t = this;

      /*---- populate models with html elements ------
      ------------------------------------------------*/
      $("ul.main-nav li").each(function(){
        var _a      = $(this).find("a").eq(0);
        
      	//only create the model if it doens't have href
      	if( _a.attr("href") == undefined ){
	      	var _id = $(this).attr("data-id"),
	      	_m 		= _t.get(_id);

	      	//only if it's not here already
	      	if(!_m){
	      		_m = new NavigationModel({id:_id});
	      		_t.push( _m );
	      	}

	        _m.set({
		        parent:$(this).attr("data-parent-id"),
		        has_page_view:$(this).attr("data-no-page-view") !== undefined ? false : true
	        });
	    }
      });
    },
    activateModelById:function(_id, _silent){
  		//get current model
  		var _m = this.get(_id);
  		if(!_m) return;

  		var _parent_id = _m.get("parent"),
  		_haspageview = _m.get("has_page_view"),
  		_parent_m = null;

  		//get the parent model if it exists
  		if( _parent_id != undefined)
          	_parent_m = this.get(_parent_id);

  		//only activate if it has a page view
  		if(_haspageview){
        /*--- deactivate currently active ---
        ------------------------------------------*/
        _active = this.where({active:true});

        _.each(_active, function(_model){
        	//silently deactivate selected model
          	_model.set({"active":false, "silent":true});
        });
        
        /*---- remove silent and activate selected model -------
        ------------------------------------*/
        _m.set({"active":true, "silent":false});

        /*---- silently activate the parent if exists -------
        ------------------------------------*/
       	if(_parent_m)
        	_parent_m.set({"active":true, "silent":true});
  	  }
    },
    showSubnavById:function(_id){
      subnav = $("#sub-nav-container ul[data-subnav-id='"+ _id + "']")[0];

      //if there's a subnav with this id, do something. Else abort.
      if(subnav != undefined){
        this.subnav_is_open = true;

        //stop the hiding timer
        if(this.to) clearTimeout(this.to);

        //hide currently active subnavs
        $("#sub-nav-container ul.active").removeClass("active");

        //show the selected subnav
        $(subnav).addClass("active");

        //set the body state to subnav open mode
        if(!$("body").hasClass("subnav-open"));
          $("body").addClass("subnav-open");
      } else {
        this.hideSubnav();
      }
    },
    hideSubnav:function(){
      //clear current timer
      if(this.to) clearTimeout(this.to);

      //set a delay for hiding
      this.to = setTimeout(function(){
        this.subnav_is_open = false;

        //hide all active subnavs
        $("#sub-nav-container ul.active").removeClass("active");

        //set the body state to subnav closed mode
        $("body").removeClass("subnav-open")
      },300);
    },
    toggleSidebar:function(){
      this.sidebar_is_open ? this.closeSidebar() : this.openSidebar()
    },
    openSidebar:function(){
      if( !$("body").hasClass("sidebar-open") ){
        $("body").addClass("sidebar-open");
        this.sidebar_is_open = true;
        this.trigger("opensidebar");
      }
    },
    closeSidebar:function(){
      $("body").removeClass("sidebar-open");
      this.sidebar_is_open = false;
      this.trigger("closesidebar");
    }
  });

  return NavigationCollection;
});