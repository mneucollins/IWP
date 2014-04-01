-- Table: author_names

DROP TABLE author_names;

CREATE TABLE author_names
(
  id serial NOT NULL,
  authors_id integer,
  given_name character varying(64) DEFAULT NULL::character varying,
  family_name character varying(64) DEFAULT NULL::character varying,
  name_suffix character varying(64) DEFAULT NULL::character varying,
  pseudonym character varying(128) DEFAULT NULL::character varying,
  name_order character varying(64) DEFAULT NULL::character varying,
  name_sort character varying(64) DEFAULT NULL::character varying,
  author_name character varying(128) DEFAULT NULL::character varying,
  last_modified timestamp without time zone,
  CONSTRAINT author_names_pkey PRIMARY KEY (id),
  CONSTRAINT author_names_authors_id_fkey FOREIGN KEY (authors_id)
      REFERENCES authors (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE author_names
  OWNER TO opengeo;

-- Trigger: update_timestamp on author_names

-- DROP TRIGGER update_timestamp ON author_names;

CREATE TRIGGER update_timestamp
  BEFORE INSERT OR UPDATE
  ON author_names
  FOR EACH ROW
  EXECUTE PROCEDURE update_timestamp();

