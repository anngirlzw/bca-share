define([
  'views/page_view',
  'text!template/bcastrength.php'
], function(PageView, BcastrengthTemplate){
	var BcastrengthView = PageView.extend({
		template: _.template( BcastrengthTemplate ),
		id:"bcastrength",
		ready:function(){
			var _t = this;
			// create the feed object and get content
	        var feed = $FM.Feed("bca-photos-staging").options({'limit': 100}).get()
	 
	        // process JSON data for each update into HTML
	        feed.connect('new_update', function(self, data) {
	            var udata = data.update.data
	            data.update.html =
                '<div class="col-xs-6 col-sm-4 col-md-3 post">' + 
                	'<div class="post-inner">' + 
	                	'<div class="photo" style="background-image:url(' + udata.photos[0].image_service_url + '&height=300);"></div>' +
	                	'<div class="hover-state">' + 
	                		'<img align="left" class="avatar" src="' + udata.author.avatar + '" />' +
	                		'<div class="author">' +
	                			'<p class="alias">' + udata.author.alias + '</p><p class="time">' + _(udata.timestamp).pretty_time() + '</p>' + 
	                		'</div>' + 
	                		'<div class="desc">' + udata.text + '</div>' +
	                	'</div>' +
	                '</div>' +
                '</div>';

	            // display the feed on the page
		       	_t.$el.find("#loader").eq(0).hide();
		        _t.$el.find("#feed").eq(0).append( data.update.html );
	        });
		}
	});
	return BcastrengthView;
});