define([
  'views/page_view',
  'text!template/home.php'
], function(PageView, HomeViewTemplate){
	var HomeView = PageView.extend({
		template: _.template( HomeViewTemplate ),
		id:"home",
		ready:function(){
			var _t = this;
			
			this.$el.find('#myTab a').click(function (e) {
			  e.preventDefault()
			  $(this).tab('show')
			})

			this.$el.find('.view-sample').click(function(){
				$('#viewSampleModal').modal({
					backdrop: 'static'
				});
			});

			// home carousel
			this.$el.find('.home-carousel').carousel();

			

			//****** share *****

			//step1 input word count			
		    this.$el.find("#word_count").on('keyup', function() {

		    	if (($("#word_count").val()) && (jQuery.trim($("#word_count").val()).length != 0)) {
		    		$('#myStory-msg').html('');
		    		
		    		var words = this.value.match(/\S+/g).length;
				    if (words > 200) {
				        // Split the string on first 200 words and rejoin on spaces
				        var trimmed = $(this).val().split(/\s+/, 200).join(" ");
				        // Add a space at the end to keep new typing making new words
				        $(this).val(trimmed + " ");
				    }
				    else {
				        $('#word_left').text(200-words);
				    }
		    		
		    	} else {
		    		$('#word_left').text('200');
		    	}
			    
		    });
		 	

			var currentSelectedStep;

			//go to next page function
			this.$el.find(".next-btn").click(function(e){
				currentSelectedStep = $(e.currentTarget).attr("id");
				currentSelectedStep = currentSelectedStep.substr(12,currentSelectedStep.length);
				currentSelectedStep = parseInt(currentSelectedStep);
				console.log(currentSelectedStep);
				//check step1 input
				if (currentSelectedStep == 1) {
					var myStory = $('textarea').val();
					if (myStory && (jQuery.trim(myStory).length != 0)) {
						$('#myStory-msg').html('');
						selectNext(currentSelectedStep);
						//put to preview modal
						$('.preview-story-content').html(myStory);
					} else {
						$('#myStory-msg').html('Please write your story before proceeding.');
					}
				} else if (currentSelectedStep == 2) {
					if ($('#thumbnail:has(img)').length) {
						if ($('#thumbnail>img').length > 4) {
							$('#myPhoto-msg').html('The number of photos exceeds maximum. Please select up to 4 photos.');
						} else {
							selectNext(currentSelectedStep);
							$('#myPhoto-msg').html('');
						}						
					} else {
						$('#myPhoto-msg').html('Please upload a photo before proceeding.');
					}
				} else {
					selectNext(currentSelectedStep);
				}
				
	 
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

			//skip btn onclick
			this.$el.find(".skip-btn").click(function(){
				$('#share-step3').removeClass('step-active');
				$('#share-step4').addClass('step-active');
				$('.video-close').remove();						
				$('#preview-video, #video-display').css('display', 'none');
				$('#preview-video, #video-display').attr('src', '');  						
			});

			//add 'close thumbnail' btn each time a new photo is added
			function closeThumbnail(e,classname) {
				var cDiv = document.createElement('div');
					cDiv.className = classname;
					cDiv.innerHTML = " X ";
					e.appendChild(cDiv);
			}

			//add Featured Photo layer
			function addFeaturedPhoto() {
				if ($('#thumbnail:has(img)').length) {
					$('#myPhoto-msg').html('');
					var oDiv = document.createElement('div');
					oDiv.className = "featured_photo_text";
					oDiv.innerHTML = "Featured Photo";
							
					if (($('.featured_photo_text')).length == false) {
						$('#thumbnail').append(oDiv);
					}
							
				} else {
					if (($('.featured_photo_text')).length) {
						$('.featured_photo_text').remove();
					}					
				}
			}

			//remove photo thumbnail onclick
			function removeThumbnail(btn) {
				$(btn).click(function(){					
					$(this).prev().remove();
					$(this).remove();
					addFeaturedPhoto();
				});
			}

			var counter;
			//check everything before preview/share
			function submitCheck() {
				counter = 0;
				var username = $('#username').val();
				var checkedNum = $('#agreement :checkbox:checked').length == 2;

				if (username && (jQuery.trim(username).length != 0)) {
					//put to preview modal
					$('.preview-story-username').html(username);

					var useremail = $('#useremail').val();
					if (validateEmail(useremail) !== false) {
						
						if (checkedNum) {
							$('#submit-msg').html('');
							console.log('All information is valid! Ready to submit');
							counter = 1;

						} else {
							$('#submit-msg').html('Please check the boxes if you agree with the policies.');
						}
						
					} else {
						$('#submit-msg').html('Please enter your email address.');
					}
					
				} else {
					$('#submit-msg').html('Please enter your name.');
				}
			}

			//preview btn click 
			$('#pre_btn').click(function(){
				submitCheck();
				if (counter == 1) {

					$('#thumbnail').find('img').first().clone().appendTo('.preview-featuredImg-wrapper');
					$('#thumbnail>img').slice(1).each(function(){
						$(this).clone().appendTo('.preview-pictures-wrapper');
					});

					if ($('#video-display').css('display') != 'none') {
						$('.preview-video-container>h4').show();
					} else {
						$('.preview-video-container>h4').hide();
					}

					if ($('#thumbnail>img').slice(1).length > 0) {
						$('.preview-pictures-container>h4').show();
					} else {
						$('.preview-pictures-container>h4').hide();
					}

					$('#previewModal').modal({
						backdrop: 'static'
					});

				}

			});

			$('#preview-close').click(function(){
				$('#previewModal').find('img').remove();
			});


			// upload images from computer
			jQuery(function($){
				var fileDiv = document.getElementById("upload");
				var fileInput = document.getElementById("upload-image");
				console.log(fileInput);
				fileInput.addEventListener("change",function(e){
				  var files = this.files
				  showThumbnail(files)
				},false)

				fileDiv.addEventListener("click",function(e){
				  $(fileInput).show().focus().click().hide();
				  e.preventDefault();
				},false)

				fileDiv.addEventListener("dragenter",function(e){
				  e.stopPropagation();
				  e.preventDefault();
				},false);

				fileDiv.addEventListener("dragover",function(e){
				  e.stopPropagation();
				  e.preventDefault();
				},false);

				fileDiv.addEventListener("drop",function(e){
				  e.stopPropagation();
				  e.preventDefault();

				  var dt = e.dataTransfer;
				  var files = dt.files;

				  showThumbnail(files)
				},false);

				// show image thumbnails
				function showThumbnail(files){
				  for(var i=0;i<files.length;i++){
				    var file = files[i]
				    var imageType = /image.*/
				    if(!file.type.match(imageType)){
				    	$('#myPhoto-msg').html('The file you upload is not an Image.')
				     	continue;
				    }

				    var image = document.createElement("img");
				    var thumbnail = document.getElementById("thumbnail");
				    image.file = file;
				    thumbnail.appendChild(image);

				    closeThumbnail(thumbnail, 'thumb-close');

					removeThumbnail('.thumb-close');

				    addFeaturedPhoto();

				    var reader = new FileReader()
				    reader.onload = (function(aImg){
				      return function(e){
				        aImg.src = e.target.result;
				      };
				    }(image))
				    var ret = reader.readAsDataURL(file);
				    var canvas = document.createElement("canvas");
				    ctx = canvas.getContext("2d");
				    image.onload= function(){
				      ctx.drawImage(image,100,100)
				    }

				    
				  }
				}


			});//end of function
		

		// youtube url validation
		function ytVidId(url) {
		    var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
		    return (url.match(p)) ? RegExp.$1 : false;
		}

		//validate user name & email
		function validateEmail(email) { 
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
		
		//display video on the page
		this.$el.find('#addlink_btn').click(function(){

			if ($('#video-link').val()) {				
				var video_url;
				video_url = $('#video-link').val();

					if (ytVidId(video_url) !== false) {
						var final_video_url = video_url.replace("watch?v=", "embed/");
						//put to thumbnail & preview modal
						$('#video-display, #preview-video').attr('src', final_video_url + '?rel=0');
						
						var video_thumb = document.getElementById("video-container");
						closeThumbnail(video_thumb, 'video-close');

						$('#video-display').fadeIn();
						$('#preview-video').show();
						$('#video-msg').html('');

					    $('.video-close').click(function(){							
						    $('#preview-video, #video-display').css('display', 'none');
						    $('#preview-video, #video-display').attr('src', '');
						    $(this).remove();
						});

						$('#video-link').val('');

					} else {
						$('#video-msg').html('Your youtube link is not valid.');
					}
				
			} else {
				$('#video-msg').html('Please enter a link.');
			}
		});

		//validate user input
		this.$el.find('#share_btn').click(function(){
			submitCheck();
		});

		// facebook photo selector function
		$(function()
		{
			$.getScript('http://connect.facebook.net/en_US/all.js', function()
			{
				FB.init({
					appId      : '1454127581521662',
					channelUrl : '//bca.dev/home',
					status     : true,
					xfbml      : false
				});

				FacebookPhotoSelector.setFacebookSDK(FB);
				console.log("facebook is inited!!!");


			});



			$('#facebook_photo_selector').facebookPhotoSelector({
				onFinalSelect : function(photos)
				{				
					fpid = photos[0];
					// console.log(fpid);
					var fbimg = document.createElement("img");
					fbimg.setAttribute('src', 'https://graph.facebook.com/' + fpid + '/picture?type=normal&access_token=' + token);
					var fbthumbnail = document.getElementById("thumbnail");
					thumbnail.appendChild(fbimg);
					closeThumbnail(thumbnail, 'thumb-close');

					removeThumbnail('.thumb-close');
					
					addFeaturedPhoto();
				}
			});
		});
			
		},
		close:function(){
			this.$el.find('#myTab a').unbind();
			this.$el.find('.view-sample').unbind();
			this.$el.find('.home-carousel').unbind();
			this.$el.find('.next-btn').unbind();
			this.$el.find('.back-btn').unbind();
			this.$el.find('.share-steps').unbind();
			this.$el.find('.checkboxes').unbind();
			//new ones
			this.$el.find('#share_btn, #pre_btn').unbind();
			this.$el.find('#addlink_btn').unbind();
			this.$el.find(".skip-btn").unbind();


		}
	});	
	return HomeView;
});


