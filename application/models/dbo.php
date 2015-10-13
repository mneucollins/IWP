<?php
Class DBO extends CI_Model {

    public static $tableName;
    public static $dbFields;   //array of fields
    public static $dbFieldTypes;
    public static $fieldsToSearch;  //array of fields to be searched in this->grab_where()
    public static $ignoreOnSave; //array of fields to be ignored on update or create
    //results sorted on first to last field specified

    function __construct() {
        parent::__construct();
        static::setDBFields();
        //initialize object variables
        foreach (static::$dbFields as $dbField) {
            //initialize the object attributes
            $this->$dbField = '';
        }
        static::$ignoreOnSave = array("last_modified", "create_date");
    }

    protected static function setDBFields() {
        static::$dbFields = array();
        
        $CI = & get_instance();
        $sql = "select column_name, udt_name from INFORMATION_SCHEMA.COLUMNS where table_name = '" . static::$tableName . "'";
        $query = $CI->db->query($sql);
        foreach ($query->result() as $row) {
            static::$dbFields[] = $row->column_name;
            //static::$dbFieldTypes[] = $row->Type;
            static::$dbFieldTypes[$row->column_name] = $row->udt_name;
        }
    }
    
    function clear_table() {
		$dbAdmin = $this->load->database('admin', true);
		//cascade needed for psql
		//$dbAdmin->truncate(static::$tableName);
		$sql = "TRUNCATE ".static::$tableName." CASCADE ";
		return $this->db->query($sql);
	}


    public function record_count() {
        return $this->db->count_all(static::$tableName);
    }
    
    public function is_blank($value) {
        return empty($value) && !is_numeric($value);
    }

    function isValidDateTime($dateTime) {
        //checks to see if the value is a valid MySQL datetime
        if (preg_match("/^(\d{4})-(\d{2})-(\d{2}) ([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/", $dateTime, $matches)) {
            if (checkdate($matches[2], $matches[3], $matches[1])) {
                return true;
            }
        }
        return false;
    }

    public function findByID($id = 0) {
        $query = $this->db->get_where(static::$tableName, array('id' => $id));
        $row = $query->row();
        //previously this method returned the row data but did not instantiate an object
        if (!empty($row)) { 
            //instantiate object and set object attributes
            $obj = $this->instantiate($row);
        }
        return !empty($obj) ? $obj : false;
    }

    public function instantiate($row) {
        $obj = new static;
        foreach (static::$dbFields as $dbField) {
            $obj->$dbField = $row->$dbField;
        }
        return $obj;
    }
    
    public function hasAttribute($attribute) {
        return in_array($attribute, static::$dbFields);
    }

    protected function attributes() {
        //return an array of non-empty attribute names and values
        //problem: unable to update filed to a blank value with this
        //but if we take out the 1is_blank conditions, data not explicitely
        //passed as a post variable is zapped
        $attributes = array();
        foreach (static::$dbFields as $field) {
            if (property_exists($this, $field) && !in_array($field, static::$ignoreOnSave)) {
                //if it is a post field accept blank values, elxe do not
                //$postval =$this->input->post($field);
                if (isset($_POST["$field"])) {
                    $attributes[$field] = $this->$field;                    
                } else {
                    if (!$this->is_blank($this->$field) ) {
                        $attributes[$field] = $this->$field;
                    }
                }
            }
        }
        return (!empty($attributes)) ? $attributes : false;
    }

    public function postVarsToAttributes() {
        foreach (static::$dbFields as $dbField) {
            if ($this->input->post($dbField)) {
                $this->$dbField = $this->input->post($dbField);
            }
        }
    }

    public function save() {
        //do this in the calling function to avoid postvar naming problems
        //$this->postVarsToAttributes();
        //fred($this,"this on save");
        if ($this->id) {
            $this->update();
        } else {
            $this->create();
        }
        //$this->msg = "{$this->username} saved";
    }

    public function create() {
        //$attributes = $this->attributes();
        //$fieldstr = "";
        //$valuestr = "";
        $attributes = $this->attributes();
        $this->db->insert(static::$tableName, $attributes);
		if (empty($this->id)) {
        	$this->id = $this->db->insert_id();
		}	
    }

    public function update() {
        $fieldvalues = "";
        foreach(static::$dbFields as $dbField) {
            if (!in_array($dbField, static::$ignoreOnSave)) {
                if (!empty($fieldvalues)) { $fieldvalues .= ",  "; }
                $fieldvalues .= "$dbField = ".$this->db->escape($this->$dbField);
            }
        }
        
        $sql = "UPDATE ".static::$tableName." SET $fieldvalues WHERE id = '{$this->id}'";
        $query = $this->db->query($sql); 
    }

    public function delete() {
        //recursive delete
        //psql will auomatically take care of relational integrity with the "cascade" directive
        //rewrite this function
        $sql = "SELECT `id`, `base_table`, `base_field`, `relate_table`, `relate_model`, `relate_field` 
                FROM `relationships` 
                WHERE `base_table` = '".static::$tableName."'";
        $relatedTables = $this->db->query($sql);
        if ($relatedTables->num_rows() > 0) {//this table has a related table, check to see if there are any records
            foreach ($relatedTables->result() as $relatedTable){ 
                if($parentObj = $this->findByID($this->id)){ //findByID returns false if not found
                    $sql = "SELECT `id` 
                            FROM `{$relatedTable->relate_table}` 
                            WHERE `{$relatedTable->relate_field}` = '".$parentObj->{$relatedTable->base_field}."'";
                    $relatedRecords = $this->db->query($sql);

                    if ($relatedRecords->num_rows() > 0) {//there are related records, delete them
                        $childModel = $relatedTable->relate_model;
                        $this->load->model($childModel);
                        foreach ($relatedRecords->result() as $child) {
                            $childRec = $this->$childModel->findByID($child->id);
                            $childRec->delete();
                        }
                    }
                }
            }
        }
        $this->db->where('id', $this->id);
        $this->db->delete(static::$tableName);
    }

    public function clear_attributes() {
        //re-initialize dbField attributes to null
        foreach (static::$dbFields as $attribute) {
            $this->$attribute = null;
        }
    }
    
    public function exportCSV() {
        $sql = "COPY ".static::$tableName." to '" . FCPATH . "resources/export_data/".static::$tableName.".csv' DELIMITER ',' CSV HEADER";
        $this->db->query($sql);

	}
}

?>