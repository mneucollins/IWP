<?php
 class Parameters extends CI_Model {
	
	function __construct()
    {
    	// Call the Model constructor
        parent::__construct();
    }	

	function build_parameters() {
		$pstr = "";
		$pstr .= $this->build_country_list();
		
	}
	
	function build_country_list ($selected_country){
		$sql = "SELECT author_countries.country AS country, countries_to_cntry_name.id AS countryid
			FROM author_countries
			JOIN countries_to_cntry_name ON author_countries.country = countries_to_cntry_name.author_country
			GROUP BY country, countryid ORDER BY country";
		
		//$sql = "SELECT country FROM author_countries GROUP BY country ORDER BY country";
		$countries = $this->db->query($sql);

	    $country_list = "<select name='country'>\r\n
	        				<option value='0' "; 
	    $selected = ($selected_country=='0') ? 'selected' : '';
	    $country_list .= " ></option> \r\n";

    	foreach($countries->result() as $row) {	
		    $selected = ($selected_country==$row->countryid) ? 'selected' : '' ;
			$country_list .= "<option value='".$row->countryid."'";
			//$country_list .= "<option value='".$row->id."'";
			$country_list .= $selected .">".$row->country."</option>\r\n";
    	}
	    $country_list .= "</select>\r\n"; 
	    return $country_list;
		
	}

}

?>