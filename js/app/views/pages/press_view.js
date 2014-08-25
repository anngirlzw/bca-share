define([
  'views/page_view',
  'text!template/press.php'
], function(PageView, PressViewTemplate){
	var PressView = PageView.extend({
		template: _.template( PressViewTemplate ),
		id:"press"
	});
	return PressView;
});