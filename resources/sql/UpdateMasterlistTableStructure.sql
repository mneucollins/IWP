-- Table: xls_import_log

-- DROP TABLE xls_import_log;

CREATE TABLE xls_import_log
(
  id integer NOT NULL,
  msg character varying(255),
  last_modified timestamp with time zone,
  CONSTRAINT "Primary Key" PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE xls_import_log
  OWNER TO opengeo;
