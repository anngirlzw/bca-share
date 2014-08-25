<!DOCTYPE html>
<html lang="<?php echo $this->config->item("language"); ?>">
	<head>
		<meta charset="utf-8" />
	    <title><?php echo $page_meta["title"]; ?></title>
	    <meta name="description" content="<?php echo $page_meta['description']; ?>" />
	    <meta name="author" content="Estée Lauder Companies" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

		<script type="text/javascript">
			var page 		= "<?php echo $page_id; ?>";
			var base_url 	= "<?php echo base_url(); ?>";
			var root_dir 	= "<?php echo $this->config->item('root_directory'); ?>";
		</script>

		<link type="text/css" rel="stylesheet" href="<?php echo base_url(); ?>css/main.css" />
	</head>
	<body>
		<div id="sidebar-background"></div>
		<?php $this->load->view("header_view"); ?>
		<div id="main-container" class="container-fluid">
			<div id="page-header" class="row">
				<div class="col-sm-6">
					<img id="campaign-logo" src="<? echo base_url(); ?>img/campaign-logo.gif" width="326" />
				</div>
				<div id="eh-quote" class="col-sm-6" dir="<?php echo $this->langutil->dir(); ?>">
					<p><? echo $this->langutil->line("eh-quote"); ?></p>
				</div>
			</div>
			<div id="page-container" class="row">
				<?php $this->load->view("pages/".$page_id."_view", array("page_id"=>$page_id) ); ?>
			</div>
			<?php $this->load->view("footer_view"); ?>
		</div>
		<?php $this->load->view("sidebar_view"); ?>

		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', "<?php echo $this->config->item('ga_account_id'); ?>", 'auto');
		  ga('require', 'linkid', 'linkid.js');
		  ga('require', 'displayfeatures');
		  ga('send', 'pageview');

		</script>

		<script type="text/javascript" data-main="<?php echo base_url(); ?>js/app/main.js" src="<?php echo base_url(); ?>js/libs/require/require.min.js"></script>
	</body>
</html>