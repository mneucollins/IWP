<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>IWP Authors Map</title>
        <?php 
            echo link_tag('resources/css/style.css');
            include ('common/jquery.incl');
        ?>
        <script type="text/javascript" src="<?php echo resource_url('OpenLayers/OpenLayers.js')?>"></script>
    </head>
    <body onload='init();'>
        <div id="container">
            <div id="contentwrapper">
                <div id="leftcolumn">
                    <div class="innertube">
                        <h3>Choose Map Parameters</h3>
                        <?php include ("common/map_parameters.incl") ?>
                    </div>
                </div>
                <div id="contentcolumn">
                    <div class="innertube">
                        <div id='map_container'></div>                        
                    </div>
                </div>
                <div id="bottomsection">
                    <div class="innertube">
                    </div>
                </div>
                <div id="footer">
                    University of Iowa International Writing Program. 
                </div>
            </div>
        </div>
        <script type="text/javascript">
            var map;
            
            function init() {
                var bounds = (new OpenLayers.Bounds(<?php echo (isset($newBounds)) ? $newBounds : "-173.25,-75.15,186.75,104.85" ?>));
                map = new OpenLayers.Map('map_container', 
                            {
                                projection:﻿'EPSG:4326',
                                fractionalZoom:true,
                                maxExtent:bounds                       
                            });
                            
                var wms = new OpenLayers.Layer.WMS(
                    'C Shapes',
                    'http://192.168.56.10:8080/geoserver/IWP/wms?service=WMS&version=1.1.0&request=GetMap&layers=IWP:cshapes',
                    {layers: 'basic'}
                );
                map.addLayer(wms);

        var vectorLayer = new OpenLayers.Layer.Vector("Overlay");
        var feature = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(-71, 42),
            {some:'data'},
            {externalGraphic: '<?php echo resource_url("img/marker.png"); ?>', graphicHeight: 21, graphicWidth: 16});
        vectorLayer.addFeatures(feature);   
        var feature = new OpenLayers.Feature.Vector(
            new OpenLayers.Geometry.Point(-0, 0),
            {some:'data'},
            {externalGraphic: '<?php echo resource_url("img/marker.png"); ?>', graphicHeight: 60, graphicWidth: 60});
        vectorLayer.addFeatures(feature);   

        map.addLayer(vectorLayer);
                
                

                map.addControl(new OpenLayers.Control.LayerSwitcher());
                map.zoomToMaxExtent();
             }              
           
           </script>
    </body>
</html>