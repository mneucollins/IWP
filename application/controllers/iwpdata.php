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
	
	public function importMasterList() {
		$this->load->model("masterlist");
		if ($this->input->post('upload')){
			$data['results']="Imported ".$this->masterlist->importMasterList()." records from IWP_Masterlist";
//			$this->load->view('loadMasterlistView');
// 			$this->load->view('results_view', $data);
		} elseif ($this->input->post('return')) {
			$this->load->view('mainmenu');	
		} else {
			$this->load->view('loadMasterlistView');
		}
	}
	
	public function iwpParse() {
		$this->load->model('iwpimport');
		$data['results'] = $this->iwpimport->process_imported() ;
		$this->load->view('results_view', $data);
	}
	

	public function loadMenus() {
		$this->load->model('menus');
		$data['results'] = $this->menus->load_csv();
		$this->load->view('results_view', $data);
	}

	public function loadCountsByYear(){
		$this->load->model ('author_counts_by_year');
		$data['results']=$this->author_counts_by_year->add_author_counts();
//todo need to remove previous csv file
//Why export? $this->author_counts_by_year->exportCSV();
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
	
	public function createViews() {
		$minyear = 1967;
		$maxyear = 2015;
		//fix last year problem
		$sql = "update cshapes_042_mollweide set cowedate = '2014-01-01' where cowedate = '2013-12-31'";
		$this->db->query($sql);
		
		//increment cowedate for new year
		$sql = "update cshapes_042_mollweide set cowedate = '2015-01-01' where cowedate = '2014-01-01'";
		$this->db->query($sql);

		
		for ($year=1966; $year<$maxyear; $year++) {
		
			$vname = "cshapes_mollweide_042_".$year;
			$vdate = "$year-12-31";
			$sql = "DROP VIEW IF EXISTS $vname";
			$this->db->query($sql);
		
			$sql = "CREATE OR REPLACE VIEW $vname AS 
					 SELECT cshapes_042_mollweide.gid, 
					    cshapes_042_mollweide.cntry_name, 
					    cshapes_042_mollweide.area, 
					    cshapes_042_mollweide.capname, 
					    cshapes_042_mollweide.caplong, 
					    cshapes_042_mollweide.caplat, 
					    cshapes_042_mollweide.featureid, 
					    cshapes_042_mollweide.cowcode, 
					    cshapes_042_mollweide.cowsyear, 
					    cshapes_042_mollweide.cowsmonth, 
					    cshapes_042_mollweide.cowsday, 
					    cshapes_042_mollweide.coweyear, 
					    cshapes_042_mollweide.cowemonth, 
					    cshapes_042_mollweide.coweday, 
					    cshapes_042_mollweide.gwcode, 
					    cshapes_042_mollweide.gwsyear, 
					    cshapes_042_mollweide.gwsmonth, 
					    cshapes_042_mollweide.gwsday, 
					    cshapes_042_mollweide.gweyear, 
					    cshapes_042_mollweide.gwemonth, 
					    cshapes_042_mollweide.gweday, 
					    cshapes_042_mollweide.isoname, 
					    cshapes_042_mollweide.iso1num, 
					    cshapes_042_mollweide.iso1al2, 
					    cshapes_042_mollweide.iso1al3, 
					    cshapes_042_mollweide.geom, 
					    cshapes_042_mollweide.cowsdate, 
					    cshapes_042_mollweide.cowedate
					  FROM cshapes_042_mollweide
					  WHERE cshapes_042_mollweide.cowsdate <= '".$vdate."'::date AND cshapes_042_mollweide.cowedate > '".$vdate."'::date";
					  
			$this->db->query($sql);
		
			$sql = "ALTER TABLE $vname OWNER TO postgres";
			$this->db->query($sql);
		}
	$data ['results']= "Created views $minyear to $maxyear ";
	$this->load->view('results_view', $data);		

	}
	
	public function update_country_markers_projected(){
		$this->load->model ('marker_features');
		$this->marker_features->update_the_geom();
		redirect ('http://localhost:8888/IWP/index.php/iwpdata');
	}
	
	public function encode(){
		$this->load->model('author_writing_roles');
		$this->author_writing_roles->replace_quotes();
		redirect ('http://localhost:8888/IWP/index.php/iwpdata');
	}

}

/* Location: ./application/controllers/iwpdata.php */