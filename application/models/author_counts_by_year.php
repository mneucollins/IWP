<?php

class Author_counts_by_year extends dbo {

	// fields: id, featureid, cshapes_cntry_name, year, author_count
	public static $dbFields;
	public static $dbFieldTypes;
	public static $tableName = 'author_counts_by_year';
	public static $cshapesTableName = 'cshapes_042_mollweide';
	
	function __construct() {
		parent::__construct();
	}


	function add_author_counts(){
		$this->clear_table(); //inherited from dbo
		//get year extents
		$sql = "SELECT Min(year_of_attendance) AS minyear FROM author_years";
		$query = $this->db->query($sql);
		$minyear = $query->row()->minyear;

		$sql = "SELECT Max(year_of_attendance) AS maxyear FROM author_years";
		$query = $this->db->query($sql);
		$maxyear = $query->row()->maxyear;

		//set up feature/country years
		for ($year=$minyear; $year<=$maxyear; $year++) {
			$testdate = "'".$year."-12-31'";
			$sql = "INSERT INTO author_counts_by_year (featureid, year, cshapes_cntry_name, author_country_name)
						SELECT featureid, $year, countries_to_cntry_name.cshapes_cntry_name, countries_to_cntry_name.author_country 
						FROM ".self::$cshapesTableName." LEFT JOIN countries_to_cntry_name ON countries_to_cntry_name.cshapes_cntry_name = ".self::$cshapesTableName.".cntry_name
						WHERE ".self::$cshapesTableName.".cowsdate < $testdate AND ".self::$cshapesTableName.".cowedate >= $testdate";
			$this->db->query($sql);
		}
		
		$sql = "SELECT id, author_country_name, year FROM author_counts_by_year ORDER BY year, author_country_name";
		$query=$this->db->query($sql);
		foreach($query->result() as $row) {
			$sqlupdate = "UPDATE author_counts_by_year
				SET author_count = (SELECT COUNT(*) FROM author_years 
					JOIN author_countries ON author_years.authors_id = author_countries.authors_id 
					WHERE year_of_attendance = $row->year
					AND author_countries.country = ".$this->db->escape($row->author_country_name).")
				WHERE id=$row->id";
			$this->db->query($sqlupdate);
		}
		
		//rerun the query	
		$query=$this->db->query($sql);
		foreach($query->result() as $row) {
			$sqlupdate = "UPDATE author_counts_by_year 
				SET cumulative_count = (SELECT SUM(author_count) from author_counts_by_year WHERE author_country_name='".$row->author_country_name."' AND year <= ".$row->year.")
				WHERE id = $row->id";
			$this->db->query($sqlupdate);
		}		

		$sql = "delete from author_counts_by_year WHERE cumulative_count is null OR cumulative_count=0";
		$this->db->query($sql);
		
		$this->load->library('table');
		$sql="SELECT * FROM author_counts_by_year ORDER BY year, cshapes_cntry_name";
		$query=$this->db->query($sql);
		return $this->table->generate($query);
	}

	function create_table(){
		$sql = " DROP TABLE author_counts_by_year;
				CREATE TABLE author_counts_by_year (
					id serial NOT NULL,
					featureid integer NOT NULL,
					cshapes_cntry_name character varying(32),
					author_country_name character varying(32),
					year integer NOT NULL,
					author_count integer,
					CONSTRAINT author_counts_by_year_pkey PRIMARY KEY (id)
					)
				WITH (OIDS=FALSE);
				ALTER TABLE author_counts_by_year OWNER TO opengeo;" ;
		$this->db->query($sql);
	}
	


}