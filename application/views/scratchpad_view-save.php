<html>
<head>
  <title>OpenLayers Example</title>
    <script src="http://openlayers.org/api/OpenLayers.js"></script>
    </head>
    <body>
      <div style="width:100%; height:100%" id="map"></div>
      <script defer="defer" type="text/javascript">
        
        
        var map = new OpenLayers.Map('map');
        var wms = new OpenLayers.Layer.WMS( "OpenLayers WMS",
            "http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );

        map.addLayer(wms);
        
        var vectorLayer = new OpenLayers.Layer.Vector("Overlay");
        var feature = new OpenLayers.Feature.Vector(
        new OpenLayers.Geometry.Point(-71, 42),
        {some:'data'},
        {externalGraphic: 'img/marker.png', graphicHeight: 21, graphicWidth: 16});
        vectorLayer.addFeatures(feature);   
        map.addLayer(vectorLayer);
        map.zoomToMaxExtent();
      </script>

      <img src="img/marker.png" />
</body>
</html>
