DROP TABLE IF EXISTS authors CASCADE;
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  nid INTEGER, 
  given_name varchar(30) DEFAULT NULL,
  family_name varchar(21) DEFAULT NULL,
  name_suffix varchar(18) DEFAULT NULL,
  name_order varchar(17) DEFAULT NULL,
  pseudonym varchar(22) DEFAULT NULL,
  gender varchar(6) DEFAULT NULL,
  year_of_birth varchar(4) DEFAULT NULL,
  year_of_death varchar(4) DEFAULT NULL,
  website varchar(255) DEFAULT NULL,
  bibliography varchar(120) DEFAULT NULL,
  writing_sample varchar(120) DEFAULT NULL,
  bio varchar(2000) DEFAULT NULL,
  last_modified TIMESTAMP
);

DROP TRIGGER IF EXISTS update_timestamp ON authors;
CREATE TRIGGER update_timestamp BEFORE INSERT OR UPDATE ON authors
    FOR EACH ROW EXECUTE PROCEDURE update_timestamp();



DROP TABLE IF EXISTS author_years;
CREATE TABLE author_years (
  id SERIAL PRIMARY KEY,
  authors_id INTEGER REFERENCES authors(id) ON DELETE CASCADE, 
  year_of_attendance SMALLINT DEFAULT NULL,
  last_modified TIMESTAMP 
);

DROP TRIGGER IF EXISTS update_timestamp ON author_years;
CREATE TRIGGER update_timestamp BEFORE INSERT OR UPDATE ON author_years
    FOR EACH ROW EXECUTE PROCEDURE update_timestamp();



DROP TABLE IF EXISTS author_languages;
CREATE TABLE author_languages (
  id SERIAL PRIMARY KEY,
  authors_id INTEGER REFERENCES authors(id) ON DELETE CASCADE, 
  language varchar(64) DEFAULT NULL,
  last_modified TIMESTAMP
);

DROP TRIGGER IF EXISTS update_timestamp ON author_languages;
CREATE TRIGGER update_timestamp BEFORE INSERT OR UPDATE ON author_languages
    FOR EACH ROW EXECUTE PROCEDURE update_timestamp();



DROP TABLE IF EXISTS author_writing_roles;
CREATE TABLE author_writing_roles (
  id SERIAL PRIMARY KEY,
  authors_id INTEGER REFERENCES authors(id) ON DELETE CASCADE, 
  writing_role varchar(64) DEFAULT NULL,
  last_modified TIMESTAMP
);
  
DROP TRIGGER IF EXISTS update_timestamp ON author_writing_roles;
CREATE TRIGGER update_timestamp BEFORE INSERT OR UPDATE ON author_writing_roles
    FOR EACH ROW EXECUTE PROCEDURE update_timestamp();



DROP TABLE IF EXISTS author_continents;
CREATE TABLE author_continents (
  id SERIAL PRIMARY KEY,
  authors_id INTEGER REFERENCES authors(id) ON DELETE CASCADE, 
  continent varchar(64) DEFAULT NULL,
  last_modified TIMESTAMP
);
DROP TRIGGER IF EXISTS update_timestamp ON author_continents;
CREATE TRIGGER update_timestamp BEFORE INSERT OR UPDATE ON author_continents
    FOR EACH ROW EXECUTE PROCEDURE update_timestamp();



DROP TABLE IF EXISTS author_countries;
CREATE TABLE author_countries (
  id SERIAL PRIMARY KEY,
  authors_id INTEGER REFERENCES authors(id) ON DELETE CASCADE, 
  country varchar(64) DEFAULT NULL,
  last_modified TIMESTAMP
);
DROP TRIGGER IF EXISTS update_timestamp ON author_countries;
CREATE TRIGGER update_timestamp BEFORE INSERT OR UPDATE ON author_countries
    FOR EACH ROW EXECUTE PROCEDURE update_timestamp();



DROP TABLE IF EXISTS author_regions;
CREATE TABLE author_regions (
  id SERIAL PRIMARY KEY,
  authors_id INTEGER REFERENCES authors(id) ON DELETE CASCADE, 
  region varchar(64) DEFAULT NULL,
  last_modified TIMESTAMP
);

DROP TRIGGER IF EXISTS update_timestamp ON author_regions;
CREATE TRIGGER update_timestamp BEFORE INSERT OR UPDATE ON author_regions
    FOR EACH ROW EXECUTE PROCEDURE update_timestamp();
