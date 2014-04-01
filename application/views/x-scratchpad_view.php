<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>IWP Authors Map</title>
        <?php 
            echo link_tag('resources/css/style.css');
        ?>
        <script type="text/javascript" src="<?php echo resource_url('OpenLayers/OpenLayers.js')?>"></script>
    </head>
    <body onload='init();'>
<!-- Map DOM element -->
<div id="ch3_feature_markers" style="width: 100%; height: 100%;"></div>

<!-- The magic comes here -->
<script type="text/javascript">

    // Create the map using the specified DOM element
    var map = new OpenLayers.Map("ch3_feature_markers");    
    
    var layer = new OpenLayers.Layer.OSM("OpenStreetMap");
    map.addLayer(layer);
    
    map.addControl(new OpenLayers.Control.LayerSwitcher());
    map.setCenter(new OpenLayers.LonLat(0,0), 2);
            
    var pointLayer = new OpenLayers.Layer.Vector("Features", {
        projection: "EPSG:933913"
    });
    map.addLayer(pointLayer);
    
    // Create some random feature points
    var pointFeatures = [];
    for(var i=0; i< 150; i++) {
        var px = Math.random() * 360 - 180;
        var py = Math.random() * 170 - 85;
    
        // Create a lonlat instance and transform it to the map projection.
        var lonlat = new OpenLayers.LonLat(px, py);
        lonlat.transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
        
        var pointGeometry = new OpenLayers.Geometry.Point(lonlat.lon, lonlat.lat);
        var pointFeature = new OpenLayers.Feature.Vector(pointGeometry);

        pointFeatures.push(pointFeature);
    }
    // Add features to the layer
    pointLayer.addFeatures(pointFeatures);        
    
    // Event handler for feature selected
    pointLayer.events.register("featureselected", null, function(event){
        var layer = event.feature.layer;
        event.feature.style = {
            fillColor: '#ff9900',
            fillOpacity: 0.7,
            strokeColor: '#aaa',
            pointRadius: 12
        };
        layer.drawFeature(event.feature);
    });
    // Event handler for feature unselected
    pointLayer.events.register("featureunselected", null, function(event){
        var layer = event.feature.layer;
        event.feature.style = null;
        event.feature.renderIntent = null;
        layer.drawFeature(event.feature);
    });

    // Add select feature control required to trigger events on the vector layer.
    var selectControl = new OpenLayers.Control.SelectFeature(pointLayer);
    map.addControl(selectControl);
    selectControl.activate();
    
</script>

        
    </body>
</html>