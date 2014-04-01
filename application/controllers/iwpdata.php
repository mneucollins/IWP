<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * This controller maps to the following address
 *   http://192.168.56.10/IWPData/index.php/iwpdata
 *
 * Methods not starting with an underscore are mappd to /index.php/welcome/<method_name>
 *   http://192.168.56.10/IWPData/index.php/iwpdata/<method_name>
 */

class IWPData extends CI_Controller {

	public function index()
	{
		$this->load->view('mainmenu');
	}

	public function testdb(){
		$this->load->library('table');
		$sql = "SELECT cshapes.gid FROM public.cshapes;";
		//echo $sql;
		$query = $this->db->query($sql);
		//echo $query;
		$data['results'] = $this->table->generate($query);
		$this->load->view('results_view', $data);
	}
	public function xmlImport(){
		$this->load->model('iwpimport');

		$this->iwpimport->clear_table();
		$data['results'] = "Imported ".$this->iwpimport->importXML()." records";
		$this->load->view('results_view', $data);
	}
	public function iwpParse() {
		$this->load->model('iwpimport');
		$data['results'] = "Imported ".$this->iwpimport->parse_iwpimport()." Author records";
		$this->load->view('results_view', $data);

	}
	public function loadMenus() {
		$this->load->model('menus');
		$data['results'] = $this->menus->load_csv();
		$this->load->view('results_view', $data);
	}

//following functionality has been mobed to controller iwpmap
	public function x_iwpMap() {
		$this->load->model('authors');
		$this->load->model('menus');

		$data ['country']=$this->input->post('country');
		$data['residency']=$this->input->post('residency');
		$data['YOB']=$this->input->post('YOB');
		$data['gender']=$this->input->post('gender');
		$data['multilingual']=$this->input->post('multilingual');
		$data['language']=$this->input->post('language');
		$data['region']=$this->input->post('region');
		$data['continent']=$this->input->post('continent');
		if ($data['continent'] == 'Oceania'){$data['newBounds'] = "91.125,-42.975,181.125,2.025";}
		$data['role']=$this->input->post('role');

		$data['counts'] = $this->authors->counts_by_country();

		$this->load->view('map_view', $data );
	}

	public function loadCountsByYear(){
		$this->load->model ('author_counts_by_year');
		$data['results']=$this->author_counts_by_year->add_author_counts();
//todo need to remove previous csv file
//Why export? $this->author_counts_by_year->exportCSV();
		$this->load->view('results_view', $data);		
	}
	
	public function buildCountryMarkers() {
		$this->load->model ('country_markers');
		$data['results']=$this->country_markers->build_country_markers();		
		$this->load->view('results_view', $data);		
	}

	public function scratchPad() {
		$this->load->model('authors');
		$this->load->model('menus');

		$data['gender']=$this->input->post('gender');
		$data['multilingual']=$this->input->post('multilingual');
		$data['language']=$this->input->post('language');
		$data['region']=$this->input->post('region');
		$data['continent']=$this->input->post('continent');
		if ($data['continent'] == 'Oceania'){$data['newBounds'] = "91.125,-42.975,181.125,2.025";}
		$data['role']=$this->input->post('role');

		$data['counts'] = $this->authors->counts_by_country();
		$this->load->view('scratchpad_view',$data);
	}

}

/* Location: ./application/controllers/iwpdata.php */