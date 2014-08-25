<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Index extends CI_Controller {
	public function __construct()
	{
	    parent::__construct();

	    $this->load->library('session');
	    $this->load->library('langutil');

	    $language = $this->session->userdata('language');
	    if(!empty($language)){
	    	$this->config->set_item('user_language', $language);
	    }
	}
	
	public function index($_id = "home")
	{
		$this->langutil->load( "index_view" );
		$this->langutil->load( "pages/".$_id."_view" );

		$this->load->view('index_view', array( "page_id"=>$_id, "page_meta"=>$this->getpagemeta() ) );
	}

	// TESTING FOR FEEDMAGNET
	public function feedmagnet($type){
		$fm = $this->config->item("feedmagnet");
		$group_id = $fm[$type. "-group"];

		$this->load->view("feedmagnet_view", array("group_id"=>$group_id));
	}

	public function setlang($page, $id){
		if(empty($page)) $page = base_url();

		$this->session->set_userdata('language', $id);

		redirect($page,"refresh");
	}

	public function template($_id)
	{
		$this->langutil->load( "page_common" );
		$this->langutil->load( "pages/".$_id."_view" );

		$this->load->view( "pages/".$_id."_view.php", array( "page_meta"=>$this->getpagemeta() ) );
	}

	public function getpagemeta(){
		return array(
			"title"=>$this->config->item("site_title_base")." - ". $this->langutil->line("page-title"),
			"description"=>$this->langutil->line("page-description")
		);
	}

	public function sitemap(){
		$this->load->view('sitemap_view');
	}
}