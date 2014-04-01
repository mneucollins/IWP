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
  year_of_attendance varchar(31) DEFAULT NULL,
  language varchar(25) DEFAULT NULL,
  writing_role varchar(60) DEFAULT NULL,
  website varchar(80) DEFAULT NULL,
  bibliography varchar(87) DEFAULT NULL,
  writing_sample varchar(93) DEFAULT NULL,
  continent varchar(107) DEFAULT NULL,
  country varchar(107) DEFAULT NULL,
  region varchar(107) DEFAULT NULL,
  bio varchar(1570) DEFAULT NULL,
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