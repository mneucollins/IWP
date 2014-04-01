<?php

class Authors extends dbo {

    public static $dbFields;
    public static $dbFieldTypes;
    public static $tableName = 'authors';

    public function counts_by_country() {
        $sql = "SELECT author_countries.country, ST_X(cshapes_centroid.the_geom), ST_Y(cshapes_centroid.the_geom), count(*)
                    FROM authors 
                    JOIN author_countries ON authors.id = author_countries.authors_id
                    JOIN countries_to_cntry_name ON author_countries.country = countries_to_cntry_name.author_country
                    JOIN cshapes ON countries_to_cntry_name.cshapes_cntry_name = cshapes.cntry_name
                    JOIN cshapes_centroid ON cshapes.featureid = cshapes_centroid.featureid
                WHERE cshapes.coweyear > 2011
                GROUP BY author_countries.country, cshapes_centroid.the_geom" ;
        $query = $this->db->query($sql);
        $i=0;
        foreach ($query->result() as $row)
            {
               $arCount[$i]['country'] = $row->country;
               $arCount[$i]['st_x'] = $row->st_x;
               $arCount[$i]['st_y'] = $row->st_y;
               $arCount[$i]['count'] = $row->count;
               $i++;
            }
        return !empty($arCount)? $arCount : false;
    }

}