<?php

class Author_writing_roles extends dbo {
	
	public static $dbFields;
	public static $dbFieldTypes;
	public static $tableName = 'author_writing_roles';
	
	public function replace_quotes() {
		$roles = $this->db->get('author_writing_roles');
		foreach ($roles->result() as $author) {
			$author->writing_role = str_replace("'", "''", $author->writing_role);
//fred ($author->writing_role, "encoded writing role");
			$this->db->where('id', $author->id);
			$this->db->update('author_writing_roles', $author); 
		}
	}
}