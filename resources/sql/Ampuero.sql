select authors.*, author_years.* FROM authors join author_years 
ON authors.id = author_years.authors_id 
WHERE family_name like 'Ampuero'