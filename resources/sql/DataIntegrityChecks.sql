﻿SELECT author_countries.country, cshapes.cntry_name
FROM author_countries LEFT JOIN cshapes
ON author_countries.country = cshapes.cntry_name
WHERE cntry_name is null
GROUP BY country, cntry_name
ORDER BY country

--output
""
"Bosnia-Herzegovina"
"Burma"
"Cote dʼIvoire"
"England"
"Hong Kong"
"Northern Ireland"
"Palestinian Territories"
"Perú"
"Scotland"
"Slovak Republic"
"The Netherlands"
"Tibet"
"Trinidad"
"Wales"

insert into countries_to_cntry_name (authors_country, cshapes_cntry_name) 
SELECT author_countries.country, cshapes.cntry_name 
FROM author_countries
JOIN cshapes
ON author_countries.country = cshapes.cntry_name
GROUP BY author_countries.country, cshapes.cntry_name
﻿
insert into countries_to_cntry_name (authors_country, cshapes_cntry_name) 
SELECT author_countries.country, cshapes.cntry_name 
FROM author_countries
LEFT JOIN cshapes
ON author_countries.country = cshapes.cntry_name
WHERE cshapes.cntry_name is null
GROUP BY author_countries.country, cshapes.cntry_name

﻿insert into countries_to_cntry_name (authors_country, cshapes_cntry_name) 
SELECT author_countries.country, cshapes.cntry_name 
FROM author_countries
RIGHT JOIN cshapes
ON author_countries.country = cshapes.cntry_name
WHERE author_countries.country is null
GROUP BY author_countries.country, cshapes.cntry_name