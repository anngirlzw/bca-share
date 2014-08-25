define([
  'views/page_view',
  'text!template/global-ambassadors.php'
], function(PageView, GlobalAmbassadorsTemplate){
	var GlobalAmbassadorsView = PageView.extend({
		template: _.template( GlobalAmbassadorsTemplate ),
		id:"global-ambassadors"
	});
	return GlobalAmbassadorsView;
});