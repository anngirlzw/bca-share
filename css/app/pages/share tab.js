//share
			var currentSelectedStep;

			//go to next page function
			this.$el.find(".next-btn").click(function(e){
				currentSelectedStep = $(e.currentTarget).attr("id");
				currentSelectedStep = currentSelectedStep.substr(12,currentSelectedStep.length);
				currentSelectedStep = parseInt(currentSelectedStep);
				console.log(currentSelectedStep);
				selectNext(currentSelectedStep);
	
			});

			function selectNext(id){
				$(".share-steps").each(function(i,v){
					if($(v).attr("id") == "share-step" + id){
						
						$(v).removeClass('step-active');
						d = "share-step" + (id + 1);
						$('#' + d).addClass('step-active');
					}
				});

				$(".checkboxes").each(function(i,v){
					if($(v).attr("id") == "checkbox-step" + id){
						d = "checkbox-step" + (id + 1);
						$('#' + d).find("img").attr("src", "../img/checked_box.png");
						$('#' + d).find("span").css('opacity', '1');
					}
				});
			}

			//go back to previous page function
			this.$el.find(".back-btn").click(function(e){
				currentSelectedStep2 = $(e.currentTarget).attr("id");
				currentSelectedStep2 = currentSelectedStep2.substr(12,currentSelectedStep2.length);
				currentSelectedStep2 = parseInt(currentSelectedStep2);
				console.log(currentSelectedStep2);
				selectBack(currentSelectedStep2);
			});

			function selectBack(id){
				$(".share-steps").each(function(i,v){
					if($(v).attr("id") == "share-step" + id){
						
						$(v).removeClass('step-active');
						d = "share-step" + (id - 1);
						$('#' + d).addClass('step-active');
					}
				});

				$(".checkboxes").each(function(i,v){
					if($(v).attr("id") == "checkbox-step" + id){
						d = "checkbox-step" + (id);
						$('#' + d).find("img").attr("src", "../img/unchecked_box.png");
						$('#' + d).find("span").css('opacity', '0.5');
					}
				});
			}
		},