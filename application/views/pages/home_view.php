<script type="text/javascript">page_title = "<? echo $page_meta['title']; ?>"</script>

<div id="home-page-header">
	<div class="page-title-inner container-fluid">
		<div class="tab-container row" role="tablist">
			<ul id="page-tabs" class="nav nav-tabs col-xs-12">
			  <li class="active"><a href="#hear" role="tab" data-toggle="tab"><? echo $this->langutil->line( "tab_hear" ); ?></a></li><!--
			  --><li><a href="#share" role="tab" data-toggle="tab" ><? echo $this->langutil->line( "tab_share" ); ?></a></li><!--
			   --><li><a href="#donate" role="tab" data-toggle="tab"><? echo $this->langutil->line( "tab_donate" ); ?></a></li>
			</ul>
		</div>
	</div>
</div>

	
<div class="page-content container-fluid">
	<div class="row">
		<div class="col-xs-12 center-block" id="page-tabs">	
			<!-- Tab panes -->
			<div class="tab-content">

			  <!-- Hear Our Stories -->
			  <div class="tab-pane fade in active" id="hear">
			  	<div class="video-container col-xs-12">
			  		<video width="100%" poster="<?php echo base_url(); ?>img/video_placeholder.jpg"></video>
			  	</div>
			  </div>

			  <!-- Share -->
			  <div class="tab-pane" id="share">

			  	<!-- checked & unchecked -->
			  	<div class="col-xs-12 steps text-center">
				  	<div class="checkboxes" id="checkbox-step1"><img src="<?php echo base_url(); ?>img/checked_box.png" class="img-responsive"><span><? echo $this->langutil->line( "share_step1" ); ?></span></div>
				  	<div class="checkboxes" id="checkbox-step2"><img src="<?php echo base_url(); ?>img/unchecked_box.png" class="img-responsive"><span><? echo $this->langutil->line( "share_step2" ); ?></span></div>
				  	<div class="checkboxes" id="checkbox-step3"><img src="<?php echo base_url(); ?>img/unchecked_box.png" class="img-responsive"><span><? echo $this->langutil->line( "share_step3" ); ?></span></div>
				  	<div class="checkboxes" id="checkbox-step4"><img src="<?php echo base_url(); ?>img/unchecked_box.png" class="img-responsive"><span><? echo $this->langutil->line( "share_step4" ); ?></span></div>
			  	</div>

			  	<!-- Share Step1 - your story -->
			  	
				  	<div class="col-xs-12 container-fluid share-steps step-active" id="share-step1">
					  	<div class="col-xs-8 col-xs-offset-2" >
						  	<div id="tell-us">
						  		<p><? echo $this->langutil->line( "tell_us" ); ?><span><? echo $this->langutil->line( "tell_us_max" ); ?></span></p>
						  		<textarea placeholder="<? echo $this->langutil->line( "textarea_placeholder" ); ?>"></textarea>
						  		<div id="myStory-msg"></div>
						  		<div class="view-sample pull-right" data-toggle="modal" data-target="#viewSampleModal"><? echo $this->langutil->line( "view_sample" ); ?>&nbsp;&nbsp;<span class="arrow-right"></span></div>
						  	</div>
					  		<a class="pink-button pull-right next-btn" id="nextbtn-step1"><? echo $this->langutil->line( "next_btn" ); ?>&nbsp;&nbsp;<span class="arrow-white-r"></span></a>
					  	</div>
				  	</div>
			  	

			  	<!-- Share Step2 - add photos -->
			  	
				  	<div class="col-xs-12 container-fluid share-steps" id="share-step2">
					  	<div class="col-xs-8 col-xs-offset-2" >
						  	<div id="select-photo">
						  		<p><? echo $this->langutil->line( "select_photo" ); ?></p>
						  		<!-- upload photo and preview -->
						  		<input type="file" style="display:none" id="upload-image" multiple="multiple"></input>
						  		
								<div id="upload" class="drop-area">
								<div id="pc_icon"></div>
								<div  class="caption-wrapper">
									<h4>ADD PHOTO</h4>
								  	<h5>From Your Computer</h5>
								</div>									
								  
								</div>

								<!-- facebook photo selector -->
								<div id="upload-facebookImg" data-toggle="modal" href="#facebook_photo_selector">
									<div id="fb_icon"></div>
									<div class="caption-wrapper">
										<h4>ADD PHOTO</h4>
									  	<h5>From Facebook</h5>
									</div>	
								</div>

								<div class="thumb-container">
								  
								  <!-- image thumbnail -->
								  <div id="thumbnail"></div>
								</div>
						  		
						  		<div class="view-sample pull-right" data-toggle="modal" data-target="#viewSampleModal"><? echo $this->langutil->line( "view_sample" ); ?>&nbsp;&nbsp;<span class="arrow-right"></span></div>
						  	</div>

						  	<!-- back & next btns -->
						  	<a class="pink-button pull-left back-btn" id="backbtn-step2"><span class="arrow-white-l"></span>&nbsp;&nbsp;<? echo $this->langutil->line( "back_btn" ); ?></a>
					  		<a class="pink-button pull-right next-btn" id="nextbtn-step2"><? echo $this->langutil->line( "next_btn" ); ?>&nbsp;&nbsp;<span class="arrow-white-r"></span></a>
					  	</div>
				  	</div>
			  	

			  	<!-- Share Step3 - add videos -->
			  	
				  	<div class="col-xs-12 container-fluid share-steps" id="share-step3">
					  	<div class="col-xs-8 col-xs-offset-2" >
						  	<div id="select-video">
						  		<!-- content starts here -->
						  		<p>Personalize your story by adding a video from one of the following:</p>
						  		<div class="text-center">
							  		<ul>
							  			<li id="youtube"><img src="<?php echo base_url(); ?>img/youtube_icon.png"></li>
							  			<li id="insta"><img src="<?php echo base_url(); ?>img/insta_icon.png"></li>
							  			<li id="vimeo"><img src="<?php echo base_url(); ?>img/vimeo_icon.png"></li>
							  		</ul>
							  		<input type="text" id="video-link" placeholder="Add a link to your video...">
							  		<a class="pink-button" id="addlink_btn">ADD LINK</a>
							  		<div id="video-msg"></div>
							  		
						  		</div>
						  		<div id="video-container">
						  			<iframe id="video-display" style="display: none" width="380" height="180"></iframe>
						  		</div>
						  		<div class="view-sample pull-right"><? echo $this->langutil->line( "view_sample" ); ?>&nbsp;&nbsp;<span class="arrow-right"></span></div>

						  	</div>

						  	<!-- back & next btns -->
						  	<a class="pink-button pull-left back-btn" id="backbtn-step3"><span class="arrow-white-l"></span>&nbsp;&nbsp;<? echo $this->langutil->line( "back_btn" ); ?></a>
					  		<a class="pink-button pull-right next-btn" id="nextbtn-step3"><? echo $this->langutil->line( "next_btn" ); ?>&nbsp;&nbsp;<span class="arrow-white-r"></span></a>
					  	</div>
				  	</div>


			  	

			  	<!-- Share Step4 - share -->
			  	
				  	<div class="col-xs-12 container-fluid share-steps" id="share-step4">
					  	<div class="col-xs-8 col-xs-offset-2" >
						  	<div id="final-step">
						  		<div id="user-info">
							  		<form>
							  			<input type="text" placeholder="Add Name" id="username"> <br>
							  			<input type="text" placeholder="Add Email" id="useremail">

							  		</form>
							  		<div class="btn-group-wrapper">
								  		<a class="pink-button" id="pre_btn" data-toggle="modal" data-target="#previewModal">PREVIEW</a>
								  		<a class="pink-button" id="share_btn">SHARE</a>
								  		<div id="submit-msg"></div>
							  		</div>
						  		</div>

						  		<div id="agreement">
							  		<label><input type="checkbox" name="agree">I understand that by submitting my story, I am agreeing to the terms for posted content included in the Terms of Use .</label><br>
							  		<label><input type="checkbox" name="agree">This is opt-in copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et dignissim est.</label>
						  		</div>
						  	</div>
						  	<!-- back & next btns -->
						  	<a class="pink-button pull-left back-btn" id="backbtn-step4"><span class="arrow-white-l"></span>&nbsp;&nbsp;<? echo $this->langutil->line( "back_btn" ); ?></a>
					  	</div>
				  	</div>


				</div>
			  

			  <!-- Donate -->
			  <div class="tab-pane" id="donate">
			  	<div class="row container-fluid">
			  		<div class="col-xs-6"><img src="<?php echo base_url(); ?>img/donate-bg.png" class="img-responsive"></div>
			  		<div class="col-xs-6" id="donate-content">
			  			<p><? echo $this->langutil->line( "donate_content" ); ?></p>
			  			
			  			<p class="pink-middle"><? echo $this->langutil->line( "pink_middle" ); ?></p>

			  			<p><? echo $this->langutil->line( "each" ); ?></p>

			  			<!-- inner two-column -->
			  			<div class="row">
				  			<div class="col-xs-6 numbers">
				  				<table>
				  					<tbody>
				  						<tr>
				  							<td class="donate-tab-icon1"></td>
				  							<td><h5><span><? echo $this->langutil->line( "num1" ); ?></span><? echo $this->langutil->line( "num1_text" ); ?></h5></td>
				  						</tr>

				  						<tr>
				  							<td class="donate-tab-icon2"></td>
				  							<td><h5><span><? echo $this->langutil->line( "num2" ); ?></span><? echo $this->langutil->line( "num2_text" ); ?></h5></td>
				  						</tr>

				  						<tr>
				  							<td class="donate-tab-icon3"></td>
				  							<td><h5><? echo $this->langutil->line( "num3_pre_text" ); ?><span><? echo $this->langutil->line( "num3" ); ?></span><? echo $this->langutil->line( "num3_text" ); ?></h5></td>
				  						</tr>
				  					</tbody>
				  				</table>
				  			</div>
				  			<div class="col-xs-6 text-center" id="pink-button-container"><a class="pink-button" id="donate-tab-btn"><? echo $this->langutil->line( "click_donate" ); ?>&nbsp;&nbsp;<span class="arrow-white-r"></span></a>
				  			</div>
			  			</div>
			  		</div>
			  	</div>
			  </div>
			</div>
		</div>
	</div>

	<!-- View Sample Story Modal -->
	<div class="modal fade" id="viewSampleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
	        <h4 class="modal-title" id="myModalLabel"><? echo $this->langutil->line( "sample_title" ); ?></h4>
	      </div>
	      <div class="modal-body">
	        <p><? echo $this->langutil->line( "sample_content" ); ?></p> 
	      </div>
	    </div>
	  </div>
	</div>



	<!-- Facebook photo selector modal -->
	<div id="facebook_photo_selector" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" id="fb-selector-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<h4 class="modal-title"><? echo $this->langutil->line( "fb-selector-title" ); ?></h4>
					<select class="fbps-albums pull-right" name="facebook_photo_album"></select>
				</div>
				<div class="modal-body">
					<div class="form">
						<label><? echo $this->langutil->line( "fb-selector-subtitle" ); ?></label>
						
					</div>
					<hr>
					<div class="fbps-photos clearfix"></div>
				</div>
				<div class="modal-footer">
					<a class="pink-button fbps-select" data-dismiss="modal"><? echo $this->langutil->line( "fb-selector-add-btn" ); ?></a>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->


	<!-- Preview My Story Modal -->
	<div class="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
	        <h4 class="modal-title" id="myModalLabel">PREVIEW MY STORY</h4>
	      </div>
	      <div class="modal-body">
	        <p><? echo $this->langutil->line( "sample_content" ); ?></p> 
	      </div>
	    </div>
	  </div>
	</div>



	<!-- donate now and this years stories -->
	<div class="row">
		<?php $this->load->view("donate-now_view"); ?>
		<?php $this->load->view("this-years-stories_view"); ?>
	</div>

	<!-- Search Stories -->
	<!-- <div class="col-xs-12 page-subtitle" id="search-stories-session">
		<div class="page-title-inner container-fluid">
			<div class="col-xs-12" >
				<ul>
					<li><? echo $this->langutil->line( "search_stories_new" ); ?></li>
					<li><? echo $this->langutil->line( "search_stories_featured" ); ?></li>
				</ul>
				<input class="pull-right" type="text" placeholder="<? echo $this->langutil->line( "search_stories_placeholder" ); ?>">
			</div>
		</div>
	</div>
	<div id="feed" class="col-md-10 col-md-offset-1">
	<span id="loader">Loading...</span>
	</div>

	<div id="load-more-section" class="col-xs-10 col-xs-offset-1 page-section">
		<hr>
		<a class="pink-button"><? echo $this->langutil->line( "search_stories_loadmore_btn" ); ?></a>
	</div> -->

	<!-- Breast Cancer Facts -->

	<div id="facts-and-figures" class="row">
		<div class="section-title col-xs-12">
			<div class="section-title-inner col-sm-10 col-sm-offset-1">
				<h2><? echo $this->langutil->line( "facts_title" ); ?></h2>
			</div>
		</div>
		<div class="col-xs-12" id="figures-container">
			<div class="figure col-xs-6 col-md-3">
				<h1><? echo $this->langutil->line( "fact-1-title" ); ?></h1>
				<p><? echo $this->langutil->line( "fact-1-content" ); ?></p>
				<img height="50px" src="<?php echo base_url(); ?>img/figures/figure-l.png">
			</div>
			<div class="figure col-xs-6 col-md-3">
				<h1><? echo $this->langutil->line( "fact-2-title" ); ?></h1>
				<p><? echo $this->langutil->line( "fact-2-content" ); ?></p>
			</div>
			<div class="figure col-xs-6 col-md-3">
				<h1><? echo $this->langutil->line( "fact-3-title" ); ?></h1>
				<p><? echo $this->langutil->line( "fact-3-content-grey" ); ?></p>
				<p class="pink-font"><? echo $this->langutil->line( "fact-3-content-pink" ); ?></p>
			</div>
			<div class="figure col-xs-6 col-md-3">
				<h1><? echo $this->langutil->line( "fact-4-title" ); ?></h1>
				<p><? echo $this->langutil->line( "fact-4-content" ); ?></p>
				<img height="50px" src="<?php echo base_url(); ?>img/figures/figure-r.png">
			</div>
		</div>
	</div>
</div>





<!-- Facebook SDK -->
	<div id="fb-root"></div>

