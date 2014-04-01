<?php

class Country_markers extends dbo {

	public static $dbFields;
	public static $dbFieldTypes;
	public static $tableName = 'country_markers';

	function __construct() {
		parent::__construct();
	}
	
	function build_country_markers () {
		$sql = "TRUNCATE TABLE country_markers";
		$this->db->query($sql);
		
		$sql = "INSERT INTO country_markers(author_country_name, marker_name,marker_lng, marker_lat )
				SELECT author_country, cshapes.capname, cshapes.caplong, cshapes.caplat FROM cshapes 
					JOIN countries_to_cntry_name ON cshapes.cntry_name = countries_to_cntry_name.cshapes_cntry_name
					WHERE author_country IS NOT NULL	
					GROUP BY author_country, cshapes.capname, cshapes.caplong, cshapes.caplat
					ORDER BY author_country, cshapes.capname";
		$this->db->query($sql);
		
		$markers = array (
			'Hong Kong'=> array('marker_name'=>'Hong Kong', 'marker_lat'=>22.3361568, 'marker_lng'=>114.1869659 ),
			'Tibet'=>array('marker_name'=>'Lhasa', 'marker_lat'=>29.65491, 'marker_lng'=>91.11354 ),
			'Wales'=>array('marker_name'=>'Cardiff', 'marker_lat'=>51.4752006531, 'marker_lng'=>-3.1733899117 ),
			'Scotland'=>array('marker_name'=>'Edingurgh', 'marker_lat'=>55.9507217407, 'marker_lng'=>-3.1923000813 ),
			'Northern Ireland'=>array('marker_name'=>'Belfast', 'marker_lat'=>54.6, 'marker_lng'=>-5.916667 ),
			'Palestinian Territories'=>array('marker_name'=>'Ramallah', 'marker_lat'=>31.9, 'marker_lng'=>35.2),
			'Czechoslovakia'=>array('marker_name'=>'Prague', 'marker_lat'=>50.09, 'marker_lng'=>14.35 ),
			'Czech Republic'=>array('marker_name'=>'Prague', 'marker_lat'=>50.09,'marker_lng'=>14.5),
			'Slovak Republic'=>array('marker_name'=>'Bratislava', 'marker_lat'=>48.15,'marker_lng'=>17.05),
			'Slovakia'=>array('marker_name'=>'Bratislava', 'marker_lat'=>48.15,'marker_lng'=>17.2),
			'USSR'=>array('marker_name'=>'Moscow', 'marker_lat'=>55.75,'marker_lng'=>37.55),
			'Russia'=>array('marker_name'=>'Moscow', 'marker_lat'=>55.75,'marker_lng'=>37.7),
			'Yugoslavia'=>array('marker_name'=>'Belgrade', 'marker_lat'=>44.82,'marker_lng'=>20.35),
			'Serbia and Montenegro'=>array('marker_name'=>'Belgrade', 'marker_lat'=>44.82,'marker_lng'=>20.5)
		);
		
		foreach($markers as $country_name=>$marker) {
			$this->db->where ('author_country_name', $country_name);
			$this->db->update ('country_markers', $marker);
		}
		
		//Brazil, use Brasilia
		$sql = "DELETE FROM country_markers WHERE author_country_name = 'Brazil' AND marker_name <> 'Brasilia'";
		$this->db->query($sql);
		$sql = "DELETE FROM country_markers WHERE author_country_name = 'Germany' AND marker_name <> 'Berlin'";
		$this->db->query($sql);
		$sql = "DELETE FROM country_markers WHERE author_country_name = 'Tanzania' AND marker_name <> 'Dodoma'";
		$this->db->query($sql);
		$sql = "DELETE FROM country_markers WHERE author_country_name = 'Nigeria' AND marker_name <> 'Abuja'";
		$this->db->query($sql);

		
		
		return "Total country_markers added and updated: ". $this->db->count_all('country_markers');
		
/*
		$sql = "UPDATE country_markers 
			SET marker_name='Hong Kong', 
			marker_lat=22.336156845092773, 
			marker_lng=114.18696594238281 
			WHERE author_country_name = 'Hong Kong'  ";
*/
			
		//take care of special cases
		//altername marker locations
			//Hong Kong 22.336156845092773,114.18696594238281
			//Tibet, Lhasa 29.65491 91.11354
			//Wales, Cardiff 51.4752006531,-3.1733899117
			//Scotland, Edinburgh 55.9507217407,-3.1923000813
			//Northern Ireland, Belfast 54.6, -5.916667
			//Palestinian Territories, East Jerusalem 31.768553, 35.213586
		//Double Capitals
			//Tanzania use Dar Es Salaam 
			//Brazil, use Brasilia
		//Shared Capitals
			//Czechoslovakia->Czech Republic (Prague)
			//USSR-->Russia (Moscow)
			//Yugoslavia-->Serbia & Montenegro (Belgrade)
			//Slovak Republic->Slovakia (Bratislava)		
	}
}

