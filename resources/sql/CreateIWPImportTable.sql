DROP TABLE IF EXISTS iwpimport;

CREATE TABLE iwpimport (
  id INTEGER PRIMARY KEY,
  given_name varchar(30) DEFAULT NULL,
  family_name varchar(21) DEFAULT NULL,
  name_suffix varchar(18) DEFAULT NULL,
  name_order varchar(17) DEFAULT NULL,
  pseudonym varchar(22) DEFAULT NULL,
  gender varchar(6) DEFAULT NULL,
  year_of_birth varchar(4) DEFAULT NULL,
  year_of_death varchar(4) DEFAULT NULL,
  year_of_attendance varchar(124) DEFAULT NULL,
  language varchar(120) DEFAULT NULL,
  writing_role varchar(120) DEFAULT NULL,
  website varchar(255) DEFAULT NULL,
  bibliography varchar(120) DEFAULT NULL,
  writing_sample varchar(120) DEFAULT NULL,
  continent varchar(120) DEFAULT NULL,
  country varchar(120) DEFAULT NULL,
  region varchar(120) DEFAULT NULL,
  bio varchar(2000) DEFAULT NULL,
  last_modified TIMESTAMP
);

DROP FUNCTION IF EXISTS update_timestamp();
CREATE FUNCTION update_timestamp() RETURNS trigger AS $update_timestamp$
    BEGIN
        NEW.last_modified := current_timestamp;
        RETURN NEW;
    END;

$update_timestamp$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_timestamp ON iwpimport;
CREATE TRIGGER update_timestamp BEFORE INSERT OR UPDATE ON iwpimport
    FOR EACH ROW EXECUTE PROCEDURE update_timestamp();