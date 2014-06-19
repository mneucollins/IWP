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
	public $importfilename = 'application/import_data/view-map_data.xml';

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
				case 'bio' :     $dbFieldTag = 'BIO';     break;
			}
			static::$dbFieldsTags[$dbFieldTag] = $dbField;
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
			}
			//fred ($this, "this");
			//normally would call this->save, but since we are loading the id need to use the create method
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

	public function parse_iwpimport() {
		$this->load->model('authors');
		$this->authors->clear_table();
		
		//note a direct insert query would be much faster here
		$sql = "INSERT INTO authors (nid, given_name, family_name, name_suffix, name_order, pseudonym, gender, year_of_birth, year_of_death, website, bibliography, writing_sample, bio)
					SELECT id, given_name, family_name, name_suffix, name_order, pseudonym, gender, year_of_birth, year_of_death, website, bibliography, writing_sample, bio
					FROM iwpimport";
		$query = $this->db->query($sql);
		
		$sql = "SELECT authors.id, year_of_attendance, language, writing_role, continent, country, region 
			FROM iwpimport JOIN authors ON iwpimport.id = authors.nid";
		$query = $this->db->query ($sql);

		foreach ($query->result() as $iwprecord) {
			$years = explode(";", $iwprecord->year_of_attendance);
			foreach ($years as $year) {
				$year = substr(trim($year),0,4);
				$sql= "INSERT INTO author_years (authors_id, year_of_attendance) VALUES ($iwprecord->id, $year)";
				$this->db->query($sql);
			}
			$languages = explode(";", $iwprecord->language);
			foreach ($languages as $language) {
				$sql= "INSERT INTO author_languages (authors_id, language) VALUES ($iwprecord->id, ".$this->db->escape($language).")";
				$this->db->query($sql);
			}
			$writing_roles = explode(";", $iwprecord->writing_role);
			foreach ($writing_roles as $writing_role) {
				$sql= "INSERT INTO author_writing_roles (authors_id, writing_role) VALUES ($iwprecord->id, ".$this->db->escape($writing_role).")";
				$this->db->query($sql);
			}
			
			//not all incoming continents are continents, some are countries
			$continentValues = array("Africa". "Americas", "Asia", "Europe", "Oceania");
			
			$continents = explode(";", $iwprecord->continent);
			foreach ($continents as $continent) {
				if (in_array($continent, $continentValues)) {
					$sql= "INSERT INTO author_continents (authors_id, continent) VALUES ($iwprecord->id, ".$this->db->escape($continent).")";
					$this->db->query($sql);					
				} else { //a country name is stored in the continent field
					$sql= "INSERT INTO author_countries (authors_id, country) VALUES ($iwprecord->id, ".$this->db->escape($continent).")";
					$this->db->query($sql);
					
				}
			}
			$countries = explode(";", $iwprecord->country);
			foreach ($countries as $country) {
				if ($country != "United States") {
					$sql= "INSERT INTO author_countries (authors_id, country) VALUES ($iwprecord->id, ".$this->db->escape($country).")";
					$this->db->query($sql);
				}
			}
			$regions = explode(";", $iwprecord->region);
			foreach ($regions as $region) {
				$sql= "INSERT INTO author_regions (authors_id, region) VALUES ($iwprecord->id, ".$this->db->escape($region).")";
				$this->db->query($sql);
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
		$return_string .= "&nbsp;&nbsp;Author continent records: ".$this->db->count_all('author_continents')."<br />";
		$return_string .= "&nbsp;&nbsp;Author region records: ".$this->db->count_all('author_regions')."<br />";
		$return_string .= "&nbsp;&nbsp;Author country records: ".$this->db->count_all('author_countries')."<br />";
		return $return_string;
	}
}

?>
