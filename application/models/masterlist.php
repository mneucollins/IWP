<?php

class Masterlist extends dbo {
	
	public static $dbFields;
	public static $dbFieldTypes;
	public static $tableName = 'masterlist';
	
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
				family_name character varying(64),
				given_name character varying(64),
				oclc character varying(64),
				penname character varying(64),
				drupal_nid integer,
				CONSTRAINT \"masterlist_pk\" PRIMARY KEY (id)
				)
				WITH ( OIDS=FALSE );
			ALTER TABLE masterlist OWNER TO opengeo;";
		$this->db->query($sql);
	}			
	
	public function importMasterList() {
		$sql = "TRUNCATE masterlist";
		$this->db->query($sql);
		$sql = "COPY masterlist ( 
					macro_region, 
					region, country, 
					iwp_program, 
					years, 
					family_name, 
					given_name, 
					oclc, 
					penname, 
					drupal_nid
					) 
				FROM '".FCPATH."resources/csv/IWP_Masterlist.csv' DELIMITERS ',' CSV HEADER;";
		
		$this->db->query($sql);
		
		return $this->db->count_all('masterlist');
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
	
}