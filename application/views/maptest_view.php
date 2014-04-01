<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>IWP Authors Map - Test</title>
    <?php
		echo link_tag('resources/css/style.css');
	?>
	<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.css" />
    <!--[if lte IE 8]>
		<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.6.2/leaflet.ie.css" />
	<![endif]-->
    <style type="text/css">
        html, body, #map { width: 100%; height: 100%; margin: 0; background: #fff; }
    </style>
</head>
<body>
    <div id="map"></div>
	<script src="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.js"></script>

	<script type="text/javascript" src= <?php echo resource_url('js/proj4js-compressed.js'); ?>></script>
	<script type="text/javascript" src= <?php echo resource_url('js/proj4leaflet.js'); ?>></script>
	<script type="text/javascript" src= <?php echo resource_url('js/countries-110m.js'); ?>></script>
	<script type="text/javascript" src= <?php echo resource_url('js/L.Graticule.js'); ?>></script>


<script type="text/javascript">

var map = L.map('map').setView([0,0], 2.5);

/*
	var cshapes=L.tileLayer.wms("http://dsph-dev.provost.uiowa.edu:8080/geoserver/IWP/wms", {
    	layers:'IWP:cshapes_mw',
		format: 'image/png',
		transparent: true,
		version: '1.1.0',
		attribution: "myattribution"
		}).addTo(map);
*/
// Coordinate to grid transformation matrix
var transformation = new L.Transformation(1, 0, -1, 0);
// Official Spatial Reference from http://www.spatialreference.org/ref/epsg/3111/
var crs = L.CRS.proj4js('EPSG:54009',
'+proj=lcc +lat_1=-36 +lat_2=-38 +lat_0=-37 +lon_0=145 +x_0=2500000 +y_0=2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
transformation);

	var cshapes=L.tileLayer.wms("http://localhost:8080/geoserver/IWP/wms", {
    	layers:'IWP:cshapes',
		format: 'image/png',
		transparent: true,
		version: '1.1.0',
		attribution: "myattribution"
		}).addTo(map);

//Add feature markers

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}
//returned from PostGIS query "{"type":"Point","coordinates":[54.8885812055762,35.4287280157253]}"


var markers = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [54.8885812055762,35.4287280157253]
            },
            "type": "Feature",
            "properties": {
            	"name":"Afghanistan",
                "popupContent": "Welcome to Beautiful Kabul, Afghanistan"
            },
            "radius":10,
            "id": 51            
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-56.698255030595774,39.85534338746593]
            },
            "type": "Feature",
            "properties": {
            	"name":"Washington DC",
                "popupContent": "Capital of the US"
            },
            "radius":20,
            "id": 52
        }
    ]
};



var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.5
};


L.geoJson(markers, {
	style: function (feature) {
		return feature.properties && feature.properties.style;
	},
	onEachFeature: onEachFeature,
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, {
			radius: feature.radius,
			fillColor: "#ff7800",
			color: "#000",
			weight: 1,
			opacity: 1,
			fillOpacity: 0.8
		});
	}
}).addTo(map);


/*alert(JSON.stringify(feature));*/

//L.geoJson(markers, {onEachFeature: onEachFeature}).addTo(map);

//L.geoJson(bicycleRental, {onEachFeature: onEachFeature}).addTo(map);




//simple marker for washington DC
//L.marker([38.685509760012, -58.88671875]).addTo(map);


//map.on('click', function(e) { alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng) })

    </script>
</body>
</html>