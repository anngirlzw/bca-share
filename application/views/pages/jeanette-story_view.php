<? $this->load->view( "page_header_view" ); ?>

<div class="container-fluid page-content">
	<div class="col-xs-12">
          <video width="100%" poster="<?php echo base_url(); ?>img/story-jd-video-poster.jpg"></video>
    </div>


    <!-- <div class="col-xs-12"> -->
	<div class="row" id="jd-row1">
		<div class="col-xs-3"><img src="<?php echo base_url(); ?>img/story-jd-profile.png" class="img-responsive"></div>
        <div class="col-xs-9">
        	<h2><? echo $this->langutil->line( "jd_title" ); ?></h2>	
          	<p class="grey-font"><? echo $this->langutil->line( "jd_p1" ); ?></p>
        </div>
    </div>

    <div class="row" id="jd-row2">
		<div class="col-xs-6">
			<h3><? echo $this->langutil->line( "jd_p2_title" ); ?></h3>
			<p class="grey-font"><? echo $this->langutil->line( "jd_p2" ); ?></p>
		</div>
        <div class="col-xs-6">
        	<div class="ldquo"><img src="<?php echo base_url(); ?>img/ldquo.png"></div>
        	<div class="inside_quote">
	        	<p class="story-quote-content"><? echo $this->langutil->line( "jd_p2_quote" ); ?><span class="story-quote-final"><? echo $this->langutil->line( "jd_p2_final" ); ?><img class="rdquo" src="<?php echo base_url(); ?>img/rdquo.png"></span></p>

	        	<h4 class="pull-right story-sig"><? echo $this->langutil->line( "jd_p2_sig" ); ?></h4>
        	</div>
        	
        </div>
    </div>
          
    <div class="row" id="jd-row3">
		<div class="col-xs-12">
			<h3><? echo $this->langutil->line( "jd_p3_title" ); ?></h3>
			<p class="grey-font"><? echo $this->langutil->line( "jd_p3" ); ?></p>
        </div>
    </div>

	<? $this->load->view( "page_footer_view" ); ?>
</div>