<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 

class LangUtil {
	protected $ci;

	public function __construct()
 	{
 		$this->ci =& get_instance();
    }

    public function dir()
    {
    	$lang = $this->ci->config->item("user_language");

    	$rtl = preg_match('/\b(he|ar)\b/', $lang);

    	return $rtl ? "rtl" : "ltr";
    }

    public function load( $file ){
        $this->ci->lang->load( $file );
        
        $lang = $this->ci->config->item("user_language");

        if ( file_exists(APPPATH."language/{$lang}/{$file}_lang".EXT) )
            $this->ci->lang->load( $file, $lang);
    }

    public function line( $key ){
        $str = $this->ci->lang->line( $key );
        return nl2br( $str );
    }
}

/* End of file Someclass.php */