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
                var bounds = (new OpenLayers.Bounds(<?php echo (isset($newBounds)) ? $newBounds : "-173.25,-75.15,186.75,150" ?>));
                map = new OpenLayers.Map('map_container',
                            {});


                var wms = new OpenLayers.Layer.WMS(
                    'C Shapes',
                    'http://localhost:8080/geoserver/IWP/wms?service=WMS&version=1.1.0&request=GetMap&layers=IWP:cshapes-mollweide-shapefile',
                    {layers: 'basic'},
                    {}
                );
                map.addLayer(wms);
                



        var vectorLayer = new OpenLayers.Layer.Vector("Overlay");
        <?php
foreach ($counts as $cntrycount) {
	$size=6+$cntrycount['count']*.5;
	$pointspec ="var feature = new OpenLayers.Feature.Vector(";
	$pointspec.="new OpenLayers.Geometry.Point(".$cntrycount['st_x'].",".$cntrycount['st_y']."),";
	$pointspec.="{some:'data'},";
	//$pointspec.="{externalGraphic:'".resource_url('img/marker.png')."', graphicOpacity:.7, graphicHeight:".$cntrycount['count'].", graphicWidth: ".$cntrycount['count']."});";
	$pointspec.="{externalGraphic:'".resource_url('img/marker.png')."', graphicOpacity:.7, graphicHeight:$size, graphicWidth:$size});";
	$pointspec.="vectorLayer.addFeatures(feature);";
	echo $pointspec;
	/*
            $popupspec = "var popup = new OpenLayers.Popup.FramedCloud('".$cntrycount['country']."',"
					.$cntrycount['st_x'].",".$cntrycount['st_y']."null,"
					.$cntrycount['count']."'Authors and stuff', null,
					true);";
			echo $popupspec;
*/

}
?>
        map.addLayer(vectorLayer);



                map.addControl(new OpenLayers.Control.LayerSwitcher());
                map.zoomToMaxExtent();
             }

           </script>
    </body>
</html>