CREATE OR REPLACE VIEW author_counts_noproj AS 
SELECT 	author_counts_by_year.id, 
	author_counts_by_year.featureid, 
	author_counts_by_year.cshapes_cntry_name,
	author_counts_by_year.author_country_name,
	author_counts_by_year.year AS author_year,
	author_counts_by_year.author_count,
	author_counts_by_year.cumulative_count,
	country_markers.marker_name,
	country_markers.marker_lat,
	country_markers.marker_lng
FROM author_counts_by_year
	JOIN country_markers 
	ON author_counts_by_year.author_country_name = country_markers.author_country_name