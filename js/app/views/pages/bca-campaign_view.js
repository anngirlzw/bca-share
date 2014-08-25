define([
  'views/page_view',
  'text!template/bca-campaign.php'
], function(PageView, BcaCampaignTemplate){
	var BcaCampaignView = PageView.extend({
		template: _.template( BcaCampaignTemplate ),
		id:"bca-campaign"
	});
	return BcaCampaignView;
});
