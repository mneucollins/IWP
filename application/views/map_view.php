<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>International Writing Program</title>
	<meta name="generator" content="BBEdit 10.5" />

    <?php 
        echo link_tag('resources/css/style.css');
    ?>
	        
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.css" />       
        <!--[if lte IE 8]>
            <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.ie.css" />
        <![endif]-->
    <script src="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.js"></script>

</head>
<body>
    <div id="container">
        <div id="contentwrapper">
            <div id="leftcolumn">
                <div class="innertube">
                	<a href="http://iwp.uiowa.edu/">
                    <?php
                     	echo '<img src="'.base_url("resources/img/iwp-main-logo.gif").'" width="230">';
                    ?>
                	</a>
                    <h3>Choose Map Parameters</h3>
                    <?php
                    	include ("common/map_parameters.incl");
                    ?>
					<br />
					<div class="centered">
					<?php
						echo '<a href="'.base_url("timeline/").'">';
						echo '<img src = "'.base_url("resources/img/timelineButton.gif").'" height="20">';
						echo '</a>';
					?>
					</div>
                    
                </div>
            </div>
            <div id="contentcolumn">
<!--                 <div class="innertube"> -->
                    <div id='map'></div>                        
<!--                 </div> -->
            </div>
            <div id="bottomsection">
                <div class="innertube">
                </div>
            </div>
            <div id="footer">
                <a href="http://iwp.uiowa.edu/">University of Iowa International Writing Program.</a> 
            </div>
        </div>
    </div>

	<script>
		var map = L.map('map')
<?php if ($residency < 1976) : ?>
		var base = L.tileLayer.wms("http://dsph-dev.provost.uiowa.edu:8080/geoserver/IWP/wms?service=WMS", {
		    layers: 'IWP:cshapes_mollweide_042_LandMass',
		    format: 'image/png',
		    transparent: true,
		    version: '1.1.0'
		});
<?php endif; ?>
		base.addTo(map);
	</script>


<script>
	var mywms = L.tileLayer.wms("http://dsph-dev.provost.uiowa.edu:8080/geoserver/IWP/wms?service=WMS", {
	    layers: '<?php echo "IWP:cshapes_mollweide_042_$residency"; ?>' ,    
	    format: 'image/png',
	    transparent: true,
	    version: '1.1.0',
	    attribution: "<a href='http://www.learnnc.org/lp/editions/mapping/6434'>mollweide projection</a>"
	});
	mywms.addTo(map);
		

	function onEachFeature(feature, layer) {
	    // does this feature have a property named popupContent?
	    if (feature.properties && feature.properties.popupContent) {
	        layer.bindPopup(feature.properties.popupContent,{maxHeight:150,minWidth:200});
	    }
	}
	
	//{minWidth:feature.properties,popupWidth;maxWidth:feature.properties.popupWidth;}
	//returned from PostGIS query "{"type":"Point","coordinates":[54.8885812055762,35.4287280157253]}"
	
	
	var markers = <?php echo $geojson; ?>;
	
	
	L.geoJson(markers, {
		style: function (feature) {
			return feature.properties && feature.properties.style;
		},
		onEachFeature: onEachFeature,
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, {
				radius: feature.radius,
				fillColor: "#711e0c",
				color: "#000",
				weight: 1,
				opacity: 1,
				fillOpacity: 0.8
			});
		}
	}).addTo(map);
	map.setView([15,10], 2.2);
	
	/*
	map.on('click', function(e) { alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng) })
	*/
</script>

</body>
</html>

