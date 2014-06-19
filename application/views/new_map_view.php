<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>International Writing Program</title>
	<meta name="generator" content="BBEdit 10.5" />

    <?php 
        echo link_tag('resources/css/style.css');
    ?>
	            
    <link rel="stylesheet" href="http://ol3js.org/en/master/css/ol.css" type="text/css">
    <script src="http://ol3js.org/en/master/build/ol.js" type="text/javascript"></script>
    <script type="text/javascript" src="<?php echo resource_url('OpenLayers/OpenLayers.js')?>"></script>


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
                    	//include ("common/map_parameters.incl");
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
                    <div id='map'></div>                        
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

    var options = {projection: new OpenLayers.Projection("EPSG:54009")};
    var map = new OpenLayers.Map('map', options);
    var wms = new OpenLayers.Layer.WMS(
        "cshapes",
        "http://localhost:8080/geoserver/IWP/wms",
        {layers: "IWP:cshapes", format: "image/png", transparent: "true"},
        {
            isBaseLayer: false,
            wrapDateLine: true
        }
    );
    map.addLayers([wms]);
    map.setCenter(new OpenLayers.LonLat(-10723197, 4500612), 3);



	</script>


</body>
</html>

