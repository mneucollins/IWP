-- Table: masterlist

DROP TABLE masterlist;

CREATE TABLE masterlist
(
  id serial NOT NULL,
  macro_region character varying(64),
  region character varying(64),
  country character varying(64),
  iwp_program character varying(32),
  years character varying(32),
  oclc character varying(64),
  penname character varying(64),
  family_name character varying(64),
  given_name character varying(64),
  drupal_family_name character varying(64),
  drupal_given_name character varying(64),
  drupal_nid integer,
  CONSTRAINT masterlist_pk PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE masterlist
  OWNER TO opengeo;
COMMENT ON TABLE masterlist
  IS 'data from IWP spreadsheet';
