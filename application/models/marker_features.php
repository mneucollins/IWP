<?php

/**
 * Model Class Menus  includes functions to manage the menus table and related menu_items table
 *  import from csv
 *  build html menu div
 *
 * @author mneucoll
 */
class Marker_Features extends CI_model {

    function __construct() {
// Call the Model constructor
        parent::__construct();
    }
    
    function build_markers_geojson() {
    
    	$this->create_cohort();
		$geojson = "{ \"type\": \"FeatureCollection\", \"features\": [ ";

    	$sql = "SELECT country_markers_projected.id AS country_id, author_countries.country, count(*) AS n , ST_AsGeoJSON(the_geom) AS geojson
					FROM cohort JOIN author_countries
					JOIN country_markers_projected ON country_markers_projected.author_country =  author_countries.country
					ON cohort.authors_id = author_countries.authors_id
					GROUP BY country_id, author_countries.country, geojson";
    	
    	$counts = $this->db->query($sql);
		if ($counts->num_rows() > 0){
			foreach ($counts->result() as $count){
				//calc number of columns of 10 and set width
				//get authors for popup
				$sql = "SELECT author_name, year_of_attendance FROM author_names
							JOIN cohort ON author_names.authors_id = cohort.authors_id
							JOIN author_countries ON author_countries.authors_id = author_names.authors_id
							JOIN author_years ON author_years.authors_id = author_names.authors_id
							WHERE author_countries.country = ".$this->db->escape($count->country)."
							GROUP BY author_name, year_of_attendance";
				$authors = $this->db->query($sql);
				
				$geojson .= "{\"geometry\":".$count->geojson.",\"type\": \"Feature\", \"properties\":{";
				$geojson .= "\"name\":\"".$count->country."\",";
				$geojson .= "\"popupContent\":\"<b>".$count->country."&nbsp;(".$count->n.")</b><hr />";
				$n=0;
				foreach ($authors->result() as $author){
					$n++;
					$geojson .= $author->author_name."(".$author->year_of_attendance.")<br />";
				}
				
				$radius = ($count->n + 6) *.4;
				
				$geojson .= "\"}, \"radius\": ".$radius.", \"id\": ".$count->country_id."},";
			}
		} 		
		$geojson = substr($geojson,0,-1);
		$geojson .=  "]}";
		return $geojson;	    
    }

	function create_cohort() {
			        

	    $country = $this->input->post('country');
	    if (!empty($country)) {
	    	$this->db->query ("CREATE OR REPLACE VIEW country as select authors_id FROM author_countries WHERE country = '".$country."'");
	    	$to_join[]="country";
	    }

	    $region = $this->input->post('region');
	    if (!empty($region)) {
	    	$this->db->query ("CREATE OR REPLACE VIEW region as select authors_id FROM author_regions WHERE region = '".$region."'");
	    	$to_join[]="region";
	    }

		$residency = $this->input->post('residency');
		if (empty($residency)) {$residency = $this->max_year(); }
		
		if (!empty($residency)) {
		    $count_type = $this->input->post('count_type');
		    if ($count_type=='annual') {
		    	$this->db->query ("CREATE OR REPLACE VIEW residency AS SELECT authors_id FROM author_years WHERE year_of_attendance = ".$residency );
		    } else {
		    	$this->db->query ("CREATE OR REPLACE VIEW residency AS SELECT authors_id FROM author_years WHERE year_of_attendance <= ".$residency );
		    }
			$to_join[] = "residency";
		}

		$YOB = $this->input->post('YOB');
	    if (!empty($YOB)) {
	    	$this->db->query ("CREATE OR REPLACE VIEW YOB as select id AS authors_id FROM authors WHERE year_of_birth = '".$YOB."'");
	    	$to_join[]="YOB";
	   	}
	   	
	   	$gender =$this->input->post('gender');
	    if (!empty($gender)) {
	    	if ($gender != "any"){
		    	$this->db->query ("CREATE OR REPLACE VIEW gender as select id AS authors_id FROM authors WHERE gender = '".$gender."'");
		    	$to_join[]="gender";
		    }
	    }
	   	
		$multilingual=$this->input->post('multilingual');
		if ($multilingual == "single"){
			$this->db->query ("CREATE OR REPLACE VIEW multilingual AS SELECT authors_id FROM author_languages GROUP BY authors_id HAVING count(authors_id) = 1");
			$to_join[]="multilingual";
		}
		if ($multilingual == "multi"){
			$this->db->query ("CREATE OR REPLACE VIEW multilingual AS SELECT authors_id FROM author_languages GROUP BY authors_id HAVING count(authors_id) > 1");
			$to_join[]="multilingual";
		}
			
		$language=$this->input->post('language');
		if (!empty($language)){
			$this->db->query("CREATE OR REPLACE VIEW language AS SELECT authors_id FROM author_languages WHERE language ='".$language."'");
			$to_join[] = "language";
		}
		
		$role=$this->input->post('role');
		if (!empty($role)){
			$this->db->query("CREATE OR REPLACE VIEW role AS SELECT authors_id FROM author_writing_roles WHERE writing_role ='".$role."'"); 
			$to_join[] = "role";
		}

		
		$macro_region=$this->input->post('macro_region');
		if (!empty($macro_region)){
			$this->db->query("CREATE OR REPLACE VIEW macro_region AS SELECT authors_id FROM author_macro_regions WHERE macro_region ='".$macro_region."'"); 
			$to_join[] = "macro_region";
		}
		if (!empty($to_join)) {
			$sql = "CREATE OR REPLACE VIEW cohort AS SELECT id AS authors_id FROM authors ";
			foreach ($to_join as $view) {
				$sql .= " JOIN $view ON authors.id = $view.authors_id ";
			}
			$this->db->query($sql);

		}
	    

	}
	
	function update_the_geom() {
		$sql = "UPDATE country_markers_projected SET the_geom = ST_SetSRID(ST_MakePoint(marker_lon, marker_lat),4326) WHERE the_geom is null";
		$this->db->query($sql);
	}
    
    function max_year() {
	    $sql = "select max(year) AS max_year from author_counts_by_year";
	    $query = $this->db->query($sql);
	    return $query->row()->max_year;
    }
    
    
}
?>