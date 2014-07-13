-- Table: author_macro_regions

DROP TABLE IF EXISTS author_macro_regions CASCADE;

CREATE TABLE author_macro_regions
(
  id serial,
  authors_id integer,
  continent character varying(64) DEFAULT NULL::character varying,
  last_modified timestamp without time zone,
  CONSTRAINT author_macro_regions_pkey PRIMARY KEY (id),
  CONSTRAINT author_macro_regions_authors_id_fkey FOREIGN KEY (authors_id)
      REFERENCES authors (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE author_macro_regions
  OWNER TO opengeo;

-- Trigger: update_timestamp on author_macro_regions

DROP TRIGGER IF EXISTS update_timestamp ON author_macro_regions;

CREATE TRIGGER update_timestamp
  BEFORE INSERT OR UPDATE
  ON author_macro_regions
  FOR EACH ROW
  EXECUTE PROCEDURE update_timestamp();

