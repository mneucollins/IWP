<?php

class Masterlist extends dbo {
	
	public static $dbFields;
	public static $dbFieldTypes;
	public static $tableName = 'masterlist';

	public static $importLogTable = "masterlist_import_log";
	public static $uploadView = "loadmasterlist_view";


	public function create_table() {
		$sql = "DROP TABLE masterlist";
		$this->db->query($sql);
		$sql = "CREATE TABLE masterlist (
				id serial NOT NULL,
				macro_region character varying(32),
				region character varying(32),
				country character varying(32),
				iwp_program character varying(32),
				years character varying(32),
				family_name character varying (64),
				given_name character varying (64),
				oclc character varying(64),
				penname character varying(64),
				drupal_family_name character varying(64),
				drupal_given_name character varying(64),
				drupal_nid integer,
				CONSTRAINT \"masterlist_pk\" PRIMARY KEY (id)
				)
				WITH ( OIDS=FALSE );
			ALTER TABLE masterlist OWNER TO opengeo;";
		$this->db->query($sql);
	}			
	
	
	
	
	public function x_importMasterList() {
		
		
		$sql = "TRUNCATE masterlist";
		$this->db->query($sql);
		$sql = "COPY masterlist ( 
					macro_region, 
					region, 
					country, 
					iwp_program, 
					years, 
					oclc, 
					penname, 
					drupal_family_name, 
					drupal_given_name, 
					drupal_nid
					) 
				FROM '".FCPATH."resources/csv/IWP_Masterlist.csv' DELIMITERS ',' CSV HEADER;";
		
		$this->db->query($sql);
		
		$sql = "UPDATE masterlist SET 
			macro_region = initcap(macro_region),
			region = initcap(region), 
			country = initcap(country)";
		$this->db->query($sql);
		
		return $this->db->count_all('masterlist');
	}
	
//---------------BELOW WILL BE THE NEW public function importMasterList() {
	
	function importMasterlist(){

		$data['msg'] = '';
		if ($this->input->post('return')) {
			redirect('iwpdata');
		} elseif ($this->input->post('upload')) {
			$config['upload_path'] = APPPATH . 'import_data/';
			$config['allowed_types'] = 'xls|xlsx';
			$config['max_size'] = 0;
			$config['file_name'] = 'masterlist_import.xls';
			$config['overwrite'] = TRUE;
			$this->load->library('upload', $config);
			$this->upload->initialize($config);
			if (!$this->upload->do_upload()) {
				$data['msg'] = $this->upload->display_errors();
			} else {
				//proc the excel file
				$uploadedfilename = $GLOBALS['_FILES']['userfile']['name'];
				$filename = $config['upload_path'] . $config['file_name'];

				$data['msg'] = $this->importXLS($filename);
				$msg = (empty($data['msg'])) ? 'no message' : $data['msg'];
				
				$this->db->insert('xls_import_log', array('msg'=>$msg));
			}
		}
		$this->load->view('loadMasterlistView', $data);
	}
	
	
	function importXLS($filename) {
		//precondition: XLS file has been uploaded ($this->uploadXLS)
		//use PHPExcel for this
		ini_set('memory_limit', '512M');
		$this->load->library('PHPExcel');
		$msg = '';
		
		$inputFileName = $filename;
		$inputFileType = PHPExcel_IOFactory::identify($inputFileName);
		$objReader = PHPExcel_IOFactory::createReader($inputFileType);
		
		//find sheet data_import_spec		
		$sheetname = 'IWP participants';
		$objReader->setLoadSheetsOnly($sheetname);
				
		$objPHPExcel = $objReader->load($inputFileName);

		if ($objPHPExcel->getSheetCount() != 1) { //sheet not found
			$msg.= "A worksheet named 'IWP Participants' was not found in this workbook" ;
			return $msg;	
		} else {
			$this->dbAdmin = $this->load->database('admin', true);
			$this->dbAdmin->truncate('masterlist');

			$sheetData = $objPHPExcel->getActiveSheet()->toArray(null,true,true,true);			
			//in fieldmap, the excel column name is the key and the table field name is the value
			$fieldmap = array (
				'macroregion'=>		'macro_region',
				'REGION'=>			'region',
				'COUNTRY'=>			'country',
				'IWP PROGRAM'=>		'iwp_program',
				'YEAR(S)'=>			'years',
				'FAMILY NAME'=>		'family_name',
				'GIVEN NAME'=>		'given_name',
				'OCLC'=>			'oclc',
				'penname'=>			'penname',
				'drupal_family_name'=>	'drupal_family_name',
				'drupal_given_name'=>	'drupal_given_name',
				'drupal_nid'=>		'drupal_nid'
			);
			
			foreach($sheetData as $rownum=>$columns){
				if ($rownum >2 ) { //skip first two rows
									
					if ($rownum == 3) { //build fieldlist array by matching column headings in first row stored in third row
						foreach ($columns as $column_name=>$column_value){
							$column_value = trim($column_value);
							if (array_key_exists($column_value, $fieldmap)) {
								$fieldlist[$column_name] = $fieldmap[$column_value];
								//ex $fieldlist['B'] = $fieldmap['macroregion']							
							}
						}										
					} else{ //build insert array on subsequent rows and submit query
						//foreach ($columns as $column_name=>$column_value){
						$blankrow = true;
						foreach ($fieldlist as $xcelCol=>$masterlistField) {
							if (!empty($columns[$xcelCol])) {$blankrow = false;}
							$data[$masterlistField] = $columns[$xcelCol];
						}

						if (!$blankrow) {
							$this->db->insert('masterlist', $data);							
							$recordsprocessed = $rownum-1;
						}
					}
				}
			}
			$msg = "Processed $recordsprocessed rows from the masterlist worksheet." ;
		}
		return $msg;
	}
	
	public function trim_names() {
		$sql = "SELECT id FROM ".static::$tablename ;
		$query = $this->db->query($sql);
		foreach ($query->result() as $row) {
			$author = $this->findByID($row->id);
			$author->given_name = trim($author->given_name);
			$author->family_name = trim($author->family_name);
			$author->save();
		}
	}
	
	public function escape_values() {
		//loop through all
		//update using active record pattern should automatically escape the data
		$masterlist = $this->db->get('masterlist');
		foreach ($masterlist->result() as $author) {
			$this->db->where('id', $author->id);
			$this->db->update('masterlist', $author); 
		}
		
	}
	
}