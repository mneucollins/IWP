-- Table: country_markers

-- DROP TABLE country_markers;

CREATE TABLE country_markers
(
  id bigserial NOT NULL,
  author_country_name character varying(64),
  marker_name character varying(64),
  marker_lng double precision,
  marker_lat double precision,
  CONSTRAINT country_markers_pkey PRIMARY KEY (id),
  CONSTRAINT country_markers_author_country_name_key UNIQUE (author_country_name)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE country_markers
  OWNER TO opengeo;
