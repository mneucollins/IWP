--precondition, cshapes already created and populated

DROP TABLE IF EXISTS cshapes_centroid;

CREATE TABLE cshapes_centroid
(
  id SERIAL PRIMARY KEY,
  featureid INTEGER REFERENCES cshapes(featureid) ON DELETE CASCADE,
  the_geom geometry(POINT,4326));

ALTER TABLE cshapes_centroid
  OWNER TO opengeo;
GRANT ALL ON TABLE cshapes_centroid TO opengeo;
GRANT ALL ON TABLE cshapes_centroid TO codeigniter;

--for some reason the query below creates an error when run in this file, but not when run alone
﻿INSERT INTO cshapes_centroid (featureid, the_geom) 
    SELECT featureid, ST_Centroid(the_geom) 
        FROM cshapes;