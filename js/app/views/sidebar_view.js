define([
  'views/main-nav_view'
], function(MainNavView){
	var SideBarView = MainNavView.extend({
        container:$("#sidebar"),
		navigation_view:null,
        scrollstarttop:0,
        ready:function(){
            var _t = this;

            $(window).on("scrollstart", function(){
                _t.scrollstart();
            }); 
            $(window).on("scrollstop", function(){
                _t.checktop();
            });

            this.collection.on("opensidebar", function(){
                _t.checktop(true);
            });
        },
        scrollstart:function(){
            if(this._timer) clearTimeout(this._timer);
            this.scrollstarttop = $(window).scrollTop();
        },
        checktop:function(_force){
            if(this._timer) clearTimeout(this._timer);

            var _this = this;

            _down = this.scrollstarttop-$(window).scrollTop() > 0;
        	
        	this._timer = setTimeout(function(){
	        	_elh = _this.container.height(),
	        	_scrolltop = $(window).scrollTop(),
				_wh = $(window).height();
                _mch = $("#main-container").height();

                var _max = _mch-_elh;

                //side bar is taller than the window
                if(_elh > _wh && !_force){
                    if(!_down){
                        _scrolltop -= (_elh-_wh);
                    }
                }

                if(_scrolltop > _max) _scrolltop = _max;
                if(_scrolltop < 0) _scrolltop = 0;

                _this.container.css("margin-top", _scrolltop + "px");
        	},100);
        }
	});

	return SideBarView;
});