define([
  'views/page_view',
  'text!template/jeanette-story.php'
], function(PageView, OurStoryTemplate){
	var JeanetteStoryView = PageView.extend({
		template: _.template( OurStoryTemplate ),
		id:"jeanette-story"
	});

	return JeanetteStoryView;
});