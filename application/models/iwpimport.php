<?php

class iwpimport extends dbo {

	public static $dbFields;
	public static $dbFieldTypes;
	public static $tableName = 'iwpimport';

	//XML parse variables
	public static $dbFieldsTags;
	public $recordtag;
	public $tag;
	public $insideElement;
	public $importfilename = 'application/import_data/map_data.xml';

	public $multivaluefields = array('ROLE', 'REGION', 'COUNTRY', 'CONTINENT', 'LANGUAGE', 'SESSION');

	function __construct() {
		parent::__construct();
		foreach (static::$dbFields as $dbField) {
			//dbFields[tagname]=>attributename
			switch ($dbField){
				case 'id':      $dbFieldTag = 'NID';     break;
				case 'given_name' :   $dbFieldTag = 'GIVEN-NAME';   break;
				case 'family_name' :   $dbFieldTag = 'FAMILY-NAME';   break;
				case 'name_suffix' :   $dbFieldTag = 'NAME-SUFFIX';   break;
				case 'name_order' :   $dbFieldTag = 'NAME-ORDER';   break;
				case 'pseudonym' :    $dbFieldTag = 'PSEUDONYM';    break;
				case 'gender' :    $dbFieldTag = 'GENDER';    break;
				case 'year_of_birth' :   $dbFieldTag = 'YEAR-OF-BIRTH';   break;
				case 'year_of_death' :   $dbFieldTag = 'YEAR-OF-DEATH';   break;
				case 'year_of_attendance' : $dbFieldTag = 'SESSION';    break;
				case 'language' :    $dbFieldTag = 'LANGUAGE';    break;
				case 'writing_role' :   $dbFieldTag = 'ROLE';     break;
				case 'website' :    $dbFieldTag = 'WEBSITE';    break;
				case 'bibliography' :   $dbFieldTag = 'BIBLIOGRAPHY';   break;
				case 'writing_sample' :  $dbFieldTag = 'WRITING-SAMPLE';  break;
				case 'continent' :    $dbFieldTag = 'CONTINENT';    break;
				case 'country' :    $dbFieldTag = 'COUNTRY';    break;
				case 'region' :    $dbFieldTag = 'REGION';    break;
				case 'bio' :     $dbFieldTag = 'BIO';   break;
				default :	$dbFieldTag = null;	break;
			}
			if (!empty($dbFieldTag)) {static::$dbFieldsTags[$dbFieldTag] = $dbField;}
		}
	}


	function importXML() {
		$xml_parser = xml_parser_create();

		xml_set_object($xml_parser, $this);
		xml_set_element_handler($xml_parser, 'startElement', 'endElement');
		xml_set_character_data_handler($xml_parser, 'characterData');

		$this->recordtag = "NODE";

		//Loop for all
		$fp = @fopen($this->importfilename, "r")
			or die("Error reading XML import data -- import file is probably missing.");
		while ($data = fread($fp, 4096)) {
			xml_parse($xml_parser, $data, feof($fp))
				or die(sprintf("XML error: %s at line %d", xml_error_string(xml_get_error_code($xml_parser)), xml_get_current_line_number($xml_parser)));
		}
		fclose($fp);
		xml_parser_free($xml_parser);
		return $this->record_count();
	}

	function startElement($parser, $name, $attrs) {
		if ($this->insideElement) {
			//incoming xml from drupal has dashes(-) which are replaced with underscores(_) in PSQL
			$this->tag = $name;
		} else {
			if ($name == $this->recordtag) {
				$this->insideElement = true;
			}
		}
	}

	function endElement($parser, $name) {
		if ($name == $this->recordtag) { //end of record, clean up and write

			foreach (static::$dbFields as $field) {
				//remove trailing ; from multivalue fields
				$this->$field = trim($this->$field);
				$this->$field = rtrim($this->$field, ";");
//echo "$field: ".$this->$field."<br />";
			}
			//normally would call this->save, but since we are loading the id need to use the create method
			
//fred  ($this,"this");
//die;
			$this->create();
			$this->clear_attributes();
			$this->insideElement = false;
		} else {						
			if (in_array($name, $this->multivaluefields)){
				$attributeName = static::$dbFieldsTags[$name]; 
				$this->$attributeName .= ";";
			}
		}
	}

	function characterData($parser, $charData) {

		if ($this->insideElement) {
			if (!empty($this->tag)) {
				//test whether there is a field named $this->tag (container tags do not have fields)
				//the keys of dbFieldsTags are normalized to tag case, so search for it there
				if (array_key_exists($this->tag, static::$dbFieldsTags )) {
					$attributeName = static::$dbFieldsTags[$this->tag];
					$this->$attributeName .= $charData;
				}
			}
		}
	}

	public function process_imported() {
		//may need to run the truncate queries as admin
		//$dbAdmin = $this->load->database('admin', true);		
		
		//authors table
		$sql = "TRUNCATE authors CASCADE ";
		$this->db->query($sql);

		$sql = "INSERT into authors (nid, given_name, family_name) SELECT drupal_nid, drupal_given_name, upper(drupal_family_name) FROM masterlist ";
		$this->db->query($sql);
		
		$sql = "UPDATE authors SET name_order = iwpimport.name_order,
				pseudonym = iwpimport.pseudonym,
				gender = iwpimport.gender,
				year_of_birth = iwpimport.year_of_birth,
				year_of_death = iwpimport.year_of_death,
				bio = iwpimport.bio
				FROM iwpimport WHERE authors.nid = iwpimport.id";
		$this->db->query($sql);
		
		//author_macro_regions table
		$sql = "TRUNCATE author_macro_regions CASCADE ";
		$this->db->query($sql);

		$sql = "INSERT into author_macro_regions (authors_id, macro_region) SELECT authors.id, masterlist.macro_region FROM authors JOIN masterlist ON authors.nid = masterlist.drupal_nid GROUP BY authors.id, masterlist.macro_region";
		$this->db->query($sql);

		//author_regions table
		$sql = "TRUNCATE author_regions CASCADE ";
		$this->db->query($sql);

		$sql = "INSERT into author_regions (authors_id, region) SELECT authors.id, masterlist.region FROM authors JOIN masterlist ON authors.nid = masterlist.drupal_nid GROUP BY authors.id, masterlist.region";
		$this->db->query($sql);


		//author_years table
		$sql = "TRUNCATE author_years CASCADE ";
		$this->db->query($sql);
		
		$sql = "SELECT authors.id, years FROM authors JOIN masterlist ON authors.nid = masterlist.drupal_nid 
				GROUP BY authors.id, masterlist.years ";
		$query = $this->db->query($sql);
		foreach ($query->result() as $row) {
			$years = explode(",", $row->years);
			foreach ($years as $year) {
				$sql2 = "INSERT INTO author_years (authors_id, year_of_attendance) VALUES (".$row->id.", ".$year.")";
					$this->db->query($sql2);
			}
		}

		//author_countries table
		$sql = "TRUNCATE author_countries CASCADE ";
		$this->db->query($sql);
		
		$sql = "SELECT authors.id, masterlist.country FROM authors JOIN masterlist ON authors.nid = masterlist.drupal_nid 
				GROUP BY authors.id, masterlist.country ";
		$query = $this->db->query($sql);
		foreach ($query->result() as $row) {
			if (strtoupper(trim($row->country)) != "BURMA/MYANMAR") {
				$countries = explode("/", $row->country);
				foreach ($countries as $country) {
					if ($country == "United States") {
						$country="United States of America";	
					}
					$sql2 = "INSERT INTO author_countries (authors_id, country) 
						VALUES (".$row->id.", ".$this->db->escape(trim($country)).")";
					$this->db->query($sql2);
				}
			} else {
				$sql2 = "INSERT INTO author_countries (authors_id, country) 
					VALUES (".$row->id.", ".$this->db->escape(trim($row->country)).")";
				$this->db->query($sql2);
			}	
		}
		//"fix" GDR
		$sql = "UPDATE author_countries
			SET country = 'Germany Democratic Republic'
			FROM author_years
			WHERE author_countries.authors_id = author_years.authors_id
			AND author_years.year_of_attendance < 1991
			AND upper(author_countries.country) LIKE 'GERMANY' ";
		$this->db->query($sql);
		
		
		//author_languages table
		$sql = "TRUNCATE author_languages CASCADE ";
		$this->db->query($sql);
		
		$sql = "SELECT authors.id, language FROM authors JOIN iwpimport ON authors.nid = iwpimport.id 
				GROUP BY authors.id, iwpimport.language ";
		$query = $this->db->query($sql);
		foreach ($query->result() as $row) {
			$languages = explode(",", $row->language);
			foreach ($languages as $language) {
				$sql2 = "INSERT INTO author_languages (authors_id, language) 
					VALUES (".$row->id.", ".$this->db->escape(trim($language)).")";
				$this->db->query($sql2);
			}
		}
		
		//author_writing_roles table
		$sql = "TRUNCATE author_writing_roles CASCADE ";
		$this->db->query($sql);
		
		$sql = "SELECT authors.id, iwpimport.writing_role FROM authors JOIN iwpimport ON authors.nid = iwpimport.id 
				GROUP BY authors.id, iwpimport.writing_role ";
		$query = $this->db->query($sql);
		foreach ($query->result() as $row) {
			$writing_roles = explode(";", $row->writing_role);
			foreach ($writing_roles as $writing_role) {
				
				$sql2 = "INSERT INTO author_writing_roles (authors_id, writing_role) 
					VALUES (".$row->id.", ".$this->db->escape(trim($writing_role)).")";
				$this->db->query($sql2);
			}
		}
		
		//author_names table
		$sql = "INSERT INTO author_names (authors_id, given_name, family_name, name_suffix, pseudonym, name_order)
				SELECT id, given_name, family_name, name_suffix, pseudonym, name_order FROM authors";
		$this->db->query($sql);

		$sql = "UPDATE author_names SET author_name = concat(given_name, ' ', family_name,' ', name_suffix), name_sort = family_name WHERE name_order = 'Given name first'";
		$this->db->query($sql);

		$sql = "UPDATE author_names SET author_name = concat(family_name, ' ', given_name,' ', name_suffix), name_sort = given_name WHERE name_order = 'Family name first'";
		$this->db->query($sql);

		$sql = "UPDATE author_names SET author_name = concat(author_name, ' (', pseudonym ,')') WHERE pseudonym is not null";
		$this->db->query($sql);
		
		$return_string = "Import records parsed:<br />";
		$return_string .= "&nbsp;&nbsp;Author Records: ".$this->db->count_all('authors')."<br />";
		$return_string .= "&nbsp;&nbsp;Author year records: ".$this->db->count_all('author_years')."<br />";
		$return_string .= "&nbsp;&nbsp;Author language records: ".$this->db->count_all('author_languages')."<br />";
		$return_string .= "&nbsp;&nbsp;Author macro_region records: ".$this->db->count_all('author_macro_regions')."<br />";
		$return_string .= "&nbsp;&nbsp;Author region records: ".$this->db->count_all('author_regions')."<br />";
		$return_string .= "&nbsp;&nbsp;Author country records: ".$this->db->count_all('author_countries')."<br />";
		return $return_string;
	}
}

?>
