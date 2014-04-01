<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7/leaflet.css" />
    <style>
	    html, body {
			height: 100%;
			padding: 0;
			margin: 0;
		}
	
		#map {
			width: 100%;
			height: 100%;
		}
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>
	<script src="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.js"></script>
	<script type="text/javascript" src= <?php echo resource_url('js/proj4js-compressed.js'); ?>></script>
	<script type="text/javascript" src= <?php echo resource_url('js/proj4leaflet.js'); ?>></script>
    <script type="text/javascript">
    
    
    var crs = new L.Proj.CRS('ESRI:53009', '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 +b=6371000 +units=m +no_defs', {
        resolutions: [65536, 32768, 16384, 8192, 4096, 2048],
		origin: [0, 0] });
	
	var map = L.map('map', {
        crs: crs,
        maxZoom: 5,
		continuousWorld: true,
		worldCopyJump: false
    });


L.tileLayer.wms('http://localhost:8080/geoserver/IWP/wms', {
layers: 'cshapes-mollweide-shapefile',
format: 'image/png',
maxZoom: 14,
minZoom: 0,
continuousWorld: true,
attribution: '&copy; <a href="https://www.havochvatten.se/kunskap-om-vara-vatten/kartor-och-geografisk-information/karttjanster.html">Havs- och vattenmyndigheten (Swedish Agency for Marine and Water Management)</a>'
}).addTo(map);

map.setView([0, 0], 2.5);
    </script>

  </body>
</html>
