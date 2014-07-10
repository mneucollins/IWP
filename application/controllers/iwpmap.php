<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class IWPMap extends CI_Controller {


	public function index()
	{
		$this->load->model('marker_features');
		$postvars =$this->input->post();
		$residency = $this->input->post('residency'); 
		if (empty($residency)) {
			$data['residency'] = date('Y')-1;
		} else {
			$data['residency']=$residency;			
		}
/* 		if (!empty($postvars)) { */
			$data['geojson'] = $this->marker_features->build_markers_geojson(); 
/* 		} */
		$data ['country']=$this->input->post('country');

		$data['count_type']=$this->input->post('count_type');
		$data['YOB']=$this->input->post('YOB');
		$data['gender']=$this->input->post('gender');
		$data['multilingual']=$this->input->post('multilingual');
		$data['language']=$this->input->post('language');
		$data['region']=$this->input->post('region');
		$data['macro_region']=$this->input->post('macro_region');
		$data['role']=$this->input->post('role');
		

		/* $data['counts'] = $this->authors->counts_by_country(); */

		$this->load->view('map_view', $data );
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */