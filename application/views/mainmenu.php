<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>IWPData Main Menu</title>

<?php echo link_tag('resources/css/IWPData.css'); ?>

</head>
<body>

<div id="container">
	<h1>IWP Data Management</h1>

	<div id="body">
	    <table>
	        <tr>
	            <td>
	            <a href="http://iwp.uiowa.edu/map-data-xml">Download</a></td>
	            <td>Download IWP Data from IWP Site</td>
	        </tr>
	        <tr>
	            <td colspan="2"><i>Move data into import_data folder and upload to server</i></td>
	        </tr>
	        <tr>
	            <td>
	            <a href="iwpdata/xmlImport">Import</a>
	            </td>
	            <td>Import Raw IWP Data into local data base </td>
	        </tr>
	        <tr>
	            <td><a href="iwpdata/iwpParse">Process</a></td>
	            <td>Process IWP Data into relational tables </td>
	        </tr>
	        <tr>
	            <td colspan="2"><i>The next steps will require an up-to-date cshapes file to be loaded into the postgis database. See the file in the resources>notes folder named "Update_cshapes_notes.txt"</i></td>
	        </tr>

	        <tr>
	            <td><a href="iwpdata/loadCountsByYear">Load Counts</a></td>
	            <td>Load Country Counts By Year</td>
	        </tr>
	        <tr>
<!-- 	            <td><a href="iwpdata/buildCountryMarkers">Country Markers</a></td> -->
	            <td>Country Markers</td>
	            <td>Assign Country Markers (capitals or alternate)</td>
	         </td>   
	         <tr>
	            <td colspan="2"><i>Country Markers link is no longer applicable, countries added after 2013 will need to have markers manually added to country_markers_projected table using mouseclick coordinates (uncomment map.on('click'...) line at endd of map script in map_view)<i></td>
	        </tr>			
	        <tr>
	            <td><a href="iwpdata/createViews">Year Views</a></td>
	            <td>Create Annual Views for CShapes Countries</td>
	        </tr>

	        <tr>
	            <td colspan="2"><i>&nbsp;</i></td>
	        </tr>
	        <tr>
	            <td><a href="iwpdata/loadMenus">Load Menus</a></td>
	            <td>Load menus from CSV files</td>
	        </tr>
	        <tr>
	            <td><a href="iwpdata/load_iwp_participants">Load IWP_Participants</a></td>
	            <td>Load IWP_Participants CSV File (accurate countries, regions, macro_regions)</td>
	        </tr>
	        <tr>
	            <td><a href="/IWP-svn">View</a></td>
	            <td>View Map</td>
	        </tr>
	        <tr>
	            <td><a href="iwpdata/scratchPad">Scratchpad</a></td>
	            <td>Run OpenLayers Scratch Pad</td>
	        </tr>
	    </table>
		
	</div>

	<p class="footer">Page rendered in <strong>{elapsed_time}</strong> seconds</p>
</div>

</body>
</html>