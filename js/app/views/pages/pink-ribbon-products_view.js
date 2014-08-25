define([
  'views/page_view',
  'text!template/pink-ribbon-products.php'
], function(PageView, PinkRibbonProductsTemplate){
	var PinkRibbonProductsView = PageView.extend({
		template: _.template( PinkRibbonProductsTemplate ),
		id:"pink-ribbon-products"
	});
	return PinkRibbonProductsView;
});