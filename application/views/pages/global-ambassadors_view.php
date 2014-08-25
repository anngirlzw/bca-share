<? $this->load->view( "page_header_view" ); ?>

<div class="container-fluid page-content">
	<!-- Ambassador 1 -->
	<div id="william-section" class="ambassador-section page-section col-xs-12">
		<div class="row">
			<div class="col-xs-4 col-sm-3 profile-photo">
				<img width="100%" src="<?php echo base_url(); ?>img/william_img.png" class="img-responsive">
			</div>
			<div class="col-xs-8 col-sm-9 profile-info">
				<h1><? echo $this->langutil->line( "william-section-name" ); ?></h1>
				<h3><? echo $this->langutil->line( "william-section-title" ); ?></h3>
				<p class="ambassador-quote"><? echo $this->langutil->line( "william-section-quote" ); ?></p>
			</div>
			<div class="col-xs-12">
				<p><? echo $this->langutil->line( "william-section-intro" ); ?></p>
				<img src="<?php echo base_url(); ?>img/william_sig.png" class="img-responsive">
			</div>
		</div>
	</div>

	<!-- Ambassador 2 -->
	<div id="fabrizo-section" class="ambassador-section page-section col-xs-12">
		<div class="row">
			<div class="col-xs-4 col-sm-3 profile-photo">
				<img width="100%" src="<?php echo base_url(); ?>img/fabrizo_img.png" class="img-responsive">
			</div>
			<div class="col-xs-8 col-sm-9 profile-info">
				<h1><? echo $this->langutil->line( "fabrizo-section-name" ); ?></h1>
				<h3><? echo $this->langutil->line( "fabrizo-section-title" ); ?></h3>
				<p class="ambassador-quote"><? echo $this->langutil->line( "fabrizo-section-quote" ); ?></p>
			</div>
			<div class="col-xs-12">
				<p><? echo $this->langutil->line( "fabrizo-section-intro" ); ?></p>
				<img src="<?php echo base_url(); ?>img/fabrizo_sig.png" class="img-responsive">
			</div>
		</div>
	</div>

	<!-- Ambassador 3 -->
	<div id="elizabeth-section" class="ambassador-section page-section col-xs-12">
		<div class="row">
			<div class="col-xs-4 col-sm-3 profile-photo">
				<img width="100%" src="<?php echo base_url(); ?>img/elizabeth_img.png" class="img-responsive">
			</div>
			<div class="col-xs-8 col-sm-9 profile-info">
				<h1><? echo $this->langutil->line( "elizabeth-section-name" ); ?></h1>
				<h3><? echo $this->langutil->line( "elizabeth-section-title" ); ?></h3>
				<p class="ambassador-quote"><? echo $this->langutil->line( "elizabeth-section-quote" ); ?></p>
			</div>
			<div class="col-xs-12">
				<p><? echo $this->langutil->line( "elizabeth-section-intro" ); ?></p>
				<!-- <img src="<?php echo base_url(); ?>img/elizabeth_sig.png" class="img-responsive"> -->
			</div>
		</div>
	</div>

	<? $this->load->view( "page_footer_view" ); ?>
</div>

</div>