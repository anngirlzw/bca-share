define([
  'views/page_view',
  'text!template/learn-more.php'
], function(PageView, LearnMoreTemplate){
	var LearnMoreView = PageView.extend({
		template: _.template( LearnMoreTemplate ),
		id:"learn-more"
	});

	return LearnMoreView;
});