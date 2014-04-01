<?php

/**
 * Model Class Menus  includes functions to manage the menus table and related menu_items table
 *  import from csv
 *  build html menu div
 *
 * @author mneucoll
 */
class Menus extends CI_model {

    function __construct() {
// Call the Model constructor
        parent::__construct();
    }

    public function load_csv() {
        $sql = "TRUNCATE TABLE menus CASCADE";
        $query = $this->db->query($sql);
        $result = "menus table and menu_items table truncated<br />";
        $sql = "COPY menus FROM '" . FCPATH . "resources/csv/menus.csv' DELIMITER ',' CSV HEADER";
        $query = $this->db->query($sql);
        $result .= $this->db->affected_rows() . " record(s) loaded into menus table from menus.csv<br />";
        $sql = "COPY menu_items FROM '" . FCPATH . "resources/csv/menu_items.csv' DELIMITER ',' CSV HEADER";
        $query = $this->db->query($sql);
        $result .= $this->db->affected_rows() . " record(s) loaded into menu_items table from menu_items.csv <br />";
//fred ($result,"result");
        return $result;
    }

    public function build_menu($menu_id) {
        $sql = "SELECT css_id, css_class FROM menus WHERE id = $menu_id";
        $query = $this->db->query($sql);

        $menustr = "<div id = '" . $query->row()->css_id . "' class = '" . $query->row()->css_class . "'>\n";
        $menustr .= "<ul id = 'level1_menu_" . $menu_id . "'>\n ";

        $sql = "SELECT id, menu_item_text, url, target, css_class 
                FROM menu_items 
                WHERE menu_id = $menu_id 
                    AND child_of IS NULL 
                ORDER BY sort ASC";
        $level1 = $this->db->query($sql);
        if ($level1->num_rows() > 0) {
            foreach ($level1->result() as $level1_row) {
                $menustr .= $this->build_menu_item($level1_row);

                $sql = "SELECT id, menu_item_text, url, target, css_class 
                        FROM menu_items 
                        WHERE menu_id = $menu_id
                            AND child_of = " . $level1_row->id . "ORDER BY sort ASC";
                $level2 = $this->db->query($sql);

                if ($level2->num_rows() > 0) {
                    $menustr .= "<ul id = 'level2_menu_" . $level1_row->id . "'>\n ";
                    foreach ($level2->result() as $level2_row) {
                        $menustr .= $this->build_menu_item($level2_row);
                        $sql = "SELECT id, menu_item_text, url, target, css_class 
                                FROM menu_items 
                                WHERE menu_id = $menu_id
                                    AND child_of = " . $level2_row->id . "ORDER BY sort ASC";
                        $level3 = $this->db->query($sql);
                        if ($level3->num_rows() > 0) {
                            $menustr .= "<ul id = 'level3_menu_" . $level2_row->id . "'>\n ";
                            foreach ($level3->result() as $level3_row) {
                                $menustr .= $this->build_menu_item($level3_row);
                                $menustr.="</li>\n";
                            }
                            $menustr .= "</ul>\n";
                        }
                        $menustr.="</li>\n";
                    }
                    $menustr .= "</ul>";
                }
                $menustr.="</li>\n";
            }
            $menustr .= "</ul>\n";
        }
        $menustr .= "</div>\n";
        return $menustr;
    }

    function build_menu_item($row) {
        $menu_item = "<li ";
        $menu_item .=!empty($row->css_class) ? "class = '" . $row->css_class . "' " : '';
        $menu_item .= ">";
        $menu_item .=!empty($row->url) ? "<a href='" . $row->url . "' " : "<a href='#' ";
        $menu_item .=!empty($row->target) ? "target = '" . $row->target . "' " : '';
        $menu_item .= ">" . $row->menu_item_text . "</a>\n";
        return $menu_item;
    }

//                $menustr .= "<li ";
//                $menustr .= !empty($level1_row->css_class) ? "class = '".$level1_row->css_class."' " : '';
//                $menustr .= ">";
//                $menustr .= !empty($level1_row->url) ? "<a href='".$level1_row->url."' " : "<a href='#' ";
//                $menustr .= !empty($level1_row->target)? "target = '".$level1_row->target."' " : '';
//                $menustr .= ">".$level1_row->menu_item_text."</a></li>\n";


    function build_form($postvars) {
        
        $this->load->helper('form');
        $sql = "SELECT form_action FROM menus WHERE id = $menu_id";
        $query = $this->db->query($sql);
        //$form_action = $query->row()->form_action;
        $formstr = form_open($query->row()->form_action);

        $sql = "SELECT id, menu_item_text, css_class 
                FROM menu_items 
                WHERE menu_id = $menu_id 
                    AND child_of IS NULL 
                ORDER BY sort ASC";
        $level1 = $this->db->query($sql);
        if ($level1->num_rows() > 0) {
            $formstr .= "<ul class='no_marker'>";
            foreach ($level1->result() as $level1_row) {
                $formstr .= "<li class='{$level1_row->css_class}'>{$level1_row->menu_item_text}</li>";
                $sql2 = "SELECT id, menu_item_text, css_class, control_type 
                    FROM menu_items 
                    WHERE menu_id = $menu_id 
                    AND child_of = {$level1_row->id} 
                    ORDER BY sort ASC";
                $level2 = $this->db->query($sql2);
                if ($level2->num_rows() > 0) {
                    foreach ($level2->result() as $level2_row) {
//fred ($level2_row, "level2_row");
                        switch ($level2_row->control_type) {
                            case 'radio':
                                $formstr .= form_radio(array('name' => $level2_row->menu_item_text, 'value' => $level2_row->id, 'class' => $level2_row->css_class));
                                $formstr .= $level2_row->menu_item_text . "<br />";
                                break;
                            case 'checkbox':
                                $formstr .= form_checkbox(array('name' => $level2_row->menu_item_text, 'value' => $level2_row->id, 'class' => $level2_row->css_class));
                                $formstr .= $level2_row->menu_item_text . "<br />";
                                break;
                            case 'dropdown':
                                $arDrop[$level2_row->id] = $level2_row->menu_item_text;
                                break;
                        }
                    }
                    if (!empty($arDrop)) {
  //fred($arDrop,"arDrop");
                        $formstr .= form_dropdown($level1_row->menu_item_text, $arDrop, '');
                        $formstr .= "<br />";
                        
                        unset($arDrop);
                    }
                }
                $formstr .= "</ul>";
            }
        }
        return $formstr;
    }
}
?>