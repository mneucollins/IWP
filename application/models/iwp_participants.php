<?php

class IWP_Participants extends dbo {
	
	public static $dbFields;
	public static $dbFieldTypes;
	public static $tableName = 'iwp_participants';
	
	public function trim_names() {
		$sql = "SELECT id FROM iwp_participants";
		$query = $this->db->query($sql);
		foreach ($query->result() as $row) {
			$author = $this->findByID($row->id);
			$author->given_name = trim($author->given_name);
			$author->family_name = trim($author->family_name);
			$author->save();
		}
	}
	
}