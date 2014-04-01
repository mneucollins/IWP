-- Table: author_counts_by_year

DROP TABLE author_counts_by_year;

CREATE TABLE author_counts_by_year
(
  id serial NOT NULL,
  featureid integer NOT NULL,
  cshapes_cntry_name character varying(32),
  author_country_name character varying(32),
  year integer NOT NULL,
  author_count integer,
  cumulative_count integer DEFAULT 0,
  CONSTRAINT author_counts_by_year_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE author_counts_by_year
  OWNER TO opengeo;
