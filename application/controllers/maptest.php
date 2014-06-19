<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MapTest extends CI_Controller {

	function mapview() {
		$this->load->view('new_map_view');
		//$this->load->view('map_view_mw');
	}
}