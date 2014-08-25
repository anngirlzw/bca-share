<? $this->langutil->load( "header_view" ); ?>

<div id="header">
	<div id="main-nav-container">
		<div id="hamburger"></div>
		<div id="logo" ><img src="<?php echo base_url(); ?>img/bca-logo.gif" height="40" /></div>
		<ul class="main-nav" dir="<?php echo $this->langutil->dir(); ?>">
			<li data-id="home"><a><? echo $this->lang->line('main_nav_label_home'); ?></a></li><!--
			--><li data-id="about" data-no-page-view ><a><? echo $this->lang->line('main_nav_label_about'); ?><span class="caret"</span></a></li><!--
			--><li data-id="bcastrength"><a><? echo $this->lang->line('main_nav_label_bcastrength'); ?></a></li><!--
			--><li data-id="our-stories" data-no-page-view ><a><? echo $this->lang->line('main_nav_label_our-stories'); ?><span class="caret"</span></a></li><!--
			--><li data-id="donate"><a href="https://donations.bcrfcure.org/circlesofstrength" target="_blank"><? echo $this->lang->line('main_nav_label_donate'); ?></a></li>
		</ul>
		<ul class="social-nav horizontal-nav">
			<li class="facebook-btn"><a href=""></a></li>
			<li class="twitter-btn"><a href=""></a></li>
		</ul>
	</div>
	<div id="sub-nav-container" data-parent-id="about">
		<ul data-subnav-id="our-stories" class="main-nav subnav">
			<li data-id="jeanette-story" data-parent-id="our-stories"><a><? echo $this->lang->line('sub_nav_label_jeanette-story'); ?></a></li>
		</ul>
		<ul data-subnav-id="about" class="main-nav subnav">
			<li data-id="bca-campaign" data-parent-id="about"><a><? echo $this->lang->line('sub_nav_label_bca-campaign'); ?></a></li>
			<li data-id="learn-more" data-parent-id="about"><a><? echo $this->lang->line('sub_nav_label_learn-more'); ?></a></li>
			<li data-id="global-ambassadors" data-parent-id="about"><a><? echo $this->lang->line('sub_nav_label_global-ambassadors'); ?></a></li>
			<li data-id="pink-ribbon-products" data-parent-id="about"><a><? echo $this->lang->line('sub_nav_label_pink-ribbon-products'); ?></a></li>
			<li data-id="press" data-parent-id="about"><a><? echo $this->lang->line('sub_nav_label_press'); ?></a></li>
		</ul>
	</div>
	<div id="language-dropdown" class="dropdown">
	  <button class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"><? echo $this->lang->line('language_menu_label'); ?><span class="caret"></span></button>
	  	<div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" dir="<?php echo $this->langutil->dir(); ?>">
		<ul class="col-2">
			<?php 
				$current_page = uri_string();
				if(empty($current_page))
					$current_page = "home";
			?>
			<li role="presentation"><a data-lang-id="en" data-lang-id="" role="menuitem" tabindex="0" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/en">English</a></li> 
			<li role="presentation"><a data-lang-id="es" role="menuitem" tabindex="1" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/es">Español</a></li>
			<li role="presentation"><a data-lang-id="es" role="menuitem" tabindex="2" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/es">Español MX</a></li>
			<li role="presentation"><a data-lang-id="fr" role="menuitem" tabindex="3" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/fr">Français</a></li>
			<li role="presentation"><a data-lang-id="fr" role="menuitem" tabindex="4" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/fr">Français CA</a></li>
			<li role="presentation"><a data-lang-id="de" role="menuitem" tabindex="5" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/de">Deutsch</a></li>
			<li role="presentation"><a data-lang-id="cn" role="menuitem" tabindex="6" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/cn">中文</a></li>
			<li role="presentation"><a data-lang-id="el" role="menuitem" tabindex="7" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/el">Ελληνικά</a></li>
		</ul>
		<ul class="col-2">
			<li role="presentation"><a data-lang-id="hu" role="menuitem" tabindex="8" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/hu">Magyar</a></li>    
			<li role="presentation"><a data-lang-id="he" role="menuitem" tabindex="9" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/he">עברית</a></li>
			<li role="presentation"><a data-lang-id="ko" role="menuitem" tabindex="10" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/ko">한국어</a></li>
			<li role="presentation"><a data-lang-id="pt" role="menuitem" tabindex="11" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/pt">Português</a></li>
			<li role="presentation"><a data-lang-id="ru" role="menuitem" tabindex="12" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/ru">Русский</a></li>
			<li role="presentation"><a data-lang-id="ar" role="menuitem" tabindex="13" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/ar">العربية</a></li>    
			<li role="presentation"><a data-lang-id="tr" role="menuitem" tabindex="14" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/tr">Türkçe</a></li>
			<li role="presentation"><a data-lang-id="vi" role="menuitem" tabindex="15" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/vi">Tiếng Việt</a></li>
		</ul>
		<ul class="col-3">
		    <li role="presentation"><a data-lang-id="en" role="menuitem" tabindex="0" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/en">English</a></li> 
		    <li role="presentation"><a data-lang-id="es" role="menuitem" tabindex="1" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/es">Español</a></li>
		    <li role="presentation"><a data-lang-id="es" role="menuitem" tabindex="2" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/es">Español MX</a></li>
		    <li role="presentation"><a data-lang-id="fr" role="menuitem" tabindex="3" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/fr">Français</a></li>
		    <li role="presentation"><a data-lang-id="fr" role="menuitem" tabindex="4" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/fr">Français CA</a></li>
		 </ul>
		 <ul class="col-3">
		 	<li role="presentation"><a data-lang-id="de" role="menuitem" tabindex="5" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/de">Deutsch</a></li>
		 	<li role="presentation"><a data-lang-id="cn" role="menuitem" tabindex="6" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/cn">中文</a></li>
		    <li role="presentation"><a data-lang-id="el" role="menuitem" tabindex="7" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/el">Ελληνικά</a></li>
		    <li role="presentation"><a data-lang-id="hu" role="menuitem" tabindex="8" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/hu">Magyar</a></li>    
		    <li role="presentation"><a data-lang-id="he" role="menuitem" tabindex="9" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/he">עברית</a></li>
		 </ul>
		 <ul class="col-3">
		 	<li role="presentation"><a data-lang-id="ko" role="menuitem" tabindex="10" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/ko">한국어</a></li>
		    <li role="presentation"><a data-lang-id="pt" role="menuitem" tabindex="11" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/pt">Português</a></li>
		 	<li role="presentation"><a data-lang-id="ru" role="menuitem" tabindex="12" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/ru">Русский</a></li>
		    <li role="presentation"><a data-lang-id="ar" role="menuitem" tabindex="13" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/ar">العربية</a></li>    
		    <li role="presentation"><a data-lang-id="tr" role="menuitem" tabindex="14" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/tr">Türkçe</a></li>
		    <li role="presentation"><a data-lang-id="vi" role="menuitem" tabindex="15" href="<?php echo base_url(); ?>lang/<?php echo $current_page; ?>/vi">Tiếng Việt</a></li>
		 </ul>
		</div>
	</div>
</div>

